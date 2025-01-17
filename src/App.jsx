import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  


  
 
const [input, setInput] =useState('0')

const display =(content)=>{
  setInput(prev=>prev =='0' ?content:prev+content)
}

const calClear =()=>{
  setInput('0')
}

const calEqual =()=>{
  setInput(eval(input))
}

const removeLastDigit=()=>{
  setInput(prev=>prev.length ===1 ?'0':prev.slice(0,-1))
}


  return (
    
      <div className='d-flex align-items-center justify-content-center' style={{height:'100vh'}}>
       <div>
          <h1 className='text-center mb-3'>Calculator</h1>
          
        <div className='container rounded p-3' style={{backgroundColor:'white', height:'auto'}}>
           
           {/* 1st row */}
         <input type="text" value={input}  className='rounded pt-4 pe-3 ' style={{backgroundColor:'black', height:'80px', width:'300px', color:'white', textAlign:'end', fontSize:'35px'}}/>

                 {/* 2nd row */}
                 <div className='d-flex align-items-center justify-content-evenly gap-1 pt-3' style={{backgroundColor:"white"}}>
            <div onClick={calClear} className='buttons rounded text-center p-3 shadow' style={{width:'92px', color:'white', fontWeight:'600'}}>AC</div>
            <div onClick={removeLastDigit} className='buttons rounded text-center p-3 shadow' style={{width:'92px',  color:'white', fontWeight:'600'}}>DEL</div>
            <div onClick={()=>display('/')} className='buttons rounded text-center p-3 shadow' style={{width:'92px', color:'white', fontWeight:'600'}}>/</div>
          </div>
  
          {/* 3rd row */}
          <div className='d-flex align-items-center justify-content-evenly gap-1 pt-3' style={{backgroundColor:"white"}}>
            <div onClick={()=>display('7')} className='buttons rounded text-center p-3 shadow' style={{width:'64px',  color:'white', fontWeight:'600'}}>7</div>
            <div onClick={()=>display('8')} className='buttons rounded text-center p-3 shadow' style={{width:'64px',  color:'white', fontWeight:'600'}}>8</div>
            <div onClick={()=>display('9')} className='buttons rounded text-center p-3 shadow' style={{width:'64px', color:'white', fontWeight:'600'}}>9</div>
            <div onClick={()=>display('*')} className='buttons rounded text-center p-3 shadow' style={{width:'64px', color:'white', fontWeight:'600'}}>*</div>
          </div>

          {/* 4th row */}
          <div className='d-flex align-items-center justify-content-evenly gap-1 pt-3' style={{backgroundColor:"white"}}>
            <div onClick={()=>display('4')} className='buttons rounded text-center p-3 shadow' style={{width:'64px',  color:'white', fontWeight:'600'}}>4</div>
            <div onClick={()=>display('5')} className='buttons rounded text-center p-3 shadow' style={{width:'64px',  color:'white', fontWeight:'600'}}>5</div>
            <div onClick={()=>display('6')} className='buttons rounded text-center p-3 shadow' style={{width:'64px', color:'white', fontWeight:'600'}}>6</div>
            <div onClick={()=>display('+')} className='buttons rounded text-center p-3 shadow' style={{width:'64px', color:'white', fontWeight:'600'}}>+</div>
          </div>

          {/* 5th row */}
          <div className='d-flex align-items-center justify-content-evenly gap-1 pt-3' style={{backgroundColor:"white"}}>
            <div className='buttons rounded text-center p-3 shadow' style={{width:'64px',  color:'white', fontWeight:'600'}}>1</div>
            <div onClick={()=>display('2')} className='buttons rounded text-center p-3 shadow' style={{width:'64px',  color:'white', fontWeight:'600'}}>2</div>
            <div onClick={()=>display('3')} className='buttons rounded text-center p-3 shadow' style={{width:'64px', color:'white', fontWeight:'600'}}>3</div>
            <div onClick={()=>display('-')} className='buttons rounded text-center p-3 shadow' style={{width:'64px', color:'white', fontWeight:'600'}}>-</div>
          </div>

          {/* 4th row */}
          <div className='d-flex align-items-center justify-content-evenly gap-1 pt-3' style={{backgroundColor:"white"}}>
            <div onClick={()=>display('0')} className='buttons rounded text-center p-3 shadow' style={{width:'64px', color:'white', fontWeight:'600'}}>0</div>
            <div onClick={()=>display('.')} className='buttons rounded text-center p-3 shadow' style={{width:'64px', color:'white', fontWeight:'600'}}>.</div>
            <div onClick={calEqual} className='buttons rounded text-center p-3 shadow' style={{width:'129px', color:'white', fontWeight:'600'}}>=</div>
           
          </div>


        </div>
       
       </div>
      </div>



    
  )
}

export default App
