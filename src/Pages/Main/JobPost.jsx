import { Input } from 'antd'
import React, { useState } from 'react'
import { FiSearch } from 'react-icons/fi'
import { IoClose } from 'react-icons/io5'
import { LuListFilter } from 'react-icons/lu'

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

const JobPost = () => {
    const [search, setSearch] = useState("");
    return (
        <div className='bg-white p-6 rounded-lg'>
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
    )
}

export default JobPost