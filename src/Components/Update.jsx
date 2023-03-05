import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react';
import  axios  from 'axios';
import { useNavigate } from 'react-router-dom';

const Update = () => {
    const [id,setId] = useState(0);
    const [name,setName] = useState('');
    const [email,setEmail] = useState('');
const nav = useNavigate()

    useEffect(()=>{
        setId(localStorage.getItem("id"))
        setName(localStorage.getItem("name"))
        setEmail(localStorage.getItem("email"))
    },[])
    const handleUpdate = (e)=>{
      e.preventDefault()
      axios.put(`https://64033a83302b5d671c49f1d7.mockapi.io/practise/${id}`,
      {
        name:name,
        email:email,
      }
      ).then(()=>{
        nav('/read')
      })
    }
  return (
    <>
        <form>
        <div className="mb-3">
          <div className="mb-3">
            <label htmlFor="exampleInputPassword1" className="form-label">
              Name
            </label>
            <input
              type="text"
              className="form-control"
              id="exampleInputPassword1"
               value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <label htmlFor="exampleInputEmail1" className="form-label">
            Email address
          </label>
          <input
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
             value={email}
           onChange={(e) => setEmail(e.target.value)}
           />
          <div id="emailHelp" className="form-text">
            We'll never share your email with anyone else.
          </div>
        </div>

        {/* <div className="mb-3 form-check">
          <input
            type="checkbox"
            className="form-check-input"
            id="exampleCheck1"
          />
          <label className="form-check-label" for="exampleCheck1">
            Check me out
          </label>
        </div> */}
        <button
          type="submit"
          className="btn btn-primary"
         onClick={handleUpdate}
        >
          Update
        </button>
      </form>
    </>
  )
}

export default Update