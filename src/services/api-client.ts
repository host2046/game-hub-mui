import axios, { AxiosRequestConfig } from "axios";
export interface fetchDataRes<T> {
  count: number;
  next: string | null;
  results: T[];
}
const instanseRequest = axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "baec8e7cbe62405f92a0655a48721d08",
  },
});
class ApiClient<T> {
  endPoint: string;
  constructor(endPoint: string) {
    this.endPoint = endPoint;
  }
  getAll = (config: AxiosRequestConfig) => {
    return instanseRequest
      .get<fetchDataRes<T>>(this.endPoint, config)
      .then((res) => res.data);
  };
  get = (id: string | number) => {
    return instanseRequest
      .get<T>(this.endPoint + "/" + id)
      .then((res) => res.data);
  };
}

export default ApiClient;
