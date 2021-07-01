import React, { useState } from "react";
import "./SignupForm.css";



function SignupForm () {

    const [values, setValues] = useState({
        fullname: " ",
        email: " ",
        password: " "
    });
    const handleFormSubmit = (event) => {
        event.preventDefault();
    }
    return (
        <div className="container">
            <div className="app-wrapper">
                <div className="title">
                    <h2>React Form</h2>
                </div>
                <div className="form-wrapper">
                    <label htmlFor="" className="name">
                        Full Name:
                    </label>
                    <input type="text" name="fullname" value={values.fullname} />
                    
                </div>

                <div className="form-wrapper">
                    <label htmlFor="" className="name-1">
                        Your Email:
                    </label>
                    <input type="email" name="email" value={values.email} />
                </div>
                <div className="form-wrapper">
                    <label htmlFor="" className="name">
                        Password:
                    </label>
                    <input type="password" name="password" value={values.password} />
                </div>
                <button className="btn" onClick={handleFormSubmit}><a href="#">Sign Up</a></button>
            </div>
        </div>
    );
}

export default SignupForm;
