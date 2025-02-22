import axios from "axios"
import { useState , useEffect } from "react";


export default function Main(){

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
    <main>
      <div className="table-container">
      <table>
        <thead>
          <tr>
            <th>Id</th>
            <th>Firstname</th>
            <th>Lastname</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => 
          (
            <tr key={user.id}>
                <td>{user.id}</td>
                <td>{user.firstname}</td>
                <td>{user.lastname}</td>
                <td>{user.email}</td>
            </tr>
          ))}
        </tbody>
      </table>
      </div>
    </main>
    )
}