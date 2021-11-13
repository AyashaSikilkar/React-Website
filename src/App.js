import logo from './logo.svg';
import './App.css';
import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./Pages/Home";
import Login from './Pages/Login';
import AddPatientInfo from './Pages/AddPatientInfo';
import UpdateDoctorInfo from './Pages/UpdateDoctorInfo';
import AddDocument from './Pages/AddDocument';
function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/add/:id" element={<AddDocument />} />
          <Route path="/view/:id" element={<AddPatientInfo />} />
          <Route path="/update/:id" element={<UpdateDoctorInfo />}></Route>
          <Route path="/home" element={<Home />}></Route>
          <Route path="/" element={<Login />}></Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
