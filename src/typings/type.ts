/*
 * @Author: zhaohongyun1@jd.com
 * @Date: 2019-09-27 10:27:28
 * @LastEditors: zhaohongyun2
 * @LastEditTime: 2019-10-08 11:58:18
 */
/**
 * 全局通用的类型定义
 */
import React from 'react';
import { RouteComponentProps } from 'react-router-dom';

export interface Props {
  children?: JSX.Element[] | JSX.Element | React.ReactNode;
  className?: string;
}

export interface RoutedProps extends Props, RouteComponentProps {}

declare global {
  interface Window {
    smartUtil: any;
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__: any;
  }
}
export interface StoreState {
  todos: Todo[];
  visibilityFilter: VisibilityFilters;
}

export enum VisibilityFilters {
  SHOW_ALL = 'SHOW_ALL',
  SHOW_COMPLETED = 'SHOW_COMPLETED',
  SHOW_ACTIVE = 'SHOW_ACTIVE',
}

export class Todo {
  public completed!: boolean;

  public id!: number;

  public text!: string;
}
