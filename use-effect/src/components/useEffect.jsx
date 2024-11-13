//theory or working 
//summary 

// first time rendering with a state

// state changes it triggers re rendering
// it re evalutes the rendering logic 

// Syntax

// useEffect(() => {
//     // Effect code runs  :-
//                            Run first time and whenever depenency arrays's value changes
//     console.log('Component mounted');
    
//     return () => {
//         // Cleanup code runs on unmount : it excute before next render and clean up
//                                           clean up the previous state memory
//            console.log('Component unmounted');
//     };
// }, [dependency array]);

import { useEffect, useState } from "react";

function UseEffect({prop})
{
    let [number,setNumber]= useState(prop)

    useEffect(()=>{
        number=Math.floor(Math.random()*prop)+1;
        setNumber(number)
        return () =>{
           setNumber(number=0) // here we resetting number 0 before rendering next state of the prop
        }                       // this just example how we can manage our resources
    },[prop])
return (
    <>
    <h1>hii from UseEffect </h1>
    <h2>prop value:{prop}</h2>
    <h3>random between 0 and prop {number}</h3>
    </>
)
}
export default UseEffect;

//optional theory but important

// Mounting vs. Unmounting
// Mounting:

// When a component is added to the DOM for the first time, it is said to be mounted. At this point, the effect code inside useEffect runs to set up resources.
// Unmounting:

// Unmounting occurs when the component is removed from the DOM. This can happen, for example, when the user navigates away from the component or when a parent component conditionally renders it.
// Key Concepts
// You don’t manually unmount a component: Unmounting typically happens due to changes in the application state or structure (like conditional rendering).

// Cleanup Function: The cleanup function you define in useEffect is automatically invoked when the component is unmounted or before the effect runs again due to changes in dependencies.
