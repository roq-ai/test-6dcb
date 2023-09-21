import { GetQueryInterface } from 'interfaces';

export interface ProjectAssignmentInterface {
  id?: string;
  created_at?: any;
  updated_at?: any;

  _count?: {};
}

export interface ProjectAssignmentGetQueryInterface extends GetQueryInterface {
  id?: string;
}
