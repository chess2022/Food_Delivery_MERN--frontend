import { useState } from "react";
import UserDetails from "../components/UserDetails";
import PersonalDetails from "../components/PaymentDetails";
import PaymentDetails from "../components/PaymentDetails";

export default function Signup() {
  //state to hold formData
  const [form, setForm] = useState({

    step: 1,
    userName: "",
    password: "",
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    state: "",
    zip: "",
    payment: [
      {
        type: "",
        cardNumber: "",
        expiration: "",
        cvv: "",
        nickname: "",
      }]
    })

  //handleChange function for form
  const handleChange = (event) => {
    setForm((form) => ({
      ...form,
      [event.target.userName]: event.target.value,
    }));
  };


  // proceed to the next step
  nextStep = () => {
    const { step } = this.state;
    this.setState({ step: step + 1 });
  };

  // handle field change
  handleChange = (input) => (e) => {
    this.setState({ [input]: e.target.value });
  };

  return() => {
    const { step } = this.state
    const { userName, password, firstName, lastName, email, phone, address, city, state, zip, payment } = this.state
    const values = { userName, password, firstName, lastName, email, phone, address, city, state, zip, payment }

    switch(step) {
      case 1:
        return (
          <UserDetails
            nextStep={ this.nextStep }
            handleChange={ this.handleChange }
            values={ values }
          />
        )
      case 2:
        return (
          <PersonalDetails
            nextStep={ this.nextStep }
            handleChange={ this.handleChange }
            value={ values }
          />
        )
      case 3: 
        return (
          <PaymentDetails
            nextStep={ this.nextStep }
            handleChange={ this.handleChange }
            value={ values }
          />
        )
      default:
        // do nothing
    }
  }
}


