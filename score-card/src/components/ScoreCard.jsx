import React from 'react'
import MatchData from "../data/data.json"

function ScoreCard() {

    const { match_result, teams, player_of_the_match } = MatchData
    return (
        <>
            {/* <div className='row justify-content-between align-items-center score-card'>
                <div className='d-flex gap-3 align-items-center col-lg-8'>
                    <h2 className='fs-6 result'>RESULT</h2>
                    <h2 className='fs-6 match-winner'>{match_result.winner} Won by {match_result.win_by}</h2>
                </div>
                <div className='d-flex col-lg-4 justify-content-end'>
                    <h2 className='fs-6 pom'>Player of the Match:{player_of_the_match}</h2>
                </div>
            </div> */}
            <div className='row score-card'>
                <div className='col-lg-2'>
                    <h2 className='fs-6 result text-center'>RESULT</h2>
                    <div className="col-lg-2">
                        <img src={teams} alt="" />
                    </div>

                </div>
                <div className='col-lg-6 align-items-center d-flex'>
                    <h2 className='fs-6 match-winner'>{match_result.winner} Won by {match_result.win_by}</h2>
                </div>
                <div className='col-lg-4 d-flex align-items-center justify-content-end'>
                    <h2 className='fs-6 pom'>Player of the Match:{player_of_the_match}</h2>
                </div>

            </div>
        </>
    )
}

export default ScoreCard
