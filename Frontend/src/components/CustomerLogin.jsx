import axios from "axios";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import loginvalidation from "../loginvalidation";

function CustomerLogin() {
    const dispatch = useDispatch();

    const [user, setUser] = useState({
        "userid": "",
        "pwd": ""
    });
    const [errors, setErrors] = useState({});
    const [submitted, setSubmitted] = useState(false);
    const history = useHistory();

    const handleInput = (e) => {
        setUser({ ...user, [e.target.name]: e.target.value });
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        setErrors(loginvalidation(user));
        setSubmitted(true);
    }

    useEffect(() => {
        if (Object.keys(errors).length === 0 && submitted) {
            axios.post("http://localhost:9090/api/customers/validate", user)
                .then(resp => {
                    let result = resp.data.data;
                    sessionStorage.setItem("userid", result.id);
                    sessionStorage.setItem("uname", result.name);
                    sessionStorage.setItem("role", "Customer");
                    sessionStorage.setItem("id", result.id);
                    dispatch({ type: 'IsLoggedIn' });
                    history.push("/");
                })
                .catch(error => {
                    console.log("Error", error);
                    alert("Invalid username or password");
                });
        }
    }, [errors]);

    return (
        <div className="" style={{ backgroundImage: `url("https://images.pexels.com/photos/869258/pexels-photo-869258.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1")`, backgroundSize: "cover" }}>
            <div className="col-sm-6 mx-auto" style={{ height: "563px" }}>
                <h4 className="text-center p-4" style={{ color: "black" }}>Customer Login </h4>
                <form onSubmit={handleSubmit}>
                    <div className="form-group form-row">
                        <label className="col-sm-8 form-control-label font-weight-bold">Email Id</label>
                        <div className="col-sm-10">
                            <input type="text float-right" name="userid" placeholder="Enter your email" value={user.userid} onChange={handleInput} className="form-control" />
                            {errors.userid && <small className="text-danger float-right">{errors.userid}</small>}
                        </div>
                    </div>
                    <div className="form-group form-row">
                        <label className="col-sm-8 form-control-label font-weight-bold">Password</label>
                        <div className="col-sm-10">
                            <input type="password" name="pwd" placeholder="Password" value={user.pwd} onChange={handleInput} className="form-control" />
                            {errors.pwd && <small className="text-danger float-right">{errors.pwd}</small>}
                        </div>
                    </div>
                    <button className="btn btn-primary float-right mt-3" style={{ marginRight:"340px" }}>Login Now</button>
                </form>
            </div>
        </div>
    );
}

export default CustomerLogin;
