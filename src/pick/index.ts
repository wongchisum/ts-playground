/*
 * @Author: wangzhisen
 * @Date: 2022-11-29 17:05:03
 * @Last Modified by: wangzhisen
 * @Last Modified time: 2022-11-29 17:12:57
 *
 * 实现Pick
 */

import type { Todo } from '../__common__/todo';

type MyPick<T, K extends keyof T = keyof T> = {
  [P in K]: T[P];
};

// type PickedTodo = {
//     description: string;
//     done: boolean;
// }
type PickedTodo = MyPick<Todo, 'description' | 'done'>;

// eslint-disable-next-line no-unused-vars, @typescript-eslint/no-unused-vars
const item: PickedTodo = {
  description: '111',
  done: false,
};
