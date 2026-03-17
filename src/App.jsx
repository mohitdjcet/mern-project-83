// import { useState, useMemo } from "react"

// function App(){
//   const [count,setCount] = useState(0);
//   const [number,setNumber] = useState(5);

//   // function expenceCal(num){
//   //   console.log("Calculating");
//   //   return num*num;
//   // }

//   // const result = expenceCal(3);

//   const result = useMemo(()=>{
//         console.log("Calculating");
//         return number*number;
//   },[number])
//   return(
//     <div>
//       <h2>Result:{result}</h2>
//       <button onClick={()=> setCount(count+1)}>Count Re-render {count}</button>
//       <button onClick={()=> setNumber(number+1)}>Change Number</button>
//     </div>
//   )
// }

// export default App

// import { useCallback,useState } from "react";
// import Child from "./Child";

// function App(){
//   const [count, setCount] = useState(0);

//   const handlerClick = useCallback(() =>{
//     console.log("Clicked");
//   },[])

//   return(
//     <div>
//       <button onClick={()=>setCount(count+1)}>Count {count}</button>
//       <Child onClick = {handlerClick} />
//     </div>
//   )
// }
// export default App;


import { useState, useCallback } from "react";
import Child from "./Child";

function App() {
  const [count, setCount] = useState(0);

  const handleClick = useCallback(() => {
    console.log("Clicked");
  }, []);

  return (
    <div>
      <button onClick={() => setCount(count + 1)}>Count {count}</button>
      <Child onClick={handleClick} />
    </div>
  );
}

export default App;