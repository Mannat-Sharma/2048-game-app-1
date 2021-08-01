import React from "react"

const Leaderboard = ()=>{
    return(
        <div className="leaderboard">
            <h1>LeaderBoard</h1>            
            <ol>
                <PlayerData name={'hello'} score={"44"}/>
                <PlayerData name={'hello'} score={"44"}/>
                <PlayerData name={'hello'} score={"44"}/>
                <PlayerData name={'hello'} score={"44"}/>
                <PlayerData name={'hello'} score={"44"}/>
            </ol>
        </div>
    )
}

const PlayerData = ({name, score})=>{
    return(
        <>
            <li>
                <span className="player-name">{name}</span>
                <span className="player-score">{score}</span>
            </li>
        </>
    )
}

export default Leaderboard;