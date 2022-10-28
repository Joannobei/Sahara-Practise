import React from 'react'
import { blockchain, cloud, cyberSecurity, dataServices, healthcare, hospitality, insurance, itServices, legal, logistics, retail, saas, web3 } from '../assets'
import { HiAcademicCap } from 'react-icons/hi'
import { FaChartLine } from 'react-icons/fa'
import { VscLaw } from 'react-icons/vsc'
import { RiHome4Fill, RiComputerLine } from 'react-icons/ri'
import { MdOtherHouses, MdBikeScooter, MdSecurity, MdPhonelink } from 'react-icons/md'
import { GiHealthNormal } from 'react-icons/gi'
import { FaRegHospital } from 'react-icons/fa'
import { MdOutlineDataExploration } from 'react-icons/md'
import { AiFillCloud } from 'react-icons/ai'
import { SiWebpack } from 'react-icons/si'
import { BsGlobe2 } from 'react-icons/bs'
import { GrSystem } from 'react-icons/gr'

const SectorsWeFocusOn = () => {
    return (
        <div className='lg:pt-[131px] pt-[88px] pb-[48px] lg:pb-[204px] space-y-2 text-center  '>

            <h1 className='font-bold text-[40px] w-[60%] m-auto lg:w-[100%] '>Sectors We Focus On</h1>
            <p className='lg:text-[32px] w-[80%] m-auto text-[20px] py-[26px] lg:py-[80px] '>We focus on serving IT companies and startups in;</p>
            <div className=" space-y-2 lg:space-y-0  lg:flex w-[50%] lg:w-[65%] m-auto justify-between ">
                <div className=" m-auto lg:m-0 cursor-pointer py-[19px] text-[#6B7280] hover:first:text-[#231f20] flex items-center gap-[16px] rounded-[20px] justify-center  lg:w-[18.5%] border-[1px] border-[#E5E7EB]  hover:border-[#6B7280] duration-300 ease-in-out ">
                    <p className=' '><HiAcademicCap size={24} /></p>
                    <h1 className=''>Education</h1>
                </div>
                <div className='cursor-pointer py-[19px] text-[#6B7280] hover:text-[#231f20] flex items-center gap-[16px] rounded-[20px] justify-center border-[1px] border-[#E5E7EB]  hover:border-[#6B7280] duration-300 ease-in-outobject-fit m-auto lg:m-0 lg:w-[26%]'>
                    <p className=""><FaChartLine size={24} /></p>
                    <h1 className=''>Financial Services</h1>
                </div>
                <div className='cursor-pointer py-[19px] text-[#6B7280] hover:text-[#231f20] flex items-center gap-[16px] rounded-[20px] justify-center border-[1px] border-[#E5E7EB]  hover:border-[#6B7280] duration-300 ease-in-outobject-fit m-auto lg:m-0 lg:w-[15%]'>
                    <p className=""><VscLaw size={24} /></p>
                    <h1 className=''>Legal</h1>
                </div>
                <div className='cursor-pointer py-[19px] text-[#6B7280] hover:text-[#231f20] flex items-center gap-[16px] rounded-[20px] justify-center border-[1px] border-[#E5E7EB]  hover:border-[#6B7280] duration-300 ease-in-outobject-fit m-auto lg:m-0 lg:w-[18%]'>
                    <p className=""><RiHome4Fill size={24} /></p>
                    <h1 className=''>Insurance</h1>
                </div>
            </div>
            <div className=" space-y-2 lg:space-y-0 lg:flex w-[50%] lg:w-[65%] m-auto justify-between ">
                <div className='cursor-pointer py-[19px] text-[#6B7280] hover:text-[#231f20] flex items-center gap-[16px] rounded-[20px] justify-center border-[1px] border-[#E5E7EB]  hover:border-[#6B7280] duration-300 ease-in-outobject-fit m-auto lg:m-0 lg:w-[27%]'>
                    <p className=""><MdOtherHouses size={24} /></p>
                    <h1 className=''>Retail/E-commerce</h1>
                </div>
                <div className='cursor-pointer py-[19px] text-[#6B7280] hover:text-[#231f20] flex items-center gap-[16px] rounded-[20px] justify-center border-[1px] border-[#E5E7EB]  hover:border-[#6B7280] duration-300 ease-in-outobject-fit m-auto lg:m-0 lg:w-[19%]'>
                    <p className=""><FaRegHospital size={24} /></p>
                    <h1 className=''>Hospitality</h1>
                </div>
                <div className='cursor-pointer py-[19px] text-[#6B7280] hover:text-[#231f20] flex items-center gap-[16px] rounded-[20px] justify-center border-[1px] border-[#E5E7EB]  hover:border-[#6B7280] duration-300 ease-in-outobject-fit m-auto lg:m-0 lg:w-[20%]'>
                    <p className=""><GiHealthNormal size={24} /></p>
                    <h1 className=''>Healthcare</h1>
                </div>
                <div className='cursor-pointer py-[19px] text-[#6B7280] hover:text-[#231f20] flex items-center gap-[16px] rounded-[20px] justify-center border-[1px] border-[#E5E7EB]  hover:border-[#6B7280] duration-300 ease-in-outobject-fit m-auto lg:m-0 lg:w-[20%]'>
                    <p className=""><MdOutlineDataExploration size={24} /></p>
                    <h1 className=''>Data Services</h1>
                </div>
            </div>

            <div className=" space-y-2 lg:space-y-0 lg:flex w-[50%] lg:w-[65%] m-auto justify-between ">
                <div className='lg:m-0 lg:w-[14.8%] py-[19px] cursor-pointer text-[#6B7280] hover:text-[#231f20] flex items-center gap-[16px] rounded-[20px] justify-center border-[1px] border-[#E5E7EB]  hover:border-[#6B7280] duration-300 ease-in-outobject-fit m-auto '>
                    <p className=""><BsGlobe2 size={24} /></p>

                    <h1 className=''>Web3</h1>
                </div>
                <div className='lg:m-0 lg:w-[14.4%] py-[19px] cursor-pointer text-[#6B7280] hover:text-[#231f20] flex items-center gap-[16px] rounded-[20px] justify-center border-[1px] border-[#E5E7EB]  hover:border-[#6B7280] duration-300 ease-in-outobject-fit m-auto '>
                    <p className=""><RiComputerLine size={24} /></p>
                    <h1 className=''>Saas</h1>
                </div>
                <div className='lg:m-0 lg:w-[15.8%] py-[19px] cursor-pointer text-[#6B7280] hover:text-[#231f20] flex items-center gap-[16px] rounded-[20px] justify-center border-[1px] border-[#E5E7EB]  hover:border-[#6B7280] duration-300 ease-in-outobject-fit m-auto '>
                    <p className=""><AiFillCloud size={24} /></p>
                    <h1 className=''>Cloud</h1>
                </div>
                <div className='lg:m-0 lg:w-[20%] py-[19px] cursor-pointer text-[#6B7280] hover:text-[#231f20] flex items-center gap-[16px] rounded-[20px] justify-center border-[1px] border-[#E5E7EB]  hover:border-[#6B7280] duration-300 ease-in-outobject-fit m-auto '>
                    <p className=""><SiWebpack size={24} /></p>
                    <h1 className=''>Blockchain</h1>
                </div>
                <div className='lg:m-0 lg:w-[17.6%] py-[19px] cursor-pointer text-[#6B7280] hover:text-[#231f20] flex items-center gap-[16px] rounded-[20px] justify-center border-[1px] border-[#E5E7EB]  hover:border-[#6B7280] duration-300 ease-in-outobject-fit m-auto '>
                    <p className=""><MdBikeScooter size={24} /></p>
                    <h1 className=''>Logistics</h1>
                </div>

            </div>
            <div className=" space-y-2 lg:space-y-0   lg:flex lg:w-[30%] m-auto justify-between ">
                <div className='lg:m-0 w-[48%] cursor-pointer py-[19px] text-[#6B7280] hover:text-[#231f20] flex items-center gap-[16px] rounded-[20px] justify-center border-[1px] border-[#E5E7EB]  hover:border-[#6B7280] duration-300 ease-in-outobject-fit m-auto '>
                    <p className=""><MdPhonelink size={24} /></p>
                    <h1 className=''>IT Serviced</h1>
                </div>
                <div className='lg:m-0 w-[48%] py-[19px] cursor-pointer text-[#6B7280] hover:text-[#231f20] flex items-center gap-[16px] rounded-[20px] justify-center border-[1px] border-[#E5E7EB]  hover:border-[#6B7280] duration-300 ease-in-outobject-fit m-auto '>
                    <p className=""><MdSecurity size={24} /></p>
                    <h1 className=''>Cybersecurity</h1>
                </div>
            </div>
        </div>
    )
}

export default SectorsWeFocusOn