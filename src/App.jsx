import { useEffect, useState } from "react";
import axios from "axios";

function App() {
  const [users,setUsers] = useState([]);
  const [error,setError] = useState(null);
  const [loading,setLoading] = useState(true);

  useEffect(() => {
    async function fetchUsers() {
      try {
        const res = await axios.get("https://jsonplaceholder.typicode.com/users")
        console.log(res);
        setUsers(res.data);
      } catch (err) {
        setError("Something went wrong")
      } finally{
        setLoading(false)
      }
    }
    fetchUsers();
  }, []);

  if(loading) return <p>Loading...</p>
  if(error) return <p style={{color:"red"}}>{error}</p>
  return (
    <ul>
      {users.map((user) => (
        <li key={user.id}>{user.name}</li>
      ))}
    </ul>
  );
}

export default App;