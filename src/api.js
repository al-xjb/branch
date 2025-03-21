// src/api.js
import axios from "axios";

// Base URL of the backend API (running on localhost in development, and via Nginx in production)
const BASE_URL1 = "http://localhost:3002"; // change the service based on the app (service1, service2, etc.)
const BASE_URL2 = "http://localhost:3003"; // change the service based on the app (service1, service2, etc.)
const BASE_URL3 = "http://localhost:3004"; // change the service based on the app (service1, service2, etc.)

// Example API call to get data from service1
export const fetchDataFromService1 = async () => {
  try {
    const response = await axios.get(`${BASE_URL1}/api/data`);
    return response.data;
  } catch (error) {
    console.error("Error fetching data from service1:", error);
    throw error;
  }
};

// Similarly, you can create fetch functions for other services
export const fetchDataFromService2 = async () => {
  try {
    const response = await axios.get(`${BASE_URL2}/api/data`);
    return response.data;
  } catch (error) {
    console.error("Error fetching data from service2:", error);
    throw error;
  }
};

export const fetchDataFromService3 = async () => {
  try {
    const response = await axios.get(`${BASE_URL3}/api/data`);
    return response.data;
  } catch (error) {
    console.error("Error fetching data from service3:", error);
    throw error;
  }
};
