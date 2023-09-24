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

export async function UpdateWeeklyExpense(
  userId: string | undefined,
  weekNumber: number | undefined,
  expenseId: string | undefined,
  newExpense: {}
) {
  try {
    const data = await api.post(`updateWeeklyExpense`, {
      userId: userId,
      weekNumber: weekNumber,
      expenseId: expenseId,
      newExpense: newExpense,
    });

    return { response: data, error: null } as unknown as WeeklyTypes;
  } catch (error) {
    return { response: null, error: error } as unknown as any;
  }
}
