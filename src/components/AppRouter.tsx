
import { Route, Routes, Navigate } from 'react-router-dom'
import { publicRoutes, privateRoutes } from '../Routes'

const AppRouter = () => {

  const user = false

  return user ?
    (
      <Routes>
        {privateRoutes.map((item, index) =>
          <Route key={index} path={item.path} element={item.element} />)}
      </Routes>
    )
    :
    (
      <Routes>
        {publicRoutes.map((item, index) =>
          <Route key={index} path={item.path} element={item.element} />)}
      </Routes>
    )
}

export default AppRouter
