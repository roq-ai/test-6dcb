import { GetQueryInterface } from 'interfaces';

export interface EmployeeDetailsInterface {
  id?: string;
  created_at?: any;
  updated_at?: any;

  _count?: {};
}

export interface EmployeeDetailsGetQueryInterface extends GetQueryInterface {
  id?: string;
}
