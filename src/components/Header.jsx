import { useState } from "react";

const Header = (props) => {
    const style = {
      color: 'orange'
    }
     return (
        <>
          <h1>Complete your Purchase</h1>
          <div className="form-nav">
              <div>
                <p>Personal Info</p>
              </div>
              <div>
                <p>Billing Info</p>
              </div>
              <div>
                <p>Confim Payment</p>
              </div>
          </div>
        </>
    )
  }
  
  export default Header