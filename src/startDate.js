import React from "react"

function StartDate(props){
    return (<div>
        {console.log(props.startDate)}
        <h3>START DATE</h3>
        <h1 className="selected-date">{props.startDate}</h1>
        <hr/>
    </div>)
}

export default StartDate;