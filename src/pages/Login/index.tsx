import { useForm, SubmitHandler } from 'react-hook-form';
import { InputType } from "../../types/LoginTypes";
import * as C from './styles';
import Swal from 'sweetalert2';
import storeUserData from '../../functions/storeUserData';
import authenticateUser from '../../functions/authenticateUser';

const Login = () => {
    const { register, handleSubmit, formState: { errors } } = useForm<InputType>();

    const onSubmit: SubmitHandler<InputType> = async (data) => {
        try {
            let  response = await authenticateUser(data);

            if (response?.error) {
                Swal.fire({
                icon: "error",
                title: response.error,
                });
                return false;
            }

            if (!response.token || !response.user) {
                Swal.fire({
                icon: "error",
                title: "Erro ao autenticar usuário",
                });
                return false;
            }

            storeUserData(response.user, response.token);

            window.location.href = '/';
        } catch(e) {

        }
    };

    return (
        <C.Main>
            <C.AreaLogin>
                <form onSubmit={handleSubmit(onSubmit)} className="w-full">
                    <div className="flex-row sm:block">
                        <div className="flex-col w-full mb-3">
                            <div className="xxl:text-lg text-ls font-medium">
                                Login
                            </div>
                            <div className="mt-1">
                                {/* register your input into the hook by invoking the "register" function */}
                                <input 
                                {...register("email", { required: true })} 
                                className="w-full xxl:text-lg text-ls bg-input-bg rounded border-2 border-slate-400  p-2 sm:w-full"
                                type='email'
                            />
                            {errors.email && <span>Este campo é requerido</span>}
                            </div>
                        </div>

                        <div className="flex-col w-full">
                            <div className="xxl:text-lg text-ls font-medium">
                                Senha
                            </div>
                            <div className="mt-1">
                                {/* include validation with required or other standard HTML validation rules */}
                                <input {...register("password", { required: true })} 
                                  className="w-full xxl:text-lg text-ls bg-input-bg rounded border-2 border-slate-400  p-2 sm:w-full"
                                  type='password'
                                />
                                {/* errors will return when field validation fails  */}
                                {errors.password && <span>Este campo é requerido</span>}
                            </div>
                        </div>
                    </div>
                    
                    <div className="flex-col w-full">
                        <div className="flex justify-end w-full mb-3">
                           <input className="border-2 border-slate-400 transition-all delay-75 hover:bg-cyan-600 bg-sky-400 text-white cursor-pointer mt-4 p-2" type="submit" />
                        </div>
                    </div>
                </form>
            </C.AreaLogin>
        </C.Main>
    );
}

export default Login;
