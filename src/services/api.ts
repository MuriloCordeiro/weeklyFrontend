import axios from "axios";

// Aqui será setada a chave de segurança para acesso a api
// const token = process.env.NEXT_PUBLIC_API_KEY;

export const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,

  // Aqui será enviado a chave de segurança
  //   headers: {
  //     Authorization: `Bearer ${token}`,
  //   },
});
