import React from 'react'
import MatchData from "../data/data.json"
import Cards from './Cards'


function ScoreCard() {

    const { match_result, teams, player_of_the_match } = MatchData
    return (
        <>
        <div className='score-card'>
            <div className='d-flex justify-content-between align-items-center '>
                <div className='d-flex gap-3 align-items-center col-lg-8'>
                    <h2 className='result'>RESULT</h2>
                    <h2 className='match-winner'>{match_result.winner} Won by {match_result.win_by}</h2>
                </div>
                <div className='d-flex col-lg-4 justify-content-end'>
                    <h2 className='pom'>Player of the Match: {player_of_the_match}</h2>
                </div>
            </div>
            <div>
                <div>
                    {teams.map((item,index)=>{
                        return (
                            <Cards img={item.img} abbreviation={item.abbreviation} win={item.win==="Y" ? "🏆":" "} score={item.score} overs={item.overs} key={index}/>
                        )
                    })}
                </div>
            </div>
        </div>
        </>
    )
}

export default ScoreCard
