/* prettier-ignore-start */

/* eslint-disable */

// @ts-nocheck

// noinspection JSUnusedGlobalSymbols

// This file is auto-generated by TanStack Router

import { createFileRoute } from '@tanstack/react-router'

// Import Routes

import { Route as rootRoute } from './routes/__root'

// Create Virtual Routes

const SignUpLazyImport = createFileRoute('/sign-up')()
const SignInLazyImport = createFileRoute('/sign-in')()
const IndexLazyImport = createFileRoute('/')()

// Create/Update Routes

const SignUpLazyRoute = SignUpLazyImport.update({
  path: '/sign-up',
  getParentRoute: () => rootRoute,
} as any).lazy(() => import('./routes/sign-up.lazy').then((d) => d.Route))

const SignInLazyRoute = SignInLazyImport.update({
  path: '/sign-in',
  getParentRoute: () => rootRoute,
} as any).lazy(() => import('./routes/sign-in.lazy').then((d) => d.Route))

const IndexLazyRoute = IndexLazyImport.update({
  path: '/',
  getParentRoute: () => rootRoute,
} as any).lazy(() => import('./routes/index.lazy').then((d) => d.Route))

// Populate the FileRoutesByPath interface

declare module '@tanstack/react-router' {
  interface FileRoutesByPath {
    '/': {
      id: '/'
      path: '/'
      fullPath: '/'
      preLoaderRoute: typeof IndexLazyImport
      parentRoute: typeof rootRoute
    }
    '/sign-in': {
      id: '/sign-in'
      path: '/sign-in'
      fullPath: '/sign-in'
      preLoaderRoute: typeof SignInLazyImport
      parentRoute: typeof rootRoute
    }
    '/sign-up': {
      id: '/sign-up'
      path: '/sign-up'
      fullPath: '/sign-up'
      preLoaderRoute: typeof SignUpLazyImport
      parentRoute: typeof rootRoute
    }
  }
}

// Create and export the route tree

export const routeTree = rootRoute.addChildren({
  IndexLazyRoute,
  SignInLazyRoute,
  SignUpLazyRoute,
})

/* prettier-ignore-end */

/* ROUTE_MANIFEST_START
{
  "routes": {
    "__root__": {
      "filePath": "__root.tsx",
      "children": [
        "/",
        "/sign-in",
        "/sign-up"
      ]
    },
    "/": {
      "filePath": "index.lazy.tsx"
    },
    "/sign-in": {
      "filePath": "sign-in.lazy.tsx"
    },
    "/sign-up": {
      "filePath": "sign-up.lazy.tsx"
    }
  }
}
ROUTE_MANIFEST_END */
