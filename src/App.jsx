import { Link, Outlet } from "react-router";

function App() {
  return (
    <>
      <h1>Hello React Router</h1>
      <nav style={{ display: "flex", gap: "12px" }}>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/users">Users</Link>
      </nav>
      <hr />
      <Outlet />
    </>
  );
}

export default App;
