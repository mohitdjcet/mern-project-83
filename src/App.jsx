// import { useState } from "react";
import { useRef } from "react";

function App() {
  // const [name, setName] = useState("Mohit");
  
  const inputRef = useRef(null);

  // const handleSubmit = (e)=>{
  //   e.preventDefault();
  //   console.log("Name",name);
  // }
  const handleSubmit = (e)=>{
    e.preventDefault();
    console.log("Name", inputRef.current.value);
  }
  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        // value={name}
        // onChange={(e) => setName(e.target.value)}
        ref = {inputRef}
      />
      <button type="submit">Submit</button>
    </form>
  );
}
export default App;
