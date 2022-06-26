import axios from 'axios'
import React, { useEffect, useState } from 'react'
import loadingimg from '../assets/loading.gif'

const Rules = () => {
  const [rules, setRules] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    axios.get('https://enfuego.herokuapp.com/guidelines').then((res) => {
      setRules(res.data)

      setLoading(false)
    }).catch((err) => console.log(err))
  }, [])
  return (
    <div className='md:flex flex-col justify-center items-center'>
      {loading ? <>
        <div className="flex justify-center">
          <img src={loadingimg} alt="" className='flex items-center justify-center w-[20rem]' />

        </div>
      </> : <>
        <h3 className='text-center font-headers text-2xl font-bold mb-6 text-white'>Guidelines</h3>

        <div className="card font-content mx-4 md:w-[40rem]">
          {rules.map((data, key) => (
            <div key={key} className="mx-4 text-xl mt-2">
              <li> {data.rule} </li>
            </div>
          ))}
        </div>
      </>}
    </div>
  )
}

export default Rules