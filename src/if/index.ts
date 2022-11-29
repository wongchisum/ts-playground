/*
 * @Author: wangzhisen
 * @Date: 2022-11-29 17:45:06
 * @Last Modified by: wangzhisen
 * @Last Modified time: 2022-11-29 17:47:38
 *
 * 实现 If 类型
 */

type MyIf<C, T, U> = C extends true ? T : U;

// eslint-disable-next-line no-unused-vars, @typescript-eslint/no-unused-vars
type TrueSample = MyIf<true, '10', 10>;
// eslint-disable-next-line no-unused-vars, @typescript-eslint/no-unused-vars
type FalseSample = MyIf<false, 'false', 'true'>;
