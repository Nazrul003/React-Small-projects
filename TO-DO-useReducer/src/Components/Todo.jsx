// import React, { useState,useReducer } from 'react'

// function reducer(state,action)
// {
//     switch(action.type){
//         case 'ADD_TODO' :
//             return [...state,{data:action.payload}];
//         case 'REMOVE_TODO':
          
//             return   state.filter((item,index)=>{return action.payload!==index});
//          default :
//             return state
        
//     }
// }
// function Todo() {
//     const [state,dispatch] = useReducer(reducer,[])
//     const [inputValue,setInputValue] = useState("");

//     function AddTodo()
//     {
//         dispatch({type:'ADD_TODO',payload:inputValue})
//         setInputValue("");
//     }
//     const RemoveTodo = (i)=>{
//        dispatch({type:"REMOVE_TODO",payload:i})
//     }
//   return (
//     <div>
//         <h1>hiii</h1>
//         <input
//         type='text'
//         value={inputValue}
//         placeholder='Enter you task'
//         onChange={e=>setInputValue(e.target.value)}
//         />
//         <button onClick={AddTodo}>Save</button>
//         <ul>
//         {
//             state.map((value,i)=>{
//                 console.log(value.data)
//                 return(<li>{value.data} <span>
//                     <button onClick={()=>RemoveTodo(i)}>X</button>
//                     </span></li>)
//             })
//         }
//         </ul>
//     </div>

//   )
// }

// export default Todo



// i have a placement on 12january i know in javascriptike asynchronus js array's method object's array of object's promise fetch async await function programming : compos ,currying, hofs , closure why we prmote immutabilty how primitive not primitive data type works let var const block scoping and functional scoping how CRP work's critical rendering path and aslo i know good amount of html css flex grid cros axis main axis semantic tag asemantic tag block at