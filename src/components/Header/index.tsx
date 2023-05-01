import * as C from './styles';
import logo from '../../assets/img/logo.svg';
import { Link } from 'react-router-dom';

const Header = () => {
    const name  = localStorage.getItem('name');

    return (
        <C.Header>
            <Link to='/'>
                <C.Logo>
                    <img src={logo} alt="Logo" width="50px"/>              
                    <p>Ponto certo</p>
                </C.Logo>
            </Link>

            <div className='text-white mr-3'>
                <p>Olá, {name}</p>
            </div>
        </C.Header>
    );
}

export default Header;
