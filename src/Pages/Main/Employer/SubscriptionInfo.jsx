import React, { useEffect, useState } from 'react'
import BackButton from '../../../Components/BackButton';
import { FaCircleCheck } from 'react-icons/fa6'
import { Input, Pagination } from 'antd'
import { FiSearch } from 'react-icons/fi'
import { IoClose } from 'react-icons/io5'
import baseURL from '../../../../Config';
import { useParams } from 'react-router-dom';
import ImgURL from '../../../../ImgConfig';
import moment from 'moment';

const SubscriptionInfo = () => {
    const userInfo= JSON.parse(localStorage.getItem("user"));
    const [search, setSearch] = useState("");
    const [page, setPage] = useState(new URLSearchParams(window.location.search).get('page') || 1);
    const handlePageChange = (page) => {
        setPage(page);
        const params = new URLSearchParams(window.location.search);
        params.set('page', page);
        window.history.pushState(null, "", `?${params.toString()}`);
    }
    const { id } = useParams();
    const [recuiter, setRecuiter] = useState();
    const [job, setJob] = useState()
    const [subscription, setSubscription] = useState();
    const [category, setCategory] = useState();
    const [paginate, setPaginate] = useState({});


    useEffect(()=>{
        async function getApi(){
            const response = await baseURL.get(`/subscription/details/${id}`, {
                headers: {
                    "Content-Type": "application/json",
                    authorization: `Bearer ${JSON.parse(localStorage.getItem('token'))}`
                }
            })
            setSubscription(response?.data.subscribe.package)
            setRecuiter(response?.data.job_list?.data[0]?.recruiter)
            setCategory(response?.data.job_list?.data[0]?.category)
            setJob(response?.data.job_list?.data)
            setPaginate(response?.data?.job_list)
        }
        getApi();
    }, [id]);
    return (
        <>
            <div style={{marginBottom : "20px"}}>
                <BackButton link="/subscription" />
            </div>

            <div className='bg-white p-6 rounded-lg'>
                <h1 className='text-[20px] text-[#172740] font-medium mb-5'>About Subscriber</h1>

                <div className=' flex gap-6 rounded-lg mb-6'>
                    <div className='w-[60%] bg-[#ECF1F8] h-[279px] rounded-lg p-6 flex gap-6'>
                        <img 
                            style={{
                                width: "257px", 
                                height: "230px", 
                                borderRadius: "8px"
                            }} 
                            src={ userInfo?.image ? `${ImgURL}/${userInfo?.image}` : "https://avatars.design/wp-content/uploads/2021/02/corporate-avatars-TN-1.jpg" }
                            alt="" 
                        />
                        <div className='w-full grid grid-cols-1 gap-7 text-[#565656]'>
                            <div className='flex items-center justify-between'>
                                <p className='w-[25%]'>Company Name</p>
                                <div className='w-[5%]'>:</div>
                                <p className='w-[70%]'>{recuiter?.company_name}</p>
                            </div>

                            <div className='flex items-center justify-between'>
                                <p className='w-[25%]'>Email</p>
                                <div className='w-[5%]'>:</div>
                                <p className='w-[70%]'>{userInfo?.email}</p>
                            </div>

                            <div className='flex items-center justify-between'>
                                <p className='w-[25%]'>Phone</p>
                                <div className='w-[5%]'>:</div>
                                <p className='w-[70%]'>{recuiter?.phone}</p>
                            </div>

                            <div className='flex items-center justify-between'>
                                <p className='w-[25%]'>Country</p>
                                <div className='w-[5%]'>:</div>
                                <p className='w-[70%]'>{recuiter?.country}</p>
                            </div>

                            <div className='flex items-center justify-between'>
                                <p className='w-[25%]'>Location</p>
                                <div className='w-[5%]'>:</div>
                                <p className='w-[70%]'>{recuiter?.location}</p>
                            </div>
                        </div>
                    </div>

                    <div className='w-[40%] bg-[#ECF1F8] h-[279px] rounded-lg p-6 relative'>
                        <div className='flex items-center justify-between mb-6'>
                            <p className='w-[30%]'>Company Category</p>
                            <div className='w-[5%]'>:</div>
                            <p className='w-[65%]'>{category?.category_name}</p>
                        </div>

                        <div className='flex justify-between'>
                            <p className='w-[30%]'>Company Service</p>
                            <div className='w-[5%]'>:</div>
                            <div className='w-[65%] h-full flex items-center flex-wrap gap-[10px]'>
                                {
                                    recuiter?.company_service?.split(",")?.map((service, index)=>
                                        <p className='text-[14px] w-fit text-[#436FB6] py-[2px] border border-[#436FB6] px-2 rounded-[100px] font-normal'>{service}</p>
                                    )
                                }
                            </div>
                        </div>
                    </div>
                </div>

                <h1 className='text-[20px] text-[#172740] font-medium mb-5'>About Package</h1>

                <div className='grid grid-cols-3 gap-6'>
                    <div className='bg-[#ECF1F8] rounded-[5px]  flex items-center justify-center p-6 mb-4 h-[235px]'>
                        <div className='text-center'>
                            <p className='text-[24px] font-medium text-[#545454]'>{subscription?.package_name}</p>
                            <p className='my-4 text-[#6C6C6C] text-[14px] font-normal'>Payment Package</p>
                            <h1 className='text-[#436FB6] font-bold text-[48px]'>${subscription?.amount}</h1>
                        </div>
                    </div>

                    <div className='bg-[#ECF1F8] text-[#6F6F6F] rounded-[5px] p-6 h-[235px]'>

                        <div className='flex items-center mb-5'>
                            <label style={{display: "block", width: "35%"}} htmlFor="">Company Name</label>
                            <div className='w-[5%]'>:</div>
                            <p>{recuiter?.company_name}</p>
                        </div>
                        <div className='flex items-center mb-5'>
                            <label style={{display: "block", width: "35%"}} htmlFor="">Package Name</label>
                            <div className='w-[5%]'>:</div>
                            <p>{subscription?.package_name}</p>
                        </div>

                        <div className='flex items-center mb-5'>
                            <label style={{display: "block", width: "35%"}} htmlFor="">Package Price</label>
                            <div className='w-[5%]'>:</div>
                            <p>${subscription?.amount}</p>
                        </div>
                        <div className='flex items-center mb-5'>
                            <label style={{display: "block", width: "35%"}} htmlFor="">Package Validation</label>
                            <div className='w-[5%]'>:</div>
                            <p>{subscription?.duration}</p>
                        </div>

                        <div className='flex items-center mb-5'>
                            <label style={{display: "block", width: "35%"}} htmlFor="">Package Type</label>
                            <div className='w-[5%]'>:</div>
                            <p>{"Payment Type"}</p>
                        </div>
                    </div>

                    <div className='bg-[#ECF1F8] rounded-[5px] p-6 mb-4 h-[235px]'>
                        <h1 className='text-[#565656] mb-4'>Conditions :</h1>

                        <div className='grid grid-cols-1 gap-4'>
                            {
                                subscription?.feature?.map((item, index)=>
                                    <div key={index} className="flex items-center gap-[10px]">
                                        <FaCircleCheck size={16} color="#00C208"/>
                                        <p className="text-[#6F6F6F]">{item}</p>
                                    </div>
                                )
                            }
                        </div>
                    </div>
                </div>


                <h1 className='text-[20px] text-[#172740] font-medium my-5'>All Job Posts</h1>

                {/* search and filter section */}
                <div className='flex items-center justify-between mb-[14px]'>
                    <Input
                        onChange={(e) => setSearch(e.target.value)}
                        placeholder="Search Company"
                        prefix={<FiSearch size={14} color="#868FA0" />}
                        suffix={
                            <IoClose 
                                onClick={() => setSearch("")} 
                                style={{
                                    display: search ? "block" : "none", 
                                    cursor: "pointer" 
                                }} 
                                size={14} 
                                color="#868FA0" 
                            />
                        }
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

                </div>
                {/* subscription table list */}
                <div>
                    <table className="w-full rounded-[5px] rounded-table">
                        <tr className="text-left w-full bg-[#FEE3B8] custom-table-row">
                            {
                                ["Serial No", "Job Position", "Job Vacancy", "Start Date Line", "End Date Line", "Status"].map((item, index)=>
                                    <th key={index}>
                                        {item}
                                    </th>
                                )
                            }
                        </tr>                        
                        {
                            (job?.slice(0, 5))?.map((item, index)=>
                                <>
                                    <div key={index} style={{marginTop: '8px'}}></div>
                                    <tr key={index} className="bg-[#ECF1F8] text-[#949494] custom-table-row">
                                        <td>{item?.id}</td>
                                        <td>{item?.job_title}</td>
                                        <td>{item?.vacancy}</td>
                                        <td>{moment(item?.created_at).format("L")}</td>
                                        <td>{item?.application_last_date}</td>
                                        <td>
                                            <p 
                                                className={` w-[88px] h-[27px] rounded-[100px] text-[13px] capitalize flex items-center justify-center
                                                    ${item?.status === "published" && "bg-[#B0ECB2] text-[#009B06]"}
                                                    ${item?.status === "pending" && "bg-[#C5D2E8] text-[#365992]"}
                                                `}
                                            >
                                                {item?.status}
                                            </p>
                                        </td>
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
                        total={paginate?.total} 
                        onChange={handlePageChange}
                    />
                </div>
            </div>
        </>
    )
}

export default SubscriptionInfo