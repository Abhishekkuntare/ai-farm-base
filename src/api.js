// import axios from "axios";

// const API_BASE_URL = "https://ai-farm.onrender.com";

// // Fetch all farmers
// export const fetchFarmers = async () => {
//   try {
//     const response = await axios.get(`${API_BASE_URL}/farmers`);
//     return response.data;
//   } catch (error) {
//     console.error("Error fetching farmers:", error.message);
//     return { error: "Failed to fetch farmers" };
//   }
// };

// // Fetch all markets
// export const fetchMarkets = async () => {
//   try {
//     const response = await axios.get(`${API_BASE_URL}/markets`);
//     return response.data;
//   } catch (error) {
//     console.error("Error fetching markets:", error.message);
//     return { error: "Failed to fetch markets" };
//   }
// };

// // Get advice for a specific farm
// export const getAdvice = async (farmId) => {
//   try {
//     const response = await axios.get(`${API_BASE_URL}/advise/${farmId}`);
//     return response.data;
//   } catch (error) {
//     console.error("Error fetching advice:", error.message);
//     return { error: "Failed to fetch advice" };
//   }
// };

// // Upload farmer data
// export const uploadFarmerData = async (data) => {
//   try {
//     const response = await axios.post(`${API_BASE_URL}/upload/farmer_data`, data);
//     return response.data || "Farmer data uploaded successfully";
//   } catch (error) {
//     console.error("Error uploading farmer data:", error.message);
//     return { error: "Failed to upload farmer data" };
//   }
// };

// // Upload market data
// export const uploadMarketData = async (data) => {
//   try {
//     const response = await axios.post(`${API_BASE_URL}/upload/market_data`, data);
//     return response.data || "Market data uploaded successfully";
//   } catch (error) {
//     console.error("Error uploading market data:", error.message);
//     return { error: "Failed to upload market data" };
//   }
// };



import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "https://abhsan-ai-farm.hf.space",
  headers: {
    "Content-Type": "application/json",
  },
  withCredentials: false, // Ensure this matches your backend settings
});

// Fetch all farmers
export const fetchFarmers = async () => {
  try {
    const response = await axiosInstance.get("/farmers");
    return response.data;
  } catch (error) {
    console.error("Error fetching farmers:", error.message);
    return { error: "Failed to fetch farmers" };
  }
};

// Fetch all markets
export const fetchMarkets = async () => {
  try {
    const response = await axiosInstance.get("/markets");
    return response.data;
  } catch (error) {
    console.error("Error fetching markets:", error.message);
    return { error: "Failed to fetch markets" };
  }
};

// Get advice for a specific farm
export const getAdvice = async (farmId) => {
  try {
    const response = await axiosInstance.get(`/advise/${farmId}`);
    return response.data;
  } catch (error) {
    console.error("Error fetching advice:", error.message);
    return { error: "Failed to fetch advice" };
  }
};

// Upload farmer data
export const uploadFarmerData = async (data) => {
  try {
    const response = await axiosInstance.post("/upload/farmer_data", data);
    return response.data || "Farmer data uploaded successfully";
  } catch (error) {
    console.error("Error uploading farmer data:", error.message);
    return { error: "Failed to upload farmer data" };
  }
};

// Upload market data
export const uploadMarketData = async (data) => {
  try {
    const response = await axiosInstance.post("/upload/market_data", data);
    return response.data || "Market data uploaded successfully";
  } catch (error) {
    console.error("Error uploading market data:", error.message);
    return { error: "Failed to upload market data" };
  }
};
