/*
Separation of concerns:

Components only need to be concerned with receiving and rendering data,
they don't need to be concerned with how to make API calls.

This service file is concerned only with how to make API calls to our API
and only returns the data.

Combining a service file with the react-query package's useQuery hook is
ideal for larger projects.
*/

import axios from 'axios';

// Normally the url would be saved in a .env or config file that is git ignored
// so it's easy to have a different url for production.
const http = axios.create({
    baseURL: 'http://localhost:8000/api',
});

/* 
We could also avoid repetition on '/trips' by adding it to the axios
base URL, but then if we have other models we would need another axios
instance to change that part of the url.
*/

export const getAllTrips = async () => {
    const res = await http.get('/trips');
    return res.data;
};

export const getTripById = async (id) => {
    const res = await http.get(`/trips/${id}`);
    return res.data;
};

export const createTrip = async (data) => {
    const res = await http.post(`/trips`, data);
    return res.data;
};
  
  export const updateTripById = async (id, data) => {
    const res = await http.put(`/trips/${id}`, data);
    return res.data;
};
  
  export const deleteTripById = async (id) => {
    const res = await http.delete(`/trips/${id}`);
    return res.data;
};