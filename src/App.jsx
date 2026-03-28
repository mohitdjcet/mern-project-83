import { Link, Outlet } from "react-router";

function App() {
  return (
    <>
      <h1>Hello React Router</h1>
      <nav style={{ display: "flex", gap: "12px" }}>
        <Link to="/">Home</Link>
        <Link to="/products?category=react&page=1">Products</Link>
        <Link to="/dashboard">Dashboard</Link>
        <Link to="/login">Login</Link>
      </nav>
      <hr />
      <Outlet />
    </>
  );
}

export default App;
