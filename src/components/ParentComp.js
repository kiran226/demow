import React, { Component } from 'react'
import MemoComp from './MemoComp'
// import PureComp from './PureComp'
// import RegComp from './RegComp'

class ParentComp extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             name : 'Kiran'
        }
    }

    componentDidMount(){
        setInterval(()=>{
            this.setState({
                name:'kiran'
            })
        },2000)
    }
    
    render() {
        console.log('*************Parent Component**************8');
        return (
            <div>
                Parent Component
                {/* <PureComp name={this.state.name} />
                <RegComp name={this.state.name} /> */}
                <MemoComp name={this.state.name} />

            </div>
        )
    }
}

export default ParentComp
