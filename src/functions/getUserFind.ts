import axiosInstance  from "../api/apiPonto";

const getUserFind = async(id:number) => {
    try {
        let response = await axiosInstance.get(`/user/${id}`);

        return response.data;
    } catch(e) {
        return false;
    }
};

export default getUserFind;
