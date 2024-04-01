import React, { useState } from 'react'
import BackButton from '../../Components/BackButton'
import { Link } from 'react-router-dom';
import { CiEdit } from "react-icons/ci";
import { MdOutlineUpload } from "react-icons/md";
import onsite from "../../assets/on site.png"
import { Button, Form, Input } from 'antd';
import { BsSendArrowUp } from "react-icons/bs";
import { WiTime7 } from "react-icons/wi";
import { DatePicker, TimePicker  } from "antd";
import Swal from 'sweetalert2';
import logo from "../../assets/logo.png"

const CandidateShortProfile = () => {
    const [open, setOpen] = useState(false)
    const [tab, setTab] = useState("");
    const onChange = (date, dateString) => {
        console.log(date, dateString);
    };

    const handleSubmit=(values)=>{
        Swal.fire({
            html: "You are Sending a Job Interview <span style=\"color: #436FB6\">Notification & Email</span> <br> Candidate  name : Mr.Jobed <br>Application No : #20221",
            imageUrl: `${logo}`,
            width: 600,
            imageWidth: 200,
            imageHeight: 30,
            imageAlt: "Custom image",
            confirmButtonText: 'Confirm',
            showCloseButton: true,
            customClass: {
                confirmButton: 'custom-send-button',
                closeButton: 'custom-close-button',
                popup: 'custom-modal-popup',
            }
        });        
    }
    
    const handleReject=()=>{
        Swal.fire({
            html: "Do you want to Reject This Candidate ! <br> Candidate  name : Mr.Jobed <br>Application No : #20221",
            imageUrl: `${logo}`,
            width: 450,
            imageWidth: 200,
            imageHeight: 30,
            imageAlt: "Custom image",
            confirmButtonText: 'Confirm',
            showCloseButton: true,
            customClass: {
                confirmButton: 'custom-send-button',
                closeButton: 'custom-close-button',
                popup: 'custom-modal-popup',
            }
        });        
    }
    return (
        <>
            <div style={{marginBottom : "20px"}}>
                <BackButton link="/" />
            </div>

            <div className='bg-white p-6 rounded-lg border'>
                <h1 className='text-[20px] text-[#172740] font-medium mb-6'>Candidate Introduction</h1>

                <div className='grid grid-cols-12 gap-6'>
                    <div className="col-span-7 flex items-center gap-6 bg-[#ECF1F8] p-6 rounded-lg">
                        <div className='w-[30%]'>
                            <img 
                                style={{
                                    width: "260px", 
                                    height: "230px",
                                    borderRadius: "8px",
                                }} 
                                src="https://avatars.design/wp-content/uploads/2021/02/corporate-avatars-TN-1.jpg" 
                                alt="" 
                            />
                        </div>

                        <div className='w-[70%]  '>
                            <div className='grid grid-cols-1 gap-4'>
                                <div className='flex  items-center justify-between'>
                                    <p className='w-[30%]'>Name</p>
                                    <div className='w-[5%]'>:</div>
                                    <p className='w-[65%] text-[#6F6F6F]'>User Hossain</p>
                                </div>
                                
                                <div className='flex items-center justify-between'>
                                    <p className='w-[30%]'>Application NO</p>
                                    <div className='w-[5%]'>:</div>
                                    <p className='w-[65%] text-[#6F6F6F]'>174577545745</p>
                                </div>
                                
                                <div className='flex items-center justify-between'>
                                    <p className='w-[30%]'>Email</p>
                                    <div className='w-[5%]'>:</div>
                                    <p className='w-[65%] text-[#6F6F6F]'>admin@gmail</p>
                                </div>
                                
                                <div className='flex items-center justify-between'>
                                    <p className='w-[30%]'>Phone</p>
                                    <div className='w-[5%]'>:</div>
                                    <p className='w-[65%] text-[#6F6F6F]'>+88015654544</p>
                                </div>
                                
                                <div className='flex items-center justify-between'>
                                    <p className='w-[30%]'>Present Address</p>
                                    <div className='w-[5%]'>:</div>
                                    <p className='w-[65%] text-[#6F6F6F]'>Banasree/Rampura- Dhaka-1219</p>
                                </div>
                            </div>
                        </div>
                    </div>


                    <div className="col-span-5 bg-[#ECF1F8] p-6 rounded-lg relative">
                        <div className='grid grid-cols-1 gap-4'>
                            <div className='flex items-center justify-between'>
                                <p className='w-[30%]'>Job Position</p>
                                <div className='w-[5%]'>:</div>
                                <p className='w-[65%] text-[#6F6F6F]'>Software Developer</p>
                            </div>
                            
                            <div className='flex items-center justify-between'>
                                <p className='w-[30%]'>Experience</p>
                                <div className='w-[5%]'>:</div>
                                <p className='w-[65%] text-[#6F6F6F]'>bdCalling</p>
                            </div>
                            
                            <div className='flex items-center justify-between'>
                                <p className='w-[30%]'>Education</p>
                                <div className='w-[5%]'>:</div>
                                <p className='w-[65%] text-[#6F6F6F]'>Banasree</p>
                            </div>
                            
                            <div className='flex items-center justify-between'>
                                <p className='w-[30%]'>Result</p>
                                <div className='w-[5%]'>:</div>
                                <p className='w-[65%] text-[#6F6F6F]'> 9 AM to 6 PM</p>
                            </div>
                            
                            <Link 
                                to={"/candidate-profile/1"} 
                                className='bg-[#436FB6] absolute bottom-6 left-6 w-fit text-[14px] rounded-full text-white px-3 py-2 hover:text-white'
                            >
                                Candidate Profile
                            </Link>
                        </div>
                    </div>
                </div>


                <h1 className='text-[20px] text-[#172740] font-medium my-6'>Candidate CV/Resume</h1>
                <div className='grid grid-cols-12 gap-6 mb-6'>
                    <div className='col-span-4 bg-[#ECF1F8] rounded-lg '>
                        <div className='w-full h-[96px] gap-6 flex items-center justify-center'>
                            <Link to={"/job-seeker-cv/2"}>
                                <button className='w-fit px-4 py-2 border border-[#436FB6] text-[#436FB6] rounded-[90px]  flex items-center gap-2'><CiEdit size={16} />  Job Seeker CV</button>
                            </Link>
                            <Link to={"/uploaded-cv/2"}>
                                <button className='w-fit px-4 py-2 border border-[#436FB6] text-[#436FB6] rounded-[90px]  flex items-center gap-2'><MdOutlineUpload size={16} />  Uploaded CV</button>
                            </Link>
                        </div>
                    </div>
                    <div className='col-span-8 bg-[#ECF1F8] w-full  h-[96px] p-6 rounded-lg '>
                        <div className='flex items-center justify-between'>
                            <p className='w-[476px] text-[14px] text-[#6F6F6F] font-normal'>Hello, this Employer is  starting a new profile . If this accounts have problem ,You can report this id.</p>
                            <div className='flex items-center gap-6'>
                                <button onClick={handleReject}  className='w-[120px] py-2 border border-[#436FB6] text-[#436FB6] rounded-[90px]'> Reject</button>
                                <button onClick={()=>setOpen(!open)} className='w-[120px] text-white py-2 bg-[#436FB6] rounded-[90px]'>{ open ? "Recruited" : "Selected" }</button>
                            </div>
                        </div>
                    </div>
                </div>
                
                {
                    open &&
                    <div className='grid grid-cols-2 gap-6'>
                        <div onClick={()=>(setOpen(false),setTab("onsite"))} className="bg-[#ECF1F8] cursor-pointer rounded-lg p-6">
                            <div  className="bg-white h-[350px] flex items-center justify-center gap-2 rounded-lg">
                                <div>
                                    <img style={{margin: "0 auto"}} src={onsite} alt="" />
                                    <p className='text-[24px] mt-6 text-center font-medium text-[#FBA51A]'>OnSite Interview</p>
                                </div>
                            </div>
                        </div>
                        <div onClick={()=>(setOpen(false), setTab("online"))} className="bg-[#ECF1F8] cursor-pointer rounded-lg p-6">
                            <div className="bg-white h-[350px] flex items-center justify-center rounded-lg">
                                <div>
                                    <img style={{margin: "0 auto"}} src={onsite} alt="" />
                                    <p className='text-[24px] mt-6 text-center font-medium text-[#FBA51A]'>Online Interview</p>
                                </div>
                            </div>
                        </div>
                    </div>
                }


                {/* {} */}

                {
                    tab &&  <p className='text-[24px] my-6 font-medium text-[#FBA51A]'> {  tab === "onsite" ? "OnSite Interview" : "Online Interview"} </p>
                }

                {
                    tab &&
                    <Form className='grid grid-cols-12 gap-6'>
                        <div className='col-span-6'>
                            <label htmlFor="email" style={{display: "block", marginBottom: "13px" }}> Job Title </label>
                            <Form.Item
                                style={{marginBottom: 0}}
                                name="job_title"
                                id="email"
                                rules={[
                                    {
                                    required: true,
                                    message: "Please Enter Job Title",
                                    },
                                ]}
                            >
                                <Input
                                    placeholder=" Enter Job Title"
                                    type="text"
                                    style={{
                                        border: "none",
                                        height: "48px",
                                        background: "#F1F4F9",
                                        borderRadius: "90px",
                                        padding: "0 16px",
                                        color: "#A6A6A6",
                                        fontSize: "14px",
                                        fontWeight: 400,
                                        outline: "none"
                                    }}
                                />
                            </Form.Item>
                        </div>
                        
                        {
                            tab === "onsite" 
                            ?
                            <div className='col-span-6'>
                                <label htmlFor="email" style={{display: "block", marginBottom: "13px" }}> Interview Location </label>
                                <Form.Item
                                    style={{marginBottom: 0}}
                                    name="location"
                                    id="email"
                                    rules={[
                                        {
                                        required: true,
                                        message: "Please Location",
                                        },
                                    ]}
                                >
                                    <Input
                                        placeholder="Enter Location"
                                        type="text"
                                        style={{
                                            border: "none",
                                            height: "48px",
                                            background: "#F1F4F9",
                                            borderRadius: "90px",
                                            padding: "0 16px",
                                            color: "#A6A6A6",
                                            fontSize: "14px",
                                            fontWeight: 400,
                                            outline: "none"
                                        }}
                                    />
                                </Form.Item>
                            </div>
                            :
                            <div className='col-span-6'>
                                <label htmlFor="email" style={{display: "block", marginBottom: "13px" }}> Zoom Meeting Link </label>
                                <Form.Item
                                    style={{marginBottom: 0}}
                                    name="zoom_link"
                                    id="email"
                                    rules={[
                                        {
                                        required: true,
                                        message: "Please Enter Zoom Meeting Link",
                                        },
                                    ]}
                                >
                                    <Input
                                        placeholder="Enter Zoom Meeting Link"
                                        type="text"
                                        style={{
                                            border: "none",
                                            height: "48px",
                                            background: "#F1F4F9",
                                            borderRadius: "90px",
                                            padding: "0 16px",
                                            color: "#A6A6A6",
                                            fontSize: "14px",
                                            fontWeight: 400,
                                            outline: "none"
                                        }}
                                    />
                                </Form.Item>
                            </div>
                        }

                        
                        
                        <div className='col-span-6'>
                            <label htmlFor="email" style={{display: "block", marginBottom: "13px" }}> Interview Date </label>
                            <Form.Item
                                style={{marginBottom: 0}}
                                name="date"
                                id="email"
                                rules={[
                                    {
                                        required: true,
                                        message: "Please Input Interview Date"
                                    }
                                ]}
                            >
                                <DatePicker 
                                    style={{
                                        width: "100%",
                                        height: "48px",
                                        background: "#F1F4F9",
                                        border: "none",
                                        borderRadius: "90px",
                                        padding: "0 16px",
                                        cursor: "pointer"
                                    }} 
                                    onChange={onChange} 
                                />
                            </Form.Item>
                        </div>
                        
                        <div className='col-span-6'>
                            <label htmlFor="email" style={{display: "block", marginBottom: "13px" }}> Interview Time </label>
                            <Form.Item
                                style={{marginBottom: 0}}
                                name="time"
                                id="email"
                                rules={[
                                    {
                                        required: true,
                                        message: "Please Input Interview Time"
                                    }
                                ]}
                            >
                                <TimePicker 
                                    style={{
                                        width: "100%",
                                        height: "48px",
                                        background: "#F1F4F9",
                                        border: "none",
                                        borderRadius: "90px",
                                        padding: "0 16px",
                                        cursor: "pointer"
                                    }} 
                                    onChange={onChange} 
                                />
                            </Form.Item>
                        </div>
                        
                        <div className='col-span-12'>
                            <label htmlFor="email" style={{display: "block", marginBottom: "13px" }}> Message </label>
                            <Form.Item
                                style={{marginBottom: 0}}
                                name="message"
                                id="email"
                                rules={[
                                    {
                                    required: true,
                                    message: "Please input Message",
                                    },
                                ]}
                            >
                                <Input.TextArea
                                    placeholder="Enter Message"
                                    type="email"
                                    style={{
                                        border: "none",
                                        height: "200px",
                                        background: "#F1F4F9",
                                        borderRadius: "12px",
                                        padding: "10px 16px",
                                        color: "#A6A6A6",
                                        fontSize: "14px",
                                        resize: "none",
                                        fontWeight: 400,
                                        outline: "none"
                                    }}
                                />
                            </Form.Item>
                        </div>
                        
                        <Form.Item style={{marginBottom: 0}}>
                            <Button
                                // htmlType='submit'
                                onClick={handleSubmit}
                                block
                                style={{
                                    width: "200px",
                                    background: "#FBA51A",
                                    color: "white",
                                    fontSize: "14px",
                                    padding: "8px 0 ",
                                    borderRadius: "90px",
                                    border: "none",
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "center",
                                    margin: "0 auto",
                                    gap: "12px",
                                    outline: "none"
                                }}
                            >
                                <BsSendArrowUp size={14} color='white' /> Email & Notification
                            </Button>
                        </Form.Item>
                    </Form>
                }
                
            </div>
        </>
    )
}

export default CandidateShortProfile;