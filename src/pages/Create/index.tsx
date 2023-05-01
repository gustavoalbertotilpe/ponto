import Header from '../../components/Header';
import Menu from '../../components/Menu';
import Form from '../../components/Form';
import { useAppSelector } from '../../redux/hooks/useAppSelector';
import * as L from '../../components/Layout';
import { InputType } from '../../types/FormTypes';
import { useNavigate } from 'react-router-dom';
import createUser from '../../functions/createUser';
import Swal from 'sweetalert2';

import BadgeIcon from '@mui/icons-material/Badge';

const Create = () => {  
    const navigate = useNavigate();
    const isAdmin = useAppSelector(state => state.user.isAdmin);

    if (isAdmin === 0) {
        navigate('/');
        return null;
    }

    const handleSubmit = async (data:InputType) => {
       try {
          let response =  await createUser(data);

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

            navigate('/');
          }

       } catch(e) {

       }
    }

    return(
        <>
            <Header/>
            <L.Main>
                <Menu/>
                <L.AreaRight>
                    <L.Content>
                       <div className='flex align-center gap-2'>
                        <BadgeIcon/>
                            Novo usuário
                       </div>
                    </L.Content>
                
                    <L.Content> 
                        <Form handleSend={handleSubmit}/>
                    </L.Content>
                </L.AreaRight>
            </L.Main>
        </>
    );
}

export default Create;
