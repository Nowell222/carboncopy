export const EMISSION_FACTORS = {
  car: 0.21,
  motorcycle: 0.1,
  bus: 0.05,
  van: 0.25,
  jeepney: 0.08,
  tricycle: 0.12,
} as const;

export type VehicleType = keyof typeof EMISSION_FACTORS;
