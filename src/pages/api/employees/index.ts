import type { NextApiRequest, NextApiResponse } from 'next';
import { roqClient } from 'server/roq';
import { prisma } from 'server/db';
import {
  authorizationValidationMiddleware,
  errorHandlerMiddleware,
  notificationHandlerMiddleware,
} from 'server/middlewares';
import { employeeValidationSchema } from 'validationSchema/employees';
import { convertQueryToPrismaUtil, getOrderByOptions, parseQueryParams } from 'server/utils';
import { getServerSession } from '@roq/nextjs';
import { GetManyQueryOptions } from 'interfaces';

async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { roqUserId, user } = await getServerSession(req);
  switch (req.method) {
    case 'GET':
      return getEmployees();
    case 'POST':
      return createEmployee();
    default:
      return res.status(405).json({ message: `Method ${req.method} not allowed` });
  }

  async function getEmployees() {
    const {
      limit: _limit,
      offset: _offset,
      order,
      ...query
    } = parseQueryParams(req.query) as Partial<GetManyQueryOptions>;
    const limit = parseInt(_limit as string, 10) || 20;
    const offset = parseInt(_offset as string, 10) || 0;
    const response = await prisma.employee
      .withAuthorization({
        roqUserId,
        tenantId: user.tenantId,
        roles: user.roles,
      })
      .findManyPaginated({
        ...convertQueryToPrismaUtil(query, 'employee'),
        take: limit,
        skip: offset,
        ...(order?.length && {
          orderBy: getOrderByOptions(order),
        }),
      });
    return res.status(200).json(response);
  }

  async function createEmployee() {
    await employeeValidationSchema.validate(req.body);
    const body = { ...req.body };
    if (body?.attendance?.length > 0) {
      const create_attendance = body.attendance;
      body.attendance = {
        create: create_attendance,
      };
    } else {
      delete body.attendance;
    }
    if (body?.salary?.length > 0) {
      const create_salary = body.salary;
      body.salary = {
        create: create_salary,
      };
    } else {
      delete body.salary;
    }
    if (body?.schedule?.length > 0) {
      const create_schedule = body.schedule;
      body.schedule = {
        create: create_schedule,
      };
    } else {
      delete body.schedule;
    }
    const data = await prisma.employee.create({
      data: body,
    });
    await notificationHandlerMiddleware(req, data.id);
    return res.status(200).json(data);
  }
}

export default function apiHandler(req: NextApiRequest, res: NextApiResponse) {
  return errorHandlerMiddleware(authorizationValidationMiddleware(handler))(req, res);
}
