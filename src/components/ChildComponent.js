import React from 'react'

function ChildComponent(props) {
    return (
        <div>
            {/* <button onClick={props.greetHandler} > Greet Parent </button> */}

            {/* passing parameter from child to parent Component */}
            <button onClick={()=>props.greetHandler('child')} >Greet Parent</button>
        </div>
    )
}

export default ChildComponent
