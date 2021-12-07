export function getFetchProductList() {
  return fetch("http://localhost:3333/productList").then((data) => data.json());
}

import axios from "axios";

export function getAxiosProductList() {
  return axios.get("http://localhost:3333/productList").then((data) => data);
}
