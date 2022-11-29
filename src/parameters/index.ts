/*
 * @Author: wangzhisen
 * @Date: 2022-11-29 17:53:58
 * @Last Modified by: wangzhisen
 * @Last Modified time: 2022-11-29 17:58:49
 *
 * 实现类型Parameters
 */

// eslint-disable-next-line no-unused-vars
type MyParameters<T> = T extends (...args: infer P) => unknown ? P : never;

// eslint-disable-next-line no-unused-vars, @typescript-eslint/no-unused-vars
type ParamsType = MyParameters<(counts: number[]) => unknown>;
