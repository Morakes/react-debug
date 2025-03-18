/**
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @flow
 */

export type TypeOfMode = number;
// 默认模式 不启用任何特殊模式 用于传统的同步渲染
export const NoMode = /*                         */ 0b0000000;
// 并发模式 用于异步渲染 允许 React 中断渲染过程，优先处理更高优先级的更新 支持新特性如 Suspense、并发渲染等 *这个模式将来会被移除，改为从 root tag 读取
export const ConcurrentMode = /*                 */ 0b0000001;
// 性能模式 用于性能分析 允许 React 记录组件的渲染时间和其他性能指标
export const ProfileMode = /*                     */ 0b0000010;
//export const DebugTracingMode = /*             */ 0b0000100; // Removed
// 严格模式 用于检测潜在问题和废弃用法
export const StrictLegacyMode = /*               */ 0b0001000;
// 严格的副作用模式 用于严格控制和检查副作用（如 useEffect）的执行 助发现副作用相关的问题
export const StrictEffectsMode = /*              */ 0b0010000;
// 禁用严格的被动效果模式 关闭对 passive effects（如 useEffect）的严格检查 通常用于特殊场景下优化性能
export const NoStrictPassiveEffectsMode = /*     */ 0b1000000;
