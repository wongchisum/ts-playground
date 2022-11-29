import type { Todo } from '../__common__/todo';

type MyReadonly<T> = {
  readonly [K in keyof T]: T[K];
};

type ReadonlyTodo = MyReadonly<Todo>;

// eslint-disable-next-line no-unused-vars, @typescript-eslint/no-unused-vars, prettier/prettier, prefer-const
let item: ReadonlyTodo = {
  name: 'item',
  description: '123',
  done: false,
};

// 无法为“done”赋值，因为它是只读属性。
// item.done = true
