export interface expensesTypes {
  _id: string;
  title: string;
  description: string;
  value: number;
  installments: number;
  createdAt: Date;
  endDate: Date;
  type: String;
}
