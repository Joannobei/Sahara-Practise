import React from 'react'
import PopUpData from './PopUpData'
import { dataAnalytics } from '../../../assets'
const DataAnalytics = () => {
    return (
        <div className="div lg:w-[34%] relative">
            <img className=' peer hover:ease-in transition-all duration-700   m-auto lg object-fit ' src={dataAnalytics} alt="" />

            <PopUpData />
        </div>
    )
}

export default DataAnalytics