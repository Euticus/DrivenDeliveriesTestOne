import React from 'react'
import '../App.css';


//first just give me one div 
//when number gets entered set in state 
//square it, run a for loop with every other piece is black or white
// every {fieldVal} times make a <br> element

export default class CheckerBoard extends React.Component {


   generateBoard = () => {
       let valsquared = this.props.inputVal^2 
       for (let i=0; i<valsquared; i++){
           if (i%2 === 0) {
               return <div className="white">I'm a white square!</div>
           }
           else {
               return <div className="black"> I'm a black square! </div>            
               }
       }
   }
    
   componentDidMount(){
       this.generateBoard()
   }

   componentDidUpdate(){
       this.generateBoard()
   }
    
    render(){
        return (
            <div>
                {this.generateBoard()}
            </div>
        )

    }
        
}