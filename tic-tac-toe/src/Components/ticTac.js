import { useState } from "react";
import './ticTac.css';
export const Tictac = () =>
{
    let [winner,setWinner]=useState('')
    let [cells,setCell]= useState({
        1:'',
        2:'',
        3:'',
        4:'',
        5:'',
        6:'',
        7:'',
        8:'',
        9:''
    })
    let [val,setVal] =useState('')
    function handleClick(e)
    {
       const id=e.target.id
       if(!cells[id])
       {
        setVal(val==='x'?'o':'x')
        const newcell={
            ...cells,
            [id]:val
        }
        setCell(newcell)
        handlChange(newcell);
       }
    }
    function handlChange(newcell)
    {
        if (cells[1] && cells[1] === cells[2] && cells[2] === cells[3]) {
            setWinner(`${cells[1]} wins`);
          }
    }

return(
    <>
    <div className="containor">
     <div className="Row1">
           <div className="col1" id="1" onClick={(e)=>{handleClick(e)}}>{cells[1]}</div>
           <div className="col2" id="2" onClick={(e)=>{handleClick(e)}}>{cells[2]}</div>
           <div className="col3" id="3" onClick={(e)=>{handleClick(e)}}>{cells[3]}</div>
     </div>
     <div className="Row2">
           <div className="col1" id="4" onClick={(e)=>{handleClick(e)}}>{cells[4]}</div>
           <div className="col2" id="5" onClick={(e)=>{handleClick(e)}}>{cells[5]}</div>
           <div className="col3" id="6" onClick={(e)=>{handleClick(e)}}>{cells[6]}</div>
     </div>
     <div className="Row3">
           <div className="col1" id="7" onClick={(e)=>{handleClick(e)}}>{cells[7]}</div>
           <div className="col2" id="8" onClick={(e)=>{handleClick(e)}}>{cells[8]}</div>
           <div className="col3" id="9" onClick={(e)=>{handleClick(e)}}>{cells[9]}</div>
     </div>
     </div>
     <p onChange={(cells)=>{handlChange(cells,val)}}>{winner}</p>
    </>
)
}