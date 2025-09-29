export const VEHICLE_EMISSION_FACTORS = {
  car: {
    name: 'Car',
    factors: {
      petrol: { value: 0.21, unit: 'kg CO₂/km' },
      diesel: { value: 0.24, unit: 'kg CO₂/km' },
      electric: { value: 0.05, unit: 'kg CO₂/km' },
      hybrid: { value: 0.12, unit: 'kg CO₂/km' },
    },
    defaultFactor: 0.21,
  },
  motorcycle: {
    name: 'Motorcycle',
    factors: {
      petrol: { value: 0.1, unit: 'kg CO₂/km' },
      electric: { value: 0.02, unit: 'kg CO₂/km' },
    },
    defaultFactor: 0.1,
  },
  bus: {
    name: 'Bus',
    factors: {
      diesel: { value: 0.05, unit: 'kg CO₂/km per passenger' },
      electric: { value: 0.02, unit: 'kg CO₂/km per passenger' },
      cng: { value: 0.04, unit: 'kg CO₂/km per passenger' },
    },
    defaultFactor: 0.05,
  },
  van: {
    name: 'Van',
    factors: {
      petrol: { value: 0.25, unit: 'kg CO₂/km' },
      diesel: { value: 0.28, unit: 'kg CO₂/km' },
    },
    defaultFactor: 0.25,
  },
  jeepney: {
    name: 'Jeepney',
    factors: {
      diesel: { value: 0.08, unit: 'kg CO₂/km per passenger' },
    },
    defaultFactor: 0.08,
  },
  tricycle: {
    name: 'Tricycle',
    factors: {
      petrol: { value: 0.12, unit: 'kg CO₂/km' },
    },
    defaultFactor: 0.12,
  },
};

export const FUEL_TYPES = {
  petrol: 'Petrol/Gasoline',
  diesel: 'Diesel',
  electric: 'Electric',
  hybrid: 'Hybrid',
  cng: 'Compressed Natural Gas',
};
