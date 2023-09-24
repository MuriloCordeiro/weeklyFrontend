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

export async function AddWeeklyExpenses(
  userId: string,
  weekNumber: number | undefined,
  expense: {}
) {
  try {
    const data = await api.post(`addWeeklyExpenses`, {
      userId: userId,
      weekNumber: weekNumber,
      expense: expense,
    });

    return { response: data, error: null } as unknown as WeeklyTypes;
  } catch (error) {
    return { response: null, error: error } as unknown as any;
  }
}
