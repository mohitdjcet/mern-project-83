import { useState } from "react";

function App() {
  const [text, setText] = useState("");

  const handleFocus = () => {
    console.log("Input field is focused");
  }
  const handleBlur = () => {
    console.log("Input field is blurred");
  }
  return(
    <>
      <input 
      type="text" 
      value={text}
      onChange={(e)=> setText(e.target.value)}
      onFocus={handleFocus}
      onBlur={handleBlur}
      placeholder="Enter your name" />
      <h2>You Type: {text}</h2>
    </>
  )
}

export default App;