import axios from "axios";

const API_BASE_URL = "https://ai-farm.onrender.com";

export const fetchFarmers = async () => {
  try {
    const response = await axios.get(`${API_BASE_URL}/farmers`);
    return response.data;
  } catch (error) {
    console.error("Error fetching farmers:", error);
    return [];
  }
};

export const fetchMarkets = async () => {
  try {
    const response = await axios.get(`${API_BASE_URL}/markets`);
    return response.data;
  } catch (error) {
    console.error("Error fetching markets:", error);
    return [];
  }
};

export const getAdvice = async (farmId) => {
  try {
    const response = await axios.get(`${API_BASE_URL}/advise/${farmId}`);
    return response.data;
  } catch (error) {
    console.error("Error fetching advice:", error);
    return null;
  }
};

export const uploadFarmerData = async (data) => {
  try {
    await axios.post(`${API_BASE_URL}/upload/farmer_data`, data);
    return "Farmer data uploaded successfully";
  } catch (error) {
    console.error("Error uploading farmer data:", error);
  }
};

export const uploadMarketData = async (data) => {
  try {
    await axios.post(`${API_BASE_URL}/upload/market_data`, data);
    return "Market data uploaded successfully";
  } catch (error) {
    console.error("Error uploading market data:", error);
  }
};
