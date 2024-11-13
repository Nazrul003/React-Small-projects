
// The useEffect hook is used to execute a block of code in response to 
//certain events or changes (like when a component mounts, updates, or unmounts).

// It has two main sections:
//1. Effect code: This is the code that runs when the component first renders
//      and whenever values in the dependency array change.

//2. Cleanup function (optional): The return () => {} function is used for cleaning
//      up resources (e.g., cancelling timers, unsubscribing from events). It runs just
//      before the component is unmounted or before the next effect is executed when 
//      dependencies change.




import { useState } from 'react'
import UseEffect  from './components/useEffect'
function App() {
    let [prop,setPop] = useState(0)
    function increament()
    {
      setPop(prop+1);
    }
  return (
    <>
    <h1>hiii</h1>
    <UseEffect prop={prop}/>
    <button onClick={increament}>Increament</button>
    </>
  )
}

export default App
