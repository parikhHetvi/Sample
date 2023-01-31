import React from 'react'
import "./Add.css";

function Firstfile() {
    return (
        <div>
            <div //style={{ backgroundColor: 'torigth,rgb(0,164,189)'}} 
                 className="container">
            <div>
                <h1 style={{textAlign:"center"}}>hi what's your name?</h1>
                </div> 
            
                <foam className="demo">
                    <div className="main">
                    <div className="one">
                    <label htmlFor="fname">FirstName</label>
                    <input type="text" name="fname"></input>
                    </div>
                    <div className ="two">
                    <label htmlFor='lname'>LastName</label>
                    <input type="text" name="lname"></input>
                    </div>
                    </div>
                </foam>
                
                </div>    
            </div>

    )
}

export default Firstfile