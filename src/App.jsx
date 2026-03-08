import { useState, useEffect, use } from "react";

function App(){
  const [count, setCount] = useState(0);

  //WillUnmount
  // useEffect(()=>{
  //   console.log("App component mounted");
  //   return ()=>{
  //     console.log("App component unmounted");
  //   }
  // },[]);
  // useEffect(()=>{
  //   console.log("App component change");
  // },[]);

  useEffect(()=>{
    const timer = setInterval(()=>{
      console.log("Timer tick");
    },1000);
    return ()=>{
      clearInterval(timer);
      console.log("Timer cleared");
    }
  },[]);

  return(
    <div>
      <h1>Hello</h1>
      <p>Count: {count}</p>
      <button onClick={()=>setCount(count+1)}>Increment</button>
    </div>
  )
}

export default App;