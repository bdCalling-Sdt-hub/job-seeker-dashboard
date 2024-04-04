import React, { useEffect, useState } from 'react';
import { MdOutlineRemoveRedEye } from 'react-icons/md';
import { AiOutlineDelete } from "react-icons/ai";
import { Pagination, Empty } from 'antd';
import baseURL from '../../../Config';

const Notifications = () => {
    const [page, setPage] = useState(new URLSearchParams(window.location.search).get('page') || 1);
    const [refresh, setRefresh] = useState("");
    const [notifications, setNotifications] = useState()

    if(refresh){
        setTimeout(()=>{
            setRefresh("")
        }, 1500)
    }

    const handlePageChange = (page) => {
        setPage(page);
        const params = new URLSearchParams(window.location.search);
        params.set('page', page);
        window.history.pushState(null, "", `?${params.toString()}`);
    }

    useEffect(()=>{
        async function getAPi(){
            const response = await baseURL.get(`/notifications`,{
                headers: {
                "Content-Type": "application/json",
                authorization: `Bearer ${JSON.parse(localStorage.getItem('token'))}`,
                }
            });
            setNotifications(response?.data?.user);
        }
        getAPi();
    }, [ refresh !== "" ]);

    return (
        <div className=''>
            <div >
                <table className="w-full">
                    <tr className="border-b-[1px] border-[#436FB6] text-[#436FB6] ">
                        {
                            ["Name", "Title", "Time"].map((item, index)=>
                                <th className='pb-4' key={index}>
                                    {item}
                                </th>
                            )
                        }
                    </tr>
                    {
                        notifications?.lenght > 0
                        ?
                        <>
                            {
                                [...Array(10).keys()].map((index)=>
                                    <>
                                        <tr key={index} className="text-center border-b-[1px] border-[#E0E0E0]" >
                                            <td className='py-4'>{"Apple"}</td>
                                            <td className='py-4'>{"Send A Job Post "}</td>
                                            <td className='py-4'>{"8:38 AM"}</td>
                                        </tr>
                                    </>
                                )
                            }
                        </>
                        :
                        
                        <div className='absolute rounded-b-[6px] bg-white  left-0 w-[100%] h-[200px] flex items-center justify-center '>
                            <Empty image={Empty.PRESENTED_IMAGE_SIMPLE} />
                        </div>
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
    )
}

export default Notifications