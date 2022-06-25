import axios from 'axios'
import React, { useEffect, useState } from 'react'

const Pointtable = () => {
    const [table, setTable] = useState([])

    // const fetchTable = async () => {

    //     const response = await axios.get('https://enfuego.herokuapp.com/pointtable')
    //     setTable(response.data)
    // }
    // useEffect(() => {
    //     fetchTable()
    // }, [table])
    axios.get('https://enfuego.herokuapp.com/pointtable').then(res => setTable(res.data)).catch(err => console.log(err))
    return (
        <div className="md:flex items-center justify-center mx-8">
            <div className=''>
                <div className='grid grid-cols-8 mb-8  md:text-xl font-bold xs:w-screen md:w-[50rem] border-b-2 border-black pb-4'>
                    <div className="col-span-3 md:pl-16 ">
                        Team
                    </div>
                    <div className=" col-span-1">M</div>
                    <div className=" col-span-1">W</div>
                    <div className=" col-span-1">GD</div>
                    <div className=" col-span-1">GS</div>
                    <div className=" col-span-1">Pts</div>

                </div>
                {table.map((data) => (
                    <div className='grid grid-cols-8 mt-4 md:w-[50rem] border-b-2 pb-4'>
                        <div className="col-span-3 md:text-xl  font-semibold md:pl-12">
                            {data.team_id}
                        </div>
                        <div className=" col-span-1 ">{data.gamesplayed}</div>
                        <div className=" col-span-1">{data.gameswon}</div>
                        <div className=" col-span-1">{data.goaldifference}</div>
                        <div className=" col-span-1">{data.goalsscored}</div>
                        <div className=" col-span-1">{data.points}</div>

                    </div>

                ))}
            </div>
        </div>
    )
}

export default Pointtable