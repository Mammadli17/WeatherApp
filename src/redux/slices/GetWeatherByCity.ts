import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import API_KEY from "../../configuration/ApiKey"

const initialState = {
    data: [],
    status: 'idle',
    error: null,
};

export const GetWeatherByCity = createAsyncThunk('getWeather/GetWeatherByCity', async (City: any) => {
    try {
        const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${City}&APPID=${API_KEY.API_KEY}&units=metric`);
        return response.data;
    } catch (error) {
        console.error(error);
        throw error;
    }
});


const WeatherByCity = createSlice({
    name: 'GetWeatherByCity',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(GetWeatherByCity.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(GetWeatherByCity.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.data = action.payload;
            })
            .addCase(GetWeatherByCity.rejected, (state, action) => {
                state.status = 'failed';
            });
    },
});

export const getWeatherByCity = WeatherByCity.reducer;