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
  currentVigency: string,
  title: string | undefined,
  description: string | undefined,
  value: number | undefined,
  expenseDate: any
) {
  try {
    const data = await api.post(`addWeeklyExpenses`, {
      userId: userId,
      weekNumber: weekNumber,
      currentVigency: currentVigency,
      title: title,
      description: description,
      value: value,
      expenseDate: expenseDate,
    });

    return { response: data, error: null } as unknown as WeeklyTypes;
  } catch (error) {
    return { response: null, error: error } as unknown as any;
  }
}
