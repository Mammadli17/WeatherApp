import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import API_KEY from "../../configuration/ApiKey"

const initialState = {
    data: [],
    status: 'idle',
    error: null,
};

export const GetWeather = createAsyncThunk('getWeather/GetWeather', async (Location: any) => {
  try {
    const response = await axios.get(`https://api.openweathermap.org/data/2.5/forecast?lat=${Location.latitude}&lon=${Location.longitude}&APPID=${API_KEY.API_KEY}&units=metric`);

    return response.data;
  } catch (error) {
      console.error(error);
    throw error;
  }
});


const Weather = createSlice({
    name: 'GetWeather',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(GetWeather.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(GetWeather.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.data = action.payload;
            })
            .addCase(GetWeather.rejected, (state, action) => {
                state.status = 'failed';
            });
    },
});

export const getWeather = Weather.reducer;