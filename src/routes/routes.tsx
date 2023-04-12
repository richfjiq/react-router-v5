// import { LazyPage1, LazyPage2, LazyPage3 } from '../lazyload/pages';

import { LazyExoticComponent, lazy } from 'react';
import { NoLazy } from '../lazyload/pages';

type JSXComponent = () => JSX.Element;

interface Route {
  path: string;
  to: string;
  component: LazyExoticComponent<JSXComponent> | JSXComponent;
  name: string;
  children?: Route[];
}

export const routes: Route[] = [
  {
    path: '/lazyload',
    to: '/lazyload',
    component: lazy(
      () =>
        import(
          /* webpackChunkName "LazyLayout" */ '../lazyload/layout/LazyLayout'
        )
    ),
    name: 'LazyLoading Nested',
  },
  {
    path: '/no-lazy',
    to: '/no-lazy',
    component: NoLazy,
    name: 'No Lazy Loading',
  },
];
