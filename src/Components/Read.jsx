import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Read = () => {
  const [data, setData] = useState([]);
  const getData = () => {
    axios
      .get("https://64033a83302b5d671c49f1d7.mockapi.io/practise")
      .then((res) => {
        console.log(res.data);
        setData(res.data);
      })
      .catch((err) => console.log(err));
  };
const localStorageF = (id,name,email)=>{
localStorage.setItem("id", id)
localStorage.setItem("name", name)
localStorage.setItem("email", email)
}
  const handleDelete = (id) => {
    axios
      .delete(`https://64033a83302b5d671c49f1d7.mockapi.io/practise/${id}`)
      .then(() => {
        alert(`Row ${id} deleted`)
        getData();
        
      });
  };
  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      <h2>All Data</h2>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Name</th>
            <th scope="col">Email</th>
            <th scope="col">Edit</th>
            <th scope="col">Delete</th>
          </tr>
        </thead>

        {data.map((tabdata) => {
          return (
            <tbody className="table-group-divider">
              <tr>
                <th scope="row">{tabdata.id}</th>
                <td>{tabdata.name}</td>
                <td>{tabdata.email}</td>
                <td>
                <Link to="/update">
                  <button className="btn-success" onClick={()=>localStorageF(tabdata.id,tabdata.name,tabdata.email)}>Edit</button>
                  </Link>
                </td>
                <td>
                  <button
                    className="btn-danger"
                    onClick={() => handleDelete(tabdata.id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            </tbody>
          );
        })}
      </table>
    </>
  );
};

export default Read;
