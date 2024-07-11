import React, { useState } from 'react'
import {useDispatch} from 'react-redux'
import { adduser } from '../slice/userslice'
import { fetchUserById , getuserdetail } from '../slice/userslice'
import './formstyle.css'
const Userdetails = () => {
    const dispatch = useDispatch()

    const [userdetail , setuserdetail] = useState({
        Name : "",
        email : "",
        phone : ""
    })
    const onChange = (e)=>
        {   
            e.preventDefault()
            const {name , value} = e.target
            setuserdetail( {...userdetail , [name]:value } )
        }
    const submithandler = (e)=>
        {
            e.preventDefault();
            // console.log("User Data: ", userdetail);
            dispatch(adduser(userdetail))
            dispatch(fetchUserById(userdetail))
            // dispatch(getuserdetail(userdetail))
        }
    return (
        <div className="form-container">
        <form onSubmit={submithandler} className="custom-form">
          <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">Email</label>
            <input type="email" name='email' value={userdetail.email} onChange={onChange} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
            <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
          </div>
          <div className="mb-3">
            <label htmlFor="text" className="form-label">UserName</label>
            <input type="text" name='Name' value={userdetail.Name} onChange={onChange} className="form-control" id="text" />
          </div>
          <div className="mb-3">
            <label htmlFor="phone" className="form-label">Phone</label>
            <input type="phone" name='phone' value={userdetail.phone} onChange={onChange} className="form-control" />
          </div>
          <button type="submit" className="btn btn-primary">Submit</button>
        </form>
      </div>
    )
}

export default Userdetails
