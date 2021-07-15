import axios from 'axios'

const API = axios.create({ baseURL: 'https://api.covid19india.org/v4/min/data.min.json'})
export const fetchData = () => API.get();
