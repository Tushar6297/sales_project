import React, { useState } from 'react'
import { Link, useNavigate, } from 'react-router-dom'

export default function Login() {

    const [user, setUser] = useState();
    const [pass, setPass] = useState();

    let navigate = useNavigate();

    function handelSubmit() {

        if (user === "admin" && pass === "admin") {

            localStorage.setItem("username", user);
            localStorage.setItem("password", pass);
            navigate("/dashboard")
        } else {
            alert("Invalid Credential")
        }

    

    }
    return (
        <div className="App">
            <>

                <section className="vh-100">
                    <div className="container-fluid h-custom">
                        <div className="row d-flex justify-content-center align-items-center h-100">
                            <div className="col-md-9 col-lg-6 col-xl-5">
                                <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp"
                                    className="img-fluid" alt="Sample image" />
                            </div>
                            <div className="col-md-8 col-lg-6 col-xl-4 offset-xl-1">
                                <form>
                                <h2> Login Form</h2>
                                    {/* <!-- Email input --> */}
                                    <div className="form-outline mb-4">
                                        <input type="email" onChange={(e) => setUser(e.target.value)} className="form-control form-control-lg"
                                            placeholder="Enter a valid Username" />
                                     <label className="form-label" for="form3Example3">Enter Username</label>
                                    </div>

                                    {/* <!-- Password input --> */}
                                    <div className="form-outline mb-3">
                                        <input type="password" onChange={(e) => setPass(e.target.value)} className="form-control form-control-lg"
                                            placeholder="Enter password" />
                                        <label className="form-label" for="form3Example4">Password</label>
                                    </div>

                                    {/* <div className="d-flex justify-content-between align-items-center">
                                    <!-- Checkbox -->
                                    <div className="form-check mb-0">
                                        <input className="form-check-input me-2" type="checkbox" value="" id="form2Example3" />
                                        <label className="form-check-label" for="form2Example3">
                                            Remember me
                                        </label>
                                    </div>
                                    <a href="#!" className="text-body">Forgot password?</a>
                                </div> */}

                                    <div className="text-center text-lg-start mt-4 pt-2">
                                        <button type="button" className="btn btn-primary btn-lg"
                                            style={{ "padding-left": "2.5rem; padding-right: 2.5rem;" }} onClick={(e) => handelSubmit(e.target.value)}>Login</button>

                                    </div>

                                </form>
                            </div>
                        </div>
                    </div>
                    {/* <div
                    className="d-flex flex-column flex-md-row text-center text-md-start justify-content-between py-4 px-4 px-xl-5 bg-primary">
                    <!-- Copyright -->
                    <div className="text-white mb-3 mb-md-0">
                        Copyright © 2020. All rights reserved.
                    </div>
                    <!-- Copyright -->

                    <!-- Right -->
                    <div>
                        <a href="#!" className="text-white me-4">
                            <i className="fab fa-facebook-f"></i>
                        </a>
                        <a href="#!" className="text-white me-4">
                            <i className="fab fa-twitter"></i>
                        </a>
                        <a href="#!" className="text-white me-4">
                            <i className="fab fa-google"></i>
                        </a>
                        <a href="#!" className="text-white">
                            <i className="fab fa-linkedin-in"></i>
                        </a>
                    </div>
                    <!-- Right -->
                </div> */}
                </section>


            </>
        </div>
    )
}
