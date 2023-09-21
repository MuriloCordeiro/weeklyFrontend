import { api } from "../services/api";
import { useState } from "react";

export async function SendMessages(phoneNumber: any, textMessage: any) {
  try {
    const response = await api.post("sendMessages", {
      receiver: phoneNumber,
      message: {
        text: textMessage,
      },
    });

    return response.data;
  } catch (error) {
    console.error(error);
  }
}

export async function getMessages() {
  try {
    const response = await api.get("Messages");

    return response.data;
  } catch (error) {
    console.error(error);
  }
}

// Quando o usuario entrar na página uma requisição vai ser feita pro node com o mes atual do usuario, ele vai trazer todas as despesas válidas daquele mes espeficio seguindo aquela regrinha,
// dessa forma o usuario consegue verificar quais despesas ele tera no futuro, tipo um ver fatura do nubank onde voce consegue ver as suas contas fixas futuras

const fixedExpenses = {
  userId: "",
  title: "",
  description: "",
  currentMonth: "", //mes atual
  createdAt: "", // data que a despesa foi incluída
  installments: 12,
  endAt: "", // com base no createdAt vezes o installments, temos um endAt
  value: "",
  isActive: "", // aqui vai ser um boolean, se a conta estiver entre o createdAt e o endAt, ela está válida.
isCurrent: "" //aqui ele sempre vai perpetuar
};