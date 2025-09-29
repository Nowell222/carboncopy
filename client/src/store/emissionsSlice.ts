import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface Emission {
  id: string;
  amount: number;
  vehicleType: string;
  distance: number;
  date: string;
}

interface EmissionsState {
  emissions: Emission[];
  totalEmissions: number;
  isLoading: boolean;
}

const initialState: EmissionsState = {
  emissions: [],
  totalEmissions: 0,
  isLoading: false,
};

const emissionsSlice = createSlice({
  name: 'emissions',
  initialState,
  reducers: {
    setEmissions: (state, action: PayloadAction<Emission[]>) => {
      state.emissions = action.payload;
      state.totalEmissions = action.payload.reduce((sum, emission) => sum + emission.amount, 0);
    },
    addEmission: (state, action: PayloadAction<Emission>) => {
      state.emissions.push(action.payload);
      state.totalEmissions += action.payload.amount;
    },
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.isLoading = action.payload;
    },
  },
});

export const { setEmissions, addEmission, setLoading } = emissionsSlice.actions;
export default emissionsSlice.reducer;
