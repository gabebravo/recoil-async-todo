export type Todo = {
  createdAt?: string;
  name?: string;
  avatar?: string;
  id: string;
  task: string;
  done: boolean;
};

export type TodoCount = {
  incomplete: number;
  complete: number;
};
