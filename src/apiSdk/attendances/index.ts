import axios from 'axios';
import queryString from 'query-string';
import { AttendanceInterface, AttendanceGetQueryInterface } from 'interfaces/attendance';
import { GetQueryInterface, PaginatedInterface } from '../../interfaces';

export const getAttendances = async (
  query?: AttendanceGetQueryInterface,
): Promise<PaginatedInterface<AttendanceInterface>> => {
  const response = await axios.get('/api/attendances', {
    params: query,
    headers: { 'Content-Type': 'application/json' },
  });
  return response.data;
};

export const createAttendance = async (attendance: AttendanceInterface) => {
  const response = await axios.post('/api/attendances', attendance);
  return response.data;
};

export const updateAttendanceById = async (id: string, attendance: AttendanceInterface) => {
  const response = await axios.put(`/api/attendances/${id}`, attendance);
  return response.data;
};

export const getAttendanceById = async (id: string, query?: GetQueryInterface) => {
  const response = await axios.get(`/api/attendances/${id}${query ? `?${queryString.stringify(query)}` : ''}`);
  return response.data;
};

export const deleteAttendanceById = async (id: string) => {
  const response = await axios.delete(`/api/attendances/${id}`);
  return response.data;
};
