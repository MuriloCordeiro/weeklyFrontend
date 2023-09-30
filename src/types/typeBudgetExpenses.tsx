import { expensesTypes } from "./typeExpenses";

export interface budgetExpenseTypes {
  userId: string;
  remainingBudget: String;
  totalBudget: String;
  expenses: expensesTypes[];
}
