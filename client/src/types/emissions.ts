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

export interface EmissionCalculation {
  vehicleType: string;
  distance: number;
  frequency: number;
  fuelType?: string;
  passengers?: number;
}

export interface VehicleEmissionFactor {
  type: string;
  factor: number; // kg CO2 per km
  fuelTypes?: {
    [key: string]: number;
  };
}
