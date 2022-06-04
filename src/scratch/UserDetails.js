// import { useForm } from "react-hook-form";

// export default function UserDetails(props) {
//   const { register, handleSubmit, errors } = useForm();

//   const onSubmit = (data) => {
//     console.log(data);
//     props.history.push('/second')
//     };
//   return (
//     <form className="form" onSubmit={handleSubmit(onSubmit)}>
//       <div className="input-container">
//         <input
//           type="text"
//           value={values.userName}
//           name="userName"
//           className="input ic2"
//           placeholder="Enter your username"
//           onChange={handleChange("userName")}
//         />
//         <input
//           type="password"
//           value={values.password}
//           name="password"
//           className="input ic2"
//           placeholder="password"
//           onChange={handleChange("password")}
//         />
//         <input
//           type="email"
//           value={values.email}
//           name="email"
//           className="input ic2"
//           placeholder="email"
//           onChange={handleChange("email")}
//         />
//         <input
//           type="tel"
//           value={values.phone}
//           name="phone"
//           className="input ic2"
//           pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
//           placeholder="phone"
//           onChange={handleChange("phone")}
//         />

//         <input className="next" type="button" value="Next" onClick={Continue} />
//       </div>
//     </form>
//   );
// }

