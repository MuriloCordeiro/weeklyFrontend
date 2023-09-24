import { api } from "../services/api";

type WeeklyTypes = {
  data: {
    remainingBudget: string;
    totalBudget: string;
    userId: string;
    weeks: [
      {
        budget: string;
        endDate: string;
        remainingBudget: string;
        expenses: [
          {
            description: string;
            expenseDate: string;
            title: string;
            value: number;
          }
        ];
        startDate: string;
        weekNumber: string;
      }
    ];
  };
};

export async function DeleteWeeklyExpense(
  userId: string | undefined,
  weekNumber: number | undefined,
  expenseId: string | undefined
) {
  try {
    const data = await api.delete(`deleteWeeklyExpense`, {
      params: {
        userId: userId,
        weekNumber: weekNumber,
        expenseId: expenseId,
      },
    });

    return { response: data, error: null };
  } catch (error) {
    return { response: null, error: error };
  }
}
