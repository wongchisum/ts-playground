/*
 * @Author: wangzhisen
 * @Date: 2022-11-29 17:52:00
 * @Last Modified by: wangzhisen
 * @Last Modified time: 2022-11-29 17:53:17
 *
 * 实现Push 类型
 */

type MyPush<T extends unknown[], U> = [...T, U];

// eslint-disable-next-line no-unused-vars, @typescript-eslint/no-unused-vars
type Pushed = MyPush<[1, 2, 3], 4>;
