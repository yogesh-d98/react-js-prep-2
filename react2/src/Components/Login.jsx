import { useState } from "react";
import Counter from "./Counter";
import { Link } from "react-router-dom";


function Login() {
    const [pwd1, setPwd1] = useState("");
    const [pwd2, setPwd2] = useState("");
  
//   console.log(check,"check use context ")
    // console.log(data, 'data from home')
    const [pwdmatch, setPwdmatch] = useState(true);
    function handlePwd1Change(event) {
        setPwd1(event.target.value);
    };

    function handlePwd2Change(event) {
        setPwd2(event.target.value);
        if (pwd1 == event.target.value) {
            setPwdmatch(true)
        } else {
            setPwdmatch(false)
        }
    };
    function handlePasswordCheck(event) {
        console.log(event.target.value);
    }
    return (
        <>
            {/* <Counter value={data}/> props drilling */}
            {/* <Counter /> */}
            <div><Link to='/'>Home</Link></div>
            <div><Link to='/counter'>Counter</Link></div>
            <form className="my-5" style={{ width: "50%", margin: "auto" }}>
                <div className="form-group">
                    <label>Email address</label>
                    <input type="email" className="form-control" />
                </div>
                <div className="form-group">
                    <label >Password</label>
                    <input value={pwd1} onChange={handlePwd1Change} type="password" className="form-control" />
                </div>
                <div className="form-group">
                    <label >Re-enter Password</label>
                    <input value={pwd2} onChange={handlePwd2Change} type="password" className="form-control" />
                </div>
                <p>{!pwdmatch && "Password mismatch"}</p>
                <div className="form-group form-check">
                    <input onChange={handlePasswordCheck} type="checkbox" className="form-check-input" />
                    <label className="form-check-label" >I Agree T&C</label>
                </div>

                <button type="submit" className="btn btn-primary">Create Account</button>
            </form>
        </>
    )
};

export default Login;
