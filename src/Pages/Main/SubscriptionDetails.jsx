import React, { useEffect, useState } from 'react'
import BackButton from '../../Components/BackButton'
import { FaCircleCheck } from 'react-icons/fa6';
import { Input } from 'antd';
import { FiSearch } from 'react-icons/fi';
import { IoClose } from 'react-icons/io5';
import { LuListFilter } from 'react-icons/lu';
import { useParams } from "react-router-dom";
import baseURL from '../../../Config';
import moment from 'moment';

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


const SubscriptionDetails = () => {
    const { id } = useParams();
    const [packageDetails, setPackageDetails] = useState({});
    const [jobs, setJobs] = useState();

    console.log(jobs);
    

    useEffect(()=>{
        async function getAPi(){
            const response = await baseURL.get(`/company-wise-subscription?user_id=${id}`,{
                headers: {
                "Content-Type": "application/json",
                authorization: `Bearer ${JSON.parse(localStorage.getItem('token'))}`,
                }
            });
            setPackageDetails(response?.data?.data?.subscription?.data[0]?.package);
            setJobs(response?.data?.data?.subscription?.data[0]?.job_posts);
        }
        getAPi();
    }, [id]);
    return (
        <>
            
            <div style={{marginBottom : "20px"}}>
                <BackButton link="/employer-details" />
            </div>
            
            <div className='bg-white p-6 rounded-lg border'>
                <h1 className='text-[20px] text-[#172740] font-medium mb-6'>Subscription Details</h1>

                <div className='grid grid-cols-3 gap-6'>
                    <div className="bg-[#ECF1F8] rounded-lg p-6 flex items-center justify-center">
                        <div className='text-center'>
                            <p className='text-[24px] font-medium text-[#545454]'>{packageDetails?.package_name}</p>
                            <p className='my-4 text-[#6C6C6C] text-[14px] font-normal'>Payment Package</p>
                            <h1 className='text-[#436FB6] font-bold text-[48px]'>${packageDetails?.amount}</h1>
                        </div>
                    </div>

                    <div className="bg-[#ECF1F8] rounded-lg p-6">
                        <div className='flex items-center justify-between mb-4'>
                            <p className='w-[35%]'>Company Name</p>
                            <div className='w-[5%]'>:</div>
                            <p className='w-[75%]'>sfasdfdf</p>
                        </div>
                        <div className='flex items-center justify-between mb-4'>
                            <p className='w-[35%]'>Package</p>
                            <div className='w-[5%]'>:</div>
                            <p className='w-[75%]'>{packageDetails?.package_name}</p>
                        </div>

                        <div className='flex items-center justify-between mb-4'>
                            <p className='w-[35%]'>Package Price</p>
                            <div className='w-[5%]'>:</div>
                            <p className='w-[75%]'>${packageDetails?.amount}</p>
                        </div>

                        <div className='flex items-center justify-between mb-4'>
                            <p className='w-[35%]'>Date</p>
                            <div className='w-[5%]'>:</div>
                            <p className='w-[75%]'>{moment(packageDetails?.created_at).format('L') }</p>
                        </div>

                        <div className='flex items-center justify-between mb-4'>
                            <p className='w-[35%]'>Status</p>
                            <div className='w-[5%]'>:</div>
                            <p className='w-[75%] '>
                                <p className='w-[88px] h-[31px] rounded-[100px] flex items-center justify-center bg-[#B0ECB2] text-[#009B06]'>
                                    Active
                                </p>
                            </p>
                        </div>
                    </div>


                    <div className="bg-[#ECF1F8] rounded-lg p-6">
                        <h1 className='text-[#565656] mb-3'>Conditions :</h1>
                        <div className='grid grid-cols-1 gap-3'>
                            {/* {
                                ["Data", "Data", "Data", "Data", "Data"].map((item, index)=>
                                    <div key={index} className="flex items-center gap-[10px]">
                                        <FaCircleCheck size={16} color="#00C208"/>
                                        <p className="text-[#6F6F6F]">{item}</p>
                                    </div>
                                )
                            } */}
                        </div>
                    </div>
                </div>


                <h1 className='my-4 text-[20px] font-medium text-[#172740]'>All Job Post</h1>

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
                            (jobs)?.map((item, index)=>
                                <React.Fragment key={index}>
                                    <div key={index} style={{marginTop: '8px'}}></div>
                                    <tr key={index} className="bg-[#ECF1F8] text-[#949494] custom-table-row">
                                        <td>{  index + 1 }</td>
                                        <td>{item?.job_title}</td>
                                        <td>{item?.vacancy}</td>
                                        <td>{moment(item?.created_at).format('L')}</td>
                                        <td>{item?.application_last_dat}</td>
                                        <td>{item?.total_date}</td>
                                        <td>
                                            <p 
                                                className={` w-[88px] h-[27px] rounded-[100px] text-[13px] flex items-center justify-center
                                                    ${item?.status === "published" && "bg-[#B0ECB2] text-[#009B06]"}
                                                    ${item?.status === "expired" && "bg-[#F8B5B0] text-[#E81100]"}
                                                    ${item?.status === "pending" && "bg-[#FEE3B8] text-[#C98415]"}
                                                `}
                                            >
                                                {item?.status}
                                            </p>
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

export default SubscriptionDetails;