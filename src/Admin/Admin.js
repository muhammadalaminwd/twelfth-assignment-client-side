import React, { useState } from "react";

const Admin = () => {
  const [admin, setAdmin] = useState("");
  const [password, setPassword] = useState('');
   

  const setAdminHandler = () => {
    console.log(admin, password);
    fetch('https://enigmatic-sierra-69090.herokuapp.com/admin', {
        method: "POST",
        body: JSON.stringify({ email: admin, role: "admin", password }),
        headers: { "Content-Type": "application/json" },
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.insertedId) {
            alert("Make admin successfully!!!");
          }
        });
  };
  return (
    <div className="p-16">
    <div className="p-4">
    <input
        type="text"
        onChange={(e) => setAdmin(e.target.value)}
        className="form-control"
        placeholder="Enter admin email"
      />
      <input type="password" onChange={(e) => setPassword(e.target.value)} className="form-control" placeholder="Enter admin password" />
    </div>
      
      <div className="text-center p-8">
        <button className="btn btn-primary" onClick={setAdminHandler}>
          Admin Button
        </button>
      </div>
    </div>
  );
};

export default Admin;