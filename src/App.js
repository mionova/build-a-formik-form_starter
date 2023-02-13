import React from "react";
// TODO: import useFormik from formik library
import {useFormik} from 'formik'

function App() {
  const formik = useFormik({
    initialValues: {
      email: '',
      password: ''      
    },
    onSubmit: values =>{
      console.log('form:',values);
    },
    validate: values =>{
      let errors = {};
      if(!values.email) errors.email = 'Field Required';
      if(!values.password) errors.password = 'Field Required';
      return errors;
    }
  });
  
  return (
    <div>
      <form onSubmit={formik.handleSubmit}><div>Email:</div>
        <input type="text" name="email" onChange={formik.handleChange} value={formik.values.email}/>
        {formik.errors.email ? <div style={{color:'red'}}>{formik.errors.email}</div> : null}        
        <div>Password:</div>
        <input type="text" name="password" onChange={formik.handleChange} value={formik.values.password}/><br/>
        {formik.errors.password ? <div style={{color:'red'}}>{formik.errors.password}</div> : null}                
        <button type="submit">Submit</button>
      </form>      
    </div>
  );
}

export default App;