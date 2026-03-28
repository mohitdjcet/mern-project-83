import { Link, Outlet } from "react-router";

function App() {
  return (
    <>
      <h1>Hello React Router</h1>
      <nav style={{ display: "flex", gap: "12px" }}>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/login">Login</Link>
        <Link to="/users/1">User 1</Link>
        <Link to="/users/2">User 2</Link>
        <Link to="/users/3">User 3</Link>
        <Link to="/products/101">Laptop</Link>
        <Link to="/products/102">Mobile</Link>
      </nav>
      <hr />
      <Outlet />
    </>
  );
}

export default App;
