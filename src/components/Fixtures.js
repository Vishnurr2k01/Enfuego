import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Fixturecard from './cards/Fixturecard'

const Fixtures = () => {
  const [fixtures, setFixtures] = useState()

  const fetchFixture = async () => {
    const response = await axios.get('https://enfuego.herokuapp.com/completefixtures')
    setFixtures(response.data)
    console.log(response.data);
  }
  useEffect(() => {
    fetchFixture()
  }, [])

  return (
    <div className='overflow-y-scroll'>
      {fixtures?.map((data, key) => (
        <Fixturecard data={data} />
      ))}

    </div>
  )
}

export default Fixtures