import React, { useEffect, useState } from 'react'
import BackButton from '../../Components/BackButton'
import { Link, useParams } from 'react-router-dom';
import { CiEdit } from "react-icons/ci";
import { MdOutlineUpload } from "react-icons/md";
import onsite from "../../assets/on site.png"
import { DatePicker, TimePicker, Button, Form, Input, Modal, Spin } from 'antd';
import { BsSendArrowUp } from "react-icons/bs";
import { WiTime7 } from "react-icons/wi";
import Swal from 'sweetalert2';
import logo from "../../assets/logo.png"
import baseURL from '../../../Config';
import ImgURL from '../../../ImgConfig';
import moment from 'moment';

const CandidateShortProfile = () => {
    const { id } = useParams();
    const [applicant, setApplicant] = useState();
    const [job, setJob] = useState();
    const [application, setApplication] = useState()
    const [open, setOpen] = useState(false)
    const [openModal, setOpenModal] = useState(false)
    const [tab, setTab] = useState("");
    const [refresh, setRefresh] = useState("")
    const [message, setMessage] = useState("")
    if(refresh){
        setTimeout(()=>{
            setRefresh("")
        }, 1500)
    }

    useEffect(()=>{
        async function getApi(){
            const response = await baseURL.get(`/apply/details/${id}`, {
                headers: {
                    "Content-Type": "application/json",
                    authorization: `Bearer ${JSON.parse(localStorage.getItem('token'))}`
                }
            })
            setApplicant (response?.data.Cv[0]);
            setJob(response?.data?.joblist)
            setApplication(response?.data?.apply_details)
            console.log(response?.data)
        }
        getApi();
    }, [id, refresh !== ""]);

    const handleSubmit=async(values)=>{
        const data = {
            fullName: applicant?.fullName,
            email : applicant?.email,
            jobTitle : job?.job_title,
            address : values?.address,
            date : moment(values?.date).format('L'),
            time : moment(values?.time ).format('LT'),
            message: values?.message,
            zoom_link: values?.zoom_link 
        }

        await baseURL.post(`/send/mail`, {...data }, {
            headers: {
                "Content-Type": "application/json",
                authorization: `Bearer ${JSON.parse(localStorage.getItem('token'))}`
            }
        }).then((response)=>{
            if(response.status === 200){
                Swal.fire({
                    html: `You are Sending a Job Interview <span style=\"color: #436FB6\">Notification & Email</span> <br> Candidate  name : ${applicant?.fullName} <br>Application No : #20221`,
                    imageUrl: `${logo}`,
                    width: 600,
                    imageWidth: 200,
                    imageHeight: 30,
                    imageAlt: "Custom image",
                    timer: 1500,
                    showConfirmButton: false,
                });
            }
            
        })      
    }
    
    const handleReject=async(values)=>{
        const data= {
            id: application?.id,
            status: "reject"
        }
        await baseURL.post(`/apply/status`, data, {
            headers: {
                "Content-Type": "application/json",
                authorization: `Bearer ${JSON.parse(localStorage.getItem('token'))}`
            }
        }).then(async(response)=>{
            if(response.status === 200){
                const formData = new FormData();
                formData.append("fullName", applicant?.fullName)
                formData.append("email", applicant?.email)
                formData.append("jobTitle", job?.job_title)
                formData.append("message", values.message)

                await baseURL.post(`/send/mail`, formData , {
                    headers: {
                        "Content-Type": "multipart/form-data",
                        authorization: `Bearer ${JSON.parse(localStorage.getItem('token'))}`
                    }
                }).then((response)=>{
                    Swal.fire({
                        title: "Success!",
                        text: "Rejected This Candidate",
                        icon: "success",
                        timer: 1500,
                        showConfirmButton: false,
                    }).then((response)=>{
                        setOpenModal(false)
                        setMessage("")
                    })
                })
                
            }
        });     
    }

    const handleRecuited = async(id)=>{
        const data= {
            id: id,
            status: "select"
        }
        await baseURL.post(`/apply/status`, data, {
            headers: {
                "Content-Type": "application/json",
                authorization: `Bearer ${JSON.parse(localStorage.getItem('token'))}`
            }
        }).then((response)=>{
            if(response.status === 200){
                setRefresh("true")
                Swal.fire({
                    html: `You are Sending a Job Interview <span style=\"color: #436FB6\">Notification & Email</span> <br> Candidate  name : ${applicant?.fullName} <br>Application No : #20221`,
                    imageUrl: `${logo}`,
                    width: 600,
                    imageWidth: 200,
                    imageHeight: 30,
                    imageAlt: "Custom image",
                    timer: 1500,
                    showConfirmButton: false,
                });
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
                    <div className="col-span-7  bg-[#ECF1F8] p-6 rounded-lg">
                        <div className='flex items-center gap-6'>
                            <div className='w-[30%]'>
                                <img 
                                    style={{
                                        width: "260px", 
                                        height: "230px",
                                        borderRadius: "8px",
                                    }} 
                                    src={applicant?.image ? `${ImgURL}/${applicant?.image}` :      "https://avatars.design/wp-content/uploads/2021/02/corporate-avatars-TN-1.jpg"                            } 
                                    
                                    alt="" 
                                />
                            </div>

                            <div className='w-[70%]  '>
                                <div className='grid grid-cols-1 gap-4'>
                                    <div className='flex  items-center justify-between'>
                                        <p className='w-[30%]'>Name</p>
                                        <div className='w-[5%]'>:</div>
                                        <p className='w-[65%] text-[#6F6F6F]'> {applicant?.fullName} </p>
                                    </div>
                                    
                                    <div className='flex items-center justify-between'>
                                        <p className='w-[30%]'>Application NO</p>
                                        <div className='w-[5%]'>:</div>
                                        <p className='w-[65%] text-[#6F6F6F]'>{applicant?.id} </p>
                                    </div>
                                    
                                    <div className='flex items-center justify-between'>
                                        <p className='w-[30%]'>Email</p>
                                        <div className='w-[5%]'>:</div>
                                        <p className='w-[65%] text-[#6F6F6F]'>{applicant?.email} </p>
                                    </div>
                                    
                                    <div className='flex items-center justify-between'>
                                        <p className='w-[30%]'>Phone</p>
                                        <div className='w-[5%]'>:</div>
                                        <p className='w-[65%] text-[#6F6F6F]'>{applicant?.mobile ? applicant?.mobile : "Not Found"} </p>
                                    </div>
                                    
                                    <div className='flex items-center justify-between'>
                                        <p className='w-[30%]'>Present Address</p>
                                        <div className='w-[5%]'>:</div>
                                        <p className='w-[65%] text-[#6F6F6F]'>{applicant?.address ? applicant?.address : "Not Found"} </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>


                    <div className="col-span-5 bg-[#ECF1F8] p-6 rounded-lg relative">
                        <div className='grid grid-cols-1 gap-4'>
                            <div className='flex items-center justify-between'>
                                <p className='w-[30%]'>Job Position</p>
                                <div className='w-[5%]'>:</div>
                                <p className='w-[65%] text-[#6F6F6F]'> {job?.job_title} </p>
                            </div>
                            
                            <div className='flex gap-2'>
                                <p className='w-[30%]'>Experience</p>
                                <div className='w-[5%]'>:</div>
                                <ul className='w-[65%] text-[#6F6F6F]'>
                                        {
                                            job?.experience? 
                                            job?.experience?.split(",")?.map((service, index)=>{
                                                return(
                                                    <li 
                                                        key={index} 
                                                        className='
                                                            list-disc 
                                                            text-[14px] 
                                                            font-normal
                                                            ml-6 mb-1 
                                                            text-[#565656]
                                                        '
                                                    >
                                                        {service}
                                                    </li>
                                                )
                                            })
                                            :
                                            <div className='flex items-center justify-center'>
                                                <Spin />
                                            </div>
                                        }
                                    </ul>
                            </div>
                            
                            <div className='flex items-center justify-between'>
                                <p className='w-[30%]'>Education</p>
                                <div className='w-[5%]'>:</div>
                                <ul className='w-[65%] text-[#6F6F6F]'>

                                    {
                                        job?.education  ? 
                                        job?.education?.split(",")?.map((service, index)=>
                                            <li 
                                                key={index} 
                                                className='
                                                    list-disc 
                                                    text-[14px] 
                                                    font-normal
                                                    ml-6 mb-1 
                                                    text-[#565656]
                                                '
                                            >
                                                {service}
                                            </li>
                                        )
                                        :
                                        <div className='flex items-center justify-center'>
                                            <Spin />
                                        </div>
                                    }
                                </ul>
                            </div>
                            
                            <div className='flex items-center justify-between'>
                                <p className='w-[30%]'>Result</p>
                                <div className='w-[5%]'>:</div>
                                <p className='w-[65%] text-[#6F6F6F]'> 9 AM to 6 PM</p>
                            </div>
                            
                            <Link 
                                to={`/candidate-profile/${application?.id}`} 
                                className='bg-[#436FB6]  w-fit text-[14px] rounded-full text-white px-3 py-2 hover:text-white'
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
                            {/* <Link to={"/job-seeker-cv/2"}>
                                <button className='w-fit px-4 py-2 border border-[#436FB6] text-[#436FB6] rounded-[90px]  flex items-center gap-2'><CiEdit size={16} />  Job Seeker CV</button>
                            </Link> */}
                            <a href={`${ImgURL}/${application?.cv}`} target='_blank'>

                                <button className='w-fit px-4 py-2 border border-[#436FB6] text-[#436FB6] rounded-[90px]  flex items-center gap-2'><MdOutlineUpload size={16} />  Uploaded CV</button>
                            </a>
                        </div>
                    </div>
                    <div className='col-span-8 bg-[#ECF1F8] w-full  h-[96px] p-6 rounded-lg '>
                        <div className='flex items-center justify-between'>
                            <p className='w-[476px] text-[14px] text-[#6F6F6F] font-normal'>Hello, this Employer is  starting a new profile . If this accounts have problem ,You can report this id.</p>
                            <div className='flex items-center gap-6'>
                                <button onClick={()=>setOpenModal(true)}  className='w-[120px] py-2 border border-[#436FB6] text-[#436FB6] rounded-[90px]'> Reject</button>
                                <button  onClick={()=>handleRecuited(application?.id)} className='w-[120px] text-white py-2 bg-[#436FB6] rounded-[90px]'>{ application?.status === "select" ? "Recruited" : "Selected" }</button>
                            </div>
                        </div>
                    </div>
                </div>
                
                {
                    application?.status === "select" &&
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
                    <Form className='grid grid-cols-12 gap-6' onFinish={handleSubmit} initialValues={{job_title: job?.job_title}}>
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
                                />
                            </Form.Item>
                        </div>

                        <div className='col-span-12'>
                            <label  style={{display: "block", marginBottom: "13px" }}> Address </label>
                            <Form.Item
                                style={{marginBottom: 0}}
                                name="address"
                                rules={[
                                    {
                                    required: true,
                                    message: "Please input Address",
                                    },
                                ]}
                            >
                                <Input
                                    placeholder="Enter Adress"
                                    style={{
                                        border: "none",
                                        height: 48,
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
                                htmlType='submit'
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
                                <BsSendArrowUp size={14} color='white' /> Email
                            </Button>
                        </Form.Item>
                    </Form>
                }
                
                <Modal

                    centered
                    open={openModal} 
                    onOk={false} 
                    onCancel={false}
                    footer={false}
                    closeIcon={false}
                >

                    <div>
                        <h1 className='font-semibold mb-4 text-lg text-center'>Are Your Sure to Reject this Candidate?</h1>
                        <Form onFinish={handleReject} layout='vertical'>
                            <Form.Item
                                name={"message"}
                                rules={[
                                    {
                                        required: true,
                                        message: "Please Enter The Message!"
                                    }
                                ]}
                                label="Enter Message"
                            >
                                <Input.TextArea
                                    style={{
                                        border: "1px solid #555555",
                                        width: "100%",
                                        height: 150,
                                        resize: "none",
                                        outline: "none",
                                        padding: 10,
                                        borderRadius: 8
                                    }}
                                />
                            </Form.Item>

                            <div className='w-[400px] flex items-center justify-center gap-6 mx-auto'>
                                <Form.Item
                                    style={{marginBottom: 0, width: "fit-content"}}
                                >
                                    <Button
                                        htmlType='submit'
                                        style={{
                                            width: 150,
                                            height:48,
                                            border: "none",
                                            outline: "none",
                                            borderRadius: 8,
                                            background: "#436FB6",
                                            color: "white"
                                        }}

                                    >
                                        Yes
                                    </Button>
                                </Form.Item>
                                <button onClick={()=>setOpenModal(false)} className='bg-red-300 w-[150px] h-[48px] rounded text-red-600'>No</button>
                            </div>
                        </Form>

                        {/* <div className='w-full'>
                            <div className='w-[400px] flex items-center justify-center gap-6 mx-auto'>
                                <button onClick={()=>handleReject(application?.id)} className='bg-[#436FB6] w-[150px] h-[48px] rounded text-white'>Yes</button>
                                <button onClick={()=>setOpenModal(false)} className='bg-red-300 w-[150px] h-[48px] rounded text-red-600'>No</button>
                            </div>
                        </div> */}
                    </div>
                </Modal>
            </div>
        </>
    )
}

export default CandidateShortProfile;