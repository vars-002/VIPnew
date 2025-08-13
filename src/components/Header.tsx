import React from "react";
import image from "../assets/profileImg.png";
import Logo from "../assets/Logo.png";

const Header: React.FC = () => {
  return (
    <header
      style={{
        background: "#002D62",
        color: "white",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      
        <img src={Logo} alt=""
        style={{
          width: "220px",
          height: "100px",
        }}  />
      
      <h2>DASHBOARD</h2>
      <div style={{
          display: "flex",
          alignItems: "center",
          justifyContent:'center',
          gap:15,
        }} >
      <div
        style={{
          fontSize: "1rem",
          fontWeight: "bold",
        }}
      >
        <p>Name: Yogesh</p>
        <p>Enroll.No: 2001</p>
        
      </div>
      <img src={image} alt=""  style={{
          width: "70px",
          height: "70px",
          cursor: "pointer",
        }} />
        </div>
    </header>
  );
};

export default Header;
