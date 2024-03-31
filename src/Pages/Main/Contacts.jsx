import React, { useState } from 'react'
import BackButton from '../../Components/BackButton';
import { HiOutlineMail } from "react-icons/hi";
import { Input, Pagination } from 'antd';
import { FiSearch } from 'react-icons/fi';
import { IoClose } from 'react-icons/io5';
import { MdDelete } from "react-icons/md";
import { MdClose } from "react-icons/md";
import { LuSend } from "react-icons/lu";
import { TfiLink } from "react-icons/tfi";
import { FaFileImage } from "react-icons/fa";
import { IconMailForward } from '@tabler/icons-react';
import Swal from 'sweetalert2';

const Contacts = () => {
    const [tab, setTab] = useState(new URLSearchParams(window.location.search).get('tab') || "inbox");
    const [page, setPage] = useState(new URLSearchParams(window.location.search).get('page') || 1);
    const [search, setSearch] = useState("");
    const [from, setFrom] = useState("")
    const [to, setTo] = useState("");
    const [message, setMessage] = useState("")

    const handleReset=()=>{
        setFrom("");
        setTo("");
        setMessage("")
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

        }).then((result) => {
            if (result.isConfirmed) {
                Swal.fire({
                    title: "Deleted!",
                    text: "Your file has been deleted.",
                    icon: "success",
                    showConfirmButton: false,
                    timer: 1500,
                });
            }
        });
    };

    return (
        <div>

            {/* heading */}
            <div style={{marginBottom: "15px"}}>
                <BackButton link='/' />
            </div>

            {/* sidebar */}
            <div className='h-[81vh] flex items-center gap-4'>
                <div  className='w-[290px] h-full border border-[#F5F5F5] p-4 bg-white rounded-lg'>
                    <button
                        onClick={()=>handleTab("compose")}
                        className='w-full h-[42px] bg-[#436FB6] text-white rounded-lg border-none outline-none mb-4 cursor-pointer'
                    >
                        + Compose
                    </button>

                    <p className='text-base font-normal text-[#494949]'>My Emails</p>

                    <div
                        onClick={()=>handleTab("inbox")}
                        style={{
                            width: "100%", 
                            height: "42px", 
                            background: "#C5D2E8", 
                            borderRadius: "8px",
                            marginTop: "14px",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "space-between",
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
                        1253
                    </div>


                    <div
                        onClick={()=>handleTab("send")}
                        style={{
                            width: "100%", 
                            height: "42px", 
                            background: "#C5D2E8" , 
                            borderRadius: "8px",
                            marginTop: "14px",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "space-between",
                            color: tab === "send" ? "#436FB6" : "#6F6F6F",
                            padding: "0 16px",
                            cursor: "pointer"
                        }}
                    >
                        <div
                            style={{
                                display: "flex",
                                alignItems: "center",
                                gap: "8px",
                                color: tab === "send" ? "#436FB6" : "#6F6F6F"
                            }}
                        >
                            <IconMailForward size={17} />
                            <p>Send</p>
                        </div>
                        1253
                    </div>

                    
                </div>
                
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
                    { 
                        tab === "inbox"
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
                                            onClick={()=>handleTab("details")}
                                        >
                                            <div
                                                style={{
                                                    display: "flex",
                                                    alignItems: "center",
                                                    justifyContent: 'space-between',
                                                    padding: "18px",
                                                }}
                                            >
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
                            <div style={{
                                display: "flex",
                                alignItems: "center",
                                justifyContent: 'center',
                                marginTop: "24px"
                            }}>
                                <Pagination 
                                    defaultCurrent={parseInt(page)} 
                                    total={10} 
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
                                            onClick={()=>handleTab("details")}
                                        >
                                            <div
                                                style={{
                                                    display: "flex",
                                                    alignItems: "center",
                                                    justifyContent: 'space-between',
                                                    padding: "18px",
                                                }}
                                            >
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
                            <div style={{
                                display: "flex",
                                alignItems: "center",
                                justifyContent: 'center',
                                marginTop: "24px"
                            }}>
                                <Pagination 
                                    defaultCurrent={parseInt(page)} 
                                    total={10} 
                                    onChange={handlePageChange} 
                                />
                            </div>
                        </div> 
                    }

                    {
                        tab === "compose" 
                        &&
                        <div>
                            <div >   
                                {/* reset button */}
                                <div
                                    style={{
                                        width: "100%",
                                        display: "flex",
                                        alignItems: "flex-end",
                                        justifyContent: "flex-end",
                                        padding: "16px"
                                    }}
                                >
                                    
                                    <div
                                        style={{
                                            width: "30px",
                                            height: "30px",
                                            borderRadius: "6px",
                                            border: "1px solid #D5D5D5",
                                            display: "flex",
                                            alignItems: "center",
                                            justifyContent: "center",
                                            cursor: "pointer"
                                        }}
                                        onClick={handleReset}
                                    >
                                        <MdClose size={20} color='#494949' />
                                    </div>
                                </div>

                                {/* email form and to  */}
                                <div style={{padding: "0 0 30px 24px"}}>
                                    <div style={{display: "flex", alignItems: "center", gap: "15px", marginBottom: "24px"}}>
                                        <label htmlFor="">To:</label>
                                        <Input
                                            label="Form"
                                            onChange={(e)=>setFrom(e.target.value)}
                                            placeholder="Search..."
                                            style={{
                                                width: "400px",
                                                height: "42px",
                                                fontSize: "14px",
                                                border: "none",
                                                outline: "none",
                                                background:"#F1F4F9",
                                                marginLeft: "35px"
                                            }}
                                            value={from}
                                            size="middle"
                                        />
                                    </div>
                                    <div style={{display: "flex", alignItems: "center", gap: "15px"}}>
                                        <label htmlFor="">Subject:</label>
                                        <Input
                                            label="Form"
                                            placeholder="Search..."
                                            onChange={(e)=>setTo(e.target.value)}
                                            style={{
                                                width: "400px",
                                                height: "42px",
                                                fontSize: "14px",
                                                background:"#F1F4F9",
                                                border: "none",
                                                outline: "none",
                                            }}
                                            value={to}
                                            size="middle"
                                        />
                                    </div>
                                </div>

                                {/* divider */}
                                <div style={{width: "100%", height: "1px", background: "#E0E0E0", margin: "0"}}/>

                                {/* message section */}
                                <div style={{padding: "24px"}}>
                                    <label style={{display: "block", marginBottom: "8px"}} htmlFor="">Message :</label>
                                    <Input.TextArea
                                        placeholder="Write Message..."
                                        onChange={(e)=>setMessage(e.target.value)}
                                        value={message}
                                        style={{
                                            width: "100%",
                                            height: "365px",
                                            fontSize: "14px",
                                            padding: "10px",
                                            resize: 'none',
                                            background:"#F1F4F9",
                                            border: "none",
                                            outline: "none",
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
                                        paddingRight: "24px"
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
                                        <input type="file" id='file' style={{display: "none"}} />
                                        <input type="file" id='img' style={{display: "none"}} />

                                        <label  style={{display: "block"}} htmlFor="file">
                                            <TfiLink  size={20} color='#9D9D9D' />
                                        </label>

                                        <label htmlFor="img">
                                            <FaFileImage htmlFor="img" size={20} color='#9D9D9D' />
                                        </label>

                                        <button
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
                                                cursor: "pointer",
                                                boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)"
                                            }}
                                        >
                                            Send <LuSend color='white' /> 
                                        </button>
                                    </div>
                                </div>
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
                                <p className='text-[#6A6D7C] text-base font-medium'>Job Seeker</p>
                                <p className='text-[#6A6D7C] text-[14px] font-normal'>8:38 AM</p>
                            </div>

                            {/* email subject */}
                            <p className='text-[#6A6D7C] text-[14px] font-normal mb-4'>Our Bachelor of Commerce program is ACBSP-accredited.</p>

                            {/* email message */}
                            <div className='bg-[#F1F4F9] rounded-[8px] text-[#949494] p-4 h-fit'>
                                quam vitae laoreet non nibh consectetur eu ac in Sed volutpat Nunc dignissim, eget tortor. tincidunt dui Nullam tincidunt In odio dui. Donec commodo vitae dui est. amet, commodo odio In Ut Donec Donec In ex orci nisl. eget Morbi sit ex at 
                                ex Sed nisi tincidunt lacus elit leo. faucibus quis Sed consectetur nulla, libero, ipsum at, elit dui massa amet, ipsum vehicula, at, Vestibulum odio tincidunt diam amet, dolor adipiscing Nullam laoreet nec sit elementum sodales. nibh id 
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
                                    onChange={(e)=>setMessage(e.target.value)}
                                    style={{
                                        width: "100%",
                                        height: "365px",
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
                                    <input type="file" id='file' style={{display: "none"}} />
                                    <input type="file" id='img' style={{display: "none"}} />

                                    <label  style={{display: "block"}} htmlFor="file">
                                        <TfiLink  size={20} color='#9D9D9D' />
                                    </label>

                                    <label htmlFor="img">
                                        <FaFileImage htmlFor="img" size={20} color='#9D9D9D' />
                                    </label>

                                    <button
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

export default Contacts; 