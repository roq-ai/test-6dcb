import { EmployeeInterface } from 'interfaces/employee';
import { GetQueryInterface } from 'interfaces';

export interface SalaryInterface {
  id?: string;
  amount: number;
  payment_date: any;
  employee_id: string;
  created_at?: any;
  updated_at?: any;

  employee?: EmployeeInterface;
  _count?: {};
}

export interface SalaryGetQueryInterface extends GetQueryInterface {
  id?: string;
  employee_id?: string;
}
