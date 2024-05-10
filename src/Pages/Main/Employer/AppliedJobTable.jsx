import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import BackButton from "../../../Components/BackButton";
import { Input, Pagination } from "antd";
import { FiSearch } from "react-icons/fi";
import { IoClose } from "react-icons/io5";
import { LuListFilter } from "react-icons/lu";
import baseURL from "../../../../Config";
import moment from "moment";



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

    const [data, setData] = useState([]);
    const [paginate, setPaginate] = useState()
    useEffect(()=>{
        async function getApi(){
            const response = await baseURL.get(`/application/job`, {
                headers: {
                    "Content-Type": "application/json",
                    authorization: `Bearer ${JSON.parse(localStorage.getItem('token'))}`
                }
            })

            setData (response?.data.data)
            setPaginate(response?.data?.pagination)
            console.log(response?.data)
        }
        getApi();
    }, []);

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
                            ["Serial No", "Job Title", "Vacancy", "Applied", "Date"].map((item, index)=>
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
                                    <td>{item?.id}</td>
                                    <td>{item?.job_title}</td>
                                    <td>{item?.vacancy}</td>
                                    <td className='bg-[#F7F0E2]'>{item?.applied_count}</td>
                                    <td>{moment(item?.application_last_date).format("L")}</td>
                                </tr>
                            </>
                        )
                    }
                </table>

                {/* pagination */}
                <div className='mt-6 flex items-center justify-center'>
                    <Pagination 
                        defaultCurrent={page} 
                        total={paginate?.total} 
                        onChange={handlePageChange}
                    />
                </div>

            </div>

            
        </>
    )
}

export default AppliedJobTable