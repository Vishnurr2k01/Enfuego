import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Fixturecard from './cards/Fixturecard'
import loadingimg from '../assets/loading.gif'
const Fixtures = () => {
  const [fixtures, setFixtures] = useState()
  const [loading, setLoading] = useState(true)

  const fetchFixture = async () => {
    const response = await axios.get('https://enfuego.herokuapp.com/completefixtures')
    setFixtures(response.data)
    console.log(response.data)
    setLoading(false)
  }
  useEffect(() => {
    fetchFixture()
  }, [])

  return (
    <div className='overflow-y-scroll'>
      {loading ? <>
        <div className="flex justify-center">
          <img src={loadingimg} alt="" className='flex items-center justify-center w-[20rem]'/>
          
        </div>
      </> : <>
      <h3 className='text-center text-2xl font-bold mb-6 text-white'>Fixtures</h3>
      
        {fixtures?.map((data, key) => (
          <Fixturecard data={data} />
        ))}
      </>}


    </div>
  )
}

export default Fixtures