const axios = require("axios");

const API_URLS = {
  p: "http://20.244.56.144/evaluation-service/primes",
  f: "http://20.244.56.144/evaluation-service/fibo",
  e: "http://20.244.56.144/evaluation-service/even",
  r: "http://20.244.56.144/evaluation-service/rand",
};

exports.fetchNumbersFromAPI = async (numberId) => {
  const url = API_URLS[numberId];
  if (!url) throw new Error("Invalid numberId");
  try {
    const response = await axios.get(url, { timeout: 500 });
    return response.data.numbers || [];
  } catch (error) {
    console.error("Error fetching numbers:", error.message);
    return [];
  }
};