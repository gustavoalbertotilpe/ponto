import { useEffect } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { InputType, Props } from '../../types/FormTypes';

import SaveIcon from '@mui/icons-material/Save';
import ArrowBackOutlinedIcon from '@mui/icons-material/ArrowBackOutlined';
import { Link } from 'react-router-dom';

const Form = ({ handleSend, data }: Props) => {

    useEffect(()=> {
        setValue("name", data?.name || "");
        setValue("email", data?.email || "");
        setValue("hour_entry", data?.hour_entry || "");
        setValue("hour_pause", data?.hour_pause || "");
        setValue("hour_return", data?.hour_return || "");
        setValue("hour_exit", data?.hour_exit || "");
        setValue("isAdmin", data?.isAdmin || "0");
    },[data]);

    const { register, handleSubmit, setValue, formState: { errors } } = useForm<InputType>();
    const onSubmit: SubmitHandler<InputType> = data => handleSend(data);

    return (
        <form onSubmit={handleSubmit(onSubmit)} className='w-full'>
            <div className='flex sm:block lg:flex gap-5'>
                <div className='flex-col w-full mb-3'>
                    <div className='xxl:text-lg text-ls font-medium'>
                        Nome
                    </div>
                    <div className='mt-1'>
                        {/* register your input into the hook by invoking the "register" function */}
                        <input 
                        {...register('name', { required: true })} 
                        className='w-full xxl:text-lg text-ls bg-input-bg rounded border-2 border-slate-400  p-2 sm:w-full'
                    />
                    {errors.name && <span>Este campo é requerido</span>}
                    </div>
                </div>

                <div className='flex-col w-full'>
                    <div className="xxl:text-lg text-ls font-medium">
                        Email
                    </div>
                    <div className='mt-1'>
                        {/* include validation with required or other standard HTML validation rules */}
                        <input {...register('email', { required: true })} 
                            className='w-full xxl:text-lg text-ls bg-input-bg rounded border-2 border-slate-400  p-2 sm:w-full'
                            type='email'
                        />
                        {/* errors will return when field validation fails  */}
                        {errors.email && <span>Este campo é requerido</span>}
                    </div>
                </div>

                <div className='flex-col w-full'>
                    <div className='xxl:text-lg text-ls font-medium'>
                        Senha
                    </div>
                    <div className='mt-1'>
                        {/* include validation with required or other standard HTML validation rules */}
                        <input {...register('password')} 
                            className='w-full xxl:text-lg text-ls bg-input-bg rounded border-2 border-slate-400  p-2 sm:w-full'
                        />
                        {/* errors will return when field validation fails  */}
                        {errors.password && <span>Este campo é requerido</span>}
                    </div>
                </div>
            </div>

            <div className='flex sm:block lg:flex gap-5'>
                <div className='flex-col w-full mb-3'>
                    <div className='xxl:text-lg text-ls font-medium'>
                        Entrada
                    </div>
                    <div className='mt-1'>
                        {/* register your input into the hook by invoking the "register" function */}
                        <select
                             {...register('hour_entry', { required: true })} 
                             className='w-full xxl:text-lg text-ls bg-input-bg rounded border-2 border-slate-400  p-2 sm:w-full'
                        >
                            <option value="">----</option>
                            <option value="07:00">07:00</option>
                            <option value="07:30">07:30</option>
                        </select>
                       
                    {errors.hour_entry && <span>Este campo é requerido</span>}
                    </div>
                </div>

                <div className='flex-col w-full'>
                    <div className='xxl:text-lg text-ls font-medium'>
                        Pausa
                    </div>
                    <div className='mt-1'>
                       {/* register your input into the hook by invoking the "register" function */}
                       <select
                             {...register('hour_pause', { required: true })} 
                             className='w-full xxl:text-lg text-ls bg-input-bg rounded border-2 border-slate-400  p-2 sm:w-full'
                        >
                            <option value="">----</option>
                            <option value="12:00">12:00</option>
                        </select>
                        {/* errors will return when field validation fails  */}
                        {errors.hour_pause && <span>Este campo é requerido</span>}
                    </div>
                </div>

                <div className='flex-col w-full'>
                    <div className="xxl:text-lg text-ls font-medium">
                        Retorno
                    </div>
                    <div className='mt-1'>
                        {/* register your input into the hook by invoking the "register" function */}
                        <select
                             {...register('hour_return', { required: true })} 
                             className='w-full xxl:text-lg text-ls bg-input-bg rounded border-2 border-slate-400  p-2 sm:w-full'
                        >
                            <option value="">----</option>
                            <option value="13:00">13:00</option>
                        </select>
                        {/* errors will return when field validation fails  */}
                        {errors.hour_return && <span>Este campo é requerido</span>}
                    </div>
                </div>

                <div className='flex-col w-full'>
                    <div className='xxl:text-lg text-ls font-medium'>
                        Saída
                    </div>
                    <div className='mt-1'>
                        {/* register your input into the hook by invoking the "register" function */}
                        <select
                             {...register('hour_exit', { required: true })} 
                             className='w-full xxl:text-lg text-ls bg-input-bg rounded border-2 border-slate-400  p-2 sm:w-full'
                        >
                            <option value="">----</option>
                            <option value="17:00">17:00</option>
                            <option value="17:30">17:30</option>
                        </select>
                        {/* errors will return when field validation fails  */}
                        {errors.hour_exit && <span>Este campo é requerido</span>}
                    </div>
                </div>
            </div>

            <div className='flex sm:block lg:flex gap-5'>
                <div className='flex-col w-full mb-3'>
                    <div className='xxl:text-lg text-ls font-medium'>
                        Adm?
                    </div>
                    <div className='mt-1'>
                        <select
                            {...register('isAdmin', { required: true })} 
                            className='w-full xxl:text-lg text-ls bg-input-bg rounded border-2 border-slate-400  p-2 sm:w-full'
                        >
                            <option value='1'>Sim</option>
                            <option selected value='0'>Não</option>
                        </select>
                    </div>
                </div>
            </div>
            
            <div className='flex-col w-full'>
                <div className='flex justify-between w-full mb-3'>
                   <Link to='/' 
                      className='border-slate-400 rounded-lg w-24 transition-all delay-75 hover:bg-violet-900 bg-violet-800 text-white cursor-pointer mt-4 p-2' 
                    >
                        <div className='flex align-center gap-2'>
                            <ArrowBackOutlinedIcon/>
                            Voltar
                        </div>
                    </Link>

                    <button 
                      className='border-slate-400 rounded-lg w-24 transition-all delay-75 hover:bg-violet-900 bg-violet-800 text-white cursor-pointer mt-4 p-2' 
                      type='submit' 
                    >
                        <div className='flex align-center gap-2'>
                            <SaveIcon/>
                            Salvar
                        </div>
                    </button>
                </div>
            </div>
        </form>
    );
}


export default Form;
