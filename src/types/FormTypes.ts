export type InputType = {
    name: string;
    email: string;
    password: string;
    hour_entry: string;
    hour_pause: string;
    hour_return: string;
    hour_exit: string;
    isAdmin:  string;
}

export type Props = {
    handleSend: (data:InputType) => void;
    data?: InputType;
}