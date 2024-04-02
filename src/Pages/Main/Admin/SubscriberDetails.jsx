import React, { useState } from 'react'
import BackButton from '../../../Components/BackButton'
import { Link } from 'react-router-dom'
import { IoIosArrowRoundForward } from 'react-icons/io'
import { LuListFilter } from 'react-icons/lu'
import { FiSearch } from 'react-icons/fi'
import { IoClose } from 'react-icons/io5'
import { Input } from 'antd'
import { FaCircleCheck } from 'react-icons/fa6'



const data = [
    {
        key: "1",
        designation: "Web Developers",
        vacancy: "6",
        start_date: "Dec 30, 2024 5:18",
        end_date: "Dec 30, 2024 5:18",
        total_date: "3 Days",
        status:"Active",
    },
    {
        key: "2",
        designation: "Designer",
        vacancy: "3",
        start_date: "Dec 30, 2024 5:18",
        end_date: "Dec 30, 2024 5:18",
        total_date: "3 Days",
        status:"Complete",
    },
    {
        key: "3",
        designation: "Motion",
        vacancy: "5",
        start_date: "Dec 30, 2024 5:18",
        end_date: "Dec 30, 2024 5:18",
        total_date: "3 Days",
        status:"Complete",
    },
    {
        key: "4",
        designation: "Executive",
        vacancy: "10",
        start_date: "Dec 30, 2024 5:18",
        end_date: "Dec 30, 2024 5:18",
        total_date: "3 Days",
        status:"Active",
    }
];
const SubscriberDetails = () => {
    const [search, setSearch] = useState("");
    return (
        <>
            {/* heading */}
            <div style={{marginBottom: "15px"}}>
                <BackButton link='/subscribers' />
            </div>


            <div className='bg-white p-6 rounded'>
                <h1 className='text-[20px] text-[#172740] font-medium mb-6'>About Subscriber</h1>

                <div className='flex items-center gap-6 my-6'>
                    <div className='w-[60%] bg-[#ECF1F8] h-[279px] rounded-lg p-6 flex gap-6'>
                        <img style={{width: "257px", height: "230px", border: "1px solid red", borderRadius: "8px"}} src="https://avatars.design/wp-content/uploads/2021/02/corporate-avatars-TN-1.jpg" alt="" />
                        <div className='w-full grid grid-cols-1 gap-7 text-[#565656]'>
                            <div className='flex items-center justify-between'>
                                <p className='w-[30%]'>Company Name</p>
                                <div className='w-[10%]'>:</div>
                                <p className='w-[50%]'>sfasdfdf</p>
                            </div>

                            <div className='flex items-center justify-between'>
                                <p className='w-[30%]'>Email</p>
                                <div className='w-[10%]'>:</div>
                                <p className='w-[50%]'>admin@gmail.com</p>
                            </div>

                            <div className='flex items-center justify-between'>
                                <p className='w-[30%]'>Phone</p>
                                <div className='w-[10%]'>:</div>
                                <p className='w-[50%]'>01756953936</p>
                            </div>

                            <div className='flex items-center justify-between'>
                                <p className='w-[30%]'>Country</p>
                                <div className='w-[10%]'>:</div>
                                <p className='w-[50%]'>Bangladesh</p>
                            </div>

                            <div className='flex items-center justify-between'>
                                <p className='w-[30%]'>Location</p>
                                <div className='w-[10%]'>:</div>
                                <p className='w-[50%]'>Banasree, Banasree, Banasree</p>
                            </div>
                        </div>
                    </div>
                    <div className='w-[40%] bg-[#ECF1F8] h-[279px] rounded-lg p-6 relative'>
                        <div className='flex items-center justify-between mb-6'>
                            <p className='w-[30%]'>Company Category</p>
                            <div className='w-[10%]'>:</div>
                            <p className='w-[50%]'>IT</p>
                        </div>

                        <div className='flex justify-between'>
                            <p className='w-[30%]'>Company Service</p>
                            <div className='w-[10%]'>:</div>
                            <div className='w-[50%] h-full'>
                                {
                                    ["Web Development", "Mobile App Development", "UX/UI", "Data Entry", "Graphs"].map((service, index)=>
                                        <p className='text-[14px] font-normal text-[#565656]'>{service}</p>
                                    )
                                }
                            </div>
                        </div>

                        <div className='absolute bottom-6 right-6'>
                            <Link to={`/company-details`}>
                                <button 
                                    className='
                                    w-[157px] 
                                    rounded-[100px] 
                                    py-2 
                                    text-[#436FB6] 
                                    border 
                                    border-[#436FB6]
                                    flex items-center justify-center gap-2
                                    '
                                    >
                                        See Details 
                                    <IoIosArrowRoundForward size={20} />
                                </button>
                            </Link>
                        </div>
                    </div>
                </div>

                <h1 className='text-[20px] text-[#172740] font-medium my-6'>Subscriber Package</h1>

                <div className='grid grid-cols-3 gap-6'>
                    <div className="bg-[#ECF1F8] rounded-lg p-6 flex items-center justify-center">
                        <div className='text-center'>
                            <p className='text-[24px] font-medium text-[#545454]'>Basic</p>
                            <p className='my-4 text-[#6C6C6C] text-[14px] font-normal'>Payment Package</p>
                            <h1 className='text-[#436FB6] font-bold text-[48px]'>$20</h1>
                        </div>
                    </div>

                    <div className="bg-[#ECF1F8] rounded-lg p-6">
                        <div className='flex items-center justify-between mb-4'>
                            <p className='w-[35%]'>Company Name</p>
                            <div className='w-[5%]'>:</div>
                            <p className='w-[75%]'>sfasdfdf</p>
                        </div>
                        <div className='flex items-center justify-between mb-4'>
                            <p className='w-[35%]'>Package</p>
                            <div className='w-[5%]'>:</div>
                            <p className='w-[75%]'>Basic</p>
                        </div>

                        <div className='flex items-center justify-between mb-4'>
                            <p className='w-[35%]'>Package Price</p>
                            <div className='w-[5%]'>:</div>
                            <p className='w-[75%]'>$500</p>
                        </div>

                        <div className='flex items-center justify-between mb-4'>
                            <p className='w-[35%]'>Date Form</p>
                            <div className='w-[5%]'>:</div>
                            <p className='w-[75%]'>$500</p>
                        </div>

                        <div className='flex items-center justify-between mb-4'>
                            <p className='w-[35%]'>Status</p>
                            <div className='w-[5%]'>:</div>
                            <p className='w-[75%] '>
                                <p className='w-[88px] h-[31px] rounded-[100px] flex items-center justify-center bg-[#B0ECB2] text-[#009B06]'>
                                    Active
                                </p>
                            </p>
                        </div>
                    </div>


                    <div className="bg-[#ECF1F8] rounded-lg p-6">
                        <h1 className='text-[#565656] mb-3'>Conditions :</h1>
                        <div className='grid grid-cols-1 gap-3'>
                            {
                                ["Data", "Data", "Data", "Data", "Data"].map((item, index)=>
                                    <div key={index} className="flex items-center gap-[10px]">
                                        <FaCircleCheck size={16} color="#00C208"/>
                                        <p className="text-[#6F6F6F]">{item}</p>
                                    </div>
                                )
                            }
                        </div>
                    </div>
                </div>


                <h1 className='my-4 text-[20px] font-medium text-[#172740]'>All Job Post</h1>

                {/* search and filter section */}
                <div className='flex items-center justify-between mb-[14px]'>
                    <Input
                        onChange={(e) => setSearch(e.target.value)}
                        placeholder="Search Company"
                        prefix={<FiSearch size={14} color="#868FA0" />}
                        suffix={<IoClose onClick={() => setSearch("")} style={{ cursor: "pointer" }} size={14} color="#868FA0" />}
                        style={{
                            width: "450px",
                            height:"40px",
                            padding: "10px 15px",
                            fontSize: "14px",
                            fontWeight: 400,
                            borderRadius: "8px",
                            color: "#A1A9B8",
                        }}
                        size="middle"
                        value={search}
                    />

                    <div 
                        className='
                            bg-white 
                            w-[120px] 
                            rounded-[8px] 
                            border 
                            border-[#E9E9E9] 
                            flex 
                            items-center 
                            justify-between 
                            px-3 
                            py-[5px] 
                            text-[#8B8B8B]
                        '
                    >
                        Filter <LuListFilter />
                    </div>
                </div>

                {/* subscription table list */}
                <div>
                    <table className="w-full rounded-[5px] rounded-table">
                        <tr className="text-left w-full bg-[#FEE3B8] custom-table-row">
                            {
                                ["Serial No", "Job Position", "Job Vacancy", "Start Date Line", "End Date Line", "Total Date Line", "Status"].map((item, index)=>
                                    <th key={index}>
                                        {item}
                                    </th>
                                )
                            }
                        </tr>                        
                        {
                            (data.slice(0, 9))?.map((item, index)=>
                                <>
                                    <div key={index} style={{marginTop: '8px'}}></div>
                                    <tr key={index} className="bg-[#ECF1F8] text-[#949494] custom-table-row">
                                        <td>{item.key}</td>
                                        <td>{item.designation}</td>
                                        <td>{item.vacancy}</td>
                                        <td>{item.start_date}</td>
                                        <td>{item.end_date}</td>
                                        <td>{item.total_date}</td>
                                        <td>
                                            <p 
                                                className={` w-[88px] h-[27px] rounded-[100px] text-[13px] flex items-center justify-center
                                                    ${item?.status === "Active" && "bg-[#B0ECB2] text-[#009B06]"}
                                                    ${item?.status === "Complete" && "bg-[#FEE3B8] text-[#C98415]"}
                                                `}
                                            >
                                                {item?.status}
                                            </p>
                                        </td>
                                    </tr>
                                </>
                            )
                        }
                    </table>
                </div>

            </div>
        </>
    )
}

export default SubscriberDetails