export type Props = {
    item: {
        id: number;
        name: string;
        email: string;
        password: string;
        hour_entry: string;
        hour_pause: string;
        hour_return: string;
        hour_exit: string;
        isAdmin:  string;
       
    },
    
    handleClickDell(id: number):void;
    handleClickEdit(id: number):void;
    handleClickPDF(id: number):void;
}