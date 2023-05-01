import { useNavigate } from 'react-router-dom';
import Props from '../types/RequireAuthTypes';
import Login from '../pages/Login';

const RequireAuth = ({ children }: Props) => {

    const isLogged = parseInt(localStorage.getItem('isLogged') as string);
    const navigate = useNavigate();

    return isLogged ? children : (navigate('/login'), <Login/>);
}

export default RequireAuth;
