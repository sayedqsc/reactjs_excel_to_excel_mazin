import React, { useState } from "react";
import * as XLSX from "xlsx";
import Table2 from './Table2.js';
import Input from '@material-ui/core/Input';

function ImportCSV2( {items, setItems}) {
  


  const readExcel = (file) => {
    const promise = new Promise((resolve, reject) => {
      const fileReader = new FileReader();
      fileReader.readAsArrayBuffer(file);

      fileReader.onload = (e) => {
        const bufferArray = e.target.result;
        const wb = XLSX.read(bufferArray, { type: "buffer" });
        const wsname = wb.SheetNames[0];
        const ws = wb.Sheets[wsname];
        const data = XLSX.utils.sheet_to_json(ws);
        resolve(data);
      };

      fileReader.onerror = (error) => {
        reject(error);
      };
    });

    promise.then((data) => {
      setItems(data);
      // console.log("promise",data)
    });
  };

  return (
    <div>
      <h1 style={{ color: "blue", textAlign: "center" }}>حمل  تقرير_عدد_الغيابات_للطالب</h1>
      <Input
        type="file"
        className='input'
        onChange={(e) => {
          const file = e.target.files[0];
          setItems([])
          if(file.name.includes("غيابات"))
             readExcel(file);
      
        }}
      />
    </div>
  );
}

export default ImportCSV2;
