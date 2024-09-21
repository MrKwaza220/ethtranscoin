// src/services/api.js
import axios from 'axios';

const API = axios.create({
  baseURL: 'http://localhost:5000/api/tickets', 
});

export const fetchOperators = () => API.get('/operators');
export const fetchFareData = () => API.get('/fare-data');
export const fetchTransactions = () => API.get('/transactions');
export const fetchOperatorRevenue = () => API.get('/operator/revenue');
export const purchaseTicket = (data) => API.post('/purchase', data);
