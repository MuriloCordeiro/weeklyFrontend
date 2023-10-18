import { api } from "../services/api";

export async function getExpenseById(userId: string, expenseId: string) {
  try {
    // const data = await api.get(`getBudget?userId=ana`);
    const data = await api.get(
      `getExpenseById?userId=${userId}&expenseId=${expenseId}`
    );

    return { response: data, error: null } as unknown as any;
  } catch (error) {
    return { response: null, error: error } as unknown as any;
  }
}
