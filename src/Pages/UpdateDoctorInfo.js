
import React,{useState} from "react";
import { PageHeader, Menu, Dropdown, Button, Tag, Typography, Row } from "antd";
import "./Home.css";
import { useNavigate } from "react-router-dom";
const UpdateDoctorInfo = () => {
    const navigate = useNavigate();
    const id=localStorage.getItem("id");
    const [hospital, setHospital] = useState('');
    const [education, setEducation] = useState('');
    const onSubmit = async(e) => {
        e.preventDefault();
        const response = await fetch(
          `http://localhost:5000/api/api/auth/doc/updateuser/`+id,
          { method: "put", body: JSON.stringify({ id, hospital, education }) ,headers: { "Content-Type": "application/json" } }
        );
            if(response.status===200){
        navigate("/home");
            }
    }
    return (
      <div>
        <div className="site-page-header-ghost-wrapper">
          <PageHeader
            ghost={false}
            onBack={() => window.history.back()}
            title="Edit Details"
            subTitle="Please Add your details doctor"
          ></PageHeader>
        </div>
        <form onSubmit={onSubmit} class="form__sign-in">
          <h2 class="form__title">Edit Details</h2>
          <div class="form__input-field">
            <i class="fas fa-hospital"></i>
            <input
              type="text"
              placeholder="Hospital"
              onChange={(e) => setHospital(e.target.value)}
               required
            />
          </div>
          <div class="form__input-field">
            <i class="fas fa-school"></i>
            <input
              type="text"
              placeholder="Add Education"
              onChange={(e) => setEducation(e.target.value)}
              required
            />
          </div>

          <input class="form__submit" type="submit" value="Save" />
        </form>
      </div>
    );
}

export default UpdateDoctorInfo
