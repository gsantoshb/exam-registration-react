import { Navigate, Outlet } from 'react-router-dom'
import Spinner from './Spinner'
import { useStateValue } from './StateProvider';
import { useAuthStatus } from './useAuthStatus';

const PrivateRoute = () => {
  const [{user}, dispatch] = useStateValue();

  if(user){
  return user ? <Outlet /> : <Navigate to='/login' />;
  }else{
    return <Spinner />;
  }
}

export default PrivateRoute
