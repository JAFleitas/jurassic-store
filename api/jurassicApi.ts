import axios from "axios";

const jurassicApi = axios.create({
  baseURL: "/api",
});

export default jurassicApi;
