import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';



export function Teste() {
    const [counter, setCounter] = useState(1)


    function handleClick() {
        setCounter(counter + 1)
    }

    useEffect(()=>{
        console.log(counter)
    },[counter])
    return (
        <div>
            <h1>{counter}</h1>
            <button onClick={handleClick}>increment</button>
        </div>
    );
}