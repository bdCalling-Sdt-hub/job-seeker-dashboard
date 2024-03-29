import React from 'react'
import BackButton from '../../Components/BackButton';
import { FaFacebook, FaInstagram } from "react-icons/fa";
import { TiSocialLinkedinCircular } from "react-icons/ti";  

const CompanyDetails = () => {
    return (
        <>
            <div style={{marginBottom : "20px"}}>
                <BackButton link="/employer-details" />
            </div>
            
            <div className='bg-white p-6 rounded-lg border'>
                <h1 className='text-[20px] text-[#172740] font-medium mb-6'>About Company</h1>

                <div className='flex gap-6'>
                    <div className='grid grid-cols-1 gap-6 w-[705px]'>
                        <div className='bg-[#ECF1F8] rounded-lg flex items-center justify-center'>
                            <img 
                                style={{width: "300px", height: "200px", margin: "auto", borderRadius: "8px"}} 
                                src="https://avatars.design/wp-content/uploads/2021/02/corporate-avatars-TN-1.jpg" 
                                alt="" 
                            />
                        </div>
                        <div className='bg-[#ECF1F8] rounded-lg p-4'>
                            <h1 className='text-[24px] text-[#565656] font-normal mb-4'>Company Details</h1>
                            <p>
                                quam vitae laoreet non nibh consectetur eu ac in Sed volutpat Nunc dignissim, eget tortor. tincidunt dui Nullam tincidunt In odio dui. Donec commodo vitae dui est. amet, commodo odio In Ut Donec Donec In ex orci nisl. eget Morbi sit ex at 
                                ex Sed nisi tincidunt lacus elit leo. faucibus quis Sed consectetur nulla, libero, ipsum at, elit dui massa amet, ipsum vehicula, at, Vestibulum odio tincidunt diam amet, dolor adipiscing Nullam laoreet nec sit elementum sodales. nibh id  
                            </p>

                            <div className='flex items-center gap-4 mt-10'>
                                <TiSocialLinkedinCircular size={38} color='#0A66C2' />
                                <FaInstagram size={24} color='#0A66C2' />
                                <FaFacebook size={24} color='#0A66C2' />
                            </div>

                        </div>
                    </div>

                    <div className='bg-[#ECF1F8] w-[100%] rounded-lg p-6'>
                        <div className='flex items-center justify-between mb-4'>
                            <p className='w-[20%]'>Company Name</p>
                            <div className='w-[5%]'>:</div>
                            <p className='w-[75%]'>sfasdfdf</p>
                        </div>
                        <div className='flex items-center justify-between mb-4'>
                            <p className='w-[20%]'>Email</p>
                            <div className='w-[5%]'>:</div>
                            <p className='w-[75%]'>admin@gmail.com</p>
                        </div>
                        <div className='flex items-center justify-between mb-4'>
                            <p className='w-[20%]'>Phone</p>
                            <div className='w-[5%]'>:</div>
                            <p className='w-[75%]'>01756953936</p>
                        </div>
                        <div className='flex items-center justify-between mb-4'>
                            <p className='w-[20%]'>Country</p>
                            <div className='w-[5%]'>:</div>
                            <p className='w-[75%]'>Bangladesh</p>
                        </div>
                        <div className='flex items-center justify-between mb-4'>
                            <p className='w-[20%]'>Location</p>
                            <div className='w-[5%]'>:</div>
                            <p className='w-[75%]'>Banasree, Banasree, Banasree</p>
                        </div>
                        <div className='flex items-center justify-between mb-6'>
                            <p className='w-[20%]'>Company Category</p>
                            <div className='w-[5%]'>:</div>
                            <p className='w-[75%]'>IT</p>
                        </div>

                        <div className='flex justify-between mb-6'>
                            <p className='w-[20%]'>Company Service</p>
                            <div className='w-[5%]'>:</div>
                            <div className='w-[75%] h-full'>
                                {
                                    ["Web Development", "Mobile App Development", "UX/UI", "Data Entry", "Graphs"].map((service, index)=>
                                        <p className='text-[14px] font-normal text-[#565656]'>{service}</p>
                                    )
                                }
                            </div>
                        </div>

                        <div className='flex items-center justify-between mb-6'>
                            <p className='w-[20%]'>Company Verification No</p>
                            <div className='w-[5%]'>:</div>
                            <p className='w-[75%]'>000000000000000000000000000000</p>
                        </div>

                        <div className='flex items-center justify-between mb-6'>
                            <p className='w-[20%]'>Web Site Link</p>
                            <div className='w-[5%]'>:</div>
                            <p className='w-[75%]'>www.bdCaling.com</p>
                        </div>

                        <div className='flex items-center justify-between mb-6'>
                            <p className='w-[20%]'>Linkedin Link</p>
                            <div className='w-[5%]'>:</div>
                            <p className='w-[75%]'>www.linkedin.com/bdCalling</p>
                        </div>

                        <div className='flex items-center justify-between mb-6'>
                            <p className='w-[20%]'>Facebook Link</p>
                            <div className='w-[5%]'>:</div>
                            <p className='w-[75%]'>www.facebook.com/bdCalling</p>
                        </div>

                        <div className='flex items-center justify-between mb-6'>
                            <p className='w-[20%]'>Instagram Link</p>
                            <div className='w-[5%]'>:</div>
                            <p className='w-[75%]'>www.instagram.com/bdCalling</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default CompanyDetails