import axiosInstance from "../api/apiPonto";

const getAll = async (currentPage?:number, search?:string) => { 
    try {           
        let response = await axiosInstance.get(`/user?q=${search}&page=${currentPage}`);
        
        return response.data;    
        
    } catch (e:any) {
        return false;
    }
};

export default getAll;
