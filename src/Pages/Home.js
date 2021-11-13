import React,{useEffect} from 'react'
import { PageHeader, Menu, Dropdown, Button, Tag, Typography, Row } from "antd";
import "./Home.css"
import {useNavigate} from 'react-router-dom';
const Home = () => {
    const [educations, setEducations] = React.useState('education');
    const [email, setEmail] = React.useState('email');
    const [name, setName] = React.useState('name');
    const [hospital, setHospital] = React.useState('hospital');

     const navigate = useNavigate();
    const onSubmit=()=>{
        const id=localStorage.getItem("id");
        navigate('/update/'+id)
    }
    useEffect(()=>{
        const getData=async()=>{
            const id=localStorage.getItem("id");
            const response = await fetch(
              "http://localhost:5000/api/api/auth/doc/getuserdetail/" + id
            );
            const dd=await response.json();
            const data=dd.message;
            console.log(data)
            setName(data.name)
            setEmail(data.email)
            setHospital(data.hospital)
            setEducations(data.education)

        }
        getData();
    }  ,[])
    return (
      <div>
        <div className="site-page-header-ghost-wrapper">
          <PageHeader
            ghost={false}
            onBack={() => window.history.back()}
            title="Home"
            subTitle="Welcome here Doctor"
            extra={[
              <Button key="1" type="primary" onClick={onSubmit}>
                Edit Details
              </Button>,
            ]}
          ></PageHeader>
        </div>
        <div>
          <div class="data">
            <div class="card">
              <div class="content" style={{ marginTop: "20px" }}>
                <div class="avatar">
                  <img
                    src="https://thumbs.dreamstime.com/b/boy-girl-doctors-cartoon-characters-profession-s-costume-doctor-vector-illustration-male-female-doctors-cartoon-147440124.jpg"
                    alt="avatar"
                  />
                </div>
                <div class="details">
                  <div>
                    <h3>{name}</h3>
                  </div>
                  <div>
                    <ion-icon name="mail-outline"></ion-icon>
                    <span>{email}</span>
                  </div>
                  <div>
                    <ion-icon name="school"></ion-icon>
                    <span>{educations}</span>
                  </div>
                  
                </div>
              </div>
              <div class="footer" style={{ marginTop: "20px" }}>
                <h2>{hospital}</h2>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
}

export default Home
