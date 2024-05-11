import React, { useEffect, useState } from 'react'
import { HiOutlineMail } from "react-icons/hi";
import { Input, Pagination, Empty } from 'antd';
import { FiSearch } from 'react-icons/fi';
import { IoClose } from 'react-icons/io5';
import { MdDelete } from "react-icons/md";
import { LuSend } from "react-icons/lu";
import { TfiLink } from "react-icons/tfi";
import { FaFileImage } from "react-icons/fa";
import { IconMailForward } from '@tabler/icons-react';
import Swal from 'sweetalert2';
import BackButton from '../../../Components/BackButton';
import baseURL from '../../../../Config';
import moment from 'moment';

const AdminContacts = () => {
    const [tab, setTab] = useState(new URLSearchParams(window.location.search).get('tab') || "inbox");
    const [page, setPage] = useState(new URLSearchParams(window.location.search).get('page') || 1);
    const [search, setSearch] = useState("");
    const [from, setFrom] = useState("")
    const [replay, setReply] = useState("");
    const [message, setMessage] = useState([]);
    const [refresh, setRefresh] = useState("");
    const [value, setValue] = useState(JSON.parse(localStorage.getItem("details")));
    const [image, setImage] = useState();
    const user = JSON.parse(localStorage.getItem("user"))

    if(refresh){
        setTimeout(()=>{
            setRefresh("")
        }, 1500)
    }


    
    const handleTab=(value)=>{
        setTab(value)
        window.history.pushState(null, "", `?tab=${value}`);
    }

    const handlePageChange = (page) => {
        setPage(page);
        window.history.pushState(null, "", `?page=${page}`);
    };

    const handleDeleteClick = (e, id) => {
        e.stopPropagation();

        Swal.fire({
            title: "Are you sure?",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes",
            cancelButtonText: "No"

        }).then(async(result) => {
            if (result.isConfirmed) {
                await baseURL.get(`/delete-message?user_id=${id}`, {
                    headers: {
                        "Content-Type": "application/json",
                        authorization: `Bearer ${JSON.parse(localStorage.getItem('token'))}`
                    }
                }).then((response)=>{
                    if(response?.status === 200){
                        Swal.fire({
                            title: "Deleted!",
                            text: response?.data?.message,
                            icon: "success",
                            showConfirmButton: false,
                            timer: 1500,
                        }).then((response)=>{
                            setRefresh("done")
                        })
                    }
                });
                
            }
        });
    };


    useEffect(()=>{
        async function getApi(){
            const response = await baseURL.get(`/show-message?subject=${search ? search : ""}`, {
                headers: {
                    "Content-Type": "application/json",
                    authorization: `Bearer ${JSON.parse(localStorage.getItem('token'))}`
                }
            })
            setMessage(response?.data?.data);
        }
        getApi();
    }, [search, refresh !== ""]);


    const handleReply = async()=>{
        const data = {
            user_id: value?.user_id, 
            subject: value?.subject , 
            message: replay, 
            image: image
        }
        await baseURL.post(`/send-message-user`, data, {
            headers: {
                "Content-Type": "multipart/form-data",
                authorization: `Bearer ${JSON.parse(localStorage.getItem('token'))}`
            }
        }).then((response)=>{
            if(response.status === 200){
                Swal.fire({
                    title: "Successfully!",
                    text: response?.data?.message,
                    icon: "success",
                    showConfirmButton: false,
                    timer: 1500,
                })
            }
        })
    }

    const onChange = (e) => {
        const file= e.target.files[0];
        setImage(file)
    };
    return (
        <div>

            {/* heading */}
            <div style={{marginBottom: "15px"}}>
                <BackButton link='/' />
            </div>

            {/* sidebar */}
            <div className='h-[81vh]'>
                
                
                {/* content */}
                <div 
                    style={{
                        width: "100%",
                        height: "100%",
                        border: "1px solid #F5F5F5",
                        background: "white",
                        borderRadius: "8px"
                    }}
                >
                    {/* search section */}
                    <div className='flex items-center justify-between pl-4'>
                                <div
                                    onClick={()=>handleTab("inbox")}
                                    style={{
                                        width: "fit-content", 
                                        height: "42px", 
                                        background: "#C5D2E8", 
                                        borderRadius: "8px",
                                        marginTop: "14px",
                                        display: "flex",
                                        alignItems: "center",
                                        gap: 24,
                                        color: tab === "inbox" ? "#436FB6" : "#6F6F6F",
                                        padding: "0 16px",
                                        cursor: "pointer"
                                    }}
                                >
                                    <div
                                        style={{
                                            display: "flex",
                                            alignItems: "center",
                                            gap: "8px",
                                            color: tab === "inbox" ? "#436FB6" : "#6F6F6F",
                                        }}
                                    >
                                        <HiOutlineMail size={17} />
                                        <p>Inbox</p>
                                    </div>
                                    {message?.data?.length}
                                </div>
                                <div style={{ padding: "24px 24px 10px 24px" }}>
                                    <Input
                                        onChange={(e)=>setSearch(e.target.value)}
                                        placeholder="Search..."
                                        prefix={<FiSearch size={14} color="#868FA0"/>}
                                        suffix={<IoClose onClick={()=>setSearch("")} style={{cursor: "pointer"}} size={14} color="#2B2A2A" />}
                                        style={{
                                            width: "502px",
                                            fontSize: "14px",
                                            height: "48px",
                                        }}
                                        value={search}
                                        size="middle"
                                    />
                                </div>
                    </div>

                    { 
                        tab === "inbox"
                        && 
                        <div>
                            
                            {/* email list */}
                            <div>
                                {
                                    message?.data?.length > 0
                                    ?
                                    <>
                                        {
                                            message?.data?.map((item, index)=>
                                                <div key={index}
                                                    style={{
                                                        borderBottom: "1px solid #E0E0E0",
                                                        cursor: "pointer"
                                                    }}
                                                    onClick={
                                                        ()=>( 
                                                            setValue(item), 
                                                            handleTab("details"),
                                                            localStorage.setItem("details", JSON.stringify(item)) 
                                                        )
                                                    }
                                                >
                                                    <div className='flex items-center justify-between p-[18px]'>
                                                        <p>{item?.user?.fullName}</p>
                                                        <p>{item?.subject}</p>
                                                        <div className='flex items-center gap-[70px]'>
                                                            <p>{moment(item?.created_at).format('LT')}</p>
                                                            <MdDelete onClick={(e) => handleDeleteClick(e, item?.id)} style={{cursor: "pointer"}} size={25} />
                                                        </div>
                                                    </div>
                                                </div>
                                            )
                                        }
                                    </>
                                    :
                                    <Empty image={Empty.PRESENTED_IMAGE_SIMPLE} />
                                }
                                
                            </div>

                            {/* pagination */}
                            <div style={{
                                display: message?.data?.length > 0 ? "flex" : "none",
                                alignItems: "center",
                                justifyContent: 'center',
                                marginTop: "24px"
                            }}>
                                <Pagination 
                                    defaultCurrent={parseInt(page)} 
                                    total={message?.total}
                                    pageSize={message?.per_page} 
                                    onChange={handlePageChange} 
                                />
                            </div>
                        </div> 
                    }

                    { 
                        tab === "send"
                        && 
                        <div>

                            {/* search section */}
                            <div style={{ padding: "24px 24px 10px 24px" }}>
                                <Input
                                    onChange={(e)=>setSearch(e.target.value)}
                                    placeholder="Search..."
                                    prefix={<FiSearch size={14} color="#868FA0"/>}
                                    suffix={<IoClose onClick={()=>setSearch("")} style={{cursor: "pointer"}} size={14} color="#2B2A2A" />}
                                    style={{
                                        width: "502px",
                                        fontSize: "14px",
                                        height: "48px",
                                    }}
                                    value={search}
                                    size="middle"
                                />
                            </div>
                            
                            {/* email list */}
                            <div>
                                {
                                    [...Array(9).keys()].map((item, index)=>
                                        <div key={index}
                                            style={{
                                                borderBottom: "1px solid #E0E0E0",
                                                cursor: "pointer"
                                            }}
                                        >
                                            <div className='flex items-center justify-between p-[18px]'>
                                                <p>Jullu Jalal</p>
                                                <p>Our Bachelor of Commerce program is ACBSP-accredited.....</p>
                                                <div className='flex items-center gap-[70px]'>
                                                    <p>8:38 AM</p>
                                                    <MdDelete onClick={(e) => handleDeleteClick(e, 1)} style={{cursor: "pointer"}} size={25} />
                                                </div>
                                            </div>
                                        </div>
                                    )
                                }
                            </div>

                            {/* pagination */}
                            <div className='flex items-center justify-center mt-6'>
                                <Pagination 
                                    defaultCurrent={parseInt(page)} 
                                    total={10} 
                                    onChange={handlePageChange} 
                                />
                            </div>
                        </div> 
                    }

                    {
                        tab === "details"
                        &&
                        <div className='p-6'>
                            <h1 className='mb-2'>Email Details</h1>

                            {/* sender name and time */}
                            <div className='flex items-center gap-4 mb-1'>
                                <p className='text-[#6A6D7C] text-base font-medium'>{value?.user?.fullName}</p>
                                <p className='text-[#6A6D7C] text-[14px] font-normal'>{moment(value?.created_at).format('LT')}</p>
                            </div>

                            {/* email subject */}
                            <p className='text-[#6A6D7C] text-[14px] font-normal mb-4'>{value?.subject}</p>

                            {/* email message */}
                            <div className='bg-[#F1F4F9] rounded-[8px] text-[#949494] p-4 h-fit'>
                                {value?.message}
                            </div>

                            <hr style={{margin: "24px 0"}} />

                            {/* replay section */}
                            <div>
                                <label 
                                    htmlFor="" 
                                    style={{
                                        display: "block", 
                                        marginBottom: "8px", 
                                        fontSize: "16px", 
                                        fontWeight: 500, 
                                        color: "#565656"
                                    }}
                                >
                                    Reply:-
                                </label>

                                <Input.TextArea
                                    placeholder="Write Message..."
                                    onChange={(e)=>setReply(e.target.value)}
                                    style={{
                                        width: "100%",
                                        height: "290px",
                                        fontSize: "14px",
                                        fontWeight: 400,
                                        resize: 'none',
                                        background:"#F1F4F9",
                                        color: "#9D9D9D",
                                        border: "none",
                                        outline: "none",
                                        padding: "16px"
                                    }}
                                />
                            </div>

                            {/* send button and media import button section */}
                            <div
                                style={{
                                    width: "100%",
                                    display: "flex",
                                    alignItems: "flex-end",
                                    justifyContent: "flex-end",
                                    paddingRight: "24px",
                                    marginTop: "20px"
                                }}
                            >
                                <div 
                                    style={{
                                        width: "fit-content",
                                        display: "flex",
                                        alignItems: "center",
                                        gap: "12px"
                                    }}
                                >
                                    <input type="file" id='file' onChange={onChange} style={{display: "none"}} />
                                    <input type="file" id='img' style={{display: "none"}} />

                                    <label  style={{display: "block"}} htmlFor="file">
                                        <TfiLink  size={20} color='#9D9D9D' />
                                    </label>

                                    <label htmlFor="img">
                                        <FaFileImage htmlFor="img" size={20} color='#9D9D9D' />
                                    </label>

                                    <button
                                        onClick={handleReply}
                                        style={{
                                            width: "120px",
                                            height:"38px",
                                            borderRadius: "8px",
                                            background: "#436FB6",
                                            color: "white",
                                            display: "flex",
                                            alignItems: "center",
                                            justifyContent: "center",
                                            gap: "17px",
                                            border: "none",
                                            outline: "none",
                                            cursor: "pointer"
                                        }}
                                    >
                                        Send <LuSend color='white' /> 
                                    </button>
                                </div>
                            </div>
                        </div>
                    }

                </div>
            </div>
        </div>
    )
}

export default AdminContacts