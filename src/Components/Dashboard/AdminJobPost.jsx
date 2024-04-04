import { Dropdown, Input, Pagination } from 'antd';
import React, { useEffect, useState } from 'react';
import { FiSearch } from 'react-icons/fi';
import { IoClose } from 'react-icons/io5';
import { MdOutlineRemoveRedEye } from 'react-icons/md';
import { DownOutlined } from "@ant-design/icons";
import { Link } from 'react-router-dom';
import baseURL from "../../../Config"
import moment from 'moment';

const AdminJobPost = () => {
    const [search, setSearch] = useState("");
    const [job, setJob] = useState();
    const [page, setPage] = useState(new URLSearchParams(window.location.search).get('page') || 1);
    const [filter, setFilter] = useState(new URLSearchParams(window.location.search).get('filter') || "all")
    const handlePageChange = (page) => {
        setPage(page);
        const params = new URLSearchParams(window.location.search);
        params.set('page', page);
        window.history.pushState(null, "", `?${params.toString()}`);
    }

    const onClick = ({ key }) => {
        setFilter(key)
        const params = new URLSearchParams(window.location.search);
        params.set('filter', key);
        window.history.pushState(null, "", `?${params.toString()}`);
    };

    const items = [
        {
          label: "All",
          key: "all",
        },
        {
          label: "Pending",
          key: "pending",
        },
        {
          label: "Published",
          key: "published",
        },
        {
          label: "Expired",
          key: "expired",
        },
    ];
    

    useEffect(()=>{
        async function getAPi(){
            const response = await baseURL.get(`/job-list?search=${search}&status=${filter === "all" ? "" : filter }`, {
                headers: {
                    "Content-Type": "application/json",
                    authorization: `Bearer ${JSON.parse(localStorage.getItem('token'))}`
                }
            });
            setJob(response?.data?.data);
        }
        getAPi();
    }, [search, filter]);
    return (
        <>
            <div className='bg-white p-6 rounded-lg relative'>
                <h1 className='mb-4 text-[20px] font-medium text-[#172740]'>All Job Post</h1>

                {/* search and filter section */}
                <div className='flex items-center justify-between mb-[14px]'>
                    <Input
                        hoverBorderColor={false}
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
                            borderColor: "none"
                        }}
                        size="middle"
                        value={search}
                    />

                    <div className='flex items-center gap-4 relative'>
                        <div className='h-[40px] rounded-[8px] border border-[#E9E9E9] flex items-center justify-between px-2 py-[5px] text-[#8B8B8B] filter'>
                            <Dropdown className='filter' menu={{ items, onClick }} >
                                <p
                                    style={{
                                        cursor: "pointer",
                                        color: '#717171',
                                        borderRadius: "4px",
                                    }}
                                    onClick={(e) => e.preventDefault()}
                                >
                                    { filter === "all" && "All" }
                                    { filter === "pending" && "Pending" }
                                    { filter === "published" && "Published" }
                                    { filter === "expired" && "Expired" }
                                    <DownOutlined style={{ paddingLeft: "18px" }} color='#717171' />
                                </p>
                            </Dropdown>
                        </div>
                    </div>

                </div>

                {/* subscription table list */}
                <div>
                    <table className="w-full rounded-[5px] rounded-table">
                        <tr className="text-left w-full bg-[#FEE3B8] custom-table-row">
                            {
                                ["Serial No", "Job Position", "Job Vacancy", "Start Date Line", "End Date Line", "Company Name", "Status", "Action"].map((item, index)=>
                                    <th key={index}>
                                        {item}
                                    </th>
                                )
                            }
                        </tr>                        
                        {
                            job?.data?.map((item, index)=>
                                <>
                                    <div key={index} style={{marginTop: '8px'}}></div>
                                    <tr key={index} className="bg-[#ECF1F8] text-[#949494] custom-table-row">
                                        <td>{index + 1 }</td>
                                        <td>{item?.job_title}</td>
                                        <td>{item?.vacancy}</td>
                                        <td>{moment(item?.created_at).format('l')}</td>
                                        <td>{item.application_last_date}</td>
                                        <td>{item?.recruiter?.company_name}</td>
                                        <td>
                                            <p 
                                                className={` w-[88px] h-[27px] rounded-[100px] text-[13px] flex items-center justify-center
                                                    ${item?.status === "published" && "bg-[#B0ECB2] text-[#009B06]"}
                                                    ${item?.status === "expired" && "bg-[#F8B5B0] text-[#E81100]"}
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
                                </>
                            )
                        }
                    </table>
                </div>
                

                <div className='absolute left-6 bottom-8'>
                    <p className='text-[#949494] font-normal'>Showing {job?.from}-{job?.total} out of  {job?.total}</p>
                </div>


                {/* pagination */}
                <div className='mt-6 flex items-center justify-center'>
                    <Pagination 
                        defaultCurrent={page} 
                        total={job?.total}
                        pageSize={job?.per_page} 
                        onChange={handlePageChange}
                    />
                </div>
            </div>
        </>
    )
}

export default AdminJobPost;