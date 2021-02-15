import Header from './Header'

const FormCardInfo = ({handleChange, nextStep, prevStep, values}) => {
    const forward = (e) => {
      e.preventDefault()
      nextStep()
    }
    const back = (e) => {
        e.preventDefault()
        prevStep()
      }
     return (
        <div>
          <Header />
          <div className="c-info-wrapper" >
          <div className="form-item">
            <label>Name on Card</label>
            <input type="text" name="nameOnCard" onChange={handleChange} value={values.nameOnCard} className="form-input"/>
          </div>
          <div className="form-item">
          <label>Card Type </label>
            <input type="email" name="cardType" onChange={handleChange} value={values.cardType} className="form-input"/>
          </div>
          
          <div className="flex-input-3">
            <div className="form-item">
              <label>Card Details </label>
              <input type="number" name="cardDetails" onChange={handleChange} value={values.cardDetails} className="card-input"/>
            </div>
            <div className="form-item">
              <label>Expiry Date </label>
              <input type="number" name="expiry" onChange={handleChange} value={values.expiry} className="card-input"/>
            </div>
            <div className="form-item">
              <label>CVV </label>
              <input type="text" name="cvv" onChange={handleChange} value={values.cvv} className="card-input"/>
            </div>
          </div> <br />

          <div className="action-buttons">
            <div className="next">
              <button onClick={forward} className="next-button">Next</button>
            </div>

            <div className="cancel">
              <button className="cancel-button">Cancel Payment</button>
            </div>
          </div>
          </div>
          
        </div>
    )
  }
  
  export default FormCardInfo
