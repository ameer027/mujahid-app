import React, { Component } from 'react';
import Circle from './Circle'

 class PaymentMethod1 extends Component {
    render() {
        return (
            <div className="payment">
            <div className="payment1">
            
            <form>
                
                
                    <p className="paymentmethod"><b>Your Payment Method</b></p>
                    <div className="center-circle">
                    
                    <span className="center-circle">

                    <div><Circle/></div>
                    <div><Circle/></div>
                    <div><Circle/></div>
                    </span>
                    <p className="cardno">2468</p>
                    </div>
                    
                    <p className="ownercard">Owner Name</p>
                    <p className="Owner">John Doe</p>
                            
            </form>
            </div>
            </div>
                
        );
    }
}



export default PaymentMethod1