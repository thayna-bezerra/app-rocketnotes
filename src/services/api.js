import axios from "axios"

export const api = axios.create({
  baseURL: 'https://api-rocketnotes-6ax5.onrender.com'
});