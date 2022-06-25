import axios from 'axios'
import React, { useEffect, useState } from 'react'
import loadingimg from '../assets/loading.gif'
import Fixturecard from './cards/Fixturecard'
import bg from '../assets/bg.png'
import '../App.css'
const Pointtable = () => {
    const [table, setTable] = useState([])
    const [loading, setLoading] = useState(true)
    const [team, setTeam] = useState([])

    const fetchTable = async () => {

        const response = await axios.get('https://enfuego.herokuapp.com/pointtable')
        setTable(response.data)
        setLoading(false)
        console.log(response.data);
    }
    useEffect(() => {
        fetchTable()
    }, [])
    // axios.get('https://enfuego.herokuapp.com/pointtable').then(res => {
    //     setTable(res.data)
    //     setLoading(false)
    //     console.log(res.data)
    // }).catch(err => console.log(err))

    // const clickHandler = (name) => {
    //     var selectedTeam = name

    //     axios.get(`https://enfuego.herokuapp.com/specificfixtures/?team=${selectedTeam}`).then(res => {
    //         console.log(res.data)
    //         setTeam(res.data)

    //     }).catch(err => console.log(err))
    // }

    // const fixtureSpecific = (data) => {
    //     return (
    //         <div className="">
    //             {data.map((datas,key) => (
    //                 <Fixturecard data={datas} />
    //             ))}
    //         </div>
    //     )
    // }
    // useEffect(() => {
    //     fixtureSpecific(team)
    // }, [team])
    return (
        <div className="card md:flex items-center justify-center mx-4 md:mx-52">
            {loading ? <>
                <div className="flex justify-center">
                    <img src={loadingimg} alt="" className='flex items-center justify-center w-[20rem]' />

                </div>
            </> : <>
                <div className=''>
                    <h3 className='text-center text-2xl font-bold mb-6'>League Standings</h3>
                    <div className='grid grid-cols-8 mb-8  md:text-xl font-bold xs:w-screen md:w-[50rem] border-b-2 border-black pb-4'>
                        <div className="col-span-2 md:pl-16 ">
                            Team
                        </div>
                        <div className=" col-span-1">M</div>
                        <div className=" col-span-1">W</div>
                        <div className=" col-span-1">L</div>
                        <div className=" col-span-1">GD</div>
                        <div className=" col-span-1">GS</div>
                        <div className=" col-span-1">Pts</div>

                    </div>
                    {table?.map((data) => (
                        <div className='grid grid-cols-8 mt-4 md:w-[50rem] border-b-2 pb-4'>
                            <div className="col-span-2 md:text-xl font-semibold md:pl-12">
                                {data.team_id}
                            </div>
                            <div className=" col-span-1 ">{data.gamesplayed}</div>

                            <div className=" col-span-1">{data.gameswon}</div>
                            <div className=" col-span-1 ">{data.gameslost}</div>
                            <div className=" col-span-1">{data.goaldifference}</div>
                            <div className=" col-span-1">{data.goalsscored}</div>
                            <div className=" col-span-1">{data.points}</div>

                        </div>

                    ))}
                    <p className='mt-8 text-center'>
                        M : Matches &nbsp;&nbsp;
                        W : Wins &nbsp;&nbsp;
                        L : Loses &nbsp;&nbsp;
                        GD : Goal Difference &nbsp;&nbsp;
                        GS : Goal Scored &nbsp;&nbsp;
                        Pts : Points
                    </p>
                </div>
            </>}

        </div>
    )
}


export default Pointtable