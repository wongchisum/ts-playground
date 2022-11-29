/*
 * @Author: wangzhisen
 * @Date: 2022-11-29 17:30:14
 * @Last Modified by: wangzhisen
 * @Last Modified time: 2022-11-29 17:30:37
 *
 * 实现 ArrayFirst 类型，获取数组第一个元素的类型
 */

type Sample = ['a', 'b', 'c'];

type ArrayFirst<T> = T extends [infer P, ...unknown[]] ? P : unknown;

// eslint-disable-next-line no-unused-vars, @typescript-eslint/no-unused-vars
type FirstElement = ArrayFirst<Sample>; // type FirstElement = "a"
