

import React from 'react'

const LocationInfo = (props) => {
    const { data } = props;
    console.log(data);
    return (
    <div className='w-40 h-auto'>
        <h1>Country : {data.country}</h1>
        <h1>State: {data.places[0].state}</h1>
        <h1>Place: {data.places[0]['place name']}</h1>
         {/* <h1>Country : {data[0].PostOffice[0].Country}</h1>
        <h1>State: {data[0].PostOffice[0].State}</h1>
        <h1>Place: {data[0].PostOffice[0].District}</h1> */}
    </div>
  )
}

export default LocationInfo
