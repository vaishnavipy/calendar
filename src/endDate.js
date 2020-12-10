import React from "react"

function EndDate(props){
    return (<div>
         <h3>END DATE</h3>
        <h1 className= "selected-date">{props.endDate}</h1>
        <hr/>
    </div>)
}

export default EndDate;