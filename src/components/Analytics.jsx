import React from 'react';
import Laptop from './assets/laptop.jpg';
import { styles } from '../styles';

const Analytics = () => {
    return (
        <div className='w-full bg-white py-16 px-4'>
            <div className='max-w-[1240px] mx-auto grid md:grid-cols-2'>
                <img className='w-[500px] mx-auto my-4' src={Laptop} alt="laptop" />
                <div className='flex flex-col justify-center px-8'>
                    <p className='green-text font-bold uppercase'>DATA ANALYTICS DASHBOARD</p>
                    <h1 className={`${styles.headingOne}`}>Manage Data<br/> Analytics Centrally</h1>
                    <p>
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Animi neque suscipit molestias earum! Iusto repudiandae voluptatum quae facere corrupti error, a ab expedita veniam quisquam. Rerum reprehenderit doloremque enim magnam.
                    </p>

                    <button className={`${styles.buttonBase} bg-black green-text`}>
                        Get Started
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Analytics