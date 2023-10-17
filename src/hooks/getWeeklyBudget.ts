import { api } from "../services/api";

export async function GetBudget(userId: string) {
  try {
    // const data = await api.get(`getBudget?userId=ana`);
    const data = await api.get(
      `getWeeklyBudget?userId=${userId}&currentVigency=10/2023`
    );

    return { response: data, error: null } as unknown as any;
  } catch (error) {
    return { response: null, error: error } as unknown as any;
  }
}
