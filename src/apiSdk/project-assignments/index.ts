import axios from 'axios';
import queryString from 'query-string';
import { ProjectAssignmentInterface, ProjectAssignmentGetQueryInterface } from 'interfaces/project-assignment';
import { GetQueryInterface, PaginatedInterface } from '../../interfaces';

export const getProjectAssignments = async (
  query?: ProjectAssignmentGetQueryInterface,
): Promise<PaginatedInterface<ProjectAssignmentInterface>> => {
  const response = await axios.get('/api/project-assignments', {
    params: query,
    headers: { 'Content-Type': 'application/json' },
  });
  return response.data;
};

export const createProjectAssignment = async (projectAssignment: ProjectAssignmentInterface) => {
  const response = await axios.post('/api/project-assignments', projectAssignment);
  return response.data;
};

export const updateProjectAssignmentById = async (id: string, projectAssignment: ProjectAssignmentInterface) => {
  const response = await axios.put(`/api/project-assignments/${id}`, projectAssignment);
  return response.data;
};

export const getProjectAssignmentById = async (id: string, query?: GetQueryInterface) => {
  const response = await axios.get(`/api/project-assignments/${id}${query ? `?${queryString.stringify(query)}` : ''}`);
  return response.data;
};

export const deleteProjectAssignmentById = async (id: string) => {
  const response = await axios.delete(`/api/project-assignments/${id}`);
  return response.data;
};
