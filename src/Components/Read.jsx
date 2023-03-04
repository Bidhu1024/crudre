import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";

const Read = () => {
  const [data, setData] = useState([]);
  const getData = () => {
    axios
      .get("https://64033a83302b5d671c49f1d7.mockapi.io/practise")
      .then((res) => {
        console.log(res.data);
        setData(res.data)

      })
      .catch((err) => console.log(err));
  };
  useEffect(()=>{
    getData();
  },[])


  
  return (
    <>
      <h2>All Data</h2>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Name</th>
            <th scope="col">Email</th>
            <th scope="col"></th>
            <th scope="col"></th>
          </tr>
        </thead>
       
       {
        data.map((tabdata)=>{
            return (
                <tbody className="table-group-divider">
          <tr>
            <th scope="row">{tabdata.id}</th>
            <td>{tabdata.name}</td>
            <td>{tabdata.email}</td>
            <td>
              <button className="btn-success">Edit</button>
            </td>
            <td>
              <button className="btn-danger">Delete</button>
            </td>
          </tr>
        </tbody>
            )
        })
       }
      </table>
    </>
  );
};

export default Read;
