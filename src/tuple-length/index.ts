/*
 * @Author: wangzhisen
 * @Date: 2022-11-29 17:31:08
 * @Last Modified by: wangzhisen
 * @Last Modified time: 2022-11-29 17:34:30
 *
 * 实现tuple-length 类型,获取元组的长度
 */

type TupleLength<T extends unknown[]> = T extends { length: infer P } ? P : unknown;

type list = [1, 2, 3];

// eslint-disable-next-line no-unused-vars, @typescript-eslint/no-unused-vars
type Length = TupleLength<list>;
