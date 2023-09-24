import { api } from "../services/api";

export async function GetBudget(userId: string) {
  try {
    // const data = await api.get(`getBudget?userId=ana`);
    const data = await api.get(`getBudget?userId=${userId}`);

    return { response: data, error: null } as unknown as any;
  } catch (error) {
    return { response: null, error: error } as unknown as any;
  }
}
