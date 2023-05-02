import React from 'react'
import { Link } from "react-router-dom";
import Navbar from './Navbar'

export default function Event() {
  return ( 
      <div>
        <Navbar/>
       
      <div style={{ display: "flex",alignItems:"center",background:"rgb(255,255,255)",height:"100%"}}>
          <div style={{ padding:"150px",background:"rgb(255,255,255)" }}>
              <h1 style={{ fontSize:"70px",color:"rgb(102,102,102)",fontWeight:"700",background:"rgb(255,255,255)"}}>Food not found </h1>
              <p style={{fontSize:"25px",}}>The page you are looking is not available.</p>
              <p style={{fontSize:"22px"}}>Try your search again or use the Go to Home button.</p>
            <Link to="/" state={{ backgroundColor: "white" }}><button style={{ background: "rgb(241,89,49)",borderRadius:"3px", marginTop: "20px", width: "220px",height:"41px",textAlign:"center",fontWeight:"bold",color:"white"}}>Go to Home</button></Link>
          </div>
          <div style={{marginLeft:"100px",marginTop:"50px"}}>
              <img src="https://im1.dineout.co.in/images/uploads/misc/2020/Sep/21/404_jump_animation_-resize.gif" alt="" />
          </div>
    </div>
    </div>
  )
}
