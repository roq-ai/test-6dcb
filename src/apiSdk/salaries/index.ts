import axios from 'axios';
import queryString from 'query-string';
import { SalaryInterface, SalaryGetQueryInterface } from 'interfaces/salary';
import { GetQueryInterface, PaginatedInterface } from '../../interfaces';

export const getSalaries = async (query?: SalaryGetQueryInterface): Promise<PaginatedInterface<SalaryInterface>> => {
  const response = await axios.get('/api/salaries', {
    params: query,
    headers: { 'Content-Type': 'application/json' },
  });
  return response.data;
};

export const createSalary = async (salary: SalaryInterface) => {
  const response = await axios.post('/api/salaries', salary);
  return response.data;
};

export const updateSalaryById = async (id: string, salary: SalaryInterface) => {
  const response = await axios.put(`/api/salaries/${id}`, salary);
  return response.data;
};

export const getSalaryById = async (id: string, query?: GetQueryInterface) => {
  const response = await axios.get(`/api/salaries/${id}${query ? `?${queryString.stringify(query)}` : ''}`);
  return response.data;
};

export const deleteSalaryById = async (id: string) => {
  const response = await axios.delete(`/api/salaries/${id}`);
  return response.data;
};
