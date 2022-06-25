import React, { useEffect, useState } from 'react'
import axios from 'axios'

const Goldenboot = () => {

    const [goalsScorers, setGoalScorers] = useState([])
    const fetchGoals = async () => {
        const response = await axios.get('https://enfuego.herokuapp.com/goalscorers')
        console.log(response.data);
        setGoalScorers(response.data)
    }
    useEffect(() => {
        fetchGoals()
    }, [])

    return (
        <div className='overflow-y-scroll'>
            <h3 className='text-center text-2xl font-bold mb-6'>Goal Scorers</h3>
            <div className='grid grid-cols-6 text-xl font-bold border-b-2 mx-4 mb-8 pb-4 border-black'>
                <div className="col-span-3">Name</div>
                <div className="col-span-2">Team</div>
                <div className="col-span-1">Goals</div>

            </div>
            {goalsScorers.map((data) => (
                <div className='grid grid-cols-6 mt-4 pb-4 border-b-2 mx-4 pb-4'>
                    <div className="col-span-3"> {data.name} </div>
                    <div className="col-span-2 "> {data.team_id}</div>
                    <div className="col-span-1 text-center">{data.goalsscored}</div>

                </div>
            ))}
        </div>

    )
}

export default Goldenboot