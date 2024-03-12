import axios from "axios";

export const clientAxios = axios.create({
  baseURL: `${process.env.URL_BACKEND}`,
});

export default clientAxios;
