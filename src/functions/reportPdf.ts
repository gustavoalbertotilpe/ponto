import axiosInstance from "../api/apiPonto";

const ReportPdf = async (id: number) => {
    try {
        const response = await axiosInstance.post(`/report/${id}`, {}, {
            responseType: 'blob' 
          });
          
          return response.data;
       
    } catch(e) {
        console.error(e);
    }
};

export default ReportPdf;
