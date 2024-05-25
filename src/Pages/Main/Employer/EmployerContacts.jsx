import React, { useEffect, useState } from 'react'
import { HiOutlineMail } from "react-icons/hi";
import { Button, Form, Input, Pagination, Modal } from 'antd';
import { FiSearch } from 'react-icons/fi';
import { IoClose } from 'react-icons/io5';
import { LuSend } from "react-icons/lu";
import { FaFileImage } from "react-icons/fa";
import Swal from 'sweetalert2';
import BackButton from '../../../Components/BackButton';
import baseURL from '../../../../Config';
import moment from 'moment';

const EmployerContacts = () => {
    const [tab, setTab] = useState(new URLSearchParams(window.location.search).get('tab') || "inbox");
    const [page, setPage] = useState(new URLSearchParams(window.location.search).get('page') || 1);
    const [search, setSearch] = useState("");
    const [message, setMessage] = useState([]);
    const [open, setOpen] = useState("")


    const handleTab=(value)=>{
        setTab(value)
        window.history.pushState(null, "", `?tab=${value}`);
    }

    const handlePageChange = (page) => {
        setPage(page);
        window.history.pushState(null, "", `?page=${page}`);
    };

    useEffect(()=>{
        async function getApi(){
            const response = await baseURL.get(`/show-message-admin?subject=${search ? search : ""}`, {
                headers: {
                    "Content-Type": "application/json",
                    authorization: `Bearer ${JSON.parse(localStorage.getItem('token'))}`
                }
            })
            setMessage (response?.data?.data?.data)
        }
        getApi();
    }, [search]);

    const handleSubmit=async(values)=>{
        await baseURL.post(`/send-message-admin`, {...values},  {
            headers: {
                "Content-Type": "application/json",
                authorization: `Bearer ${JSON.parse(localStorage.getItem('token'))}`
            }
        }).then((response)=>{
            if(response.status === 200){
                Swal.fire({
                    title: "Messaged!",
                    text: "Sended Message Successfully",
                    icon: "success",
                    showConfirmButton: false,
                    timer: 1500,
                });
            }
        })
    }




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

                    <p className='text-base font-normal text-[#494949]'>Send Message</p>

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
                            gap: 8,
                            color: tab === "inbox" ? "#436FB6" : "#6F6F6F",
                            padding: "0 16px",
                            cursor: "pointer"
                        }}
                    >
                        <HiOutlineMail size={17} />
                        <p>Inbox</p>
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

                    <div 
                        className='items-end justify-end' 
                        style={{display: tab === "inbox" ? "flex" : "none"}}
                    >
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
                        ?
                        <div>
                            <div>
                                {
                                    message?.map((item, index)=>
                                        <div key={index}
                                            style={{
                                                borderBottom: "1px solid #E0E0E0"
                                            }}
                                        >
                                            <div className='flex items-center cursor-pointer justify-between p-[18px]' onClick={()=>setOpen(item.message)}>
                                                <p>{item?.user?.fullName}</p>
                                                <p>{item?.subject}</p>
                                                <p>{moment(item?.created_at).format('LT')}</p>
                                            </div>
                                        </div>
                                    )
                                }
                            </div>

                            {/* pagination */}
                            <div style={{
                                display:  message.length > 0 ? "flex" : "none",
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
                        :
                        <div className='p-6'>
                            <h1 className='mb-2 text-2xl text-center'>Send Message To Admin</h1>

                            <Form onFinish={handleSubmit} layout='vertical'>
                                <Form.Item
                                    label="Subject"
                                    name={"subject"}
                                    rules={[
                                        {
                                            required: true,
                                            message: "Please Enter Subject"
                                        }
                                    ]}
                                >
                                    <Input
                                        placeholder='Please Enter Subject'
                                        style={{
                                            width: "100%",
                                            height: "42px",
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
                                </Form.Item>

                                <hr style={{margin: "24px 0"}} />

                                {/* replay section */}
                                            

                                <Form.Item
                                    label="Message"
                                    name={"message"}
                                    rules={[
                                        {
                                            required: true,
                                            message: "Please Enter Message"
                                        }
                                    ]}
                                >
                                    <Input.TextArea
                                        placeholder="Write Message..."
                                        style={{
                                            width: "100%",
                                            height: "280px",
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
                                </Form.Item>
                        
                                

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
                                        <input type="file" id='img' style={{display: "none"}} />

                                        <label htmlFor="img">
                                            <FaFileImage htmlFor="img" size={20} color='#9D9D9D' />
                                        </label>

                                        <Form.Item style={{marginBottom: 0}}>
                                            <Button
                                                htmlType='submit'
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
                                            </Button>
                                        </Form.Item>
                                    </div>
                                </div>
                            </Form>
                        </div> 
                    }

                </div>
            </div>


            <Modal
                centered 
                title="Message Details" 
                open={open} 
                onOk={()=>setOpen("")}
                onCancel={()=>setOpen("")}
                footer={false}
            >
                <p>{open}</p>
            </Modal>
        </div>
    )
}

export default EmployerContacts