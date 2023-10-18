import { api } from "../services/api";

export async function getExpensesByType(
  userId: string,
  parameter: string,
  startDate: string,
  endDate: string
) {
  try {
    let startDateParameter = "";
    if (startDate && endDate) {
      startDateParameter = `&startDate=${startDate}&endDate=${endDate}`;
    }
    // const data = await api.get(`getBudget?userId=ana`);
    const data = await api.get(
      `getExpenses?userId=${userId}&typeExpense=${parameter}${startDateParameter}`
    );

    return { response: data, error: null } as unknown as any;
  } catch (error) {
    return { response: null, error: error } as unknown as any;
  }
}
