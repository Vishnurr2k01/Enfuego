import axios from 'axios'
import React, { useEffect, useState } from 'react'

const Rules = () => {
  const [rules, setRules] = useState([])

  useEffect(() => {
    axios.get('https://enfuego.herokuapp.com/guidelines').then((res) => {
      setRules(res.data)
      console.log(res.data)
    }).catch((err) => console.log(err))
  }, [])
  return (
    <div>
    <h3 className='text-center text-2xl font-bold mb-6'>Guidelines</h3>
      {rules.map((data,key)=>(
        <div key={key} className="mx-4 text-xl mt-2">
          <li> {data.rule} </li>
        </div>
      ))}
    </div>
  )
}

export default Rules