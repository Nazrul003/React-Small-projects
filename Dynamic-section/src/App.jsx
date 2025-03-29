import { useState } from 'react'
//import './App.css'

function App() {
  const [section,setSection] = useState({dynamicSec :[]})

    function Add(){
      setSection({
        ...section,
        dynamicSec:[...section.dynamicSec,{title :'',content :''}]
      })
    }
    //onChange function for content
    function handleOnChange(index,e)
    {
        let newArray=[...section.dynamicSec]
        newArray[index].content = e.target.value;
         setSection({
          ...section,
          dynamicSec:newArray
         })
    }
    function remove(index)
    {
      let newSection = [] 
      newSection=section.dynamicSec.filter((_,i)=>{
        return i!=index;
      })
      setSection({
        ...section,
        dynamicSec:[...newSection]
      })
    }
  return (
    <>
    <div className='mx-auto shadow-black shadow-lg sm:min-w-[400px] p-10 mt-20 rounded-lg w-[300px]'>
      {section.dynamicSec.map((value,index)=>{
        return(
          <div key={index} className='flex flex-col gap-5'>
          <input type='text'
           className='bg-gray-100 p-1 rounded-md border-[1px]'

           value={value.title}
           placeholder= 'Please enter your title'
           onChange={(e)=>{
           let newArr=[...section.dynamicSec]
           newArr[index].title= e.target.value;
           setSection({
            ...section,
             dynamicSec:newArr
           })
           }}
         />
      
          <textarea 
          className='bg-gray-100 p-1 rounded-md border-[1px]'
          placeholder={`'please enter content of'${value.title}`}
          value={value.content}
          onChange={(e)=> handleOnChange(index,e)}
          />
          <button 
          className='w-fit

          bg-slate-600
         text-white sm:text-[20px] text-[16px] px-4 py-1 rounded-md hover:bg-slate-700 active:bg-black mb-4'
          onClick={() => remove(index)}>Remove section</button>
          </div>
        )
      })}

      <button
      className='text-center w-full bg-gray-800
       text-white md:text-[26px] text-[16px] p-1 rounded-md hover:bg-gray-900 active:bg-black'
       onClick={Add}>Addsection</button>
      </div>
    </>
  )
}

export default App
