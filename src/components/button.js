import React from "react";
function Counter(){
    const[count,setCount] = React.useState(0)
    const increment = ()=> setCount(c => c+ 2)
    const decrement = () => setCount(c => c-1)
    return(
        <div>
            <div>Current coun: {count}</div>
            <button onClick={decrement}>Decrement</button>
            <button onClick={increment}>Increment</button>
        </div>
    )
} 
export default Counter