// export default function PersonalDetails({ nextStep, handleChange, values }) {
//   const Continue = (e) => {
//     e.preventDefault();
//     nextStep();
//   };
//   return (
//     <form className="form">
//     <div className="input-container">
//       <div className="subtitle">Next</div>
//       <input
//         type="text"
//         value={values.firstName}
//         name="firstName"
//         className="input ic2"
//         placeholder="first name"
//         onChange={handleChange("firstName")}
//       />
//       <input
//         type="text"
//         value={values.lastName}
//         name="lastName"
//         className="input ic2"
//         placeholder="last name"
//         onChange={handleChange("lastName")}
//       />
//       <input
//         type="text"
//         value={values.address}
//         name="address"
//         className="input ic2"
//         placeholder="street address"
//         onChange={handleChange("address")}
//       />
//       <input
//         type="text"
//         value={values.city}
//         name="city"
//         className="input ic2"
//         placeholder="city"
//         onChange={handleChange("city")}
//       />
//       <input
//         type="text"
//         value={values.state}
//         name="state"
//         className="input ic2"
//         placeholder="state"
//         onChange={handleChange("state")}
//       />
//       <input
//         type="number"
//         value={values.name}
//         name="name"
//         className="input ic2"
//         min="10000"
//         max="99999"
//         placeholder="zip"
//         onChange={handleChange("name")}
//       />
//       <input className="next" type="button" value="Next" onClick={Continue} />
//     </div>
//     </form>
//   );
// }

          