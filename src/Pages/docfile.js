import React,{useEffect,useState} from 'react'
import { Card, Button } from 'antd';
const Docfile = ({data}) => {
     const [fileData, setFileData] = useState("");
        useEffect(() => {
            console.log(data.url);
     const getFileData = async() => {
         
       await fetch(`${data.url}`, {
         method: "GET",
       })
         .then((response) => response.text())
         .then((attachmentData) => {
           setFileData(attachmentData.split("'")[1]);
         });
        
     }; getFileData();},[])
    return (
      <div>
        <Card
          title={data.name}
          bordered={false}
          style={{ width: "100%", marginTop: "10px" }}>
           <a src="FILENAME.EXT" href={`${fileData}`} download><Button type="primary">Download</Button></a>
          <div style={{ float: "right" }}>
            <p style={{ fontSize: "14px" }}>{data.doctorname}</p>
            <p style={{ fontSize: "12px" }}>{data.date}</p>
          </div>
        </Card>
      </div>
    );
}

export default Docfile
