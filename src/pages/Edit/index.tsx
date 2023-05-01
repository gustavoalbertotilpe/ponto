import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useAppSelector } from '../../redux/hooks/useAppSelector';
import { useNavigate } from 'react-router-dom';

import Header from '../../components/Header';
import Menu from '../../components/Menu';
import Form from '../../components/Form';
import * as L from '../../components/Layout';
import { InputType } from '../../types/FormTypes';
import Load from '../../components/Load';
import getUserFind from '../../functions/getUserFind';
import updateUser from '../../functions/updateUser';
import Swal from 'sweetalert2';

import EditIcon from '@mui/icons-material/Edit';

const Edit = () => {

    const navigate = useNavigate();
    const params = useParams();
    const id = parseInt(params.id as string);

    const isAdmin = useAppSelector(state => state.user.isAdmin);
    const [user, setUser] = useState<InputType>();
    const [isLoad, setIsLoad] = useState(false);

    useEffect(()=>{
        loadUser();
    },[]);

    const loadUser = async() => {
       try {
            setIsLoad(true);
            
            let response = await getUserFind(id);

            setUser(response.user);

            if (!response.user.name && !response.user.email) {  
                navigate('/');
                return false;
            }

            setIsLoad(false);

       } catch(e) {

       }
    }

    const handleSubmit = async (data:InputType) => {
       try {
         let response = await updateUser(id, data);

         if (response.error) {
            Swal.fire({
                icon: 'error',
                title: response.error
            });
         }

         if (response.message) {
            Swal.fire({
                icon: 'success',
                title: response.message
            });
         }

       } catch (e) {

       }
    }

    if (isAdmin === 0) {
        navigate('/');
        return null;
    }

    return(
        <>
            <Header/>
            <L.Main>
                <Menu/>
                <L.AreaRight>
                    <L.Content>
                        <div className='flex align-center gap-2'>
                            <EditIcon/>
                            <p>Edição</p>
                        </div>
                    </L.Content>
                    <L.Content> 
                       {isLoad && <Load/>}
                       {!isLoad && <Form handleSend={handleSubmit} data={user}/>}
                    </L.Content>
                </L.AreaRight>
            </L.Main>
        </>
    );
}

export default Edit;
