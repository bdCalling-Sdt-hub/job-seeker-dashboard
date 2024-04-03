import React, { useEffect, useState } from 'react'
import BackButton from '../../Components/BackButton';
import Swal from 'sweetalert2';
import { Button, Form, Input, Modal, Pagination } from 'antd';
import { FiSearch } from 'react-icons/fi';
import { IoClose } from 'react-icons/io5';
import { LuListFilter } from "react-icons/lu";
import { MdOutlineRemoveRedEye } from 'react-icons/md';
import { Link, useParams } from 'react-router-dom';
import { IoIosArrowRoundForward } from "react-icons/io";
import baseURL from '../../../Config';

const data = [
    {
        key: "1",
        companyname: "spark tech",
        package: "Basic",
        date: "Dec 30, 2024 5:18",
        price: "800",
        status:"Active",
    },
    {
        key: "2",
        companyname: "spark tech",
        package: "Essential",
        date: "Dec 30, 2024 5:18",
        status:"Complete",
    },
    {
        key: "3",
        companyname: "spark tech",
        package: "Essential Pro",
        date: "Dec 30, 2024 5:18",
        status:"Complete",
    },
    {
        key: "4",
        companyname: "spark tech",
        package: "Basic",
        date: "Dec 30, 2024 5:18",
        status:"Active",
    },
    {
        key: "5",
        companyname: "spark tech",
        package: "Essential",
        date: "Dec 30, 2024 5:18",
        status:"Active",
    },
    {
        key: "6",
        companyname: "spark tech",
        package: "Basic",
        date: "Dec 30, 2024 5:18",
        status:"Complete",
    },
    {
        key: "7",
        companyname: "spark tech",
        package: "Essential Pro",
        date: "Dec 30, 2024 5:18",
        status:"Active",
    },
    {
        key: "8",
        companyname: "spark tech",
        package: "Basic",
        date: "Dec 30, 2024 5:18",
        status:"Active",
    },
    {
        key: "9",
        companyname: "spark tech",
        package: "Essential Pro",
        date: "Dec 30, 2024 5:18",
        status:"Active",
    },
    {
        key: "10",
        companyname: "spark tech",
        package: "Basic",
        date: "Dec 30, 2024 5:18",
        status:"Active",
    },
];
const EmployerDetails = () => {
    const { id } = useParams();
    const [page, setPage] = useState(new URLSearchParams(window.location.search).get('page') || 1);
    const [openModal, setOpenModal] = useState(false);
    const [search, setSearch] = useState("");
    const [employer, setEmployer] = useState();

    const handleblock=(id)=>{
        Swal.fire({
            title: "Are you sure To Block this Employer?",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes",
            cancelButtonText: "No"

        }).then(async(result) => {
            if (result.isConfirmed) {
                await baseURL.get(`/block-recruiter?recruiter_id=${id}`,{
                    headers: {
                      "Content-Type": "application/json",
                      authorization: `Bearer ${JSON.parse(localStorage.getItem('token'))}`,
                    }
                }).then((response)=>{
                    if(response.status ===200){
                        Swal.fire({
                            title: "Blocked!",
                            text: response?.data?.message,
                            icon: "success",
                            showConfirmButton: false,
                            timer: 1500,
                        });
                    }
                })
                
            }
        });
    }

    const onFinish = (values) => {
    };

    const initialFormData={
        email: employer?.company_details?.user?.email
    }

    const handlePageChange = (page) => {
        setPage(page);
        const params = new URLSearchParams(window.location.search);
        params.set('page', page);
        window.history.pushState(null, "", `?${params.toString()}`);
    }



    useEffect(()=>{
        async function getAPi(){
            const response = await baseURL.get(`/company-wise-subscription?user_id=${id}`,{
                headers: {
                "Content-Type": "application/json",
                authorization: `Bearer ${JSON.parse(localStorage.getItem('token'))}`,
                }
            });
            setEmployer(response?.data?.data);
        }
        getAPi();
    }, [id]);
    return (
        <>
            <div style={{marginBottom : "20px"}}>
                <BackButton link="/employer-list" />
            </div>


            <div className='bg-white p-6 rounded-lg mb-[28px]'>
                <h1 className='text-[20px] text-[#172740] font-medium'>About Employer</h1>

                <div className='flex items-center gap-6 my-6'>
                    <div className='w-[60%] bg-[#ECF1F8] h-[279px] rounded-lg p-6 flex gap-6'>
                        <img 
                            style={{
                                width: "257px", 
                                height: "230px",
                                borderRadius: "8px"
                            }} 
                            src={
                                employer?.company_details?.logo 
                                ? 
                                employer?.company_details?.logo
                                : 
                                "https://avatars.design/wp-content/uploads/2021/02/corporate-avatars-TN-1.jpg" 
                            } 
                            alt="Employer Logo" 
                        />
                        <div className='w-full grid grid-cols-1 gap-7 text-[#565656]'>
                            <div className='flex items-center justify-between'>
                                <p className='w-[25%]'>Company Name</p>
                                <div className='w-[5%]'>:</div>
                                <p className='w-[70%]'>{employer?.company_details?.company_name}</p>
                            </div>

                            <div className='flex items-center justify-between'>
                                <p className='w-[25%]'>Email</p>
                                <div className='w-[5%]'>:</div>
                                <p className='w-[70%]'>{employer?.company_details?.user?.email}</p>
                            </div>

                            <div className='flex items-center justify-between'>
                                <p className='w-[25%]'>Phone</p>
                                <div className='w-[5%]'>:</div>
                                <p className='w-[70%]'>{employer?.company_details?.phone}</p>
                            </div>

                            <div className='flex items-center justify-between'>
                                <p className='w-[25%]'>Country</p>
                                <div className='w-[5%]'>:</div>
                                <p className='w-[70%]'>{employer?.company_details?.phone}</p>
                            </div>

                            <div className='flex items-center justify-between'>
                                <p className='w-[25%]'>Location</p>
                                <div className='w-[5%]'>:</div>
                                <p className='w-[70%]'>{employer?.company_details?.location}</p>
                            </div>
                        </div>
                    </div>


                    <div className='w-[40%] bg-[#ECF1F8] h-[279px] rounded-lg p-6 relative'>
                        <div className='flex items-center justify-between mb-6'>
                            <p className='w-[30%]'>Company Category</p>
                            <div className='w-[5%]'>:</div>
                            <p className='w-[65%]'>{employer?.company_details?.category?.category_name}</p>
                        </div>

                        <div className='flex justify-between'>
                            <p className='w-[30%]'>Company Service</p>
                            <div className='w-[5%]'>:</div>
                            <div className='w-[65%] h-full'>
                                {
                                    ["Web Development", "Mobile App Development", "UX/UI", "Data Entry", "Graphs"].map((service, index)=>
                                        <p key={index} className='text-[14px] font-normal text-[#565656]'>{service}</p>
                                    )
                                }
                            </div>
                        </div>

                        <div className='absolute bottom-6 right-6'>
                            <Link to={`/company-details/${employer?.company_details?.user_id}`}>
                                <button 
                                    className='
                                    w-[157px] 
                                    rounded-[100px] 
                                    py-2 
                                    text-[#436FB6] 
                                    border 
                                    border-[#436FB6]
                                    flex items-center justify-center gap-2
                                    '
                                    >
                                        See Details 
                                    <IoIosArrowRoundForward size={20} />
                                </button>
                            </Link>
                        </div>
                    </div>
                </div>

                <div className='bg-[#ECF1F8] w-full  h-[96px] p-6 rounded-lg mb-6 flex items-center justify-between'>
                    <p className='w-[476px] text-[14px] text-[#6F6F6F] font-normal'>Hello, this Employer is  starting a new profile . If this accounts have problem ,You can report this id.</p>
                    <div className='flex items-center gap-6'>
                        <button onClick={()=>setOpenModal(true)} className='w-[120px] py-2 border border-[#436FB6] text-[#436FB6] rounded-[90px] '>Report</button>
                        <button onClick={()=>handleblock(employer?.company_details?.id)} className='w-[120px] text-white py-2 bg-[#436FB6] rounded-[90px] '>Block</button>
                    </div>
                </div>

                <h1 className='mb-4 text-[20px] font-medium text-[#172740]'>All Job Subscriptions</h1>

                {/* search and filter section */}
                <div className='flex items-center justify-between mb-[14px]'>
                    <Input
                        onChange={(e) => setSearch(e.target.value)}
                        placeholder="Search Company"
                        prefix={<FiSearch size={14} color="#868FA0" />}
                        suffix={<IoClose onClick={() => setSearch("")} style={{ cursor: "pointer" }} size={14} color="#868FA0" />}
                        style={{
                            width: "450px",
                            height:"40px",
                            padding: "10px 15px",
                            fontSize: "14px",
                            fontWeight: 400,
                            borderRadius: "8px",
                            color: "#A1A9B8",
                        }}
                        size="middle"
                        value={search}
                    />

                    <div 
                        className='
                            bg-white 
                            w-[120px] 
                            rounded-[8px] 
                            border 
                            border-[#E9E9E9] 
                            flex 
                            items-center 
                            justify-between 
                            px-3 
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
                                ["Serial No", "Company Name", "Package", "Package Price", "Date Form", "Status", "Visit Profile"].map((item, index)=>
                                    <th key={index}>
                                        {item}
                                    </th>
                                )
                            }
                        </tr>                        
                        {
                            (data.slice(0, 9))?.map((item, index)=>
                                < >
                                    <div style={{marginTop: '8px'}}></div>
                                    <tr  className="bg-[#ECF1F8] text-[#949494] custom-table-row">
                                        <td>{item.key}</td>
                                        <td>{item.companyname}</td>
                                        <td>{item.package}</td>
                                        <td>$ {item.price}</td>
                                        <td>{item.date}</td>
                                        <td>
                                            <p 
                                                className={` w-[88px] h-[27px] rounded-[100px] text-[13px] flex items-center justify-center
                                                    ${item?.status === "Active" && "bg-[#B0ECB2] text-[#009B06]"}
                                                    ${item?.status === "Complete" && "bg-[#FEE3B8] text-[#C98415]"}
                                                `}
                                            >
                                                {item?.status}
                                            </p>
                                        </td>
                                        <td>
                                            <Link to={"/subscription-details"}>
                                                <MdOutlineRemoveRedEye color='#6F6F6F' size={24} />
                                            </Link>
                                        </td>
                                    </tr>
                                </>
                            )
                        }
                    </table>
                </div>

                {/* pagination for data */}

                <div className='mt-5 flex items-center justify-center'>
                    <Pagination 
                        defaultCurrent={page} 
                        total={data?.length} 
                        onChange={handlePageChange}
                    />
                </div>
            </div>

            



            {/* report modal */}

            {
                openModal
                &&
                <Modal
                    centered 
                    title="Report Employer" 
                    open={openModal}
                    onCancel={()=>setOpenModal(false)}
                    footer={false}
                >
                    <div className='mt-6'>
                        <Form
                            initialValues={initialFormData}
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
            }

        </>
    )
}

export default EmployerDetails;