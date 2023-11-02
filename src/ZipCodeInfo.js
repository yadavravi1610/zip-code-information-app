import React, { useState } from 'react'

function ZipCodeInfo() {
    const [zipCode, setZipcode] = useState('');
    console.log(zipCode);

    async function fetchLocationData(zipCode) {
        try {
            const response = await fetch(`https://api.zippopotam.us/in/${zipCode}`);
            const data = await response.json();
            console.log(data);

        } catch (error) {
            console.log(error.message);
        }
    }
    const handleSubmit = async (e) => {
        e.preventDefault();
        fetchLocationData(zipCode);
        setZipcode("");
    }

    return (
        <div className='w-auto h-5/6 flex flex-col gap-5 items-center py-40 '>
            <h1 className='text-4xl text-lime-400 font-semibold'>Enter Your Pin Code</h1>
            <form className='flex gap-5' onSubmit={handleSubmit}>
                <input type='text' maxLength={6} value={zipCode} onChange={(e) => {
                    setZipcode(e.target.value);
                }} className='w-72 h-8 border border-black rounded-md pl-2' placeholder='Enter your Zip code' />
                <button type='submit' className='w-28 h-8 border border-black rounded-md bg-emerald-400 hover:bg-emerald-300'>Submit</button>
            </form>
        </div>
    )
}

export default ZipCodeInfo;