import Weather from "../components.js/Weather";
const initialState = {
    weatherupdate: [],
};

export const searchForWeather = (state = initialState, { type, payload }) => {
    switch (type) {
        case "GETWEATHER": return { ...state, weatherupdate: payload };

        default: return state;
    }
}

export default searchForWeather;