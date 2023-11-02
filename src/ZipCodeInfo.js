import React from 'react'
const ZipCodeInfo = () => {
  return (
    <div>
        <form className='mx-[30%] flex'>
            <input type='text' placeholder='Enter your Zip code'/>
            <button type='submit'>Submit</button>
        </form>
    </div>
  )
}

export default ZipCodeInfo