import { useState } from "react";



function Todo()
{
  const [inputValue,setInputValue]=useState("")
  let [task,setTask]=useState([])
  function handleClick(e,index)
  {
    const tagName = e.target.tagName.toLowerCase()
    if(tagName=='span')
    {
      const temp=task.filter((_,i)=>(i!==index))
      setTask(temp
      )
    }
  }
function handleChange(e)
 { 
    setInputValue(e.target.value)
 }
 function Save(){
     if(inputValue.trim())
     {
      setTask([...task,inputValue])
      
     }
     setInputValue("")
    }

   return (
     <>
     <div className="text-center">
     <div className="mx-auto mt-20 min-h-[200px] inline-block
     shadow-black shadow-lg rounded-md min-w-[350px] max-w-full p-10">
      <div className="bg-gray-300 h-[30px] relative rounded-xl">
      <input 
      className="bg-transparent outline-none  text-[15px] pl-2 pt-1 "
      type="text"
      placeholder="Please enter your task"
      value={inputValue}
      onChange={(e)=>{handleChange(e)}}
      />
      <button
      className="bg-gray-700 text-white float-right h-[30px] rounded-xl p-1 w-1/4
      hover:bg-gray-800 active:bg-gray-950"
       onClick={Save}>Save</button>
     </div>
     <div className="text-left relative">
  <ul className="">
    {task.map((value, index) => (
      <li 
        key={index}
        className="my-2 text-[18px] bg-orange-100 rounded-lg p-2"
        onClick={(e) => handleClick(e, index)}
      >
        <input
          className="mx-2"
          type="checkbox"
          onClick={(e) => handleClick(e, index)}
        />
        {value}
        <span 
          className="mx-1 right-0 absolute text-white bg-black px-2 rounded-md hover:cursor-pointer"
          onClick={(e) => handleClick(e, index)}
        >
          ×
        </span>
      </li>
    ))}
  </ul>
</div>
</div>
</div>
     </>
   )
}
export default Todo;

//x sign Alt + 0215