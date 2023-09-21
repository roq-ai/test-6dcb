import axios from 'axios';
import queryString from 'query-string';
import { PerformanceReviewInterface, PerformanceReviewGetQueryInterface } from 'interfaces/performance-review';
import { GetQueryInterface, PaginatedInterface } from '../../interfaces';

export const getPerformanceReviews = async (
  query?: PerformanceReviewGetQueryInterface,
): Promise<PaginatedInterface<PerformanceReviewInterface>> => {
  const response = await axios.get('/api/performance-reviews', {
    params: query,
    headers: { 'Content-Type': 'application/json' },
  });
  return response.data;
};

export const createPerformanceReview = async (performanceReview: PerformanceReviewInterface) => {
  const response = await axios.post('/api/performance-reviews', performanceReview);
  return response.data;
};

export const updatePerformanceReviewById = async (id: string, performanceReview: PerformanceReviewInterface) => {
  const response = await axios.put(`/api/performance-reviews/${id}`, performanceReview);
  return response.data;
};

export const getPerformanceReviewById = async (id: string, query?: GetQueryInterface) => {
  const response = await axios.get(`/api/performance-reviews/${id}${query ? `?${queryString.stringify(query)}` : ''}`);
  return response.data;
};

export const deletePerformanceReviewById = async (id: string) => {
  const response = await axios.delete(`/api/performance-reviews/${id}`);
  return response.data;
};
