import React, { useState } from 'react'
import LocationInfo from './LocationInfo';
import { RotatingLines } from "react-loader-spinner";

function ZipCodeInfo() {
    const [zipCode, setZipcode] = useState('');
    const [loading, setLoading] = useState(false);
    const [locationData, setLocationData] = useState(null);
    const [list, setList] = useState(false);
    const [errorMessage, setErrorMessage] = useState(false);
    console.log(zipCode);

    async function fetchLocationData(zipCode) {
        try {
            // const response = await fetch(`https://api.postalpincode.in/pincode/${zipCode}`);
            const response = await fetch(`https://api.zippopotam.us/in/${zipCode}`);
            if(response.status === 200){
                const data = await response.json();
                setLoading(false);
                    setLocationData(data);
                    setList(true);
            }
            else{
                setLoading(false);
                setErrorMessage(true);
            }
           
        } catch (error) {
            console.log(error.message);
        }
    }
    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        fetchLocationData(zipCode);
        setZipcode("");
    }

    return (
        <div className='w-[70%] my-20 bg-[#ffffff] mx-auto h-auto py-10 flex flex-col gap-5 items-center rounded-md'>
            <h1 className='text-2xl text-lime-400 font-semibold'>Enter Your Pin Code</h1>
            <hr />
            <form className='flex flex-col gap-5' onSubmit={handleSubmit}>
                <input type='text' maxLength={6} value={zipCode} onChange={(e) => {setZipcode(e.target.value);}} className='w-52 h-8 border border-black rounded-md pl-2' placeholder='Enter your Zip code' />
                <button type='submit' className='mx-auto w-28 h-8 border border-black rounded-md bg-emerald-400 hover:bg-emerald-300'>Submit</button>
            </form>
            {
                loading && <div className='w-auto h-auto'>
                    <RotatingLines
                        strokeColor="#febd69"
                        strokeWidth="5"
                        animationDuration="0.75"
                        width="50"
                        visible={true}
                    />
                </div>
            }
            {
                list && <LocationInfo data={locationData} />
            }
            {
                errorMessage && <div className='w-auto h-auto'>
                    <h1 className='text-red-500'>Location Not Found</h1>
                </div>
            }

        </div>
    )
}

export default ZipCodeInfo;