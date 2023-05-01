import axiosInstance from "../api/apiPonto";
import { InputType } from "../types/FormTypes";

const createUser = async (data:InputType) => {
    try {
        let response = await axiosInstance.post('/user', data);
        return response.data;
    } catch(e: any) {
        return false;
    }
};

export default createUser;
