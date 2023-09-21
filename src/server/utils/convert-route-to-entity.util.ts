const mapping: Record<string, string> = {
  attendances: 'attendance',
  'attendance-records': 'attendance_record',
  employees: 'employee',
  'employee-details': 'employee_details',
  'performance-reviews': 'performance_review',
  'project-assignments': 'project_assignment',
  salaries: 'salary',
  'salary-structures': 'salary_structure',
  schedules: 'schedule',
  teams: 'team',
  users: 'user',
};

export function convertRouteToEntityUtil(route: string) {
  return mapping[route] || route;
}
