import axios from 'axios';
import queryString from 'query-string';
import { EmployeeDetailsInterface, EmployeeDetailsGetQueryInterface } from 'interfaces/employee-details';
import { GetQueryInterface, PaginatedInterface } from '../../interfaces';

export const getEmployeeDetails = async (
  query?: EmployeeDetailsGetQueryInterface,
): Promise<PaginatedInterface<EmployeeDetailsInterface>> => {
  const response = await axios.get('/api/employee-details', {
    params: query,
    headers: { 'Content-Type': 'application/json' },
  });
  return response.data;
};

export const createEmployeeDetails = async (employeeDetails: EmployeeDetailsInterface) => {
  const response = await axios.post('/api/employee-details', employeeDetails);
  return response.data;
};

export const updateEmployeeDetailsById = async (id: string, employeeDetails: EmployeeDetailsInterface) => {
  const response = await axios.put(`/api/employee-details/${id}`, employeeDetails);
  return response.data;
};

export const getEmployeeDetailsById = async (id: string, query?: GetQueryInterface) => {
  const response = await axios.get(`/api/employee-details/${id}${query ? `?${queryString.stringify(query)}` : ''}`);
  return response.data;
};

export const deleteEmployeeDetailsById = async (id: string) => {
  const response = await axios.delete(`/api/employee-details/${id}`);
  return response.data;
};
