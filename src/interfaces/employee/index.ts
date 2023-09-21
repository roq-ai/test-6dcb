import { AttendanceInterface } from 'interfaces/attendance';
import { SalaryInterface } from 'interfaces/salary';
import { ScheduleInterface } from 'interfaces/schedule';
import { UserInterface } from 'interfaces/user';
import { GetQueryInterface } from 'interfaces';

export interface EmployeeInterface {
  id?: string;
  first_name: string;
  last_name: string;
  email: string;
  position: string;
  hired_date: any;
  user_id: string;
  created_at?: any;
  updated_at?: any;
  attendance?: AttendanceInterface[];
  salary?: SalaryInterface[];
  schedule?: ScheduleInterface[];
  user?: UserInterface;
  _count?: {
    attendance?: number;
    salary?: number;
    schedule?: number;
  };
}

export interface EmployeeGetQueryInterface extends GetQueryInterface {
  id?: string;
  first_name?: string;
  last_name?: string;
  email?: string;
  position?: string;
  user_id?: string;
}
