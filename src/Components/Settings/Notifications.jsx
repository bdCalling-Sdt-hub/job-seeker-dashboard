import React, { useState } from 'react';
import { MdOutlineRemoveRedEye } from 'react-icons/md';
import { AiOutlineDelete } from "react-icons/ai";
import { Pagination } from 'antd';

const Notifications = () => {
    const [page, setPage] = useState(new URLSearchParams(window.location.search).get('page') || 1);

    const handlePageChange = (page) => {
        setPage(page);
        const params = new URLSearchParams(window.location.search);
        params.set('page', page);
        window.history.pushState(null, "", `?${params.toString()}`);
    }

    return (
        <div>
            <div>
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