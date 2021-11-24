import React, { Component } from 'react'

class EventBind extends Component {
   constructor(props) {
       super(props)
   
       this.state = {
            message : "Hello"
       }
    //    this.clickHandler= this.clickHandler.bind(this);
   }
   
//    clickHandler(){
//         this.setState({
//             message : 'Bye'
//         })
//         console.log(this);
//    }

        clickHandler=()=>{
            this.setState({
                message : "bye"
            })
            console.log(this);
        }

    render() {
        return (
            <div>
                <h1>{this.state.message}</h1>

                {/* binding in the render method */}
                {/* <button onClick={this.clickHandler.bind(this)} >Click</button> */}

                {/* Arrow function in the render method */}
                {/* <button onClick={()=>this.clickHandler()}>Click</button> */}

                {/* binding the event handler in the constructor */}
                {/* <button onClick={this.clickHandler} >Click</button> */}

                {/* Arrow function as a class property */}
                <button onClick={this.clickHandler}>Click</button>

            </div>
        )
    }
}

export default EventBind
