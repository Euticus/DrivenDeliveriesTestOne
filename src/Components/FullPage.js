import React from 'react'
import CheckerBoard from './CheckerBoard'

export default class FullPage extends React.Component {
    state = {
        inputVal: null
    }

    stateChange = (e) => {
        this.setState({inputVal: e.target.value})

    }


 render(){
     return (
         <div>
             <input type="input" /> 
             <button onClick={() => this.stateChange}>ENTER</button>
             <br></br>
             <CheckerBoard props={this.state.inputVal} />
         </div>
     )

 }
}