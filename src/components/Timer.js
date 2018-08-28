import React from 'react'
import Time from './Time'

class Timer extends React.Component{
    constructor(props){
        super(props)
        this.state ={
            ms:0,
            isActive:true,
            a:0
        }
    }
    onStart=()=>{
        this.setState({isActive:!this.state.isActive})
        if(this.state.isActive){
            let b=setInterval(() =>{
                this.setState({ms:this.state.ms +1000})},1000)
            this.setState({a:b})
        }
        else{
            clearInterval(this.state.a)
        }
    }
    onReset=()=>{
        this.setState({ms:0,isActive:true})
        clearInterval(this.state.a)
    }
   
    render(){
        return (
        <div className="container">
            <Time ms={this.state.ms}/>
            <div className="timer-btn">
                <button onClick={this.onStart}>START</button>
                <button onClick={this.onReset}>RESET</button>
            </div>
        </div>
        )
    }
}

export default Timer