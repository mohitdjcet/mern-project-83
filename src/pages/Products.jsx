import { useSearchParams } from "react-router";

function Products() {
  const [searchParams,setSearchParams] = useSearchParams();

  const category = searchParams.get("category");
  const page = searchParams.get("page");
  return (
    <>
      <h1>Products Page</h1>
      <p>Category: {category}</p>
      <p>Page: {page}</p>

      <button onClick={()=> setSearchParams({category:"react",page:1})}>React Products</button>
      <button onClick={()=> setSearchParams({category:"node",page:1})}>Node Products</button>
    </>
  );
}

export default Products;