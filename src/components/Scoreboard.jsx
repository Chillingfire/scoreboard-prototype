import React, { Component } from 'react';

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

    render() { 
        return (
            <div className="text-center">
                <span className="text-center">
                    <span style={{backgroundColor: "orange", padding: "20px", fontSize: "50px", font: "Orbitron-ExtraBold.ttf"}}>{this.state.homeTeamName}</span>
                    <span style={{padding: "20px", fontSize: "60px"}}>{this.state.timeRemainingMinutes}:{this.state.timeRemainingSeconds}</span>
                    <span style={{backgroundColor: "orange", padding: "20px", fontSize: "50px"}}>{this.state.awayTeamName}</span>
                </span>
                <p></p>
                <span style={{padding: "10px", fontSize: "50px", marginRight: "310px"}}>{this.state.homeScore}</span>
                <span style={{padding: "10px", fontSize: "50px"}}>{this.state.awayScore}</span>
                <p></p>
                <button className="btn-secondary m-2" onClick={this.handleHomeIncrement}>Increment Home Score</button>
                <button className="btn-secondary m-2" onClick={this.handleAwayIncrement}>Increment Away Score</button>
                <p></p>
                <button className="btn-secondary m-2" onClick={this.handleHomeDecrement}>Decrement Home Score</button>
                <button className="btn-secondary m-2" onClick={this.handleAwayDecrement}>Decrement Away Score</button>
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
        if (this.state.homeScore != 0) {
            this.setState({ homeScore: this.state.homeScore - 1});
            console.log("home score decreased");
        } else {
            console.log("cannot decrease home score below zero");
        }
        
    }

    handleAwayDecrement = () => {
        if (this.state.awayScore != 0) {
            this.setState({ awayScore: this.state.awayScore - 1});
            console.log("away score decreased");
        } else {
            console.log("cannot decrease away score below zero");
        }
    }
}
 
export default Scoreboard;


