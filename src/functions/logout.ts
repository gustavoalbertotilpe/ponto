import axiosInstance from "../api/apiPonto";

export const Logout = async  () => {
    try {
        let response = await axiosInstance.post('/auth/logout');
        return response.data;

    } catch(e) {
        return false;
    }
};

export default Logout;
