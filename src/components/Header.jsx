const Header = (props) => {
let lineIndicator = {}

  if (props.step === 1) { 
     lineIndicator = {
      height: '7px',
      borderRadius: '30px',
      backgroundColor: 'orange',
      width: '25%',
      marginLeft: '0',
      marginTop: '-4px'
    } }
  
  if(props.step === 2) {
    lineIndicator = {
      height: '7px',
      borderRadius: '30px',
      backgroundColor: 'orange',
      width: '20%',
      marginLeft: '38%',
      marginTop: '-4px'
    }
  }
  if(props.step === 3) {
    lineIndicator = {
      height: '7px',
      borderRadius: '30px',
      backgroundColor: 'orange',
      width: '20%',
      marginLeft: '40%',
      marginTop: '-4px'
    }
  }
     return (
        <>
          <h1>Complete your Purchase</h1>
          <div className="form-nav">
              <div>
                <h4>Personal Info</h4> 
              </div>
              <div>
                <h4>Billing Info</h4>
              </div>
              <div>
                <h4>Confim Payment</h4>
              </div>
          </div>
          <div className="nav-line">
            <div style={lineIndicator}>
               
            </div>
          </div>
        </>
    )
  }
  
  export default Header