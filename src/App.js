import "./App.css";
import React,{useState} from "react";


function App() {
  let [l,setL]=useState('0');
  let [t,setT]=useState('0');

   const lF=(a)=>{
    let k=Number(l);
    if(k===0 && a===-50)return;
    if(k===450 && a===50)return;
    k+=a;
    setL(String(k));
    console.log("l is ", l);
  }
  const Tf=(a)=>{
    let k=Number(t);
    if(k===0 && a===-50)return;
    if(k===450 && a===50)return;
    k+=a;
    setT(String(k));
    console.log("t is ", t);
  }


  return (
    
      <div className="main_container">
        <button className="horizontal" onClick={()=>Tf(-50)}>
          Up
        </button>
        <div className="container">
          <button className="vertical"  onClick={()=>lF(-50)}>
            Left
          </button>
          <div className="main">

            <div className="box" style={{left:`${l}px`,top:`${t}px`}}></div>
            
          </div>
          <button className="vertical" onClick={()=>lF(50)} >Right</button>
        </div>
        <button className="horizontal" onClick={()=>Tf(50)}>Bottom</button>
        {/* {l},{t} */}
      </div>
    
  );
}

export default App;
