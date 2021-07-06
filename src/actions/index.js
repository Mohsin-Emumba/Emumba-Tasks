export const weathersch = (weatherupdate) => {
    return {
        type: 'GETWEATHER',
        payload: weatherupdate,
    }
}