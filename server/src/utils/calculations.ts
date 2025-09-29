interface EmissionCalculationParams {
  vehicleType: string;
  distance: number;
  fuelType?: string;
  passengers?: number;
}

const EMISSION_FACTORS = {
  car: {
    petrol: 0.21, // kg CO2 per km
    diesel: 0.24,
    electric: 0.05,
    hybrid: 0.12,
    default: 0.21,
  },
  motorcycle: {
    petrol: 0.1,
    electric: 0.02,
    default: 0.1,
  },
  bus: {
    diesel: 0.05, // per passenger per km
    electric: 0.02,
    default: 0.05,
  },
  van: {
    petrol: 0.25,
    diesel: 0.28,
    default: 0.25,
  },
};

export const calculateEmissions = (params: EmissionCalculationParams): number => {
  const { vehicleType, distance, fuelType = 'default', passengers = 1 } = params;
  
  const vehicleFactors = EMISSION_FACTORS[vehicleType as keyof typeof EMISSION_FACTORS];
  if (!vehicleFactors) {
    throw new Error(`Unknown vehicle type: ${vehicleType}`);
  }

  const factor = vehicleFactors[fuelType as keyof typeof vehicleFactors] || vehicleFactors.default;
  
  // For buses, factor is per passenger
  if (vehicleType === 'bus') {
    return factor * distance;
  }
  
  // For other vehicles, divide by passengers for carpooling
  return (factor * distance) / passengers;
};

export const getEmissionComparisons = (emissionKg: number) => {
  return {
    treesToOffset: Math.ceil(emissionKg / 20), // 1 tree absorbs ~20kg CO2/year
    equivalentWoodBurning: (emissionKg / 1.8).toFixed(1), // 1kg wood = ~1.8kg CO2
    equivalentTrashBurning: (emissionKg / 0.9).toFixed(1), // 1kg trash = ~0.9kg CO2
    kmDrivenByAverageCar: (emissionKg / 0.21).toFixed(0), // 0.21kg CO2/km
  };
};
