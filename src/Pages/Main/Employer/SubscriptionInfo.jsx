import React, { useEffect, useState } from 'react'
import BackButton from '../../../Components/BackButton';
import { FaCircleCheck } from 'react-icons/fa6'
import { Input, Pagination } from 'antd'
import { LuListFilter } from 'react-icons/lu'
import { FiSearch } from 'react-icons/fi'
import { IoClose } from 'react-icons/io5'
import baseURL from '../../../../Config';
import { useParams } from 'react-router-dom';


const data = [
    {
        key: "1",
        designation: "Web Developers",
        vacancy: "6",
        start_date: "Dec 30, 2024 5:18",
        end_date: "Dec 30, 2024 5:18",
        company_name: "Bara Apple",
        total_day: "3 days",
        status:"Active",
    },
    {
        key: "2",
        designation: "Designer",
        vacancy: "3",
        start_date: "Dec 30, 2024 5:18",
        end_date: "Dec 30, 2024 5:18",
        company_name: "Khoaya Apple",
        total_day: "20 days",
        status:"Active",
    },
    {
        key: "3",
        designation: "Motion",
        vacancy: "5",
        start_date: "Dec 30, 2024 5:18",
        end_date: "Dec 30, 2024 5:18",
        company_name: "Chota Apple",
        total_day: "10 days",
        status:"Active",
    },
    {
        key: "4",
        designation: "Executive",
        vacancy: "10",
        start_date: "Dec 30, 2024 5:18",
        end_date: "Dec 30, 2024 5:18",
        company_name: "Pocha Apple",
        total_day: "9 days",
        status:"Expired",
    },
    {
        key: "5",
        designation: "Web Developers",
        vacancy: "6",
        start_date: "Dec 30, 2024 5:18",
        end_date: "Dec 30, 2024 5:18",
        company_name: "Bara Apple",
        total_day: "7 days",
        status:"Active",
    },
    {
        key: "6",
        designation: "Designer",
        vacancy: "3",
        start_date: "Dec 30, 2024 5:18",
        end_date: "Dec 30, 2024 5:18",
        company_name: "Khoaya Apple",
        total_day: "6 days",
        status:"Expired",
    },
    {
        key: "7",
        designation: "Motion",
        vacancy: "5",
        start_date: "Dec 30, 2024 5:18",
        end_date: "Dec 30, 2024 5:18",
        company_name: "Chota Apple",
        total_day: "5 days",
        status:"Expired",
    },
    {
        key: "8",
        designation: "Executive",
        vacancy: "10",
        start_date: "Dec 30, 2024 5:18",
        end_date: "Dec 30, 2024 5:18",
        company_name: "Pocha Apple",
        total_day: "30 days",
        status:"Active",
    }
    ,
    {
        key: "9",
        designation: "Motion",
        vacancy: "5",
        start_date: "Dec 30, 2024 5:18",
        end_date: "Dec 30, 2024 5:18",
        company_name: "Chota Apple",
        total_day: "13 days",
        status:"Active",
    }
];

const SubscriptionInfo = () => {
    const [details, setDetails] = useState({});
    const [subscription, setSubscription] = useState({});
    const [search, setSearch] = useState("");
    const [page, setPage] = useState(new URLSearchParams(window.location.search).get('page') || 1);
    const handlePageChange = (page) => {
        setPage(page);
        const params = new URLSearchParams(window.location.search);
        params.set('page', page);
        window.history.pushState(null, "", `?${params.toString()}`);
    }
    const { id } = useParams();


    useEffect(()=>{
        async function getApi(){
            const response = await baseURL.get(`/subscription/details/${id}`, {
                headers: {
                    "Content-Type": "application/json",
                    authorization: `Bearer ${JSON.parse(localStorage.getItem('token'))}`
                }
            })
            console.log(response?.data)
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
                            src="https://avatars.design/wp-content/uploads/2021/02/corporate-avatars-TN-1.jpg" 
                            alt="" 
                        />
                        <div className='w-full grid grid-cols-1 gap-7 text-[#565656]'>
                            <div className='flex items-center justify-between'>
                                <p className='w-[25%]'>Company Name</p>
                                <div className='w-[5%]'>:</div>
                                <p className='w-[70%]'>sfasdfdf</p>
                            </div>

                            <div className='flex items-center justify-between'>
                                <p className='w-[25%]'>Email</p>
                                <div className='w-[5%]'>:</div>
                                <p className='w-[70%]'>admin@gmail.com</p>
                            </div>

                            <div className='flex items-center justify-between'>
                                <p className='w-[25%]'>Phone</p>
                                <div className='w-[5%]'>:</div>
                                <p className='w-[70%]'>01756953936</p>
                            </div>

                            <div className='flex items-center justify-between'>
                                <p className='w-[25%]'>Country</p>
                                <div className='w-[5%]'>:</div>
                                <p className='w-[70%]'>Bangladesh</p>
                            </div>

                            <div className='flex items-center justify-between'>
                                <p className='w-[25%]'>Location</p>
                                <div className='w-[5%]'>:</div>
                                <p className='w-[70%]'>Banasree, Banasree, Banasree</p>
                            </div>
                        </div>
                    </div>

                    <div className='w-[40%] bg-[#ECF1F8] h-[279px] rounded-lg p-6 relative'>
                        <div className='flex items-center justify-between mb-6'>
                            <p className='w-[30%]'>Company Category</p>
                            <div className='w-[5%]'>:</div>
                            <p className='w-[65%]'>IT</p>
                        </div>

                        <div className='flex justify-between'>
                            <p className='w-[30%]'>Company Service</p>
                            <div className='w-[5%]'>:</div>
                            <div className='w-[65%] h-full flex items-center flex-wrap gap-[10px]'>
                                {
                                    ["Web Development", "Mobile App Development", "UX/UI", "Data Entry", "Graphs"].map((service, index)=>
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
                            <p className='text-[24px] font-medium text-[#545454]'>Basic</p>
                            <p className='my-4 text-[#6C6C6C] text-[14px] font-normal'>Payment Package</p>
                            <h1 className='text-[#436FB6] font-bold text-[48px]'>$20</h1>
                        </div>
                    </div>

                    <div className='bg-[#ECF1F8] text-[#6F6F6F] rounded-[5px] p-6 h-[235px]'>

                        <div className='flex items-center mb-5'>
                            <label style={{display: "block", width: "35%"}} htmlFor="">Company Name</label>
                            <div className='w-[5%]'>:</div>
                            <p>{"Chase It"}</p>
                        </div>
                        <div className='flex items-center mb-5'>
                            <label style={{display: "block", width: "35%"}} htmlFor="">Package Name</label>
                            <div className='w-[5%]'>:</div>
                            <p>{"Basic"}</p>
                        </div>

                        <div className='flex items-center mb-5'>
                            <label style={{display: "block", width: "35%"}} htmlFor="">Package Price</label>
                            <div className='w-[5%]'>:</div>
                            <p>${" 200"}</p>
                        </div>
                        <div className='flex items-center mb-5'>
                            <label style={{display: "block", width: "35%"}} htmlFor="">Package Validation</label>
                            <div className='w-[5%]'>:</div>
                            <p>{"1 Month"}</p>
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
                                ["data", "data", "data"].map((item, index)=>
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

                    <div 
                        className='
                            bg-white 
                            w-[120px] 
                            rounded-md
                            border 
                            border-[#E9E9E9] 
                            flex 
                            items-center 
                            justify-between 
                            px-3  cursor-pointer
                            py-[5px] 
                            text-[#8B8B8B]
                        '
                    >
                         Filter <LuListFilter />
                    </div>

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
                            (data.slice(0, 5))?.map((item, index)=>
                                <>
                                    <div key={index} style={{marginTop: '8px'}}></div>
                                    <tr key={index} className="bg-[#ECF1F8] text-[#949494] custom-table-row">
                                        <td>{item.key}</td>
                                        <td>{item.designation}</td>
                                        <td>{item.vacancy}</td>
                                        <td>{item.start_date}</td>
                                        <td>{item.end_date}</td>
                                        <td>
                                            <p 
                                                className={` w-[88px] h-[27px] rounded-[100px] text-[13px] flex items-center justify-center
                                                    ${item?.status === "Active" && "bg-[#B0ECB2] text-[#009B06]"}
                                                    ${item?.status === "Expired" && "bg-[#F8B5B0] text-[#E81100]"}
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
                        total={50} 
                        onChange={handlePageChange}
                    />
                </div>
            </div>
        </>
    )
}

export default SubscriptionInfo