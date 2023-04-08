import React from 'react'

import { styles } from '../styles';
import Single from './assets/single.png';
import Double from './assets/double.png';
import Triple from './assets/triple.png';

const Card = ({ iconType, userType, price, storage, standout }) => {
    return (
        <div className={`w-[85%] md:w-full mx-auto border shadow-xl flex flex-col p-4 my-10 md:my-4 rounded-lg hover:scale-105 duration-300 ${standout?'bg-gray-100':'bg-white'}`}>
            <div className='w-[105px] h-[100px] border-b-[2px] rounded-full mt-[-4rem] mx-auto bg-white'></div>
            <img className={`w-20 mx-auto mt-[-93px]`} src={iconType} alt="single" />
            <h2 className='text-2xl font-bold text-center py-8'>{userType} User</h2>
            <p className='text-center text-4xl font-bold'>${price}</p>
            <div className='text-center font-medium py-8'>
                <p className='py-2 border-y mx-8'>{storage}</p>
                <p className='py-2 border-b mx-8'>1 Granted User</p>
                <p className='py-2 border-b mx-8'>Send up to 2 GB</p>
            </div>
            <button className={`${styles.buttonBase} green-text bg-black hover:bg-green-400 hover:text-black`}>Start Trial</button>
        </div>
    )
}

const Cards = () => {
    return (
        <div className='w-full py-[10rem] px-4 bg-white'>
            <div className='justify-center items-center max-w-[1240px] mx-auto grid grid-cols-1 md:grid-cols-3 gap-6'>
                <Card iconType={Single} price={149} userType={"Single"} storage={"500 GB"} standout={false}/>
                <Card iconType={Double} price={500} userType={"Single"} storage={"1 TB"} standout={true}/>
                <Card iconType={Triple} price={500} userType={"Single"} storage={"1 TB"} standout={false}/>
            </div>
        </div>
    )
}

export default Cards