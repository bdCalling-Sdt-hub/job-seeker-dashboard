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
                            color: "#325389",
                            padding: "0 16px",
                            cursor: "pointer"
                        }}
                    >
                        <div
                            style={{
                                display: "flex",
                                alignItems: "center",
                                gap: "8px",
                                color: "#325389"
                            }}
                        >
                            <HiOutlineMail size={17} />
                            <p>message</p>
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
                            <div style={{ padding: "24px 24px 10px 24px" }}>
                                <Input
                                    onChange={(e)=>setSearch(e.target.value)}
                                    placeholder="Search..."
                                    prefix={<FiSearch size={14} color="#868FA0"/>}
                                    suffix={<IoClose onClick={()=>setSearch("")} style={{cursor: "pointer"}} size={14} color="#2B2A2A" />}
                                    style={{
                                        width: "502px",
                                        height: "100%",
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
                                                borderBottom: "1px solid #E0E0E0"
                                            }}
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
                                                <p>Our Bachelor of Commerce program is ACBSP-accredited.</p>
                                                <div className='flex items-center gap-[70px]'>
                                                    <p>8:38 AM</p>
                                                    <MdDelete  style={{cursor: "pointer"}} size={25} />
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
                            <div 
                                style={{

                                }}
                            >   
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
                                <div style={{width: "100%", height: "1px", background: "#E0E0E0", margin: "0 0 30px 0"}}/>

                                {/* message section */}
                                <div style={{boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",  borderRadius: "8px", margin: "24px", padding: "24px"}}>
                                    <Input.TextArea
                                        placeholder="Write Message..."
                                        onChange={(e)=>setMessage(e.target.value)}
                                        value={message}
                                        style={{
                                            width: "100%",
                                            height: "365px",
                                            fontSize: "14px",
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
                                                cursor: "pointer"
                                            }}
                                        >
                                            Send <LuSend color='white' /> 
                                        </button>
                                    </div>
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