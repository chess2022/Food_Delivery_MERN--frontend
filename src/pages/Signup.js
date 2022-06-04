import { useState } from "react";

export default function SignUpForm({ createUsers }) {
  //state to hold formData
  const [form, setForm] = useState({
  userName: "",
  password: "",
  email: "",
  phone: "",
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
      email: "",
      phone: "",
    });
  };


  return (
    <section>
      <form className="form" onSubmit={handleSubmit}>
        <div className="title">Welcome!</div>
        <div className="subtitle">Let's create your account</div>
        <div className="input-container ic1">
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
          <input
            className="submit"
            type="submit"
            value="Create Account"
          />
        </div>
      </form>
    </section>
  );
}