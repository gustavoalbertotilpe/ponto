import { useAppSelector } from '../../redux/hooks/useAppSelector';
import { Link } from 'react-router-dom';
import exit from './functions/exit';

import * as C from './styles';
import Swal from 'sweetalert2';

import DashboardIcon from '@mui/icons-material/Dashboard';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import LogoutIcon from '@mui/icons-material/Logout';

const Menu = () => {
    const isAdmin = useAppSelector(state => state.user.isAdmin);
    

    const logout = async () => {
        Swal.fire({
            title: 'Deseja realmente sair do sistema?',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonText: 'Sim',
            cancelButtonText: 'Não',
            reverseButtons: true
          }).then((result) => {
            if (result.isConfirmed) {
              exit()

            }
        });
    }

   
    if (isAdmin === 0) {
        return(
            <C.Main>
            <C.Ul>
                <C.Li>
                   <DashboardIcon/> 
                   <Link to='/'>Dashboard</Link>
                </C.Li>
                <C.Li>
                    <LogoutIcon/>
                    <Link to='' onClick={() => {logout()}} >Sair</Link>
                </C.Li>
            </C.Ul>
        </C.Main>
        );
    }

    return(
        <C.Main>
            <C.Ul>
                <C.Li>
                   <DashboardIcon/> 
                   <Link to='/'>Dashboard</Link>
                </C.Li>
                <C.Li>
                    <PersonAddIcon/>
                   <Link to='/create'>Cadatrar novo usuário</Link>
                </C.Li>
                <C.Li>
                    <LogoutIcon/>
                    <Link to='' onClick={() => {logout()}}>Sair</Link>
                </C.Li>
            </C.Ul>
        </C.Main>
    );
}

export default Menu;
