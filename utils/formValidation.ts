import { FormData } from './constants';

export const validateCustomerForm = (formData: FormData): boolean => {
  if (!formData.name) {
    console.error('Name is required');
    return false;
  }

  if (!formData.phone) {
    console.error('Phone number is required');
    return false;
  }

  if (!formData.agreed) {
    console.error('Agreement to terms and conditions is required');
    return false;
  }

  // Add more form validation logic as required
  return true;
};
