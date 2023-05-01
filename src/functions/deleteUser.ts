import axiosInstance from "../api/apiPonto";

const deleteUser = async (id:number) => { 
    try {           
        let response = await axiosInstance.delete(`/user/${id}`);
        
        return response.data;    
        
    } catch (e:any) {
        return false;
    }
};

export default deleteUser;
