import { Props }  from '../../types/TableTypes';

import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import PictureAsPdfIcon from '@mui/icons-material/PictureAsPdf';

export const TR = ({ item, handleClickDell, handleClickEdit, handleClickPDF}: Props) => {
  
      return (
        <div className="flex items-center justify-between mb-5 p-2 Header_Header__2g8Ew">
            <div className="w-full">
                {item.name}
            </div>
            <div className="w-full">
                {item.email}
            </div>
            <div className="flex justify-end w-full">
                <button onClick={() => {handleClickPDF(item.id)}} title="Gerar relatorio PDF"><PictureAsPdfIcon/></button>
                <button onClick={() => {handleClickEdit(item.id)}} title="Editar usuário"><EditIcon/></button>
                <button onClick={() => {handleClickDell(item.id)}} title="Deletar usuário"><DeleteIcon/></button>
            </div>
        </div>
    );
}
