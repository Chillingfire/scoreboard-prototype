import React, { Component } from 'react';

class Scoreboard extends React.Component {
    state = {
        gameStatus: "scheduled",
        homeTeamName: "HOME_NAME",
        awayTeamName: "AWAY_NAME",
        timeRemainingMinutes: 0,
        timeRemainingSeconds: 0,
        homeScore: 0,
        awayScore: 0
    };

    render() { 
        return (
            <div>
                <h1>{this.state.homeTeamName} {this.state.awayTeamName}</h1>
                <h1>{this.state.homeScore} {this.state.timeRemainingMinutes}:{this.state.timeRemainingSeconds} {this.state.awayScore}</h1>
            </div>
        );
    }
}
 
export default Scoreboard;


