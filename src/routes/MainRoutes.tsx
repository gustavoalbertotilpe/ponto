import { useRoutes } from 'react-router-dom';
import Home from '../pages/Home';
import NotFound from '../pages/NotFound';
import Create from '../pages/Create';
import Edit from '../pages/Edit';
import RequireAuth from '../middleware/RequireAuth';
import Login from '../pages/Login';

export const MainRoutes = () => {
    return useRoutes([
        { path: '/', element: <RequireAuth><Home/></RequireAuth> },
        { path: '/login', element: <Login/>},
        { path: '/create', element: <RequireAuth><Create/></RequireAuth> },
        { path: '/edit/:id', element: <RequireAuth><Edit/></RequireAuth>},
        { path: '*', element: <NotFound/> }
    ]);
}
