import axios from 'axios';
import queryString from 'query-string';
import { AttendanceRecordInterface, AttendanceRecordGetQueryInterface } from 'interfaces/attendance-record';
import { GetQueryInterface, PaginatedInterface } from '../../interfaces';

export const getAttendanceRecords = async (
  query?: AttendanceRecordGetQueryInterface,
): Promise<PaginatedInterface<AttendanceRecordInterface>> => {
  const response = await axios.get('/api/attendance-records', {
    params: query,
    headers: { 'Content-Type': 'application/json' },
  });
  return response.data;
};

export const createAttendanceRecord = async (attendanceRecord: AttendanceRecordInterface) => {
  const response = await axios.post('/api/attendance-records', attendanceRecord);
  return response.data;
};

export const updateAttendanceRecordById = async (id: string, attendanceRecord: AttendanceRecordInterface) => {
  const response = await axios.put(`/api/attendance-records/${id}`, attendanceRecord);
  return response.data;
};

export const getAttendanceRecordById = async (id: string, query?: GetQueryInterface) => {
  const response = await axios.get(`/api/attendance-records/${id}${query ? `?${queryString.stringify(query)}` : ''}`);
  return response.data;
};

export const deleteAttendanceRecordById = async (id: string) => {
  const response = await axios.delete(`/api/attendance-records/${id}`);
  return response.data;
};
