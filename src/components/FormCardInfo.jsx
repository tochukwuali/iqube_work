import Header from "./Header";

const FormCardInfo = ({ handleChange, nextStep, step, values }) => {
  const forward = (e) => {
    e.preventDefault();
    nextStep();
  };
  console.log(step)
  return (
    <div>
      <Header step={step}/>
      <div className="c-info-wrapper">
        <div className="form">
          <div className="form-item">
            <label htmlFor="Name on Card">
              Name on Card <sup>*</sup>
            </label>
            <input
              type="text"
              name="nameOnCard"
              onChange={handleChange}
              value={values.nameOnCard}
              className="form-input"
            />
          </div>
          <div className="form-item">
            <label htmlFor="card Type">
              Card Type <sup>*</sup>
            </label>
            <select
              type="email"
              name="cardType"
              onChange={handleChange}
              value={values.cardType}
              className="form-input"
            >
              <option value="Visa">Visa</option>
            </select>
          </div>
          <div className="flex-input-3">
            <div className="cd-1">
              <label htmlFor="Card Details">
                Card Details <sup>*</sup>
              </label>
              <input
                type="tel"
                name="cardDetails"
                onChange={handleChange}
                value={values.cardDetails}
                className="form-input"
                style={{ width: "90%" }}
              />
            </div>
            <div className="cd-2">
              <label htmlFor="Expiry Date">
                Expiry date <sup>*</sup>
              </label>
              <input
                type="tel"
                name="expiry"
                onChange={handleChange}
                value={values.expiry}
                className="form-input"
                placeholder="MM/YY"
                maxLength="4"
                pattern="\d*"
              />
            </div>
            <div className="cd-3">
              <label htmlFor="CVV">
                CVV <sup>*</sup>
              </label>
              <input
                type="text"
                name="cvv"
                onChange={handleChange}
                value={values.cvv}
                className="form-input"
              />
            </div>
          </div>{" "}
          <br />
          <div className="action-buttons">
            <div className="next">
              <button onClick={forward} className="next-button">
                Next
              </button>
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

export default FormCardInfo;
