export interface User {
  id: string;
  firebaseUid: string;
  email: string;
  name: string;
  avatar?: string;
  address?: string;
  phone?: string;
  travelFrequency?: 'often' | 'sometimes' | 'rarely';
  primaryTravelReason?: 'work' | 'leisure' | 'business';
  preferredDistance?: 'short' | 'medium' | 'long';
  primaryVehicle?: 'car' | 'motorcycle' | 'bus' | 'van';
  createdAt: string;
  updatedAt: string;
}
