import { Navigate, Outlet } from 'react-router-dom'
import Spinner from './Spinner'
import { useStateValue } from './StateProvider';
import { useAuthStatus } from './useAuthStatus';

const PrivateRoute = ({isAuth}) => {

  return isAuth ? <Outlet /> : <Navigate to='/login' />
  
  }

export default PrivateRoute
