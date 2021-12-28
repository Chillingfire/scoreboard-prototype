//Scoreboard.jsx - component of scoreboard
//Created by Daniel Kantor

import React, { Component } from 'react';
import './styles.css';

class Scoreboard extends Component {
    state = {
        gameStatus: "scheduled",
        homeTeamName: "HOME",
        awayTeamName: "AWAY",
        homeScore: 0,
        awayScore: 0,
        downs: 0,
        yardsToGo: 0,
        quarter: 0,
        possession: "HOME", //0 - HOME, 1 - AWAY
        secondsCount: 0,
        minutesCount: 15,
        isPaused: false
    };

    render() { 
        return (
            <div className="text-center" style={{backgroundColor: "#222222"}}>
                <span className="font-family" style={{backgroundColor: "#3B3B3B", padding: "25px", fontSize: "50px", color: "white"}}>{this.state.homeTeamName}</span>
                {this.handleTimerZeros()}
                <span className="font-family" style={{backgroundColor: "#3B3B3B", padding: "25px", fontSize: "50px", color: "white"}}>{this.state.awayTeamName}</span>
                <p></p>
                <span className="font-family" style={{padding: "10px", fontSize: "50px", marginRight: "285px", color: "white"}}>{this.state.homeScore}</span>
                <span className="font-family" style={{padding: "10px", fontSize: "50px", color: "white"}}>{this.state.awayScore}</span>
                <p></p>
                <span className="font-family" style={{padding: "10px", fontSize: "25px", color: "white"}}>{this.state.possession} HAS POSSESSION</span>
                <p></p>
                <span className="font-family" style={{backgroundColor: "#3B3B3B", padding: "15px", fontSize: "35px", color: "white", marginLeft: "-10px", marginRight: "40px"}}>DOWN</span>
                <span className="font-family" style={{backgroundColor: "#3B3B3B", padding: "15px", fontSize: "35px", color: "white", marginRight: "40px"}}>TO GO</span>
                <span className="font-family" style={{backgroundColor: "#3B3B3B", padding: "15px", fontSize: "35px", color: "white"}}>QTR</span>
                <p></p>
                <span className="font-family" style={{padding: "10px", fontSize: "50px", color: "white", marginRight: "105px"}}>{this.state.downs}</span>
                <span className="font-family" style={{padding: "10px", fontSize: "50px", color: "white", marginRight: "95px"}}>{this.state.yardsToGo}</span>
                <span className="font-family" style={{padding: "10px", fontSize: "50px", color: "white"}}>{this.state.quarter}</span>
                <p></p>
                <button className="btn-secondary m-1" style={{fontFamily: "Inconsolata"}} onClick={this.handleHomeIncrement}>Increment Home Score</button>
                <button className="btn-secondary m-1" style={{fontFamily: "Inconsolata"}} onClick={this.handleAwayIncrement}>Increment Away Score</button>
                <p></p>
                <button className="btn-secondary m-1" style={{fontFamily: "Inconsolata"}} onClick={this.handleHomeDecrement}>Decrement Home Score</button>
                <button className="btn-secondary m-1" style={{fontFamily: "Inconsolata"}} onClick={this.handleAwayDecrement}>Decrement Away Score</button>
                <p></p>
                <button className="btn-secondary m-1" style={{fontFamily: "Inconsolata"}} onClick={this.handleDownsIncrement}>Increment Downs</button>
                <button className="btn-secondary m-1" style={{fontFamily: "Inconsolata"}} onClick={this.handleYardsIncrement}>Increment Yards To Go</button>
                <button className="btn-secondary m-1" style={{fontFamily: "Inconsolata"}} onClick={this.handleQuarterIncrement}>Increment Quarter</button>
                <p></p>
                <button className="btn-secondary m-1" style={{fontFamily: "Inconsolata"}} onClick={this.handleDownsDecrement}>Decrement Downs</button>
                <button className="btn-secondary m-1" style={{fontFamily: "Inconsolata"}} onClick={this.handleYardsDecrement}>Decrement Yards To Go</button>
                <button className="btn-secondary m-1" style={{fontFamily: "Inconsolata"}} onClick={this.handleQuarterDecrement}>Decrement Quarter</button>
                <p></p>
                <button className="btn-secondary m-1" style={{fontFamily: "Inconsolata"}} onClick={this.handlePauseTimer}>Start/Pause Timer</button>
                <button className="btn-secondary m-1" style={{fontFamily: "Inconsolata"}} onClick={this.handleAddOnTimer}>Add 15 Seconds</button>
                <button className="btn-secondary m-1" style={{fontFamily: "Inconsolata"}} onClick={this.handleResetTimer}>Reset Timer</button>
                <p></p>
                <button className='btn-secondary m-1' style={{fontFamily: "Inconsolata"}} onClick={this.handlePossessionChange}>Change Possession</button>
                <p></p>
            </div>
        );
    }

    handleHomeIncrement = () => {
        this.setState({ homeScore: this.state.homeScore + 1});
        console.log("home score increased");
    }

    handleAwayIncrement = () => {
        this.setState({ awayScore: this.state.awayScore + 1});
        console.log("away score increased");
    }

    handleTimerZeros = () => {
        if (this.state.minutesCount < 10 && this.state.secondsCount < 10) {
            return <span className="timer">0{this.state.minutesCount}:0{this.state.secondsCount}</span>
        } else {
            if (this.state.minutesCount < 10) {
                return <span className="timer">0{this.state.minutesCount}:{this.state.secondsCount}</span>
            } else {
                if (this.state.secondsCount < 10) {
                    return <span className="timer">{this.state.minutesCount}:0{this.state.secondsCount}</span>
                }
            }
        }
        return <span className="timer">{this.state.minutesCount}:{this.state.secondsCount}</span>
    }

    handleDownsIncrement = () => {
        this.setState({ downs: this.state.downs + 1});
        console.log("downs increased");
    }

    handleYardsIncrement = () => {
        this.setState({ yardsToGo: this.state.yardsToGo + 1});
        console.log("yards to go increased");
    }

    handleQuarterIncrement = () => {
        this.setState({ quarter: this.state.quarter + 1});
        console.log("quarter increased");
    }

    handleHomeDecrement = () => {
        if (this.state.homeScore !== 0) {
            this.setState({ homeScore: this.state.homeScore - 1});
            console.log("home score decreased");
        } else {
            console.log("cannot decrease home score below zero");
        }
    }

    handleAwayDecrement = () => {
        if (this.state.awayScore !== 0) {
            this.setState({ awayScore: this.state.awayScore - 1});
            console.log("away score decreased");
        } else {
            console.log("cannot decrease away score below zero");
        }
    }

    handlePossessionChange = () => {
        if (this.state.possession === "HOME") {
            this.setState({possession: "AWAY"});
            console.log("away has possession");
        } else {
            this.setState({possession: "HOME"});
            console.log("home has possession");
        }
    }

    handleDownsDecrement = () => {
        if (this.state.downs !== 0) {
            this.setState({ downs: this.state.downs - 1});
            console.log("downs decreased");
        } else {
            console.log("cannot decrease downs below zero");
        }
    }

    handleYardsDecrement = () => {
        if (this.state.yardsToGo !== 0) {
            this.setState({ yardsToGo: this.state.yardsToGo - 1});
            console.log("yards decreased");
        } else {
            console.log("cannot decrease yards below zero");
        }
    }

    handleQuarterDecrement = () => {
        if (this.state.quarter !== 0) {
            this.setState({ quarter: this.state.quarter - 1});
            console.log("quarter decreased");
        } else {
            console.log("cannot decrease quarter below zero");
        }
    }

    handlePauseTimer = () => {
        this.setState({isPaused: !(this.state.isPaused)});
        console.log("timer is paused");
    }

    handleAddOnTimer = () => {
        this.setState({secondsCount: this.state.secondsCount + 15});
        console.log("15 seconds have been added to the timer");
    }

    handleResetTimer = () => {
        this.setState({minutesCount: 15});
        this.setState({secondsCount: 0});
        console.log("timer has been reset");
    }

    componentDidMount() {
        this.myInterval = setInterval(() => {
            if (this.state.secondsCount > 60) {
                var extraMinutes = 0;
                while (this.state.secondsCount > 60) {
                    this.setState({ secondsCount: this.state.secondsCount - 60});
                    extraMinutes += 1;
                }
                this.setState({ minutesCount: this.state.minutesCount + extraMinutes});
            }

            if (this.state.isPaused === false) {
                this.setState(prevState => ({
                    secondsCount: prevState.secondsCount - 1
                }))
            }
            
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
 
export default Scoreboard;
