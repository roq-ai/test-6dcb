import { GetQueryInterface } from 'interfaces';

export interface PerformanceReviewInterface {
  id?: string;
  created_at?: any;
  updated_at?: any;

  _count?: {};
}

export interface PerformanceReviewGetQueryInterface extends GetQueryInterface {
  id?: string;
}
