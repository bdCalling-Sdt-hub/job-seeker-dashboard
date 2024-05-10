import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import baseURL from '../../../../Config';
import moment from 'moment';


const AppliedJobTable = () => {
    const [data, setData] = useState([]);
    useEffect(()=>{
        async function getApi(){
            const response = await baseURL.get(`/application/job`, {
                headers: {
                    "Content-Type": "application/json",
                    authorization: `Bearer ${JSON.parse(localStorage.getItem('token'))}`
                }
            })
            setData (response?.data.data)
        }
        getApi();
    }, []);
    return (
        <div>
            <div className='flex items-center justify-between mb-[5px]'>
                <p className='text-[20px] font-medium  text-[#565656]'>Applied Job</p>
                <Link to="/applied-job">
                    <p className="text-[#3C64A4] text-[12px] font-normal underline">VIEW ALL</p>
                </Link>
            </div>
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
        </div>
    )
}

export default AppliedJobTable