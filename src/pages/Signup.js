import { useState } from "react";
import { Link } from "react-router-dom";

export default function Signup({ users, createUsers }) {
  //state to hold formData
  const [form, setForm] = useState({
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

  //handle submit function for form
  const handleSubmit = (event) => {
    event.preventDefault();
    createUsers(form);
    setForm({
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
    });
  };

//   const loaded = () => {
//     return users.map((user) => (
//       <div key={user._id} className="person">
//         <Link to={`/user/${user._id}`}>
//           <h1>Hello, {user.userName}!</h1>
//         </Link>
//       </div>
//     ));
//   };

//   const loading = () => <h1>Loading...</h1>;

  return (
    <section>
      <form className="form" onSubmit={handleSubmit}>
        <div className="title">Welcome!</div>
        <div className="subtitle">Let's create your account!</div>
        <div className="input-container ic1" id="div1">
          <input
            type="text"
            value={form.userName}
            name="userName"
            className="input ic2"
            placeholder="username"
            onChange={handleChange}
          />
          <input
            type="password"
            value={form.password}
            name="password"
            className="input ic2"
            placeholder="password"
            onChange={handleChange}
          />
          <input
            type="email"
            value={form.email}
            name="email"
            className="input ic2"
            placeholder="email"
            onChange={handleChange}
          />
          <input
            type="tel"
            value={form.phone}
            name="phone"
            className="input ic2"
            pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
            placeholder="phone"
            onChange={handleChange}
          />
          <input className="next" type="button" value="Next" />
        </div>
        <div className="input-container" id="div2">
          <div className="subtitle">Next</div>
          <input
            type="text"
            value={form.firstName}
            name="firstName"
            className="input ic2"
            placeholder="first name"
            onChange={handleChange}
          />
          <input
            type="text"
            value={form.lastName}
            name="lastName"
            className="input ic2"
            placeholder="last name"
            onChange={handleChange}
          />
          <input
            type="text"
            value={form.address}
            name="address"
            className="input ic2"
            placeholder="street address"
            onChange={handleChange}
          />
          <input
            type="text"
            value={form.city}
            name="city"
            className="input ic2"
            placeholder="city"
            onChange={handleChange}
          />
          <input
            type="text"
            value={form.state}
            name="state"
            className="input ic2"
            placeholder="state"
            onChange={handleChange}
          />
          <input
            type="number"
            value={form.name}
            name="name"
            className="input ic2"
            min="10000"
            max="99999"
            placeholder="zip"
            onChange={handleChange}
          />
          <input className="payment" type="button" value="Add Payment Info" />
          <input className="submit" type="submit" value="Skip Payment and Create Account" />
        </div>
        <div className="input-container" id="div3">
          <div className="subtitle">Optional: add your payment details</div>
          <input
            type="text"
            value={form.payment.type}
            name="type"
            className="input ic2"
            placeholder="payment type"
            onChange={handleChange}
          />
          <input
            type="number"
            value={form.payment.cardNumber}
            name="cardNumber"
            className="input ic2"
            placeholder="card number"
            onChange={handleChange}
          />
          <input
            type="date"
            value={form.payment.expiration}
            name="expiration"
            className="input ic2"
            placeholder="expiration date"
            onChange={handleChange}
          />
          <input
            type="number"
            value={form.payment.cvv}
            name="cvv"
            className="input ic2"
            max="9999"
            placeholder="cvv"
            onChange={handleChange}
          />
          <input
            type="text"
            value={form.payment.nickname}
            name="nickname"
            className="input ic2"
            placeholder="nickname"
            onChange={handleChange}
          />
          <input
            className="submit"
            type="submit"
            value="Create Account"
          />
        </div>
      </form>
      {/* {users ? loaded() : loading()} */}
    </section>
  );
}
