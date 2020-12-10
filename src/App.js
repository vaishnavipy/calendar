
import './App.css';
import StartDate from "./startDate"
import EndDate from "./endDate"
import Calendar from "./calendar"
import { useEffect, useState } from 'react';

function App() {

  const [startDate,setStartDate] = useState("")

  const [endDate,setEndDate] = useState("")

  function handleStartDate(date){
    setStartDate(date)
  }

  function  handleEndDate(date){
    setEndDate(date)
  }
  
  useEffect(()=>{
    document.body.addEventListener("click",handleClear)
  },[])

  function handleClear(event){
    if(event.target.id === "root"){
     
      setEndDate("")
      setStartDate("")
     
    }
  }

  return (
    <div className="main-container" >

      <div className="date-container">
        <StartDate startDate={startDate}/>
        <EndDate endDate={endDate} />
      </div>

      <Calendar handleStartDate={handleStartDate} handleEndDate={handleEndDate} startDate={startDate} endDate={endDate}/>
      
    </div>
  );
}

export default App;
