import { useState } from "react";
import swal from "sweetalert";

  async function loginUser(credentials) {
    return fetch(URL + "login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(credentials),
    }).then((data) => data.json());
  }

export default function Login() {

  const [username, setUserName] = useState();
  const [password, setPassword] = useState();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await loginUser({
      username,
      password,
    });
    if ("accessToken" in response) {
      swal("Success", response.message, "success", {
        buttons: false,
        timer: 2000,
      }).then((value) => {
        localStorage.setItem("accessToken", response["accessToken"]);
        localStorage.setItem("user", JSON.stringify(response["user"]));
        window.location.href = "/restaurants";
      });
    } else {
      swal("Failed", response.message, "error");
    }
  };

  return (
    <section>
      <form className="form" onSubmit={handleSubmit}>
        <div className="title">Welcome!</div>
        <div className="subtitle">Please log in to continue</div>
        <div className="input-container ic1">
          <input
            type="text"
            required
            name="userName"
            className="input ic2"
            placeholder="username"
            onChange={e => setUserName(e.target.value)}
          />
          <input
            type="password"
            required
            name="password"
            className="input ic2"
            placeholder="password"
            onChange={e => setPassword(e.target.value)}
          />
          <button className="submit" type="submit">Login</button>
        </div>
      </form>
    </section>
  );
}
