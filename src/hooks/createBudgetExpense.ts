import { api } from "../services/api";

export async function CreateBudgetExpense(userId: string, totalBudget: string) {
  try {
    const data = await api.post(`CreateUserExpenseBudget`, {
      userId: userId,
      totalBudget: totalBudget,
    });

    return { response: data, error: null } as unknown as any;
  } catch (error) {
    return { response: null, error: error } as unknown as any;
  }
}
