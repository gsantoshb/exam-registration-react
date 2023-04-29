import { Navigate, Outlet } from 'react-router-dom'

const PrivateRoute = ({isAuth}) => {
  return isAuth ? <Outlet /> : <Navigate to='/login' />
  }

export default PrivateRoute
