import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import '../../css/login.css';


function Login(props) {
    const [show, setShow] = useState("show");
    const handleShow = (event) => {
        if (show == "show") {
            setShow("hide");
        } else {
            setShow("show");
        }
    };
    return (
        <div className="page-customer-account">
            <div className="container">
                <section id="content" className="page-content card card-block">

                    <section className="login-form">
                        <form id="login-form" >
                            <section>
                                <div className="form-group row ">
                                    <label className="col-md-3 form-control-label required">
                                        Email
                                    </label>
                                    <div className="col-md-6">
                                        <input
                                            className="form-control"
                                            name="email"
                                            type="email"
                                            required

                                        />
                                    </div>
                                </div>

                                <div className="form-group row ">
                                    <label className="col-md-3 form-control-label required">
                                        Password
                                    </label>
                                    <div className="col-md-6">
                                        <div className="input-group js-parent-focus">
                                            {show == "hide" ? (
                                                <input
                                                    className="form-control js-child-focus js-visible-password"
                                                    name="password"
                                                    type="text"
                                                    pattern=".{5,}"
                                                    required

                                                />
                                            ) : (
                                                <input
                                                    className="form-control js-child-focus js-visible-password"
                                                    name="password"
                                                    type="password"
                                                    pattern=".{5,}"
                                                    required

                                                />
                                            )}
                                            <span className="input-group-btn">
                                                <button
                                                    className="btn"
                                                    type="button"
                                                    data-action="show-password"
                                                    data-text-show="Show"
                                                    data-text-hide="Hide"
                                                    onClick={handleShow}
                                                >
                                                    {show}
                                                </button>
                                            </span>
                                        </div>
                                    </div>
                                </div>
                                <div className="forgot-password">
                                    <Link to={'/forgot-pass'}>Forgot your password?</Link>
                                </div>
                            </section>

                            <footer className="form-footer text-sm-center clearfix">
                                <button
                                    id="submit-login"
                                    className="btn btn-primary"
                                    data-link-action="sign-in"
                                    type="submit"
                                >
                                    Sign in
                                </button>

                            </footer>
                        </form>
                    </section>
                    <hr />
                    <div className="no-account">
                        <Link to="/create">No account? Create one here</Link>
                    </div>
                </section>
            </div>
        </div>
    );
}

export default Login;