import React, { useEffect, useState } from "react";
import axios from "axios";

function App() {
  const [users, setUsers] = useState([]); // State to hold user data

  useEffect(() => {
    // Fetch user data from the API
    axios
      .get("http://localhost:8080/api/users") // PHP backend URL
      .then((response) => {
        setUsers(response.data); // Set the fetched data
      })
      .catch((error) => {
        console.error("Error fetching users:", error);
      });
  }, []);

  return (
    <div className="container">
      <section className="title">
        <h1>Registered Users</h1>
        <span><a className="link" href="http://localhost:8080/register">Crate account</a></span>
      </section>
      
      <table>
        <thead>
          <tr>
            <th>Firstname</th>
            <th>Lastname</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => 
          (
            <tr key={user.id}>
              <td>{user.firstname}</td>
              <td>{user.lastname}</td>
              <td>{user.email}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;