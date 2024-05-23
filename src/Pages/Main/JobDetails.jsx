import React, { useEffect, useState } from 'react'
import BackButton from '../../Components/BackButton';
import { FaFacebook, FaInstagram } from "react-icons/fa";
import { TiSocialLinkedinCircular } from "react-icons/ti";
import { useParams } from 'react-router-dom';
import baseURL from '../../../Config';
import moment from 'moment';
import Swal from 'sweetalert2';
import ImgURL from '../../../ImgConfig';
import { Button, Form, Input, Modal, Spin } from 'antd';

const JobDetails = () => {
    const { id } = useParams();
    const [details, setDetails] = useState({});
    const [company, setCompany] = useState({});
    const [userInfo, setuserInfo] = useState({});
    const [open, setOpen] = useState(false)
    console.log(userInfo)

    useEffect(()=>{
        async function getAPi(){
            const response = await baseURL.get(`/single-job-list?id=${id}`, {
                headers: {
                    "Content-Type": "application/json",
                    authorization: `Bearer ${JSON.parse(localStorage.getItem('token'))}`
                }
            });
            setuserInfo(response?.data?.data[0].user)
            setDetails(response?.data?.data[0]);
            
            setCompany(response?.data?.data[0]?.recruiter)
        }
        getAPi();
    }, [ id ]);
    const user = JSON.parse(localStorage.getItem("user"))



    const handleApprove=async(id)=>{

        await baseURL.get(`approve-job-post?job_id=${id}`, {
            headers: {
            "Content-Type": "multipart/form-data",
                authorization: `Bearer ${JSON.parse(localStorage.getItem('token'))}`,
            }
        }).then((response)=>{
            if(response?.status === 200){
                Swal.fire({
                    position: "center",
                    icon: "success",
                    title: "Job Post Approved",
                    showConfirmButton: false,
                    timer: 1500
                })
            }
        });
    }

    const onFinish = async(values) => {
        const value = {
            user_id : userInfo?.id,
            subject: values.subject,
            message: values.message
        }
        console.log(value)
        await baseURL.post(`/report-employer`, value, {
            headers: {
                "Content-Type": "application/json",
                authorization: `Bearer ${JSON.parse(localStorage.getItem('token'))}`,
            }
        }).then((response)=>{
            if(response.status ===200){
                Swal.fire({
                    title: "Reported!",
                    text: response?.data?.message,
                    icon: "success",
                    showConfirmButton: false,
                    timer: 1500,
                }).then((response)=>{
                    setOpen(false)
                })
            }
        })
    };
    return (
        <>
            <div style={{ marginBottom: "16px" }}>
                <BackButton link="/job-post" />
            </div>

            <div className='bg-white rounded-lg p-6 '>
                <h1 className='text-[20px] mb-4 text-[#172740] font-medium'>Job Post Details</h1>
                <div className="grid grid-cols-3 gap-6 mb-6">

                    <div className="bg-[#ECF1F8] p-6 rounded-lg">
                        <img 
                            style={{
                                width: "150px", 
                                height: "150px",
                                borderRadius: "8px",
                                margin: "0 auto"
                            }} 
                            src={ userInfo?.image ? `${ImgURL}/${userInfo?.image}` : "https://avatars.design/wp-content/uploads/2021/02/corporate-avatars-TN-1.jpg" }
                            alt="" 
                        />
                        <div className="grid grid-cols-1 gap-4 mt-5">
                            <div className='flex items-center justify-between'>
                                <p className='w-[30%]'>Company</p>
                                <div className='w-[10%]'>:</div>
                                <p className='w-[50%] text-[#6F6F6F]'>{details?.recruiter?.company_name} </p>
                            </div>

                            <div className='flex items-center justify-between'>
                                <p className='w-[30%]'>Status</p>
                                <div className='w-[10%]'>:</div>
                                <p className='w-[50%] text-[#6F6F6F] flex'>
                                    <p 
                                        className={` w-[88px] h-[27px] rounded-[100px] text-[13px] flex items-center justify-center
                                            ${details?.status === "published" && "bg-[#B0ECB2] text-[#009B06]" }
                                            ${details?.status === "expired" && "bg-[#F8B5B0] text-[#E81100]" }
                                            ${details?.status === "pending" && "bg-[#C5D2E8] text-[#365992]" }
                                            
                                        `}
                                    >
                                        {details?.status}
                                    </p>
                                </p>
                            </div>

                            <div className='flex items-center justify-between'>
                                <p className='w-[30%]'>Published</p>
                                <div className='w-[10%]'>:</div>
                                <p className='w-[50%] text-[#6F6F6F]'>{moment(details?.created_at).format('l')}</p>
                            </div>

                            <div className='flex items-center justify-between'>
                                <p className='w-[30%]'>Last Date</p>
                                <div className='w-[10%]'>:</div>
                                <p className='w-[50%] text-red-500'>{details?.application_last_date}</p>
                            </div>
                        </div>
                    </div>

                    <div className="bg-[#ECF1F8] p-6 rounded-lg">
                        <div className="grid grid-cols-1 gap-4">
                            <div className='flex items-center justify-between'>
                                <p className='w-[30%]'>Job Postion</p>
                                <div className='w-[10%]'>:</div>
                                <p className='w-[50%] text-[#6F6F6F]'>{details?.job_title}</p>
                            </div>

                            <div className='flex items-center justify-between'>
                                <p className='w-[30%]'>Job Catagory</p>
                                <div className='w-[10%]'>:</div>
                                <p className='w-[50%] text-[#6F6F6F]'>{details?.category?.category_name}</p>
                            </div>

                            <div className='flex items-center justify-between'>
                                <p className='w-[30%]'>Locatioon</p>
                                <div className='w-[10%]'>:</div>
                                <p className='w-[50%]'>{details?.recruiter?.location}</p>
                            </div>
                            
                            <div className='flex items-center justify-between'>
                                <p className='w-[30%]'>Website </p>
                                <div className='w-[10%]'>:</div>
                                <p className='w-[50%]'>{details?.recruiter?.website_url}</p>
                            </div>
                            
                            <div className='flex items-center justify-between'>
                                <p className='w-[30%]'>Salary</p>
                                <div className='w-[10%]'>:</div>
                                <p className='w-[50%] text-[#436FB6] font-semibold '>{details?.salary}</p>
                            </div>
                        </div>

                    </div>

                    <div className="bg-[#ECF1F8] p-6 rounded-lg">
                        <div className='flex justify-between mb-4'>
                            <p className='w-[40%] font-medium text-[#6F6F6F]'>Job Status </p>
                            <div className='w-[10%]'>:</div>
                            <div className='w-[50%] h-full'>
                                {details?.work_type}
                            </div>
                        </div>

                        <div className='flex justify-between mb-4'>
                            <p className='w-[40%] font-medium text-[#6F6F6F]'>Skills & Expertise</p>
                            <div className='w-[10%]'>:</div>
                            <div className='w-[50%] h-full flex items-center flex-wrap gap-2'>
                                {
                                    company?.company_service?.length > 0? 
                                    (company?.company_service)?.split(",")?.map((service, index)=>
                                        <p 
                                            key={index} 
                                            className='
                                                w-fit 
                                                h-fit
                                                px-2 
                                                border 
                                                border-[#436FB6] 
                                                text-[#436FB6] 
                                                rounded-[100px]
                                                text-[14px] 
                                                font-normal
                                            '
                                        >
                                            {service}
                                        </p>
                                    )
                                    :
                                    
                                    <div className='flex items-center justify-center'>
                                        <Spin />
                                    </div>
                                }
                            </div>
                        </div>

                        <div className='flex justify-between mb-4'>
                            <p className='w-[40%] font-medium text-[#6F6F6F]'>Vacancy</p>
                            <div className='w-[10%]'>:</div>
                            <div className='w-[50%] h-full'>{details?.vacancy}</div>
                        </div> 
                        
                        <div className='flex justify-between'>
                            <p className='w-[40%] font-medium text-[#6F6F6F]'>Area</p>
                            <div className='w-[10%]'>:</div>
                            <div className='w-[50%] h-full'>{details?.area}</div>
                        </div>


                    </div>
                </div>

                <div className='grid grid-cols-12 gap-6'>

                    {/* job requirement */}
                    <div className="col-span-8 bg-[#ECF1F8] p-6 rounded-lg">
                        <h3 className='mb-3 text-[#436FB6]'>Job Requirements</h3>

                        <div className='grid grid-cols-2 gap-6'>
                            <div>
                                <p className='mb-2 text-[#6F6F6F] font-semibold'>Education : </p>
                                <ul >

                                    {
                                        details?.education?.length  ? 
                                        details?.education?.split("/n")?.map((service, index)=>
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

                            <div>
                                <p className='mb-2 text-[#6F6F6F] font-semibold'>Responsibilities  : </p>
                                <ul >
                                    {
                                        details?.responsibilities ? 
                                        details?.responsibilities?.split("/n")?.map((service, index)=>
                                            <li 
                                                key={index} 
                                                className='
                                                    list-disc 
                                                    text-[14px] 
                                                    font-normal
                                                    ml-6
                                                    mb-1 
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
                            
                            <div className='flex items-center gap-4'>
                                <p className=' text-[#6F6F6F] font-semibold'>Experience  : </p>
                                <p>{details?.experience}</p>
                            </div>
                            
                            <div>
                                <p className='mb-2 text-[#6F6F6F] font-semibold'>Compensation & Other Benefits  : </p>
                                <ul >
                                    {
                                        details?.compensation_other_benifits?.length ? 
                                        details?.compensation_other_benifits?.split("/n")?.map((service, index)=>
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
                            
                            <div>
                                <p className='mb-2 text-[#6F6F6F] font-semibold'>Additional Requirements  : </p>
                                <ul >
                                    {
                                        details?.additional_requirement ?
                                        details?.additional_requirement?.split("/n")?.map((service, index)=>
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
                                            <Spin/>
                                        </div>
                                    }
                                </ul>
                            </div>


                        </div>
                    </div>

                    {/* company details */}
                    <div className='col-span-4 bg-[#ECF1F8] rounded-lg p-4 h-fit'>
                        <h1 className='text-[24px] text-[#565656] font-normal mb-4'>Company Details</h1>
                        <p>{company?.company_des}</p>

                        <div className='flex items-center gap-4 mt-10'>
                                <a href={company?.linkdin_url} target="_blank">
                                    <TiSocialLinkedinCircular size={38} color='#0A66C2' />
                                </a>
                                <a href={company?.instagram_url}  target="_blank">
                                    <FaInstagram size={24} color='#0A66C2' />
                                </a>
                                <a href={company?.facebook_url} target="_blank">
                                    <FaFacebook size={24} color='#0A66C2' />
                                </a>
                        </div>
                    </div>
                </div>
                
                {
                    user.userType === "ADMIN"
                    ?
                    <div className='bg-[#ECF1F8] w-full  h-[96px] p-6 rounded-lg flex items-center justify-between mt-6'>
                        <p className='w-[476px] text-[14px] text-[#6F6F6F] font-normal'>Hello, this Employer is  starting a new profile . If this accounts have problem ,You can report this id.</p>
                        <div className='flex items-center gap-6'>
                            <button onClick={()=>setOpen(true)} className='w-[120px] py-2 border border-[#436FB6] text-[#436FB6] rounded-[90px] '>Report</button>
                            <button onClick={()=>handleApprove(details?.id)} className='w-[120px] text-white py-2 bg-[#436FB6] rounded-[90px] capitalize'>{details?.status}</button>
                        </div>
                    </div>
                    :
                    null
                }
            </div>
            <Modal
                    centered 
                    title="Report Employer" 
                    open={open}
                    onCancel={()=>setOpen(false)}
                    footer={false}
                >
                    <div className='mt-6'>
                        <Form
                            initialValues={{email: details?.user?.email}}
                            onFinish={onFinish}
                            className='grid grid-cols-1 gap-6'
                        >

                            <div>
                                <label htmlFor="email" style={{display: "block", marginBottom: "8px" }}>Employer Email </label>
                                <Form.Item
                                    style={{marginBottom: 0}}
                                    name="email"
                                >
                                    <Input
                                        readOnly
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

                            <div>
                                <label htmlFor="email" style={{display: "block", marginBottom: "8px" }}>Subject</label>
                                <Form.Item
                                    style={{marginBottom: 0}}
                                    name="subject"
                                    rules={[
                                        {
                                        required: true,
                                        message: "Please Input Report Subject!",
                                        },
                                    ]}
                                >
                                    <Input
                                        placeholder='Enter Report Subject'
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

                            <div>
                                <label style={{display: "block", marginBottom: "8px" }} htmlFor="password">Message</label>
                                <Form.Item
                                    style={{marginBottom: 0}}
                                    name="message"
                                    rules={[
                                        {
                                        required: true,
                                        message: "Please input Message!",
                                        },
                                    ]}
                                >
                                <Input.TextArea
                                    type="text"
                                    placeholder="Enter  Message"
                                    style={{
                                        background: "#F1F4F9",
                                        height: "200px",
                                        border: "none",
                                        borderRadius: "8px",
                                        padding: "10px",
                                        color: "#A6A6A6",
                                        resize: "none",
                                        fontSize: "14px",
                                        fontWeight: 400,
                                        outline: "none"
                                    }}
                                />
                                </Form.Item>
                            </div>

                            <Form.Item
                                style={{marginBottom: 0}}
                            >
                                <Button
                                    type="primary"
                                    htmlType="submit"
                                    block
                                    style={{
                                        height: "48px",
                                        fontWeight: "400px",
                                        fontSize: "18px",
                                        background: "#436FB6",
                                        borderRadius: "90px"
                                    }}
                                >
                                    Send
                                </Button>
                            </Form.Item>
                        </Form>
                    </div>
                </Modal>
        </>
    )
}

export default JobDetails 