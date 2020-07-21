import React, { Component } from 'react';

 class Login extends Component {
    render() {
        return (
            <div className="auth-wrapper">
            <div className="auth-inner">
            <form >
                <h3>Sign In</h3>

                <div className="form-group" >
                    <label>Email address  <span className="asterick">*</span></label>
                    
                    <input type="email" className="form-control  " placeholder="Username" />
                    
                </div>

                <div className="form-group ">
                    <label>Password <span className="asterick">*</span></label>
                    <input type="password" className="form-control" placeholder="Password" />
                </div>

                <p className="forgot-password">
                    Forgot <a href="#">password?</a>
                </p>

                <button type="submit" className="btn-block btn-special">Submit</button>

                <p className="already-registered ">
                    Don't have an account? <a href="/sign-up">SignUp</a>
                </p>
                
            </form>
            </div>
            </div>
        );
    }
}



export default Login