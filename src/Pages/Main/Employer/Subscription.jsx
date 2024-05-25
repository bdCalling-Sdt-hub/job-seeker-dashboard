import React, { useEffect, useState } from 'react'
import BackButton from '../../../Components/BackButton';
import { Link } from 'react-router-dom';
import { MdOutlineRemoveRedEye } from 'react-icons/md';
import baseURL from '../../../../Config';
import moment from 'moment';

const Subscription = () => {
    const [subscription, setSubscription] = useState();


    useEffect(()=>{
        async function getApi(){
            const response = await baseURL.get(`/subscription`, {
                headers: {
                    "Content-Type": "application/json",
                    authorization: `Bearer ${JSON.parse(localStorage.getItem('token'))}`
                }
            })
            setSubscription(response?.data?.data);
        }
        getApi();
    }, []);
    return (
        <>
            <div style={{marginBottom : "20px"}}>
                <BackButton link="/" />
            </div>

            <div className='bg-white p-6 rounded-lg'>
                <h1 className='text-[20px] text-[#172740] font-medium mb-6'>All Job Subscriptions</h1>


                {/* subscription table list */}
                <div>
                    <table className="w-full rounded-[5px] rounded-table">
                        <tr className="text-left w-full bg-[#FEE3B8] custom-table-row">
                            {
                                ["Serial No", "Package", "Package Price", "Date", "Status", "Action"].map((item, index)=>
                                    <th key={index}>
                                        {item}
                                    </th>
                                )
                            }
                        </tr>                        
                        {
                            subscription?.data?.map((item, index)=>
                                <React.Fragment key={index}>
                                    <div style={{marginTop: '8px'}}></div>
                                    <tr className="bg-[#ECF1F8] text-[#949494] custom-table-row">
                                        <td>{ index + 1 }</td>
                                        <td>{item?.package?.package_name}</td>
                                        <td>${item?.package?.amount}</td>
                                        <td>{moment(item?.package?.created_id).format("L")}</td>
                                        <td>
                                            <p 
                                                className={` w-[88px] h-[27px] rounded-[100px] text-[13px] flex items-center justify-center
                                                    ${item?.status === "successful" && "bg-[#B0ECB2] text-[#009B06]"}
                                                    ${item?.status === "Expired" && "bg-[#F8B5B0] text-[#E81100]"}
                                                `}
                                            >
                                                {item?.status}
                                            </p>
                                        </td>
                                        <td className="py-[10px] pl-10 cursor-pointer">
                                            <Link to={`/subscription-info/${item?.id}`}>
                                                <MdOutlineRemoveRedEye color='#6F6F6F' size={24} />
                                            </Link>
                                        </td>
                                    </tr>
                                </React.Fragment>
                            )
                        }
                    </table>
                </div>
            </div>
        </>
    )
}

export default Subscription