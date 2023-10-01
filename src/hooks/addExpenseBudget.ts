import { api } from "../services/api";

export async function AddExpenseBudget(
  userId: string,
  title: string,
  description: string,
  value: number,
  installments: number,
  type: string
) {
  try {
    const data = await api.post(`addExpenses`, {
      userId: userId,
      title: title,
      description: description,
      value: value,
      installments: installments,
      type: type,
    });

    return { response: data, error: null } as unknown as any;
  } catch (error) {
    return { response: null, error: error } as unknown as any;
  }
}
