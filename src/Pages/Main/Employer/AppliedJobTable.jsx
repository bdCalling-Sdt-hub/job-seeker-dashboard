import React, { useState } from "react";
import { Link } from "react-router-dom";
import BackButton from "../../../Components/BackButton";
import { Input, Pagination } from "antd";
import { FiSearch } from "react-icons/fi";
import { IoClose } from "react-icons/io5";
import { LuListFilter } from "react-icons/lu";


const data = [
    {
        key: "1",
        category: "IT",
        vacancy: 15,
        applied: 30,
        Date: "Jul 20, 2024",
    },
    {
        key: "2",
        category: "IT",
        vacancy: 5,
        applied: 10,
        Date: "Jul 20, 2024",
    },
    {
        key: "3",
        category: "IT",
        vacancy: 40,
        applied: 80,
        Date: "Dec 20, 2024",
    },
    {
        key: "4",
        category: "IT",
        vacancy: 7,
        applied: 14,
        Date: "Aug 20, 2024",
    },
    {
        key: "5",
        category: "IT",
        vacancy: 30,
        applied: 60,
        Date: "Feb 20, 2024",
    },
    {
        key: "6",
        category: "IT",
        vacancy: 20,
        applied: 30,
        Date: "Jan 20, 2024",
    },
    {
        key: "7",
        category: "IT",
        vacancy: 10,
        applied: 20,
        Date: "Apr 20, 2024",
    },
    {
        key: "8",
        category: "IT",
        vacancy: 5,
        applied: 10,
        Date: "Jun 20, 2024",
    },
    {
        key: "9",
        category: "IT",
        vacancy: 10,
        applied: 30,
        Date: "May 20, 2024",
    },
    {
        key: "10",
        category: "IT",
        vacancy: 20,
        applied: 100,
        Date: "May 20, 2023",
    },
];


const AppliedJobTable = () => {
    const [search, setSearch] = useState("");
    const [filter, setFilter] = useState(new URLSearchParams(window.location.search).get('filter') || "All");
    const [page, setPage] = useState(new URLSearchParams(window.location.search).get('page') || 1);

    const onClick = ({ key }) => {
        setFilter(key)
        const params = new URLSearchParams(window.location.search);
        params.set('filter', key);
        window.history.pushState(null, "", `?${params.toString()}`);
    };


    const handlePageChange = (page) => {
        setPage(page);
        const params = new URLSearchParams(window.location.search);
        params.set('page', page);
        window.history.pushState(null, "", `?${params.toString()}`);
    }

    return (
        <>
            <div style={{ marginBottom: "20px" }}>
                <BackButton link="/" />
            </div>


            
            <div className="bg-white rounded-lg p-5">
                <p className='text-[20px] font-medium  text-[#565656]'>Applied Job List</p>
                
                <div className='flex items-center justify-between my-4'>
                    <div className='w-[450px] h-[40px] rounded-lg'>
                        <Input
                            onChange={(e) => setSearch(e.target.value)}
                            placeholder="Search Company"
                            prefix={<FiSearch size={14} color="#868FA0" />}
                            suffix={<IoClose onClick={() => setSearch("")} style={{ cursor: "pointer" }} size={14} color="#2B2A2A" />}
                            style={{
                            width: "100%",
                            height: "100%",
                            fontSize: "14px"
                            }}
                            size="middle"
                            value={search}
                        />
                    </div>

                    <div 
                        className='
                            bg-white 
                            w-[120px] 
                            rounded-[6px] 
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

                {/* table list */}
                <table className="w-full rounded-[5px] rounded-table">

                    <tr className="text-left w-full bg-[#FEE3B8] custom-table-row">
                        {
                            ["Serial No", "Category", "Vacancy", "Applied", "Date"].map((item, index)=>
                                <th key={index} >
                                    {item}
                                </th>
                            )
                        }
                    </tr>

                    {
                        (data?.slice(0, 4))?.map((item, index)=>
                            <>
                                <div key={index} style={{marginTop: '8px'}}></div>
                                <tr key={index} className="bg-[#ECF1F8] custom-table-row" >
                                    <td>{item.key}</td>
                                    <td>{item.category}</td>
                                    <td>{item.vacancy}</td>
                                    <td className='bg-[#F7F0E2]'>{item.applied}</td>
                                    <td>{item.Date}</td>
                                </tr>
                            </>
                        )
                    }
                </table>

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

export default AppliedJobTable