import React from 'react'
import '../../App.css'

function formatDate (input) {
    var datePart = input.match(/\d+/g),
    year = datePart[0].substring(2), // get only two digits
    month = datePart[1], day = datePart[2];
  
    return day+'/'+month+'/'+year;
  }
const Fixturecard = ({data}) => {
    
  return (
    <div className="card font-content border-2 m-4 px-8 py-2 rounded lg:mx-52" >
    <h3 className='text-center text-xl font-semibold'>Match No : {data.matchnumber}</h3>
    <div className="flex text-2xl justify-between mt-4 px-4">
   <div className="flex font-semibold ">
   <h2 className=''> {data.teama_id} </h2>
    <h2 className='ml-16'> {data.finished? data.scorea : '-'} </h2>
   </div>
    <div className="flex font-semibold ">
   <h2 className='mr-16'>{data.finished? data.scoreb : '-'}</h2>
    <h2 className=''>{data.teamb_id} </h2>
   </div>
    </div>
    <h3 className='text-center text-xl  mt-4'>Date : <span className='font-semibold'> {formatDate(data.date)}</span> </h3>
  </div>
  )
}

export default Fixturecard