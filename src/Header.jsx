import { useState } from "react";

function Header(){
    const [count, setCount] = useState(0);
    const [text, setText] = useState("")

    function headleClick(){
        setCount(count + 1);
    }

    // function handleChage(e){
    //     setText(e.target.value); 
    // }
    return(
        <div>
            {/* <h1>Count: {count}</h1>
            <button onClick={headleClick}>+</button>
            <button onClick={()=> setCount(count-1)}>-</button>
            <button onClick={()=> setCount(0)}>Reset</button> */}
            <br />
            <input
            type="text"
            onChange={(event)=> setText(event.target.value)} />
            <h2>You Typed: {text}</h2>
        </div>
    )
}

export default Header;
