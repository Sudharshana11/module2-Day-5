import React from "react";
import CustomButton from "../components/CustomButton";

function MyCounter() {
    var count = 0
    function IncrementCounter(){
        count++;
        console.log(count);
        console.log("Function is called Increment");
    }
    function DecrementCounter(){
        count--;
        console.log(count);
        console.log("Function is called Decrement");

        
        
    }
    function MultiplyCounter(){
        if(count>1999){
             alert("Number greater than 2000 not allowed")
        }else{
            setCountFunction(count*count)
        }
        console.log(count);
        console.log("Function is called Multiply");
        
        
    }
    return (
        <div>
            <h2>Counters Current value : {count}</h2>
            <div>
                
                <button onClick={IncrementCounter}>Increment button</button>
                <hr/>
                <button onClick={DecrementCounter}>Decrement button</button>
                <hr/>
                <button onClick={MultiplyCounter}>Multiply button</button>
            </div>
        </div>
    )
}