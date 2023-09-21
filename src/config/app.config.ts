interface AppConfigInterface {
  ownerRoles: string[];
  customerRoles: string[];
  tenantRoles: string[];
  tenantName: string;
  applicationName: string;
  addOns: string[];
  ownerAbilities: string[];
  customerAbilities: string[];
  getQuoteUrl: string;
}
export const appConfig: AppConfigInterface = {
  ownerRoles: ['Owner'],
  customerRoles: [],
  tenantRoles: ['Owner', 'HR Manager'],
  tenantName: 'Team',
  applicationName: 'Test',
  addOns: ['file upload', 'chat', 'notifications', 'file'],
  customerAbilities: [],
  ownerAbilities: [
    'Manage attendance records',
    'Manage salary structures',
    'Manage performance reviews',
    'Manage project assignments',
    'Manage employee details',
    'Manage users',
    'Manage teams',
    'Manage employees',
    'Manage schedules',
    'Manage attendance',
    'Manage salaries',
  ],
  getQuoteUrl: 'https://app.roq.ai/proposal/951ab17d-c1c8-4852-b891-46f8cb9b6e09',
};
