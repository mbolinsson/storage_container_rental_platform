import axios from "axios";

const BASE_URL = "http://localhost:3400/api";

export function fetchContainers(body) {
  return axios.post(`${BASE_URL}/containers`, body);
}

export function getContainer(id) {
  console.log(id);
  return axios.get(`${BASE_URL}/containers/${id}`);
}

export function sendForm(formInfo) {
  console.log(formInfo);
  return axios.post(`${BASE_URL}/booking`, formInfo);
}
