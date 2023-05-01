import ReportPdf from "../../../functions/reportPdf";

const generateReport = async (id: number) => {
    try {
        let response = await ReportPdf(id);
    
        const url = window.URL.createObjectURL(new Blob([response]));
        const link = document.createElement('a');
        link.href = url;
        link.setAttribute('download', 'relatorio.pdf'); // indica o nome do arquivo para download
        document.body.appendChild(link);
        link.click();
       
       
     } catch(e) {
    
     }
}

export default generateReport;
