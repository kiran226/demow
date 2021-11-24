import React, { Component } from 'react'

class UserGreeting extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             isLoggedIn : true
        }
    }
    
    render() {

        // if(this.state.isLoggedIn){
        //     return(
        //         <div>Hello Kiran</div>
        //     )
        // }
        // else{
        //     return (
        //         <div>Hello Guest</div>
        //     )
        // }

        // let message ;

        // if(this.state.isLoggedIn){
        //     message = <div>Hello Kiran</div>
        // }
        // else{
        //     message = <div>Hello Guest</div>
        // }

        // return(
        //     <div>{message}</div>
        // )

        // return(
        //     this.state.isLoggedIn ? 
        //     <div>Welcome Kiran</div> :
        //     <div>Hello Guest</div>
        // )

        return this.state.isLoggedIn && <div>Welcome Kiran</div>
        
    }
}

export default UserGreeting
