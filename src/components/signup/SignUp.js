import React from "react";
import ReactDOM from 'react-dom/client';
import "../signup/SignUp.css";
import blank from "../signup/blank.jpeg";

const SignUp=() =>{
    return(
        <>
          <section className="SignUp">
            <div className="Container">
                <div className="signup-content">
                  <div className="signup-form">
                  <img  className="profile" src={blank} /> 
                    <h2 className="Form-title">Sign Up for finno</h2>
                    <form className="register-form" id="register-form">
                        <div className="form-group">
                            <h6>Name</h6>
                            <label htmlFor="name">
                            <i class="zmdi zmdi-account zmdi-hc-2x material-icons-name"></i>
                            </label>
                            <input type="text" name="name" id="name" autoComplete="off" placeholder="Your name"
                                />
                        </div>
                        <div className="form-group">
                            <h6>Email</h6>
                            <label htmlFor="email">
                            <i class="zmdi zmdi-email zmdi-hc-2x material-icons-name"></i>
                            </label>
                            <input type="email" name="email" id="email" autoComplete="off" placeholder="Your email"
                                />
                        </div>
                        <div className="form-group">
                            <h6>Password</h6>
                            <label htmlFor="password">
                            <i class="zmdi zmdi-lock zmdi-hc-2x material-icons-name"></i>
                            </label>
                            <input type="password" name="password" id="password" autoComplete="off" placeholder="Your password"
                                />
                        </div>
                        <div className="form-button">
                        <input type="submit" name="signup" id="signup" className="form-submit"  value="create my account"/>
                        </div>
                        <div className="stxt">
                          <h5>Already have an account?</h5>
                        </div>
                        <div className="form-group form-button">
                        <input type="submit" name="signup" id="signup" className="form-submit"  value="login"/>
                        </div>
                        <div className="vstxt">
                          <h5>By creating an account,<br/>i agree to <span>terms of service</span> and <span>Privacy policy</span></h5>
                        </div>
                    </form>
                  </div>
                </div>
            </div>
          </section>

        </>
    )
}
  
export default SignUp;