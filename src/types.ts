export interface ITask {
  Id: string;
  title: string;
  description: string;
  dueDate: string;
  isCompleted: boolean;
  priority: 'low' | 'medium' | 'high';
}
