import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import { TR } from '../../components/Table';
import Header from '../../components/Header';
import Menu from '../../components/Menu';

import register from '../../functions/register';

import * as L from '../../components/Layout';
import * as C from './styles';
import Load from '../../components/Load';

import getUserAll from '../../functions/getUserAll';

import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';
import GroupIcon from '@mui/icons-material/Group';
import FingerprintIcon from '@mui/icons-material/Fingerprint';
import generateReport from './functions/generateReport';
import SearchIcon from '@mui/icons-material/Search';

import Swal from 'sweetalert2';
import destroyUser from './functions/destroyUser';

const Home = () => {
    const navigate = useNavigate();

    const [currentPage, setCurrentPage]     = useState(1);
    const [search, setSearch]               = useState('');
    const [isLoad, setIsLoad]               = useState(false);
    const [users, setUsers]                 = useState([]);
    const [lastRegister, setLastRegister]   = useState(localStorage.getItem('lastRegister'));
    const isAdmin                           = parseInt(localStorage.getItem('isAdmin') as string);
    const name                              = localStorage.getItem('name');

    const loadUser = async() => {
        setIsLoad(true);
       
        try {
            let response = await getUserAll(currentPage, search);
            setUsers(response.users.data);
        } catch (e) {

        }

        if (users.length === 0) {
            if (currentPage > 1) {
               setCurrentPage(currentPage - 1);
            }
        } 

        setIsLoad(false);
    }

    const handleClick = async ():Promise<void> => {
       try {
            let response =  await register();

            if (response.message) {
                Swal.fire({
                    icon: 'success',
                    title: response.message
                });
            }
            
            setLastRegister(response.lastRegister);
            localStorage.setItem('lastRegister', response.lastRegister);

       } catch (e) {

       }
    }

    const handlePDF = async (id: number) => {

        Swal.fire({
            title: 'Gerar relatorio PDF desse usuário',
            text: 'Relatorio é do mês atual com as horas registras por este usuário',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonText: 'Sim',
            cancelButtonText: 'Não',
            reverseButtons: true
          }).then((result) => {
            if (result.isConfirmed) {
                generateReport(id);
            }
          });
    }

    const handleDelete = (id: number) => {
        Swal.fire({
            title: 'Deseja excluir este usuário do sistema?',
            text: 'Apos a exclusão você não tera mais acesso a este usuário e todos os registros do mesmo serão deletado você realmente deseja excluir?',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonText: 'Sim',
            cancelButtonText: 'Não',
            reverseButtons: true
          }).then((result) => {
            if (result.isConfirmed) {
                destroyUser(id);
                loadUser();
            }
          });
    }

    const handleEdit = (id: number) => {
        navigate(`/edit/${id}`);
    }

    const listItems  =  users?.map((item, index) => (
        <TR 
                key={index} 
                item={item} 
                handleClickDell={handleDelete} 
                handleClickEdit={handleEdit} 
                handleClickPDF={handlePDF} 
        />
    ));
    
    useEffect(()=> {
        loadUser();
    }, [currentPage, search]);

    if (isAdmin === 0) {
        return(
            <>
                <Header/>
                <L.Main>
                    <Menu/>
                    <L.AreaRight>
                        <L.Content> 
                            <div>
                                <h1>Olá, {name}</h1>
                            </div>
                            <div>
                                <button
                                  onClick={handleClick}
                                  className='bg-purple-700 p-4 text-white rounded-lg hover:bg-violet-600'
                                >
                                    <div className='flex align-center gap-2'>
                                        <FingerprintIcon/>
                                        Registrar ponto
                                    </div>
                                </button>
                            </div>
                        </L.Content>
                        {lastRegister &&
                            <L.Content> 
                                <C.LastRegister>
                                    <h1>{lastRegister}</h1>
                                </C.LastRegister>
                            </L.Content>
                        }
                    </L.AreaRight>
                </L.Main>
            </>
        );
    } 

    return(
        <>
            <Header/>
            <L.Main>
                <Menu/>
                <L.AreaRight>
                    <L.Content>
                        <div className="flex">
                            <div className='flex align-center gap-3'>
                                <GroupIcon/>
                                <p>Usuários</p>
                            </div>
                        </div>
                    </L.Content>
                   
                    <L.Content>
                        <div className="container flex justify-between gap-5 items-center">
                            <div className="flex w-full bg-white items-center gap-1">
                                <SearchIcon className='ml-2 mr-1'/> 
                                <input 
                                    className="w-full xxl:text-lg text-ls bg-input-bg rounded border-2 border-slate-400  p-2 sm:w-full"
                                    value={search}
                                    onChange={e => setSearch(e.target.value)}
                                    placeholder='Buscar usuario...'
                                />
                            </div>
                        </div>
                    </L.Content>

                    <L.Content>
                        <div className="container mx-auto px-4 mt-5 p-2 bg-white rounded-lx">
                            {isLoad && <Load/>}
                            {!isLoad && <>
                                {(users && users.length > 0) && <>
                                    <div className="flex justify-between mb-5 Header_Header__2g8Ew p-2">
                                        <div className="w-full">
                                           <strong>Nome</strong>
                                        </div>
                                        <div className="w-full">
                                            <strong>E-mail</strong>
                                        </div>
                                        <div className="w-full flex justify-end">
                                            <strong>#</strong>
                                        </div>
                                    </div>
                                
                                    {listItems} 
                                </>}

                                {users.length === 0 &&
                                 <h1>Nenhum resultado encontrado</h1>
                                }

                                { search.length === 0 &&
                                  <div className='flex justify-between'>
                                        <button onClick={() => (currentPage - 1 > 0) ? setCurrentPage(currentPage - 1) : null}><NavigateBeforeIcon /></button>
                                        <span>Página {currentPage}</span>
                                        <button onClick={() => setCurrentPage(currentPage + 1)}><NavigateNextIcon /></button>
                                 </div>
                                }

                            </>}     
                        </div> 
                    </L.Content>
                </L.AreaRight>
            </L.Main>
        </>
    );
}

export default Home;
