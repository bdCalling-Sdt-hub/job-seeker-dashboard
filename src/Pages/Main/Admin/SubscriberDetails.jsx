import React, { useEffect, useState } from 'react'
import BackButton from '../../../Components/BackButton'
import { Link, useParams } from 'react-router-dom'
import { IoIosArrowRoundForward } from 'react-icons/io'
import { LuListFilter } from 'react-icons/lu'
import { FiSearch } from 'react-icons/fi'
import { IoClose } from 'react-icons/io5'
import { Input, Pagination } from 'antd'
import { FaCircleCheck } from 'react-icons/fa6'
import baseURL from '../../../../Config'
import moment from 'moment'
import ImgURL from '../../../../ImgConfig'



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
const SubscriberDetails = () => {
    const {userID, id} = useParams();
    const [page, setPage] = useState(new URLSearchParams(window.location.search).get('page') || 1);
    const [companyDetails, setCompanyDetails] = useState({});
    const [packageDetails, setPackageDetails] = useState({});
    const [jobs, setJobs] = useState([]);


    const handlePageChange = (page) => {
        setPage(page);
        const params = new URLSearchParams(window.location.search);
        params.set('page', page);
        window.history.pushState(null, "", `?${params.toString()}`);
    }

    useEffect(()=>{
        async function getAPi(){ 
          const response = await baseURL.get(`/company-wise-subscription?user_id=${userID}&package_id=${id}`,{
            headers: {
              "Content-Type": "application/json",
              authorization: `Bearer ${JSON.parse(localStorage.getItem('token'))}`,
            }
          });
          console.log(response?.data?.data)
          setCompanyDetails(response?.data?.data?.company_details);
          setPackageDetails(response?.data?.data?.subscription?.data[0]?.package)
          setJobs(response?.data?.data?.subscription?.data[0]?.job_posts)
        }
        getAPi();
    }, [userID, id]);
    return (
        <>
            {/* heading */}
            <div style={{marginBottom: "15px"}}>
                <BackButton link='/subscribers' />
            </div>


            <div className='bg-white p-6 rounded'>
                <h1 className='text-[20px] text-[#172740] font-medium mb-6'>About Subscriber</h1>

                <div className='flex items-center gap-6 my-6'>
                    <div className='w-[60%] bg-[#ECF1F8] h-[279px] rounded-lg p-6 flex gap-6'>
                        <img 
                            style={{width: "257px", height: "230px", borderRadius: "8px"}} 
                            src={ companyDetails?.user?.image ? `${ImgURL}/${companyDetails?.user?.image}` : "https://avatars.design/wp-content/uploads/2021/02/corporate-avatars-TN-1.jpg" }
                            alt=""
                        />
                        <div className='w-full grid grid-cols-1 gap-7 text-[#565656]'>
                            <div className='flex items-center justify-between'>
                                <p className='w-[25%]'>Company Name</p>
                                <div className='w-[5%]'>:</div>
                                <p className='w-[70%]'>{companyDetails?.company_name}</p>
                            </div>

                            <div className='flex items-center justify-between'>
                                <p className='w-[25%]'>Email</p>
                                <div className='w-[5%]'>:</div>
                                <p className='w-[70%]'>{companyDetails?.user?.email}</p>
                            </div>

                            <div className='flex items-center justify-between'>
                                <p className='w-[25%]'>Phone</p>
                                <div className='w-[5%]'>:</div>
                                <p className='w-[70%]'>{companyDetails?.phone}</p>
                            </div>

                            <div className='flex items-center justify-between'>
                                <p className='w-[25%]'>Country</p>
                                <div className='w-[5%]'>:</div>
                                <p className='w-[70%]'>{companyDetails?.country}</p>
                            </div>

                            <div className='flex items-center justify-between'>
                                <p className='w-[25%]'>Location</p>
                                <div className='w-[5%]'>:</div>
                                <p className='w-[70%]'>{companyDetails?.location}</p>
                            </div>
                        </div>
                    </div>
                    <div className='w-[40%] bg-[#ECF1F8] h-[279px] rounded-lg p-6 relative'>
                        <div className='flex items-center justify-between mb-6'>
                            <p className='w-[30%]'>Company Category</p>
                            <div className='w-[5%]'>:</div>
                            <p className='w-[65%]'>{companyDetails?.category?.category_name}</p>
                        </div>

                        <div className='flex justify-between'>
                            <p className='w-[30%]'>Company Service</p>
                            <div className='w-[5%]'>:</div>
                            <div className='w-[65%] h-full'>
                                {
                                   (companyDetails?.company_service)?.split(",")?.map((service, index)=>
                                        <p className='text-[14px] font-normal text-[#565656]'>{service}</p>
                                    )
                                }
                            </div>
                        </div>

                        <div className='absolute bottom-6 right-6'>
                            <Link to={`/company-details/${companyDetails?.user_id}`}>
                                <button 
                                    className='
                                    w-[157px] 
                                    rounded-[100px] 
                                    py-2 
                                    text-[#436FB6] 
                                    border 
                                    border-[#436FB6]
                                    flex items-center justify-center gap-2
                                    '
                                    >
                                        See Details 
                                    <IoIosArrowRoundForward size={20} />
                                </button>
                            </Link>
                        </div>
                    </div>
                </div>

                <h1 className='text-[20px] text-[#172740] font-medium my-6'>Subscriber Package</h1>
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
                            <p className='w-[75%]'>{companyDetails?.company_name}</p>
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
                            <p className='w-[75%]'>{moment(packageDetails?.created_at).format("L")}</p>
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
                            {
                                /* (packageDetails?.feature)?.map((item, index)=>
                                    <div key={index} className="flex items-center gap-[10px]">
                                        <FaCircleCheck size={16} color="#00C208"/>
                                        <p className="text-[#6F6F6F]">{item}</p>
                                    </div>
                                ) */
                            }
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
                            jobs?.map((item, index)=>
                                <React.Fragment key={index}>
                                    <div  style={{marginTop: '8px'}}></div>
                                    <tr className="bg-[#ECF1F8] text-[#949494] custom-table-row">
                                        <td>{index + 1}</td>
                                        <td>{item?.job_title}</td>
                                        <td>{item?.vacancy}</td>
                                        <td>{moment(item?.created_at).format("L")}</td>
                                        <td>{item?.application_last_date}</td>
                                        <td>{"6"}</td>
                                        <td>
                                            <p 
                                                className={` w-[88px] h-[27px] rounded-[100px] text-[13px] flex items-center justify-center
                                                    ${item?.status === "published" && "bg-[#B0ECB2] text-[#009B06]"}
                                                    ${item?.status === "Complete" && "bg-[#FEE3B8] text-[#C98415]"}
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

                {/* pagination for data */}

                <div className='mt-5 flex items-center justify-center'>
                    <Pagination 
                        defaultCurrent={page} 
                        total={data?.length} 
                        onChange={handlePageChange}
                    />
                </div>

            </div>
        </>
    )
}

export default SubscriberDetails