export interface Emission {
  id: string;
  userId: string;
  travelId?: string;
  amount: number;
  vehicleType: string;
  distance: number;
  date: string;
  createdAt: string;
}
