import { useState } from "react";
import './ticTac.css';
export const Tictac = () =>
{
    const initCells={
        1:'',
        2:'',
        3:'',
        4:'',
        5:'',
        6:'',
        7:'',
        8:'',
        9:''
    }
    let [winner,setWinner]=useState('')
    let [winningCells,setWinningCells]=useState([])
    let [isdraw,SetisDraw]=useState(false)
    let [cells,setCell]= useState(initCells)
    let [val,setVal] =useState(Math.floor(Math.random()*2)+1===1?'x':'o')
    function handleClick(e)
    {
        if(winner)
        {
            return;
        }
       const id=e.target.id
       if(!cells[id])
       {
        setVal(val==='x'?'o':'x')
        const newcell={
            ...cells,
            [id]:val
        }
        setCell((cell)=>{
            const winningCombo=[
                [1,2,3],[4,5,6],[7,8,9],//horizontal wins combo
                [1,4,7],[3,6,9],[2,8,4],//verical wins combo
                [1,5,9],[3,5,7]//diagonal wins combo
            ]
           for(const combo of winningCombo){
            const [a,b,c]=combo;
            if(newcell[a]&&newcell[a]===newcell[b]&&newcell[b]===newcell[c])
            {
             setWinner(`${newcell[a]} wins`)
             setWinningCells(combo)
             return newcell
            }
           }
           const allCellsFill=Object.values(newcell).every(cell=>cell!='')
           if(allCellsFill)
           {
            SetisDraw(true)
           }
            return newcell;
        })

       
       }
      
    }
    const isWinningCell = (id) => winningCells.includes(Number(id));

   function ResetGame()
   {
    setCell(initCells)
    setWinner('')
    setWinningCells([])
    SetisDraw(false)
   }
       

return(
    <>
    <div className="containor">
    <div id="sub-Contaior">
     <div className="Row1">
           <div className="col1" id="1" onClick={(e)=>{handleClick(e)}} style={{backgroundColor:isWinningCell('1')?'green':''}}>{cells[1]}</div>
           <div className="col2" id="2" onClick={(e)=>{handleClick(e)}} style={{backgroundColor:isWinningCell('2')?'green':''}}>{cells[2]}</div>
           <div className="col3" id="3" onClick={(e)=>{handleClick(e)}} style={{backgroundColor:isWinningCell('3')?'green':''}}>{cells[3]}</div>
     </div>
     <div className="Row2">
           <div className="col1" id="4" onClick={(e)=>{handleClick(e)}} style={{backgroundColor:isWinningCell('4')?'green':''}} >{cells[4]}</div>
           <div className="col2" id="5" onClick={(e)=>{handleClick(e)}} style={{backgroundColor:isWinningCell('5')?'green':''}}>{cells[5]}</div>
           <div className="col3" id="6" onClick={(e)=>{handleClick(e)}} style={{backgroundColor:isWinningCell('6')?'green':''}}>{cells[6]}</div>
     </div>
     <div className="Row3">
           <div className="col1" id="7" onClick={(e)=>{handleClick(e)}} style={{backgroundColor:isWinningCell('7')?'green':''}}>{cells[7]}</div>
           <div className="col2" id="8" onClick={(e)=>{handleClick(e)}} style={{backgroundColor:isWinningCell('8')?'green':''}}>{cells[8]}</div>
           <div className="col3" id="9" onClick={(e)=>{handleClick(e)}} style={{backgroundColor:isWinningCell('9')?'green':''}}>{cells[9]}</div>
     </div>
    <div className="win-div">
     {winner&&<p>{winner}</p>}
     {
        isdraw&&<p>It's a draw!</p>
     }
     <button onClick={ResetGame}>
        Reset 
     </button>
     </div>
     </div>
     </div>
    
    </>
)
}