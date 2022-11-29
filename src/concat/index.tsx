/*
 * @Author: wangzhisen
 * @Date: 2022-11-29 17:49:17
 * @Last Modified by: wangzhisen
 * @Last Modified time: 2022-11-29 17:50:29
 *
 * 实现 concat 类型
 */

type MyContact<T extends unknown[], U extends unknown[]> = [...T, ...U];

// eslint-disable-next-line no-unused-vars, @typescript-eslint/no-unused-vars
type Contacted = MyContact<[10, 20], [30, 40]>;
