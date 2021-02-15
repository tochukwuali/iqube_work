import React from "react";
import Header from "./Header";

const FormBillingInfo = ({step}) => {
  const items = [
    {
      name: "Data science and usability",
      price: 50000.00,
    },
  ];
 console.log(step)
  return (
    <div>
      <Header step={step}/>
      <div className="billing-form-wrapper">
        <div className="billing-form">
          <div className="bill-header">
            <div className="bill-h-content">
              <div>
                <p>Item Name</p>
              </div>
              <div>
                <p>
                  <span>₦</span>Price
                </p>
              </div>
            </div>
          </div>
          <div className="bill-body">
            {items.map((item, i) => (
              <div className="bill-b-content-it" key={i}>
                <div>
                  <p>{item.name}</p>
                </div>
                <div>
                  <p>{item.price}</p>
                </div>
              </div>
            ))}

            <div className="bill-b-content-sh">
              <div>
                <p>Shipping </p>
              </div>
              <div>
                <p>0.00</p>
              </div>
            </div>
            <div className="div-line-wrap">
              <div className="div-line"></div>
            </div>
            <div className="total-wrapper">
                <div className="total-form">
                    <div className="total-content">
                        <div>
                            <p> Total </p>
                        </div>
                        <div className="total-price">
                            <p>50, 000.00</p>
                        </div>
                    </div>
                </div>
            </div>
          </div>
          <br />
          <div className="action-buttons">
            <div className="next">
              <button className="next-button">Pay</button>
            </div>

            <div className="cancel">
              <button className="cancel-button">Cancel Payment</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FormBillingInfo;
