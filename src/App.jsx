import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  // state for display
  const [display, setDisplay] =useState('0')
  // state for operator
  const [operator, setOperator] =useState(null)
  
  // for clear state
  const [preValue, setPreValue] =useState(null)

  const buttons = [
    ['AC', 'DEL', '/'],
    ['7', '8', '9', '*'],
    ['4', '5', '6', '+'],
    ['1', '2', '3', '-'],
    ['0', '.', '='],
  ];
  
 

  // clear 
  const handleClick =(value)=>{
    if(value==='AC'){
      setDisplay('0')
      setOperator(null)
      setPreValue(null)
      return
    }
    if(value ==='DEL'){
      setDisplay(0)
      return
    }
    setDisplay((prev) => (prev === '0' ? value : prev + value));
  }


  return (
    
      <div className='d-flex align-items-center justify-content-center' style={{height:'100vh'}}>
       <div>
          <h1 className='text-center mb-3'>Calculator</h1>
          
        <div className='container rounded p-3' style={{backgroundColor:'white', height:'auto'}}>
           
           {/* 1st row */}
          <div className='rounded pt-4 pe-3 ' style={{backgroundColor:'black', height:'80px', width:'300px', color:'white', textAlign:'end', fontSize:'35px'}}>{display}</div>
         

        {buttons.map((row, rowIndex)=>(
          <div key={rowIndex} className='d-flex align-items-center justify-content-evenly gap-1 pt-3' style={{backgroundColor:"white"}} >
            {row.map((btn)=>(
               <button key={btn} onClick={() => handleClick(btn)}
               style={{ width: btn === 'AC' || btn === 'DEL' || btn === 'DEL' ||btn === '/' || btn === '0' || btn === '.' ||  btn === '=' ?'95px':'67px', height: '40px', gap:'5px',fontSize: '18px',backgroundColor:'grey',color: 'white',border: 'none',borderRadius:'5px',
                 cursor: 'pointer', }}>
               {btn}
             </button>
            ))}
            </div>
        ))}


        </div>
       
       </div>
      </div>



    
  )
}

export default App
