import React, { Component } from "react";
import {Link} from 'react-router-dom';
class SignUp3 extends Component {
    render() {
        return (
            <form>
                <h3>Tell us more</h3>

                <div className="form-group">
                                
                    <input  type="text" className="form-control" placeholder="Age" />
                </div>

                <div className="form-group">
                
                    <input type="text" className="form-control" placeholder="Hobbies" />
                </div>

                <div className="form-group">
                
                    <input type="text" className="form-control" placeholder="Qualification" />
                 </div>

                <div className="form-group">
                
                    <input type="text" className="form-control" placeholder="Skills" />
                </div>
                <div className="form-group">
                
                    <input type="text" className="form-control" placeholder="Interests" />
                </div>

                <div className="form-group">
                
                    <input type="text" className="form-control" placeholder="Career" />
                </div>
                <Link to="/sign-up3">
                    <button className="btn-block btn-special ">Sign Up</button>
                </Link>
                <p className="skip-class">
                
                    Skip
                </p>
            </form>
        );
    }
}

export default SignUp3