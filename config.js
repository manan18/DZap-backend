import axios from "axios";

const server = axios.create({
  baseURL: "https://rest.coinapi.io/v1",
  headers: {
    "X-CoinAPI-Key": "EC735E01-FF47-425E-9F53-C26D131266AA",
    "Content-Type": "application/json",
    Accept: "application/json",
  },
});

export default server;
