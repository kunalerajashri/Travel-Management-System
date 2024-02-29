import React from "react";
import video2 from "../components/video2.mp4"


const Video = () =>{
    return(
        <div className="main bg-white">
        <video src={video2} autoPlay loop muted style={{ filter: 'blur(2px)' }} />

        <div className="content">
        <h1 style={{fontFamily:"Playfair Display",textAlign:"center",fontweight: "bold"}}>It's Time To Travel...</h1>
        </div>
        </div>
    )
}

export default Video