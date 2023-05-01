import axiosInstance from "../api/apiPonto";
import { InputType } from "../types/FormTypes";

const updateUser = async (id:number, data:InputType) => {
    try {
        let response = await axiosInstance.put(`/user/${id}`,data);
        return response.data;

    } catch(e:any) {
        return false;
    }
};

export default updateUser;
