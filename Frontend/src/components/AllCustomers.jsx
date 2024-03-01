import axios from "axios";
import { useEffect, useState } from "react";

function AllCustomers() {
    const [customers, setCustomers] = useState([])
    useEffect(() => {
        axios.get("http://localhost:9090/api/customers")
            .then(resp => {
                setCustomers(resp.data.data)
                console.log(customers)
            })
    }, [])

    return (


        <div className="" style={{ backgroundImage: `url("https://images.unsplash.com/photo-1520208422220-d12a3c588e6c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80")`, backgroundSize: "cover" }}>

            <div className="col" style={{ height: "563px" }}>
                <h1 className="p-2 text-center text-uppercase">All Customers</h1>

                <table className="table table-warning table-striped table-hover">
                    <thead className="table-dark">
                        <tr>
                            <th className="text-center">Sr. No.</th>
                            <th className="text-center">Name</th>
                            <th className="text-center">City</th>
                            <th className="text-center">Gender</th>
                            <th className="text-center">Phone</th>
                            <th className="text-center">User Id</th>
                            {/* <th>Password</th> */}
                        </tr>
                    </thead>
                    <tbody>
                        {customers.map((x, index) => (
                            <tr key={x.id}>
                                <td className="text-center">{index + 1}</td>
                                <td className="text-center">{x.name}</td>
                                <td className="text-center">{x.city}</td>
                                <td className="text-center">{x.gender}</td>
                                <td className="text-center">{x.phone}</td>
                                <td className="text-center">{x.userid}</td>
                                {/* <td>{x.pwd}</td> */}
                            </tr>
                        ))}

                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default AllCustomers;