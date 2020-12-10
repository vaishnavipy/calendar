import React, { useEffect, useState } from "react"
import StartDate from "./startDate";
import './App.css';

function Calendar(props){

    const {handleStartDate,handleEndDate,startDate,endDate} =props;

   
    const calendatArr = Array(31).fill(null)

    const datesDiv =  document.querySelectorAll(".dates")

  

    const dates = calendatArr.map((elm,i) => <div className="dates" id={i+1}>{i+1}</div>)

   

   

    function handleClick(event){
        if(event.target.classList.contains("dates")){
           
            //When Dates Are Clikcked
           if(startDate == ""){
            handleStartDate(event.target.id)
           }else{
              
            if(Number(event.target.id) <= Number(startDate) ){
              
                handleStartDate(event.target.id)
                handleEndDate(startDate)
            }else{
                handleEndDate(event.target.id)
            }
           }

        }
    }
    function mouseEnterFunc(){
       

        datesDiv.forEach(elm => {
            if( Number(elm.id) > Number(startDate) && Number(elm.id) <= Number(this.id) ){
                console.log(startDate)
                elm.style.backgroundColor="#213A78"
                elm.style.color="white"
            }else if(Number(elm.id) == startDate){
                document.getElementById(startDate).style.backgroundColor ="#050F23"
                document.getElementById(startDate).style.color ="white"

            }

        })
      
       
    }

    function mouseOutFunc(){

        datesDiv.forEach(elm => {
            if(Number(elm.id) <= Number(this.id) && elm.id != endDate ){
               
                elm.style.backgroundColor="#0F1C44"
                elm.style.color="#7C90BB"
            }

        })

    }

    function hoverFunc(){

        if(startDate == "" || endDate == ""){
            this.style.backgroundColor = "#213A78";
            this.style.color = "white"

        }
       
        if(Number(this.id) > Number(endDate) || Number(this.id) < Number(startDate)){
            console.log("hiver",this.id,endDate)
        this.style.backgroundColor = "#213A78";
        this.style.color = "white"
        }
    }

    function hoverOutFunc(){

        if(startDate == "" || endDate == ""){
            this.style.backgroundColor = "#0F1C44";
            this.style.color = "#7C90BB"

        }
       
        if(Number(this.id) > Number(endDate) || Number(this.id) < Number(startDate)){
            console.log("hover-Out",this.id,endDate)
        this.style.backgroundColor = "#0F1C44";
        this.style.color = "#7C90BB"
        }

    }


    useEffect(()=>{
        //If Start Date Was Selected
        if(startDate){

            document.getElementById(startDate).style.backgroundColor ="#050F23"
            document.getElementById(startDate).style.color ="white"

            
           datesDiv.forEach(elm => elm.addEventListener("mouseenter",mouseEnterFunc))
          
           datesDiv.forEach(elm => elm.addEventListener("mouseleave",mouseOutFunc))
            
          
        }

        //When both dates get selected,remove event listeners and make them permanently be selected
        // Add event listeners to hover other dates
        if(startDate && endDate){
            
           datesDiv.forEach(elm => elm.removeEventListener("mouseenter",mouseEnterFunc))

            datesDiv.forEach(elm => elm.removeEventListener("mouseleave",mouseOutFunc))

            datesDiv.forEach(elm => elm.addEventListener("mouseover",hoverFunc))

            datesDiv.forEach(elm => elm.addEventListener("mouseout",hoverOutFunc))

            selectedDateInterval()
        }else{

            datesDiv.forEach(elm => {
                elm.style.backgroundColor="#0F1C44"
                elm.style.color="#7C90BB"

            })

        }

        //if the dates got cleared after one interval got selected, make hovering possible
        if(startDate == "" && endDate== ""){
            datesDiv.forEach(elm => elm.addEventListener("mouseover",hoverFunc))

            datesDiv.forEach(elm => elm.addEventListener("mouseout",hoverOutFunc))

        }

        //Make sure to clear event listeners every time , otherwise one listener will get created for every end-Date
          return ()=>{ 
                datesDiv.forEach(elm => elm.removeEventListener("mouseenter",mouseEnterFunc))

                datesDiv.forEach(elm => elm.removeEventListener("mouseleave",mouseOutFunc))

                datesDiv.forEach(elm => elm.removeEventListener("mouseover",hoverFunc))

                datesDiv.forEach(elm => elm.removeEventListener("mouseout",hoverOutFunc))
        
        }


    },[startDate,endDate])

  


    
// Makes sure selected Interval remains highLighted
    function selectedDateInterval(){
       
        datesDiv.forEach(elm => {
            if(Number(elm.id) > Number(startDate) && Number(elm.id) < Number(endDate) ){
                console.log("hi")
                elm.style.backgroundColor="#213A78"
                elm.style.color="white"
            }
            else if(Number(elm.id) == startDate || elm.id == endDate){
                elm.style.backgroundColor="#050F23"
                elm.style.color="white"
            }
            else{
                elm.style.backgroundColor="#0F1C44"
                elm.style.color="#7C90BB"
            }

        })
    }

   

    return(
    <div className="calendar" onClick={handleClick}>
        {dates}
    </div>)
}

export default Calendar;