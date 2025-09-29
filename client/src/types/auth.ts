export interface User {
  id: string;
  firebaseUid: string;
  email: string;
  name: string;
  avatar?: string;
  address?: string;
  phone?: string;
  travelFrequency?: string;
  primaryTravelReason?: string;
  preferredDistance?: string;
  primaryVehicle?: string;
  createdAt: string;
  updatedAt: string;
}

export interface LoginData {
  email: string;
  password: string;
}

export interface SignupData {
  email: string;
  password: string;
  name: string;
}
