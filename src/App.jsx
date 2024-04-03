import { useState } from "react";
import "./App.css";
import axios from "axios";

function App() {
  const [name, setName] = useState(""); //initial value
  const [email, setEmail] = useState("");
  const [users, setUsers] = useState([]);

  async function getUsers() {
    const url = import.meta.env.VITE_API_URL + "/users"

    const response = await axios.get(url);
    setUsers(response.data);
  }

  async function createUser(){
    const url = import.meta.env.VITE_API_URL + "/users"
    const newUser = {email, name};
    await axios.post(url, newUser);
    alert("User created");
  }

  return (
    <>
      <ul>
        {users.map((user)=><li key={user.email}>{user.name} : {user.email}</li>)}
      </ul>
      <button onClick={getUsers}>Get user</button>

      <input
        placeholder="email"
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        placeholder="name"
        onChange={(e) =>setName(e.target.value)}
      />
      <button onClick={createUser}>Create user</button>
    </>
  );
}

export default App;
