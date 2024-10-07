// constants.ts

// General Application Constants
type Technician = {
  id: string;
  name: string;
};

export const TECHNICIANS: Technician[] = [
  { id: '1', name: 'Sam' },
  { id: '2', name: 'Alex' },
  { id: '3', name: 'Taylor' },
  { id: '4', name: 'Anyone' },
];

export const MESSAGES = {
  formValidation: {
    requiredField: 'This field is required.',
    agreeTerms: 'Please agree to the terms and conditions.',
  },
  checkInSuccess: 'Checked in successfully!',
  checkInError: 'Error occurred while checking in. Please try again.',
};

export const DATE_FORMAT = 'YYYY-MM-DD';

// Firestore Collections
export const COLLECTIONS = {
  CHECK_INS: 'check-ins',
};

// Firebase Environment Variables
export const FIREBASE_CONFIG = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY!,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN!,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID!,
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET!,
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID!,
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID!,
};

// Form Data Type Definition
export type FormData = {
  name: string;
  phone: string;
  email?: string;
  technician: string;
  agreed: boolean;
};

export type Customer = {
    id: string;
    name: string;
    phone: string;
    email?: string;
    technician: string;
    checkInTime: Date;
    inService: boolean;
  };