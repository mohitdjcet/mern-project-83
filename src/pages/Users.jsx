import { useParams } from "react-router";

function Users() {
  const {id} = useParams();
  return (
    <>
      <h1>Hello Users Page</h1>
      <p>User ID: {id}</p>
    </>
  );
}

export default Users;