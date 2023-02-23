import React from 'react';
import { useFormik } from 'formik';
import {FormSchema} from './schemas/index'

const initialValues = {
    name: "",
    email: "",
    password: "",
    conform_password: "",
  };

const App = () => {

  const {values, errors, handleBlur, handleChange, handleSubmit} = useFormik({
    initialValues: initialValues,
    validationSchema: FormSchema,
    onSubmit: (values) => {console.log(values)},
  });

//   console.log(errors);

  return (
    <div className="form">
      <form action="" onSubmit={handleSubmit}>
        <div className="box">
          <label htmlFor="name">Name</label> {<span> {errors.name} </span>} <br />
          <input
            type="text"
            autoComplete='off'
            name="name"
            id="name"
            placeholder="Enter your name"
            value={values.name}
            onChange={handleChange}
            onBlur={handleBlur}
          />
        </div>
        
        <div className="box">
          <label htmlFor="email">Email</label> {<span> {errors.email} </span>}  <br />
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Enter your email"
            value={values.email}
            onChange={handleChange}
            onBlur={handleBlur}
          />
        </div>
        <div className="box">
          <label htmlFor="password">Password</label> {<span> {errors.password} </span>}  <br />
          <input
            type="password"
            name="password"
            id="password"
            placeholder="Enter your password"
            value={values.password}
            onChange={handleChange}
            onBlur={handleBlur}
          />
        </div>
        <div className="box">
          <label htmlFor="conform_password">Conform Password</label> {<span> {errors.conform_password} </span>}  <br />
          <input
            type="password"
            name="conform_password"
            id="conform_password"
            placeholder="Enter same password"
            value={values.conform_password}
            onChange={handleChange}
            onBlur={handleBlur}
          />
        </div>
        <br />
        <button type="submit">SUBMIT</button>
      </form>
    </div>
  );
};

export default App;
