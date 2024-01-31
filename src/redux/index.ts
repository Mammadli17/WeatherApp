import { configureStore } from "@reduxjs/toolkit";
import { getWeather } from "./slices/GetWeather";
import { getWeatherByCity } from "./slices/GetWeatherByCity";

export const store = configureStore({
    reducer: {
        GetWeather: getWeather,
        GetWeatherByCity: getWeatherByCity
    },
});

export type AppDispatch = typeof store.dispatch;
export type StateType = ReturnType<typeof store.getState>;