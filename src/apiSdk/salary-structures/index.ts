import axios from 'axios';
import queryString from 'query-string';
import { SalaryStructureInterface, SalaryStructureGetQueryInterface } from 'interfaces/salary-structure';
import { GetQueryInterface, PaginatedInterface } from '../../interfaces';

export const getSalaryStructures = async (
  query?: SalaryStructureGetQueryInterface,
): Promise<PaginatedInterface<SalaryStructureInterface>> => {
  const response = await axios.get('/api/salary-structures', {
    params: query,
    headers: { 'Content-Type': 'application/json' },
  });
  return response.data;
};

export const createSalaryStructure = async (salaryStructure: SalaryStructureInterface) => {
  const response = await axios.post('/api/salary-structures', salaryStructure);
  return response.data;
};

export const updateSalaryStructureById = async (id: string, salaryStructure: SalaryStructureInterface) => {
  const response = await axios.put(`/api/salary-structures/${id}`, salaryStructure);
  return response.data;
};

export const getSalaryStructureById = async (id: string, query?: GetQueryInterface) => {
  const response = await axios.get(`/api/salary-structures/${id}${query ? `?${queryString.stringify(query)}` : ''}`);
  return response.data;
};

export const deleteSalaryStructureById = async (id: string) => {
  const response = await axios.delete(`/api/salary-structures/${id}`);
  return response.data;
};
