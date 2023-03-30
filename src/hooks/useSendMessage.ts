import { api } from "../services/api";
import { useState } from "react";

export async function SendMessages(teste: any) {
  try {
    const response = await api.post("Message/SendMessage", {
      receiver: ["+5541984341194"],
      messages: {
        text: teste,
      },
    });

    return response.data;
  } catch (error) {
    console.error(error);
  }
}
