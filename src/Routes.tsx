import { HOME_ROUTE, LOGIN_ROUTE, BASKET_ROUTE } from './utils/consts'

import {RouteObject} from 'react-router-dom'



export const publicRoutes: RouteObject[] = [
  {
    path: HOME_ROUTE,
    //element: <HomePage />
  },
  {
    path: LOGIN_ROUTE,
    //element: <LoginPage />
  }
]

export const privateRoutes: RouteObject[] = [
  {
    path: BASKET_ROUTE,
    //element: <UserBasket /> ??
  }
]
