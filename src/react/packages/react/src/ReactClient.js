/**
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @flow
 */


/**
 * 导出 React 核心 API ：该文件汇集并导出了 React 的所有公共 API，包括：
- 组件类（ Component 、 PureComponent ）
- Hooks（ useState 、 useEffect 、 useContext 等）
- 元素创建函数（ createElement 、 cloneElement ）
- 特殊组件类型（ Fragment 、 Suspense 、 StrictMode 等）
 */

import ReactVersion from 'shared/ReactVersion';
import {
  REACT_FRAGMENT_TYPE,
  REACT_PROFILER_TYPE,
  REACT_STRICT_MODE_TYPE,
  REACT_SUSPENSE_TYPE,
  REACT_SUSPENSE_LIST_TYPE,
  REACT_LEGACY_HIDDEN_TYPE,
  REACT_OFFSCREEN_TYPE,
  REACT_SCOPE_TYPE,
  REACT_TRACING_MARKER_TYPE,
  REACT_VIEW_TRANSITION_TYPE,
} from 'shared/ReactSymbols';

import {Component, PureComponent} from './ReactBaseClasses';
import {createRef} from './ReactCreateRef';
import {forEach, map, count, toArray, only} from './ReactChildren';
import {
  createElement,
  cloneElement,
  isValidElement,
} from './jsx/ReactJSXElement';
import {createContext} from './ReactContext';
import {lazy} from './ReactLazy';
import {forwardRef} from './ReactForwardRef';
import {memo} from './ReactMemo';
import {cache} from './ReactCacheClient';
import {postpone} from './ReactPostpone';
import {
  getCacheForType,
  useCallback,
  useContext,
  useEffect,
  useEffectEvent,
  useImperativeHandle,
  useDebugValue,
  useInsertionEffect,
  useLayoutEffect,
  useMemo,
  useSyncExternalStore,
  useReducer,
  useRef,
  useState,
  useTransition,
  useDeferredValue,
  useId,
  useCacheRefresh,
  use,
  useOptimistic,
  useActionState,
  useSwipeTransition,
} from './ReactHooks';
import ReactSharedInternals from './ReactSharedInternalsClient';
import {startTransition} from './ReactStartTransition';
import {addTransitionType} from './ReactTransitionType';
import {act} from './ReactAct';
import {captureOwnerStack} from './ReactOwnerStack';
import * as ReactCompilerRuntime from './ReactCompilerRuntime';

const Children = {
  map,
  forEach,
  count,
  toArray,
  only,
};

export {
  Children,
  createRef,
  Component,
  PureComponent,
  createContext,
  forwardRef,
  lazy,
  memo,
  cache,
  postpone as unstable_postpone,
  useCallback,
  useContext,
  useEffect,
  useEffectEvent as experimental_useEffectEvent,
  useImperativeHandle,
  useDebugValue,
  useInsertionEffect,
  useLayoutEffect,
  useMemo,
  useOptimistic,
  useActionState,
  useSyncExternalStore,
  useReducer,
  useRef,
  useState,
  REACT_FRAGMENT_TYPE as Fragment,
  REACT_PROFILER_TYPE as Profiler,
  REACT_STRICT_MODE_TYPE as StrictMode,
  REACT_SUSPENSE_TYPE as Suspense,
  createElement,
  cloneElement,
  isValidElement,
  ReactVersion as version,
  ReactSharedInternals as __CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,
  ReactCompilerRuntime as __COMPILER_RUNTIME,
  // Concurrent Mode
  useTransition,
  startTransition,
  useDeferredValue,
  REACT_SUSPENSE_LIST_TYPE as unstable_SuspenseList,
  REACT_LEGACY_HIDDEN_TYPE as unstable_LegacyHidden,
  REACT_OFFSCREEN_TYPE as unstable_Activity,
  getCacheForType as unstable_getCacheForType,
  useCacheRefresh as unstable_useCacheRefresh,
  use,
  // enableScopeAPI
  REACT_SCOPE_TYPE as unstable_Scope,
  // enableTransitionTracing
  REACT_TRACING_MARKER_TYPE as unstable_TracingMarker,
  // enableViewTransition
  REACT_VIEW_TRANSITION_TYPE as unstable_ViewTransition,
  addTransitionType as unstable_addTransitionType,
  // enableSwipeTransition
  useSwipeTransition as unstable_useSwipeTransition,
  // DEV-only
  useId,
  act,
  captureOwnerStack,
};
