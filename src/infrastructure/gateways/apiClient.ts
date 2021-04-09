import Axios, { AxiosResponse, AxiosError } from 'axios';

const client = Axios.create();

client.interceptors.response.use(
  ({ data, status }: AxiosResponse) =>
    Promise.resolve({
      data,
      status,
    } as AxiosResponse),
  (error: AxiosError) => Promise.reject(error),
);

export default client;
