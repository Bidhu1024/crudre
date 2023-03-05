import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react';

const Update = () => {
    const [id,setId] = useState(0);
    const [name,setName] = useState('');
    const [email,setEmail] = useState('');


    useEffect(()=>{
        setId(localStorage.getItem("id"))
        setName(localStorage.getItem("name"))
        setEmail(localStorage.getItem("email"))
    },[])
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
        //   onClick={}
        >
          Update
        </button>
      </form>
    </>
  )
}

export default Update