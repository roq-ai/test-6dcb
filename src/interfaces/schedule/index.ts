import { EmployeeInterface } from 'interfaces/employee';
import { GetQueryInterface } from 'interfaces';

export interface ScheduleInterface {
  id?: string;
  start_time: any;
  end_time: any;
  day_of_week: string;
  employee_id: string;
  created_at?: any;
  updated_at?: any;

  employee?: EmployeeInterface;
  _count?: {};
}

export interface ScheduleGetQueryInterface extends GetQueryInterface {
  id?: string;
  day_of_week?: string;
  employee_id?: string;
}
