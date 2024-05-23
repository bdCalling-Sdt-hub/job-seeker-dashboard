import React, { useEffect, useState } from 'react'
import BackButton from '../../Components/BackButton';
import { FaFacebook, FaInstagram } from "react-icons/fa";
import { TiSocialLinkedinCircular } from "react-icons/ti";  
import { useParams } from 'react-router-dom';
import baseURL from '../../../Config';
import ImgURL from '../../../ImgConfig';

const CompanyDetails = () => {
    const { id } = useParams();
    const [employer, setEmployer] = useState();

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
                <BackButton link={`/employer-details/${employer?.company_details.user_id}`} />
            </div>
            
            <div className='bg-white p-6 rounded-lg border'>
                <h1 className='text-[20px] text-[#172740] font-medium mb-6'>About Company</h1>

                <div className='flex gap-6'>
                    <div className='grid grid-cols-1 gap-6 w-[705px]'>
                        <div className='bg-[#ECF1F8] rounded-lg flex items-center justify-center'>
                            <img 
                                style={{width: "300px", height: "200px", margin: "auto", borderRadius: "8px"}} 
                                src={ employer?.company_details?.user?.image ? `${ImgURL}/${employer?.company_details?.user?.image}` : "https://avatars.design/wp-content/uploads/2021/02/corporate-avatars-TN-1.jpg" }
                                alt="" 
                            />
                        </div>
                        <div className='bg-[#ECF1F8] rounded-lg p-4'>
                            <h1 className='text-[24px] text-[#565656] font-normal mb-4'>Company Details</h1>
                            <p>{employer?.company_details?.company_des}</p>

                            <div className='flex items-center gap-4 mt-10'>
                                <a href={employer?.company_details?.linkdin_url} target="_blank">
                                    <TiSocialLinkedinCircular size={38} color='#0A66C2' />
                                </a>
                                <a href={employer?.company_details?.instagram_url}  target="_blank">
                                    <FaInstagram size={24} color='#0A66C2' />
                                </a>
                                <a href={employer?.company_details?.facebook_url} target="_blank">
                                    <FaFacebook size={24} color='#0A66C2' />
                                </a>
                            </div>

                        </div>
                    </div>

                    <div className='bg-[#ECF1F8] w-[100%] rounded-lg p-6'>
                        <div className='flex items-center justify-between mb-4'>
                            <p className='w-[25%]'>Company Name</p>
                            <div className='w-[5%]'>:</div>
                            <p className='w-[70%]'>{employer?.company_details?.company_name} </p>
                        </div>
                        <div className='flex items-center justify-between mb-4'>
                            <p className='w-[25%]'>Email</p>
                            <div className='w-[5%]'>:</div>
                            <p className='w-[70%]'>{employer?.company_details?.user?.email} </p>
                        </div>
                        <div className='flex items-center justify-between mb-4'>
                            <p className='w-[25%]'>Phone</p>
                            <div className='w-[5%]'>:</div>
                            <p className='w-[70%]'> {employer?.company_details?.phone} </p>
                        </div>
                        <div className='flex items-center justify-between mb-4'>
                            <p className='w-[25%]'>Country</p>
                            <div className='w-[5%]'>:</div>
                            <p className='w-[70%]'>{employer?.company_details?.location} </p>
                        </div>
                        <div className='flex items-center justify-between mb-4'>
                            <p className='w-[25%]'>Location</p>
                            <div className='w-[5%]'>:</div>
                            <p className='w-[70%]'>{employer?.company_details?.location} </p>
                        </div>
                        <div className='flex items-center justify-between mb-6'>
                            <p className='w-[25%]'>Company Category</p>
                            <div className='w-[5%]'>:</div>
                            <p className='w-[70%]'>{employer?.company_details?.category?.category_name} </p>
                        </div>

                        <div className='flex justify-between mb-6'>
                            <p className='w-[25%]'>Company Service</p>
                            <div className='w-[5%]'>:</div>
                            <div className='w-[70%] h-full flex flex-wrap gap-2'>
                                
                                {
                                    (employer?.company_details?.company_service)?.split(",")?.map((service, index)=>
                                        <p key={index} className='text-[14px] w-fit px-3 py-[3px] rounded-[100px] border border-[#436FB6]  font-normal text-[#436FB6]'>{service}</p>
                                    )
                                }
                            </div>
                        </div>

                        <div className='flex items-center justify-between mb-6'>
                            <p className='w-[25%]'>Company Verification No</p>
                            <div className='w-[5%]'>:</div>
                            <p className='w-[70%]'>{employer?.company_details?.verify_no} </p>
                        </div>

                        <div className='flex items-center justify-between mb-6'>
                            <p className='w-[25%]'>Web Site Link</p>
                            <div className='w-[5%]'>:</div>
                            <p className='w-[70%]'>{employer?.company_details?.website_url} </p>
                        </div>

                        <div className='flex items-center justify-between mb-6'>
                            <p className='w-[25%]'>Linkedin Link</p>
                            <div className='w-[5%]'>:</div>
                            <p className='w-[70%]'>{employer?.company_details?.linkdin_url} </p>
                        </div>

                        <div className='flex items-center justify-between mb-6'>
                            <p className='w-[25%]'>Facebook Link</p>
                            <div className='w-[5%]'>:</div>
                            <p className='w-[70%]'>{employer?.company_details?.facebook_url} </p>
                        </div>

                        <div className='flex items-center justify-between mb-6'>
                            <p className='w-[25%]'>Instagram Link</p>
                            <div className='w-[5%]'>:</div>
                            <p className='w-[70%]'>{employer?.company_details?.instagram_url} </p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default CompanyDetails