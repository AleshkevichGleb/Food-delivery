import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const getGeoLocation = () => {
    return new Promise((resolve, rejected) => {
        navigator.geolocation.getCurrentPosition(resolve, rejected)
    })
}

const getFetch = async(lat = 52.22, long = 13.42) => {
    const response = await fetch(`https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${long}&current_weather=true&hourly=temperature_2m,relativehumidity_2m,windspeed_10m`)
    return response.json();
}

export const getWeather = createAsyncThunk('weather/getWeather', 
    async() => {
        try {
            const position = await getGeoLocation();
            const {latitude, longitude} = position.coords;
            return getFetch(latitude, longitude);
        } catch(error) {
            return getFetch();
        }
       
    })

const weatherSlice = createSlice({
    name: 'weather',
    initialState: {
        weather: {},
        status: 'idle',
        error: null,
    },
    extraReducers(builder) {
        builder.addCase(getWeather.pending, (state, action) => {
            state.status = 'loading';
        })
        builder.addCase(getWeather.fulfilled, (state, action) => {
            state.status = 'succeeded';
            state.weather = action.payload.current_weather;
        })
        builder.addCase(getWeather.rejected, (state, action) => {
            state.status = 'failed';
            state.error = action.error.message;
        })
    }
})


export default weatherSlice.reducer;