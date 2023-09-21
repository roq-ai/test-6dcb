import { GetQueryInterface } from 'interfaces';

export interface SalaryStructureInterface {
  id?: string;
  created_at?: any;
  updated_at?: any;

  _count?: {};
}

export interface SalaryStructureGetQueryInterface extends GetQueryInterface {
  id?: string;
}
