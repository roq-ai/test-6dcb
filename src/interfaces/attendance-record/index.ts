import { GetQueryInterface } from 'interfaces';

export interface AttendanceRecordInterface {
  id?: string;
  created_at?: any;
  updated_at?: any;

  _count?: {};
}

export interface AttendanceRecordGetQueryInterface extends GetQueryInterface {
  id?: string;
}
