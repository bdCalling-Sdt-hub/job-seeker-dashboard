import { Input, Pagination } from 'antd';
import React, { useEffect, useState } from 'react';
import { FiSearch } from 'react-icons/fi';
import { IoClose } from 'react-icons/io5';
import { LuListFilter } from 'react-icons/lu';
import { MdOutlineRemoveRedEye } from 'react-icons/md';
import { Link } from 'react-router-dom';
import baseURL from '../../../Config';
import moment from 'moment';

const data = [
    {
        key: "1",
        designation: "Web Developers",
        vacancy: "6",
        start_date: "Dec 30, 2024 5:18",
        end_date: "Dec 30, 2024 5:18",
        company_name: "Bara Apple",
        total_day: "3 days",
        status:"Pending",
    },
    {
        key: "2",
        designation: "Designer",
        vacancy: "3",
        start_date: "Dec 30, 2024 5:18",
        end_date: "Dec 30, 2024 5:18",
        company_name: "Khoaya Apple",
        total_day: "20 days",
        status:"Pending",
    },
    {
        key: "3",
        designation: "Motion",
        vacancy: "5",
        start_date: "Dec 30, 2024 5:18",
        end_date: "Dec 30, 2024 5:18",
        company_name: "Chota Apple",
        total_day: "10 days",
        status:"Published",
    },
    {
        key: "4",
        designation: "Executive",
        vacancy: "10",
        start_date: "Dec 30, 2024 5:18",
        end_date: "Dec 30, 2024 5:18",
        company_name: "Pocha Apple",
        total_day: "9 days",
        status:"Expired",
    },
    {
        key: "5",
        designation: "Web Developers",
        vacancy: "6",
        start_date: "Dec 30, 2024 5:18",
        end_date: "Dec 30, 2024 5:18",
        company_name: "Bara Apple",
        total_day: "7 days",
        status:"Published",
    },
    {
        key: "6",
        designation: "Designer",
        vacancy: "3",
        start_date: "Dec 30, 2024 5:18",
        end_date: "Dec 30, 2024 5:18",
        company_name: "Khoaya Apple",
        total_day: "6 days",
        status:"Expired",
    },
    {
        key: "7",
        designation: "Motion",
        vacancy: "5",
        start_date: "Dec 30, 2024 5:18",
        end_date: "Dec 30, 2024 5:18",
        company_name: "Chota Apple",
        total_day: "5 days",
        status:"Expired",
    },
    {
        key: "8",
        designation: "Executive",
        vacancy: "10",
        start_date: "Dec 30, 2024 5:18",
        end_date: "Dec 30, 2024 5:18",
        company_name: "Pocha Apple",
        total_day: "30 days",
        status:"Pending",
    }
    ,
    {
        key: "9",
        designation: "Motion",
        vacancy: "5",
        start_date: "Dec 30, 2024 5:18",
        end_date: "Dec 30, 2024 5:18",
        company_name: "Chota Apple",
        total_day: "13 days",
        status:"Pending",
    }
];

const EmployerJobPost = () => {
    const [jobs, setJobs] = useState()
    const [search, setSearch] = useState("");
    const [page, setPage] = useState(new URLSearchParams(window.location.search).get('page') || 1);
    const handlePageChange = (page) => {
        setPage(page);
        const params = new URLSearchParams(window.location.search);
        params.set('page', page);
        window.history.pushState(null, "", `?${params.toString()}`);
    }


    useEffect(()=>{
        async function getApi(){
            const response = await baseURL.get(`/show/job`, {
                headers: {
                    "Content-Type": "application/json",
                    authorization: `Bearer ${JSON.parse(localStorage.getItem('token'))}`
                }
            })
            console.log(response)
            setJobs(response?.data?.data);
        }
        getApi();
    }, []);
    return (
        <>

            <div className='bg-white p-6 rounded-lg'>
                <h1 className='mb-4 text-[20px] font-medium text-[#172740]'>Job Post</h1>

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
                            borderRadius: "6px",
                            color: "#A1A9B8",
                        }}
                        size="middle"
                        value={search}
                    />

                    <div className='flex items-center gap-6'>
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
                        <Link to={"/create-job"} className='bg-[#436FB6] hover:text-white text-white text-center rounded-md w-[120px] px-3 py-[5px]'>
                            Create Job
                        </Link>
                    </div>

                </div>

                {/* subscription table list */}
                <div>
                    <table className="w-full rounded-[5px] rounded-table">
                        <tr className="text-left w-full bg-[#FEE3B8] custom-table-row">
                            {
                                ["Serial No", "Job Position", "Job Vacancy", "Start Date Line", "End Date Line", "Status", "Action"].map((item, index)=>
                                    <th key={index}>
                                        {item}
                                    </th>
                                )
                            }
                        </tr>                        
                        {
                            jobs?.data?.map((item, index)=>
                                <React.Fragment key={index}>
                                    <div style={{marginTop: '8px'}}></div>
                                    <tr className="bg-[#ECF1F8] text-[#949494] custom-table-row">
                                        <td>{ index + 1 }</td>
                                        <td>{item?.job_title}</td>
                                        <td>{item?.vacancy}</td>
                                        <td>{moment(item?.created_at).format("L")}</td>
                                        <td>{item?.application_last_date}</td>
                                        <td>
                                            <p 
                                                className={` w-[88px] h-[27px] rounded-[100px] text-[13px] flex items-center justify-center
                                                    ${item?.status === "published" && "bg-[#B0ECB2] text-[#009B06]"}
                                                    ${item?.status === "Expired" && "bg-[#F8B5B0] text-[#E81100]"}
                                                    ${item?.status === "pending" && "bg-[#C5D2E8] text-[#365992]"}
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
                                </React.Fragment>
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

export default EmployerJobPost