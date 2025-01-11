import React from 'react'
import Button from 'react-bootstrap/Button';
import * as FileSaver from 'file-saver';
import * as XLSX from 'xlsx';

export const ExportCSV = ({ studList,abcenseList }) => {
    const fileType = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8';
    const fileExtension = '.xlsx';

    const getFileName = () => {
        let d = new Date();
        let dformat = [this.padLeft(d.getMonth() + 1),
        this.padLeft(d.getDate()),
        d.getFullYear()].join('') +
          '_' +
          [this.padLeft(d.getHours()),
          this.padLeft(d.getMinutes()),
          this.padLeft(d.getSeconds())].join('');
    
        console.log("getCurrentDate : ", dformat);
        return "mazin_" + dformat + ".csv";
      }
    const exportToCSV = (csvData, fileName) => {
        const ws = XLSX.utils.json_to_sheet(csvData);
        const wb = { Sheets: { 'data': ws }, SheetNames: ['data'] };
        const excelBuffer = XLSX.write(wb, { bookType: 'xlsx', type: 'array' });
        const data = new Blob([excelBuffer], { type: fileType });
        FileSaver.saveAs(data, fileName + fileExtension);
    }
    const handleClick = ()=>{
        var csvData = []; //copy array by value

        
        if (studList.length>0){
        
      
        
         studList.map((row) =>{
           let search = row.col1
           let phone = row.col3
      
      
           if(abcenseList.length>0){
       
      
           
           let myArr =[]
           myArr=abcenseList.filter(data => 
             String(data.col1).toLowerCase()==(String(search).toLowerCase())
           )
           myArr.length>0 && myArr.map((mydata)=>{
            let message = `السيد ولي أمر الطالب: حقل1 المقيد بالصف   حقل2، نفيدكم علماً بأن عدد أيام تغيُب نجلكم بدون عذر وصل إلى حقل3 يوما بتاريخ 
            لذا يرجى التكرم بالحضور الى المدرسة، حيث ان تجاوُز أيام غيابه 15 أيام بدون عذر مقبول يؤدي حرمانه من دخول جميع اختبارات منتصف الفصل الثاني.
            إدارة المدرسة مسيعيد.`
            
            message=message.replace('حقل1',mydata.col2);
            message=message.replace('حقل3',mydata.col4);

            csvData.push({
               'col1':String(mydata.col1),
               'col2':String(mydata.col2),
               'col3':String(mydata.col3),
               'col4':String(mydata.col4),

               'col5':String(phone),
               'col6':String(message)
            } 
            )  
       
           })
           
           
      
         
         }       
        })
        
         
       }

       const timestamp = Date.now(); // This would be the timestamp you want to format

      
       exportToCSV(csvData, String(timestamp))
       
       }
    

    return (
        <Button variant="warning" onClick={(e) => handleClick()}>تنزيل ملف اوريدو</Button>
    )
};