import { Props, PropsBtn} from '../../types/LayoutTypes';
import * as C from './styles';

export const AreaRight = ({ children }: Props) => {
    return(
        <C.AreaRight>
            { children }
        </C.AreaRight>
    )
} 

export const Main = ({ children }: Props) => {
    return(
        <C.Main>
            { children }
        </C.Main>
    )
} 

export const Content = ({ children }: Props) => {
    return(
        <C.Content>
            { children }
        </C.Content>
    )
} 

export const Btn = ({ title, handleClick }: PropsBtn) => {
    return (
        <button onClick={handleClick} className='border-2 border-slate-400 transition-all delay-75 hover:bg-cyan-600 bg-sky-400 text-white cursor-pointer  p-2'>{ title }</button>
    )
}
