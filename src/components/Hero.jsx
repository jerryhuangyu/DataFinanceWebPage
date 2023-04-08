import React from 'react';
import Typed from 'react-typed';

import { styles } from '../styles';

const Hero = () => {
    return (
        <div className='text-white'>
            <div className='max-w-[800px] mt-[-96px] w-full h-screen mx-auto text-center flex flex-col justify-center'>
                <p className='green-text font-bold'>GROWING WITH DATA ANALYTICS</p>
                <h1 className='text-4xl sm:text-6xl md:text-7xl font-bold sm:py-6 py-2'>Grow with data.</h1>
                <div className='flex justify-center items-center pb-2'>
                    <p className='text-xl sm:text-4xl md:text-5xl'>Fast, flexible financing for&nbsp;</p>
                    <Typed 
                        className='text-xl sm:text-4xl md:text-5xl text-gray-400'
                        strings={['BTB', 'BTC', 'SASS']}
                        typeSpeed={120}
                        backSpeed={100}
                        loop/>
                </div>
                <p className='text-xl md:text-2xl text-gray-500 px-6'>
                    Monitor your data analytics to increase revenue for BTB, BTC & SASS platforms.
                </p>

            <button className={`${styles.buttonBase} green-bg text-black`}>
                Get Started
            </button>
            </div>
        </div>
    )
}

export default Hero