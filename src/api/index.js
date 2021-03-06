import axios from "axios";

const url = "https://inshorts-server.herokuapp.com/";

export const fetchCases = async (city) => {
    try {
        let endpoint = 'total_cases';
        if (city) {
            endpoint = `city/${city}`
        }
        const { data : { data } } = await axios.get(`${url}${endpoint}`);
        return data;
    } catch (e) {
        console.error(e);
    }
}

export const fetchCityCases = async () => {
    try {
        const { data : { data } } = await axios.get(`${url}city_cases`);
        return data;
    } catch (e) {
        console.error(e);
    }
}

export const fetchAllCities = async () => {
    try {
        const { data : { data : { cities } } } = await axios.get(`${url}cities`);
        return cities;
    } catch (e) {
        console.error(e);
    }
}
