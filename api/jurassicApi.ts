import axios from "axios";

const jurassicApi = axios.create({
  baseURL: process.env.NEXT_PUBLIC_BASE_URL || "",
});

export default jurassicApi;
