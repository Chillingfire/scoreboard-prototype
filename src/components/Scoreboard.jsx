import React, { Component } from 'react';
import './styles.css';

class Scoreboard extends React.Component {
    state = {
        gameStatus: "scheduled",
        homeTeamName: "HOME",
        awayTeamName: "AWAY",
        timeRemainingMinutes: 13,
        timeRemainingSeconds: 54,
        homeScore: 0,
        awayScore: 0
    };

//#424549"

    render() { 
        return (
            <div className="text-center" style={{backgroundColor: "#424549"}}>
                <span className="font-family" style={{backgroundColor: "#23272A", padding: "25px", fontSize: "50px", color: "white"}}>{this.state.homeTeamName}</span>
                <span className="font-family" style={{padding: "20px", fontSize: "60px", color: "white"}}>{this.state.timeRemainingMinutes}:{this.state.timeRemainingSeconds}</span>
                <span className="font-family" style={{backgroundColor: "#23272A", padding: "25px", fontSize: "50px", color: "white"}}>{this.state.awayTeamName}</span>
                <p></p>
                <span className="font-family" style={{padding: "10px", fontSize: "50px", marginRight: "285px", color: "white"}}>{this.state.homeScore}</span>
                <span className="font-family" style={{padding: "10px", fontSize: "50px", color: "white"}}>{this.state.awayScore}</span>
                <p></p>
                <button className="btn-secondary m-2" style={{fontFamily: "Inconsolata"}} onClick={this.handleHomeIncrement}>Increment Home Score</button>
                <button className="btn-secondary m-2" style={{fontFamily: "Inconsolata"}} onClick={this.handleAwayIncrement}>Increment Away Score</button>
                <p></p>
                <button className="btn-secondary m-2" style={{fontFamily: "Inconsolata"}} onClick={this.handleHomeDecrement}>Decrement Home Score</button>
                <button className="btn-secondary m-2" style={{fontFamily: "Inconsolata"}} onClick={this.handleAwayDecrement}>Decrement Away Score</button>
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
}
 
export default Scoreboard;


