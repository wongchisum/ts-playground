/*
 * @Author: wangzhisen
 * @Date: 2022-11-29 17:40:07
 * @Last Modified by: wangzhisen
 * @Last Modified time: 2022-11-29 17:44:41
 *
 * 实现Awaited
 */

// 需要处理嵌套
type MyAwaited<T> = T extends Promise<infer K> ? (K extends Promise<unknown> ? MyAwaited<K> : K) : never;
// eslint-disable-next-line no-unused-vars, @typescript-eslint/no-unused-vars
type SampleType = MyAwaited<Promise<{ name: string; age: number }>>;

// eslint-disable-next-line no-unused-vars, @typescript-eslint/no-unused-vars
type NestSample = MyAwaited<Promise<Promise<{ name: string; age: number }>>>;
