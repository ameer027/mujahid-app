import React, { Component } from "react";
import {Link} from 'react-router-dom'
class SignUp extends Component {
    render() {
        return (
            <form>
                <h3>Sign Up</h3>

                <div className="form-group">
                <span className="asterick">*</span>                
                    <input  type="email" className="form-control" placeholder="Email" />
                </div>

                <div className="form-group">
                <span className="asterick">*</span>
                    <input type="text" className="form-control" placeholder="Username" />
                </div>

                <div className="form-group">
                <span className="asterick">*</span>
                    <input type="password" className="form-control" placeholder="Password" />
                </div>

                <div className="form-group">
                <span className="asterick">*</span>
                    <input type="password" className="form-control" placeholder="Confirm Password" />
                </div>
                <div className="form-group">
                <span className="asterick">*</span>
                    <input type="text" className="form-control" placeholder="Address" />
                </div>

                <Link to='/sign-up3'>
                <button type="submit" className="btn-block btn-special">Next <a href="/sign-up3"></a></button>
                </Link>
                <p className="forgot-password text-center">
                    Have an account <a href="/sign-in">Sign in?</a>
                </p>
            </form>
        );
    }
}

export default SignUp