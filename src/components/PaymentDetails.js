export default function PersonalDetails({ createUsers, handleChange, values }) {
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
  return (
    <form className="form" onSubmit={handleSubmit}>
      <div className="input-container">
        <div className="subtitle">Optional: add your payment details</div>
        <input
          type="text"
          value={values.payment.type}
          name="type"
          className="input ic2"
          placeholder="payment type"
          onChange={handleChange("payment.type")}
        />
        <input
          type="number"
          value={values.payment.cardNumber}
          name="cardNumber"
          className="input ic2"
          placeholder="card number"
          onChange={handleChange("payment.cardNumber")}
        />
        <input
          type="date"
          value={values.payment.expiration}
          name="expiration"
          className="input ic2"
          placeholder="expiration date"
          onChange={handleChange("payment.expiration")}
        />
        <input
          type="number"
          value={values.payment.cvv}
          name="cvv"
          className="input ic2"
          max="9999"
          placeholder="cvv"
          onChange={handleChange("payment.cvv")}
        />
        <input
          type="text"
          value={values.payment.nickname}
          name="nickname"
          className="input ic2"
          placeholder="nickname"
          onChange={handleChange("payment.nickname")}
        />
        <input className="next" type="button" value="Submit" onClick="submit" />
      </div>
    </form>
  );
}
