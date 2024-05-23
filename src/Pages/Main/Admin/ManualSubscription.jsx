import React, { useEffect, useState } from 'react'
import BackButton from '../../../Components/BackButton'
import baseURL from '../../../../Config';
import { MdOutlineRemoveRedEye } from 'react-icons/md';
import Swal from 'sweetalert2';
import { Input, Modal, Pagination } from 'antd';
import { IoClose } from "react-icons/io5";
import ImgURL from '../../../../ImgConfig';
import { FiSearch } from 'react-icons/fi';

const ManualSubscription = () => {
    const [subscription, setSubscription] = useState([]);
    const [refresh, setRefresh] = useState("");
    const [value, setValue] = useState("");
    const [keyword, setKeyword] = useState("");
    const [pagination, setPagination] = useState({})
    if(refresh){
        setTimeout(()=>{
            setRefresh("")
        }, 1500)
    }

    const [page, setPage] = useState(new URLSearchParams(window.location.search).get('page') || 1);
    const handlePageChange = (page) => {
        setPage(page);
        const params = new URLSearchParams(window.location.search);
        params.set('page', page);
        window.history.pushState(null, "", `?${params.toString()}`);
    }


    useEffect(()=>{
        async function getAPi(){
          const response = await baseURL.get(`/manual-subscription-request?name=${keyword}&page=${page}`,{
            headers: {
              "Content-Type": "application/json",
              authorization: `Bearer ${JSON.parse(localStorage.getItem('token'))}`,
            }
          });
          setSubscription(response?.data?.data?.data);
          setPagination(response?.data?.data)
        }
        getAPi();
    }, [keyword, page, refresh !=="" ]);


    const handleApproved=async(id)=>{
        Swal.fire({
            title: "Are you sure To Approve this Employer Subscription?",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes",
            cancelButtonText: "No"
        }).then(async(result) => {
            if (result.isConfirmed) {
                await baseURL.get(`/approve-manual-subscription?subscription_id=${id}`,{
                    headers: {
                      "Content-Type": "application/json",
                      authorization: `Bearer ${JSON.parse(localStorage.getItem('token'))}`,
                    }
                }).then((response)=>{
                    if(response.status ===200){
                        Swal.fire({
                            title: "Approved!",
                            text: response?.data?.message,
                            icon: "success",
                            showConfirmButton: false,
                            timer: 1500,
                        }).then((response)=>{
                            setRefresh("done")
                        })
                    }
                })
                
            }
        });
    }
    return (
        <div>
            {/* heading */}
            <div style={{marginBottom: "15px"}}>
                <BackButton link='/' />
            </div>

            <div className='bg-white p-6 rounded-[5px]'>
                <div className='flex items-center justify-between  mb-6'>
                    <h1 className='text-[20px] font-semibold text-[#2F2F2F]'>Manual Subscription</h1>
                    <Input
                        onChange={(e) => setKeyword(e.target.value)}
                        placeholder="Search Company"
                        prefix={<FiSearch size={14} color="#868FA0" />}
                        suffix={<IoClose onClick={() => setKeyword("")} style={{ cursor: "pointer" }} size={14} color="#2B2A2A" />}
                        style={{
                            width: 350,
                            height: 48,
                            fontSize: "14px"
                        }}
                        size="middle"
                        value={keyword}
                    />
                </div>
                

                {/* subscription */}
                <div>
                    <table className="w-full rounded-[5px] rounded-table">
                        <tr className="text-left w-full bg-[#FEE3B8] custom-table-row">
                        {
                            ["Serial No", "Company Name", "Package Name", "Payment Type", "Status", "Actions"].map((item, index)=>
                            <th key={index}>
                                {item}
                            </th>
                            )
                        }
                        </tr>

                        
                        {
                            subscription?.map((item, index)=>
                            <React.Fragment key={index}>
                                <div  style={{marginTop: '8px'}}></div>
                                <tr  className="bg-[#ECF1F8] custom-table-row" >
                                    <td>{index + 1}</td>
                                    <td>{item?.user?.recruiter[0]?.company_name}</td>
                                    <td>{item?.package?.package_name}</td>
                                    <td>{item?.payment_type}</td>
                                    <td>
                                        <p
                                            className={` w-[88px] h-[31px] rounded-[100px] flex items-center justify-center
                                                ${item?.manual_status === "pending" && "bg-[#C5D2E8] text-[#365992]"}
                                            `}
                                        >
                                            {item?.manual_status}
                                        </p>
                                    </td>
                                    <td className='flex items-center gap-3'>
                                        <MdOutlineRemoveRedEye onClick={()=>setValue(item)} className='cursor-pointer'  color='#6F6F6F' size={28} />
                                        <button 
                                            disabled={ !item?.manual_status === "pending"}
                                            onClick={()=>handleApproved(item.id)} 
                                            className='cursor-pointer w-[88px] h-[31px] rounded-[100px] flex items-center justify-center bg-[#B0ECB2] text-[#009B06]'
                                        >
                                            Approved
                                        </button>
                                    </td>
                                </tr>
                            </React.Fragment>
                        )
                        }
                    </table>
                </div>
                <div className='mt-6 flex items-center justify-center'>
                    <Pagination 
                        defaultCurrent={page} 
                        total={pagination?.total} 
                        onChange={handlePageChange}
                    />
                </div>

                <Modal
                    centered 
                    open={value}
                    onCancel={()=>setValue("")}
                    closeIcon={()=>setValue("")}
                    footer={false}
                >
                    <div className='flex items-center justify-end -mt-1 -mr-2'>
                        <IoClose size={24}/>
                    </div>
                    
                    <div className='mt-3'>
                        <h1 className='mb-2 text-[20px] font-semibold'>Company Info</h1>
                        <img 
                            src={`${ImgURL}/${value?.user?.image}`} 
                            style={{width: 150, height: 150, borderRadius: 8, margin: "0 auto 10px auto"}} 
                            alt="" 
                        />
                        <p className='flex items-center justify-between'>Company Name: {" "} <span className='font-semibold'>{value?.user?.recruiter[0].company_name} </span> </p>
                        <p className='flex items-center justify-between'>Company Email: {" "} <span className='font-semibold'>{value?.user?.email} </span></p>
                        <p className='flex items-center justify-between'>Company Web Site: {" "} <span className='font-semibold'>{value?.user?.recruiter[0].website_url} </span></p>
                        <p className='flex items-center justify-between'>Company Establishment: {" "}  <span className='font-semibold'>{value?.user?.recruiter[0].year_of_establishment}</span></p>

                        <hr className='my-4' />
                        <h1 className='mb-2 text-[20px] font-semibold'>Package Info</h1>
                        <p className='flex items-center justify-between'>Package Name: {" "} <span className='font-semibold'>{value?.package?.package_name}</span></p>
                        <p className='flex items-center justify-between'>Package Name: {" "}  <span className='font-semibold'>{value?.package?.amount} </span> </p>
                        <p className='flex items-center justify-between'>Package Job Limit: {" "}  <span className='font-semibold'>{value?.package?.post_limit}</span></p>

                    </div>
                </Modal>
                
            </div>
        </div>
    )
}

export default ManualSubscription