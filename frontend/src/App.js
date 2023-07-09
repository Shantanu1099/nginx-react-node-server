import React from 'react';
import './App.css';
import { useFormik } from 'formik';
import axios from "axios";

function App() {

  const formik = useFormik({
    initialValues: {
      firstName: '',
      lastName: '',
      email: '',
    },
    onSubmit: values => {
      axios.post("http://localhost:5000/signup", JSON.stringify({
        firstName: values.firstName,
        lastName: values.lastName,
        email: values.email,
      })).then((res) => {
        console.log(res.config.data, 'POPOPOPOPOPO');
      })
      alert(JSON.stringify(values, null, 2));
      console.log(JSON.stringify(values), 'valuesvalues');
    },
  });

  return (
    <div className="App">
      <header className="App-header">
      <form onSubmit={formik.handleSubmit}>
       <label htmlFor="firstName">First Name</label>
       <input
         id="firstName"
         name="firstName"
         type="text"
         onChange={formik.handleChange}
         value={formik.values.firstName}
       />
 
       <label htmlFor="lastName">Last Name</label>
       <input
         id="lastName"
         name="lastName"
         type="text"
         onChange={formik.handleChange}
         value={formik.values.lastName}
       />
 
       <label htmlFor="email">Email Address</label>
       <input
         id="email"
         name="email"
         type="email"
         onChange={formik.handleChange}
         value={formik.values.email}
       />
 
       <button type="submit">Submit</button>
     </form>

      </header>
    </div>
  );
}

export default App;
