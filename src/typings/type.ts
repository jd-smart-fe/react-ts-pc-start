/*
 * @Author: zhaohongyun1@jd.com
 * @Date: 2019-09-27 10:27:28
 * @LastEditors: zhaohongyun2
 * @LastEditTime: 2019-09-27 10:27:28
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
  }
}
