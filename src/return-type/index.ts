/*
 * @Author: wangzhisen
 * @Date: 2022-11-29 17:59:09
 * @Last Modified by: wangzhisen
 * @Last Modified time: 2022-11-29 18:01:33
 *
 * 实现ReturnType
 */

// eslint-disable-next-line no-unused-vars, @typescript-eslint/no-unused-vars
type MyReturnType<T> = T extends (...args: unknown[]) => infer P ? P : never;
