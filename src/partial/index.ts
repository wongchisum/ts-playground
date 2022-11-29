import type { Todo } from '../__common__/todo';

type MyPartial<T> = {
  [P in keyof T]?: T[P];
};

// eslint-disable-next-line no-unused-vars, @typescript-eslint/no-unused-vars
const item: MyPartial<Todo> = {
  description: '',
  done: false,
};
