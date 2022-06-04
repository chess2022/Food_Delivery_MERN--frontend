import { Component } from "react";
import { signUp } from '../utilities/users-service';

export default class SignUpForm extends Component {
  state = {
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
      },
    ],
  };

  // The object passed to setState is merged with the current state object
  handleChange = (evt) => {
    this.setState({
      [evt.target.name]: evt.target.value,
      error: "",
    });
  };

  handleSubmit = async (evt) => {
    evt.preventDefault();
    try {
    const formData = {...this.state};
    delete formData.error;
    delete formData.confirm;    
    const user = await SignUpForm(formData)
    console.log(user)
    } catch {
    this.setState({ error: 'Sign Up Failed - Try Again' });
    }
  }

  render() {
    const disable = this.state.password !== this.state.confirm;
    return (
      <div className="form">
        <form
          className="input-container"
          autoComplete="off"
          onSubmit={this.handleSubmit}
        >
          <div className="title">Welcome!</div>
          <div className="subtitle">Let's create your account!</div>
          <input
            type="text"
            value={this.state.userName}
            name="userName"
            className="input ic1"
            placeholder="username"
            onChange={this.handleChange}
            required
          />
          <input
            type="password"
            value={this.state.password}
            name="password"
            className="input ic2"
            placeholder="password"
            onChange={this.handleChange}
            required
          />
          <input
            type="email"
            value={this.state.email}
            name="email"
            className="input ic2"
            placeholder="email"
            onChange={this.handleChange}
            required
          />
          <input
            type="tel"
            value={this.state.phone}
            name="phone"
            className="input ic2"
            pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
            placeholder="phone"
            onChange={this.handleChange}
            required
          />
          <input
            type="text"
            value={this.state.firstName}
            name="firstName"
            className="input ic2"
            placeholder="first name"
            onChange={this.handleChange}
            required
          />
          <input
            type="text"
            value={this.state.lastName}
            name="lastName"
            className="input ic2"
            placeholder="last name"
            onChange={this.handleChange}
            required
          />
          <input
            type="text"
            value={this.state.address}
            name="address"
            className="input ic2"
            placeholder="street address"
            onChange={this.handleChange}
            required
          />
          <input
            type="text"
            value={this.state.city}
            name="city"
            className="input ic2"
            placeholder="city"
            onChange={this.handleChange}
            required
          />
          <input
            type="text"
            value={this.state.state}
            name="state"
            className="input ic2"
            placeholder="state"
            onChange={this.handleChange}
            required
          />
          <input
            type="number"
            value={this.state.name}
            name="name"
            className="input ic2"
            min="10000"
            max="99999"
            placeholder="zip"
            onChange={this.handleChange}
            required
          />
          <input
            className="next"
            type="submit"
            value="Create Account"
            disabled={disable}
          />
        </form>
        <p className="error-message">{this.state.error}</p>
      </div>
    );
  }
}
