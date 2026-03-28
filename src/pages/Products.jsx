import { useParams } from "react-router";

function Products() {
  const {productId} = useParams();
  return (
    <>
      <h1> Product Page</h1>
      <p>Product ID: {productId}</p>
    </>
  );
}

export default Products;