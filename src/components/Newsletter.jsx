import React from 'react';

import { styles } from '../styles';

const Newsletter = () => {
    return (
        <div className='text-white py-16 w-full px-4'>
            <div className='max-w-[1240px] mx-auto grid md:grid-cols-3 px-8 lg:px-0 items-center md:items-start xl:items-center'>
                <div className='md:col-span-2'>
                    <h1 className={`${styles.headingOne}`}>Want more tips<br className='sm:hidden'/> to optimize your flow?</h1>
                    <p>Sign up to our newsletter and stay up to date.</p>
                </div>

                <div className='my-4 flex flex-col justify-between w-full'>
                    <div className='flex w-full items-center md:flex-col xl:flex-row'>
                        <input className='px-2 w-full h-[48px] rounded-md text-black' type="email" placeholder='Enter Email'/>
                        <button className={`${styles.buttonBase} text-black green-bg ml-2 md:ml-0 xl:ml-2`}>Notify Me</button>
                    </div>
                    <p>We care about the protection of your data. <span className='green-text'>Read our Privacy Policy</span>.</p>
                </div>
            </div>
        </div>
    )
}

export default Newsletter