import React, { Component } from 'react';
import './styles.css';

class Timer extends Component {
    state = {
        secondsCount: 15,
        minutesCount: 10
    }

    render() { 
        if (this.state.minutesCount < 10 && this.state.secondsCount < 10) {
            return <span style={{padding: "25px", fontSize: "50px", color: "white", fontFamily: "Inconsolata"}}>0{this.state.minutesCount}:0{this.state.secondsCount}</span>
        } else {
            if (this.state.minutesCount < 10) {
                return <span style={{padding: "25px", fontSize: "50px", color: "white", fontFamily: "Inconsolata"}}>0{this.state.minutesCount}:{this.state.secondsCount}</span>
            } else {
                if (this.state.secondsCount < 10) {
                    return <span style={{padding: "25px", fontSize: "50px", color: "white", fontFamily: "Inconsolata"}}>{this.state.minutesCount}:0{this.state.secondsCount}</span>
                }
            }
        }
        return <span style={{padding: "25px", fontSize: "50px", color: "white", fontFamily: "Inconsolata"}}>{this.state.minutesCount}:{this.state.secondsCount}</span>
    }

    componentDidMount() {
        this.myInterval = setInterval(() => {
            this.setState(prevState => ({
                secondsCount: prevState.secondsCount - 1
            }))
            
            if (this.state.secondsCount === -1) {
                this.setState({ minutesCount: this.state.minutesCount - 1});
                this.setState({ secondsCount: this.state.secondsCount + 60});
            }
            
        }, 1000)
    }
    
    componentWillUnmount () {
        clearInterval(this.myInterval)
    }
}
 
export default Timer;
