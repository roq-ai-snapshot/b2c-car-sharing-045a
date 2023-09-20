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
  customerRoles: ['Guest'],
  tenantRoles: [
    'Owner',
    'Fleet Manager',
    'Admin',
    'Business Owner',
    'Operations Manager',
    'Operations Staff',
    'Customer Service Representative',
    'End Customer',
  ],
  tenantName: 'Company',
  applicationName: 'B2C Car sharing v1',
  addOns: ['file upload', 'chat', 'notifications', 'file'],
  customerAbilities: [
    'Read user information',
    'Read company information',
    'Read car information',
    'Read booking information',
  ],
  ownerAbilities: ['Manage users', 'Manage companies', 'Manage cars', 'Manage bookings'],
  getQuoteUrl: 'https://app.roq.ai/proposal/aa88dc91-3e95-43a7-b0bc-0147dd2cca0e',
};
