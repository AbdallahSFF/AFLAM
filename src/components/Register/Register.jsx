import axios from 'axios'
import { useFormik } from 'formik'
import React, { useState } from 'react'

export default function Register() {
  let [error,setError]=useState([]);
  let formik = useFormik({
    initialValues: {
      email: "",
      name: "",
      password: "",
      cPassword: ""
    }, onSubmit: register
  });
  async function register(values) {
    let { data } = await axios.post(`https://lazy-blue-sockeye-gear.cyclic.app/api/v1/auth/signup`, values);
    if(data.message==="success"){
      console.log('registered');
    }else{
      setError(data.err[0]);
    }
    console.log(data);
    console.log(console.error());

  }
  return (
    <div className='container mt-5 pt-5'>
      <form className='w-50 m-auto text-center' onSubmit={formik.handleSubmit}>
    {
      error.map((err)=>{
        return <div className='alert alert-danger'>{err.message}</div>
      })
    }
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
          <input type="email" className="form-control" id="exampleInputEmail1" name="email" 
            value={formik.values.email} onChange={formik.handleChange} />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputName" className="form-label">Name</label>
          <input type="text" className="form-control" id="exampleInputName" name="name" value={formik.values.name} onChange={formik.handleChange} />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
          <input type="password" className="form-control" id="exampleInputPassword1" name="password" value={formik.values.password} onChange={formik.handleChange} />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword2" className="form-label">Confirm Password</label>
          <input type="password" className="form-control" id="exampleInputPassword2" name="cPassword" value={formik.values.cPassword} onChange={formik.handleChange} />
        </div>
        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
    </div>

  )
}
