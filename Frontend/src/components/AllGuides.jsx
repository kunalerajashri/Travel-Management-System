import axios from "axios";
import { useEffect, useState } from "react";

function AllGuides(){
    const [guides,setGuide]=useState([])
    useEffect(()=>{
        axios.get("http://localhost:9090/api/guide")
        .then(resp=>{
            //console.log(resp.data.data)
            setGuide(resp.data.data)
            console.log(guides)
        })
    },[])

    const deleteSeller=(id)=>{
        let response=window.confirm('Are you sure to delete this seller ?');
        if(response){
           console.log(id);
           axios.delete("http://localhost:9090/api/guide/"+id)
           .then(resp=>{
                axios.get("http://localhost:9090/api/guide")
                .then(resp=>{
                    //console.log(resp.data.data)
                    setGuide(resp.data.data)            
                })
           })
        }
    }
    
    return (
        <div className="bg-transparent  text-black" style={{  backgroundImage: `url("http://www.thewowstyle.com/wp-content/uploads/2015/02/the-river-in-valley-of-beautiful-mountains-hd-wallpaper-75015.jpg")`}}> 
        
        <div className="col" style={{ height:"563px" }}>

            <h1 className="p-2 text-center text-uppercase">All Guides</h1>

            <table className="table table-danger table-striped table-hover">
                <thead className="table-dark">
                    <tr>
                        <th className="text-center">Id</th>
                        <th className="text-center">Name</th>
                        <th className="text-center">City</th>
                        <th className="text-center">Phone</th>
                        <th className="text-center">User Id</th>
                        {/* <th>Password</th> */}
                       
                    </tr>
                </thead>
                <tbody>
                {guides.map(x=>(
                    <tr key={x.id}>
                        <td className="text-center">{x.id}</td>
                        <td className="text-center">{x.name}</td>
                        <td className="text-center">{x.city}</td>
                        <td className="text-center">{x.phone}</td>
                        <td className="text-center">{x.userid}</td>
                        {/* <td>{x.pwd}</td> */}
                        {/* <td><button onClick={(e)=>deleteSeller(x.id)} className="btn btn-danger btn-sm">Delete</button></td> */}
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
        </div>
    )
}

export default AllGuides;