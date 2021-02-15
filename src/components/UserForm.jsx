import { useState } from 'react'

import FormPersonalInfo from './FormPersonalInfo'
import FormCardInfo from './FormCardInfo'
import FormBillingInfo from './FormBillingInfo'

const UserForm = () => {
   const initialState = {
        name: '',
        email: '',
        address1: '',
        address2: '',
        localGovt:'',
        state:'',
        nameOnCard:'',
        cardType: '',
        cardDetail:'',
        expiry: '',
        cvv: ''
    }

    const [state, setState] = useState(initialState)
    const [step, setStep] = useState(1)

    const nextStep = () => {
      setStep( prev => prev + 1 )
    }

    const prevStep = () => {
      setStep(prev => prev - 1 )
    }

    const handleChange = (e) => {
      setState({
          ...state,
          [e.target.name]: e.target.value
      })
    }

    const { name, email, address1, address2, localGovt, stat, nameOnCard, cardDetail, cardType, expiry, cvv } = state
    const values = { name, email, address1, address2, localGovt, stat, nameOnCard, cardDetail, cardType, expiry, cvv }

  switch (step) {
      case 1: 
        return (
            <FormPersonalInfo 
              nextStep={nextStep}
              handleChange={handleChange}
              values={values}
              step={step}
            />
        )
      case 2: 
        return (
          <FormCardInfo 
              nextStep={nextStep}
              prevStep={prevStep}
              handleChange={handleChange}
              values={values}
              step={step}
            />
        )
      case 3: 
        return (
          <FormBillingInfo step={step}/>
        )
  }
      
}

export default UserForm