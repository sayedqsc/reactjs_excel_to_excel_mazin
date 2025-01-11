import './App.css';
import Table from './Table.js';
import Table2 from './Table2.js';
import Table3 from './Table3.js';

import { ExportCSV } from './ExportCSV';
import ImportCSV from './ImportCSV.js';
import ImportCSV2 from './ImportCSV2.js';
import { ExportReactCSV } from './ExportReactCSV';
import { useEffect, useState } from 'react';
import Button from '@material-ui/core/Button';


function App() {
  const [items3, setItems3] = useState([]);
  const [items2, setItems2] = useState([]);
  const [items1, setItems1] = useState([]);

  const [studList, setStudList] = useState([]);
  const [abcenseList, setAbcenseList] = useState([]);

  
  

 useEffect(() => {
  var arr = [...studList]; //copy array by value
  // arr.push(imageId)
  
 
  items1.map((row) =>{

    if(Object.entries(row).length>7 )
    {
      let phones7 = String(Object.entries(row)[7][1]).split(',')
      if (phones7 && phones7.length>0 )
      {
       phones7.map((phone)=>{
        phone.length>0 &&  arr.push({'col1':String(Object.entries(row)[0][1]),'col2':String(Object.entries(row)[1][1]),'col3':phone} )  

       })

      }
      
      let phones5 = String(Object.entries(row)[5][1]).split(',')
      if (phones5 && phones5.length>0 )
      {
       phones5.map((phone)=>{

        phone.length>0 &&  /^\d+$/.test(String(Object.entries(row)[0][1]))     &&   arr.push({'col1':String(Object.entries(row)[0][1]),'col2':String(Object.entries(row)[1][1]),'col3':phone} )  

       })

      }
      // arr.push({'col1':String(Object.entries(row)[0][1]),'col2':String(Object.entries(row)[1][1]),'col3':'phone'} )  


    }
              
        
           
 })


const uniqueArray = arr.filter((o, index, myarr) =>
  myarr.findIndex(item => JSON.stringify(item) === JSON.stringify(o)) === index
);
setStudList(uniqueArray) //override state with new values

 }, [items1])

 useEffect(() => {
  var arr = [...abcenseList]; //copy array by value
  // arr.push(imageId)
 
  items2.map((row) =>{

    if(Object.entries(row).length>9)
    {
      arr.push({
        'col1':String(Object.entries(row)[1][1]),
        'col2':String(Object.entries(row)[2][1]),
        'col3':String(Object.entries(row)[4][1]),
        'col4':String(Object.entries(row)[9][1]),
      } )  
      
      }

    })


const uniqueArray = arr.filter((o, index, myarr) =>
  myarr.findIndex(item => JSON.stringify(item) === JSON.stringify(o)) === index
);
setAbcenseList(uniqueArray) //override state with new values


 }, [items2])



 
 

 

  return (
    <div className="App">
      <h1 style={{ color: "blue", textAlign: "center" }}></h1>

      <ImportCSV items={items1}  setItems={setItems1}/>
      {items1.length > 0 && <Table data={studList}    />}
      {items1.length>0 && (
        <>
           <ImportCSV2 items={items2}  setItems={setItems2}/>
            {items2.length > 0 && <Table data={abcenseList} />}
        </>
      )}
      
      {abcenseList.length > 0 && <ExportCSV studList ={studList}   abcenseList ={abcenseList}  />}

    </div>
  );
};

export default App;


