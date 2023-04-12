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
