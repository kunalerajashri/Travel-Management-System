import axios from "axios"
import { useState } from "react"

function AdminProfile(){
    const userid=sessionStorage.getItem("userid")
    const uname=sessionStorage.getItem("uname")
    const [user,setUser]=useState({
        "uname":uname,
        "userid":userid,
        "pwd":""        
    })

    const handleInput=(e)=>{
        setUser({...user,[e.target.name]:e.target.value})
    }

    const handleSubmit=(e)=>{
        e.preventDefault() 
        axios.post("http://localhost:9090/api/admin",user)
        .then(resp=>{
            console.log(resp)
            alert("Profile updated successfully")   
            sessionStorage.setItem("uname",user.uname)         
        })
        .catch(error=>console.log("Error",error))   
    }

    return (
        

        <div className="" style={{ backgroundImage: `url("https://p4.wallpaperbetter.com/wallpaper/1013/975/639/accomplishment-adult-adventure-backpacker-wallpaper-preview.jpg")`,backgroundSize:"cover"}}> 
        
        <div className="col-sm-6 mx-auto  " style={{ height:"600px", }}>
          <div className=" text-center p-4 font-weight-bold ">
          <h4  style={{color:"black",borderBottom:"2px solid green",width:"300px",margin:"auto",fontFamily:"Lora"}}>Admin Profile Page</h4>

                <br/>
                <h4 style={{fontFamily:"Lora",fontWeight:"900"}}>Welcome {user.uname}</h4>
            </div>
        </div>
        </div>
    )
}

export default AdminProfile;
