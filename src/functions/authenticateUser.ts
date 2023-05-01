import  axiosInstance  from "../api/apiPonto";
import { InputType } from "../types/LoginTypes";

export const authenticateUser = async (data:InputType) => {
    try {
        const response = await axiosInstance.post("/auth/login", data);
        return response.data;
    } catch (error) {
       return false;
    }
};

export default authenticateUser;
