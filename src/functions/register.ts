import axiosInstance from "../api/apiPonto";

export const register = async  () => {
    try {
        let response = await axiosInstance.post('/register');
        return response.data;

    } catch(e) {
        return false;
    }
};

export default register;
