import React,{useEffect} from "react";
import { PageHeader, Menu, Dropdown, Button, Tag, Typography, Row } from "antd";
import "./Home.css";
import { Avatar } from "antd";
import { Card } from "antd";
import Docfile from "./docfile";
import { useNavigate } from "react-router-dom";
const AddPatientInfo = () => {
  const userId = window.location.href.split("/")[4];
    const navigate = useNavigate();
    const [age, setAge] = React.useState("");
    const [gender,setGender]=React.useState("");
    const [name,setName]=React.useState("");
    const [blood,setBlood]=React.useState("");
    const [policy,setPolicy]=React.useState("");
    const [policyno,setPolicyno]=React.useState("");
    const [file,setFile]=React.useState([]);
    const onSubmit = () => {
      navigate(`/add/${userId}`);
    };
    useEffect(() => {
      const getUser = async () => {
        const response = await fetch(
          `http://localhost:5000/api/api/auth/getuserdetail/${userId}`
        );
        const dd = await response.json();
        const data=dd.message;
        
        setAge(data.age);
        setGender(data.gender);
        setBlood(data.blood);
        setPolicy(data.policy);
        setName(data.name);
        setPolicyno(data.policyno)
      };
      const getFile=async()=>{
        const response = await fetch(
          `http://localhost:5000/api/api/task/document/${userId}`
        );
        const dd = await response.json();
        const data = dd;
    
        setFile(data.data);
      }
      getFile();
      getUser();
    },[])
  return (
    <div>
      <div className="site-page-header-ghost-wrapper">
        <PageHeader
          ghost={false}
          onBack={() => window.history.back()}
          title="Patient Details"
          subTitle="view patient details"
          extra={[
            <Button key="1" type="primary" onClick={onSubmit}>
              Add document
            </Button>,
          ]}
        ></PageHeader>
      </div>
      <div style={{ display: "flex", flexDirection: "row" }}>
        <div
          style={{
            width: "50%",
            height: "90vh",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "#f0f2f5",
            flexDirection: "column",
          }}
        >
          <Avatar
            size={200}
            src="https://www.terrainhopperusa.com/wp-content/uploads/2019/01/avatar-man.png"
          />
          <h3 style={{ marginTop: "20px" }}>{name}</h3>
          
          <h3 style={{ marginTop: "20px" }}>Gender: {gender}</h3>
          <h3 style={{ marginTop: "20px" }}>Blood Group: {blood}</h3>
          <h3 style={{ marginTop: "20px" }}>Age: {age} Years</h3>
          <h3 style={{ marginTop: "20px" }}>Policy company: {policy}</h3>
          <h3 style={{ marginTop: "20px" }}>Policy Number: {policyno}</h3>
        </div>
        <div
          style={{
            width: "49%",
            height: "90vh",
            display: "flex",
              overflow: "scroll",
            alignItems: "center",
            marginLeft: "1%",
            backgroundColor: "#f0f2f5",
            flexDirection: "column",
          }}
        >
          <h2>Documents</h2>
          
          {file.map((item) =><div style={{width:"90%"}}> <Docfile data={item} /></div>)}
     
        </div>
      </div>
    </div>
  );
};

export default AddPatientInfo;
