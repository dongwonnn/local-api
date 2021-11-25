import axios from "axios";

axios.defaults.baseURL = "http://localhost:4000";

const fetcher = async (method, url, ...rest) => {
  const res = await axios[method](url, ...rest);

  return res.data;
};

// ...rest의 의미..

/*
axios.get(url[, config])
axios.delete(url[, config])
axios.post(url,data[, config])
axios.put(url,data[, config])
*/
