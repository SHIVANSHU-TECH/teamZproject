import React from "react";
import ReactDOM from 'react-dom/client';
import "../login/login.css";
import blank from "../login/blank.jpeg"

const login=() =>{
    return(
        <>
          <section className="login">
            <div className="Container">
                <div className="signin-content">
                  <div className="signin-form">
                  <img  class="profile" src={blank} /> <br/>
                    <h2 className="Form-title">Login to finno</h2><br/>
                    <form className="login-form" id="login-form">
                        <div className="form-group">
                            <h4 className="heading">Email</h4>
                            <label htmlFor="email">
                            <i class="zmdi zmdi-email material-icons-name"></i>
                            </label>
                            <input type="email" name="email" id="email" autoComplete="off" placeholder="enter Your email"
                                />
                        </div>
                        <div className="form-group">
                        <h4 className="heading">password</h4>
                            <label htmlFor="password">
                            <i class="zmdi zmdi-lock material-icons-name"></i>
                            </label>
                            <input type="password" name="password" id="password" autoComplete="off" placeholder=" Enter Your password"
                                />
                        </div>
                        <div >
                        <button type="button" class="custom-btn btn">Sign In</button>
                        </div> 
                        <div className="sxt">
                          <h5>Don't have an account?</h5>
                        </div>
                        <div >
                       
                        <button type="button" class="custom-btn btn">Sign Up</button>
                          <hr />
                        </div>
                        <div className="login_icons">
                          
                        </div>
                    </form>
                  </div>
                </div>
            </div>
          </section>

        </>
    )
}
  
export default login;