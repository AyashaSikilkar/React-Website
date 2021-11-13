import React,{useState} from "react";
import { PageHeader, Menu, Dropdown, Button, Tag, Typography, Row } from "antd";
import "./Home.css";
import { useNavigate } from "react-router-dom";

import { Upload } from "antd";
import { UploadOutlined } from "@ant-design/icons";
const AddDocument = () => {
   const [fileList, setFileList] = useState(undefined);
   
   const [name,setName] = useState("");
   const [doctor,setDoctor] = useState("");
   const [date,setDate] = useState("");
   const userId=window.location.href.split("/")[4];
       const navigate = useNavigate();
    const onSubmit = async(e) => {
        e.preventDefault();
       const filesBase64 = fileList && fileList.map((e) => e.base64);
       const files =
         filesBase64 && `[${filesBase64.map((e) => `'${e}'`).join(",")}]`;
         console.log(userId);
        const response = await fetch("http://localhost:5000/api/api/task/document", {method: "POST",body: JSON.stringify({name,doctor,date,data:files,userid:userId}),headers: {'Content-Type': 'application/json'}});
        const data = await response.json();
        console.log(data);
        if(response.status===200){
         navigate(`/view/${userId}`)
        }
        
    }
    const handleFileChange = ({ file, fileList }) => {
      if (file.status !== "uploading") {
        fileList.forEach(function (file, index) {
          let reader = new FileReader();
          reader.onload = (e) => {
            file.base64 = e.target.result;
          };
          reader.readAsDataURL(file.originFileObj);
        });
        setFileList(fileList);
      }
    };
    return (
      <div>
        <div className="site-page-header-ghost-wrapper">
          <PageHeader
            ghost={false}
            onBack={() => window.history.back()}
            title="Add Document"
            subTitle="Add patient documents"
          ></PageHeader>
        </div>
        <form onSubmit={onSubmit} class="form__sign-in">
          <h2 class="form__title">Add Document</h2>
          <div class="form__input-field">
            <i class="fas fa-file"></i>
            <input type="text" placeholder="Document Name" onChange={e=>{setName(e.target.value)}} required />
          </div>
          <div class="form__input-field">
            <i class="fas fa-user"></i>
            <input type="text" placeholder="Doctor Name" onChange={e=>{setDoctor(e.target.value)}} required />
          </div>
          <div class="form__input-field">
            <i class="fa fa-calendar"></i>
            <input type="text" placeholder="Date" onChange={e=>{setDate(e.target.value)}} required />
          </div>
          <Upload
            accept=".xlsx,.xls,image/*,.doc, .docx,.ppt, .pptx,.txt,.pdf"
            maxCount={1}
            fileList={fileList}
            onChange={handleFileChange}
          >
            <Button icon={<UploadOutlined />}>Upload</Button>
          </Upload>

          <input class="form__submit" type="submit" value="Save" />
        </form>
      </div>
    );
};

export default AddDocument;
