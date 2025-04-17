import React from 'react'
import MatchData from "../data/data.json"
import Cards from './Cards'


function ScoreCard() {
    
    return (
        <>
            <div className='score-card'>
                <div className='d-flex justify-content-between align-items-center '>
                    <div className='d-flex gap-3 align-items-center col-lg-8'>
                        <h2 className='result'>RESULT</h2>
                        <h2 className='match-winner'>{MatchData.match_result.winner} Won by {MatchData.match_result.win_by}</h2>
                    </div>
                    <div className='d-flex col-lg-4 justify-content-end'>
                        <h2 className='pom'>Player of the Match: {MatchData.player_of_the_match}</h2>
                    </div>
                </div>
                <div>
                    <div>
                        {MatchData.teams.map((item, index) => {
                            return (
                                <Cards img={item.img} abbreviation={item.abbreviation} win={item.win === "Y" ? "🏆" : " "} score={item.score} overs={item.overs} key={index} />
                            )
                        })}
                    </div>
                </div>
            </div>
        </>
    )
}

export default ScoreCard
