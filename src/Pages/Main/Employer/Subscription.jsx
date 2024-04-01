import React, { useState } from 'react'
import BackButton from '../../../Components/BackButton'
import { Input, Pagination } from 'antd';
import { FiSearch } from 'react-icons/fi';
import { IoClose } from 'react-icons/io5';
import { LuListFilter } from 'react-icons/lu';
import { Link } from 'react-router-dom';
import { MdOutlineRemoveRedEye } from 'react-icons/md';

const data = [
    {
        key: "1",
        designation: "Web Developers",
        package: "Basic",
        package_price: "200",
        date: "Dec 30, 2024",
        time: "5:18 PM",
        company_name: "Bara Apple",
        total_day: "3 days",
        status:"Active",
    },
    {
        key: "2",
        designation: "Designer",
        package: "Essential",
        package_price: "400",
        date: "Dec 30, 2024",
        time: "5:18 PM",
        company_name: "Khoaya Apple",
        total_day: "20 days",
        status:"Active",
    },
    {
        key: "3",
        designation: "Motion",
        package: "Essential Pro",
        package_price: "600",
        date: "Dec 30, 2024",
        time: "5:18 PM",
        company_name: "Chota Apple",
        total_day: "10 days",
        status:"Active",
    },
    {
        key: "4",
        designation: "Executive",
        package: "Basic",
        package_price: "200",
        date: "Dec 30, 2024",
        time: "5:18 PM",
        company_name: "Pocha Apple",
        total_day: "9 days",
        status:"Expired",
    },
    {
        key: "5",
        designation: "Web Developers",
        package: "Basic",
        package_price: "200",
        date: "Dec 30, 2024",
        time: "5:18 PM",
        company_name: "Bara Apple",
        total_day: "7 days",
        status:"Active",
    },
    {
        key: "6",
        designation: "Designer",
        package: "Essential",
        package_price: "400",
        date: "Dec 30, 2024",
        time: "5:18 PM",
        company_name: "Khoaya Apple",
        total_day: "6 days",
        status:"Expired",
    },
    {
        key: "7",
        designation: "Motion",
        package: "Essential",
        package_price: "400",
        date: "Dec 30, 2024",
        time: "5:18 PM",
        company_name: "Chota Apple",
        total_day: "5 days",
        status:"Expired",
    },
    {
        key: "8",
        designation: "Executive",
        package: "Essential Pro",
        package_price: "600",
        date: "Dec 30, 2024",
        time: "5:18 PM",
        company_name: "Pocha Apple",
        total_day: "30 days",
        status:"Active",
    }
    ,
    {
        key: "9",
        designation: "Motion",
        package: "Essential Pro",
        package_price: "600",
        date: "Dec 30, 2024",
        time: "5:18 PM",
        company_name: "Chota Apple",
        total_day: "13 days",
        status:"Active",
    }
];

const Subscription = () => {
    const [search, setSearch] = useState("");
    const [page, setPage] = useState(new URLSearchParams(window.location.search).get('page') || 1);
    const handlePageChange = (page) => {
        setPage(page);
        const params = new URLSearchParams(window.location.search);
        params.set('page', page);
        window.history.pushState(null, "", `?${params.toString()}`);
    }
    return (
        <>
            <div style={{marginBottom : "20px"}}>
                <BackButton link="/" />
            </div>

            <div className='bg-white p-6 rounded-lg'>
                <h1 className='text-[20px] text-[#172740] font-medium mb-6'>All Job Subscriptions</h1>

                {/* search and filter section */}
                <div className='flex items-center justify-between mb-[14px]'>
                    <Input
                        onChange={(e) => setSearch(e.target.value)}
                        placeholder="Search Company"
                        prefix={<FiSearch size={14} color="#868FA0" />}
                        suffix={<IoClose onClick={() => setSearch("")} style={{ cursor: "pointer", display: search ? "block" : "none" }} size={14} color="#868FA0" />}
                        style={{
                            width: "450px",
                            height:"40px",
                            padding: "10px 15px",
                            fontSize: "14px",
                            fontWeight: 400,
                            borderRadius: "6px",
                            color: "#A1A9B8",
                        }}
                        size="middle"
                        value={search}
                    />

                    <div 
                        className='
                            bg-white 
                            w-[120px] 
                            rounded-md
                            border 
                            border-[#E9E9E9] 
                            flex 
                            items-center 
                            justify-between 
                            px-3  cursor-pointer
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
                                ["Serial No", "Company Name", "Package", "Package Price", "Date", "Time", "Status", "Action"].map((item, index)=>
                                    <th key={index}>
                                        {item}
                                    </th>
                                )
                            }
                        </tr>                        
                        {
                            data?.map((item, index)=>
                                <>
                                    <div key={index} style={{marginTop: '8px'}}></div>
                                    <tr key={index} className="bg-[#ECF1F8] text-[#949494] custom-table-row">
                                        <td>{item.key}</td>
                                        <td>{item.company_name}</td>
                                        <td>{item.package}</td>
                                        <td>${item.package_price}</td>
                                        <td>{item.date}</td>
                                        <td>{item.time}</td>
                                        <td>
                                            <p 
                                                className={` w-[88px] h-[27px] rounded-[100px] text-[13px] flex items-center justify-center
                                                    ${item?.status === "Active" && "bg-[#B0ECB2] text-[#009B06]"}
                                                    ${item?.status === "Expired" && "bg-[#F8B5B0] text-[#E81100]"}
                                                `}
                                            >
                                                {item?.status}
                                            </p>
                                        </td>
                                        <td className="py-[10px] pl-10 cursor-pointer">
                                            <Link to={"/job-details"}>
                                                <MdOutlineRemoveRedEye color='#6F6F6F' size={24} />
                                            </Link>
                                        </td>
                                    </tr>
                                </>
                            )
                        }
                    </table>
                </div>

                {/* pagination */}
                <div className='mt-6 flex items-center justify-center'>
                    <Pagination 
                        defaultCurrent={page} 
                        total={50} 
                        onChange={handlePageChange}
                    />
                </div>
            </div>
        </>
    )
}

export default Subscription