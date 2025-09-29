import React, { useState } from 'react';
import { Calculator as CalcIcon } from 'lucide-react';

const Calculator: React.FC = () => {
  const [vehicleType, setVehicleType] = useState('car');
  const [distance, setDistance] = useState('');
  const [frequency, setFrequency] = useState('1');

  const calculateEmissions = () => {
    const emissionFactors = {
      car: 0.21, // kg CO2 per km
      motorcycle: 0.1,
      bus: 0.05,
      van: 0.25,
    };

    const emissions = parseFloat(distance) * emissionFactors[vehicleType as keyof typeof emissionFactors] * parseInt(frequency);
    return emissions.toFixed(2);
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center space-x-3">
        <CalcIcon size={24} />
        <h1 className="text-2xl font-bold text-gray-900">Carbon Emission Calculator</h1>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="card">
          <h2 className="text-lg font-semibold mb-4">Trip Details</h2>
          
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Vehicle Type
              </label>
              <select 
                className="input-field"
                value={vehicleType}
                onChange={(e) => setVehicleType(e.target.value)}
              >
                <option value="car">Car</option>
                <option value="motorcycle">Motorcycle</option>
                <option value="bus">Bus</option>
                <option value="van">Van</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Distance (km)
              </label>
              <input
                type="number"
                className="input-field"
                value={distance}
                onChange={(e) => setDistance(e.target.value)}
                placeholder="Enter distance in kilometers"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Frequency (times per week)
              </label>
              <input
                type="number"
                className="input-field"
                value={frequency}
                onChange={(e) => setFrequency(e.target.value)}
                placeholder="How many times per week"
              />
            </div>

            <button className="btn-primary w-full">Calculate Emissions</button>
          </div>
        </div>

        <div className="card">
          <h2 className="text-lg font-semibold mb-4">Results</h2>
          
          {distance && (
            <div className="space-y-4">
              <div className="text-center p-6 bg-gray-50 rounded-lg">
                <p className="text-3xl font-bold text-red-600">{calculateEmissions()} kg</p>
                <p className="text-gray-600">CO₂ emissions per week</p>
              </div>
              
              <div className="text-sm text-gray-600">
                <p>• Monthly emissions: {(parseFloat(calculateEmissions()) * 4.33).toFixed(2)} kg CO₂</p>
                <p>• Annual emissions: {(parseFloat(calculateEmissions()) * 52).toFixed(2)} kg CO₂</p>
                <p>• Trees needed to offset: {(parseFloat(calculateEmissions()) * 52 / 20).toFixed(1)} trees</p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Calculator;
