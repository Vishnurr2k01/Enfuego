import React, { useEffect, useState } from 'react'
import axios from 'axios'
import loadingimg from '../assets/loading.gif'


const Goldenboot = () => {

    const [goalsScorers, setGoalScorers] = useState([])
    const [loading, setLoading] = useState(true)
    const fetchGoals = async () => {
        const response = await axios.get('https://enfuego.herokuapp.com/goalscorers')
        console.log(response.data);
        setGoalScorers(response.data)
        setLoading(false)
    }
    useEffect(() => {
        fetchGoals()
    }, [])

    return (

        <div className='overflow-y-scroll'>
            {loading ? <>
                <div className="flex justify-center h-screen w-screen">
                    <img src={loadingimg} alt="" className=' card flex items-center justify-center h-[20rem]' />

                </div>
            </> : <>
                <h3 className='text-center font-headers text-2xl font-bold mb-6 text-white'>Goal Scorers</h3>
            <div className='card font-content mx-4 md:mx-80'>
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
            </>}

        </div>

    )
}

export default Goldenboot