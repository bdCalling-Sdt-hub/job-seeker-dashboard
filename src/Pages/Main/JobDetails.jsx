import React from 'react'
import BackButton from '../../Components/BackButton';
import { FaFacebook, FaInstagram } from "react-icons/fa";
import { TiSocialLinkedinCircular } from "react-icons/ti";

const JobDetails = () => {
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
                            src="https://avatars.design/wp-content/uploads/2021/02/corporate-avatars-TN-1.jpg" 
                            alt="" 
                        />
                        <div className="grid grid-cols-1 gap-4 mt-5">
                            <div className='flex items-center justify-between'>
                                <p className='w-[30%]'>Company</p>
                                <div className='w-[10%]'>:</div>
                                <p className='w-[50%] text-[#6F6F6F]'>Chase It</p>
                            </div>

                            <div className='flex items-center justify-between'>
                                <p className='w-[30%]'>Status</p>
                                <div className='w-[10%]'>:</div>
                                <p className='w-[50%] text-[#6F6F6F]'>
                                    <p 
                                        className={` w-[88px] h-[27px] rounded-[100px] text-[13px] flex items-center justify-center
                                            ${"bg-[#B0ECB2] text-[#009B06]"}
                                            
                                        `}
                                    >
                                        Active
                                    </p>
                                </p>
                                {/* ${"bg-[#FEE3B8] text-[#C98415]"}
                                ${"bg-[#C5D2E8] text-[#365992]"} */}
                            </div>

                            <div className='flex items-center justify-between'>
                                <p className='w-[30%]'>Published</p>
                                <div className='w-[10%]'>:</div>
                                <p className='w-[50%] text-[#6F6F6F]'>Feb 3,2024</p>
                            </div>

                            <div className='flex items-center justify-between'>
                                <p className='w-[30%]'>Last Date</p>
                                <div className='w-[10%]'>:</div>
                                <p className='w-[50%] text-red-500'>Mar 31,2024</p>
                            </div>
                        </div>
                    </div>

                    <div className="bg-[#ECF1F8] p-6 rounded-lg">
                        <div className="grid grid-cols-1 gap-4">
                            <div className='flex items-center justify-between'>
                                <p className='w-[30%]'>Job Postion</p>
                                <div className='w-[10%]'>:</div>
                                <p className='w-[50%] text-[#6F6F6F]'>Web Developer</p>
                            </div>

                            <div className='flex items-center justify-between'>
                                <p className='w-[30%]'>Job Type</p>
                                <div className='w-[10%]'>:</div>
                                <p className='w-[50%] text-[#6F6F6F]'>Full Time</p>
                            </div>

                            <div className='flex items-center justify-between'>
                                <p className='w-[30%]'>Job Catagory</p>
                                <div className='w-[10%]'>:</div>
                                <p className='w-[50%] text-[#6F6F6F]'>IT</p>
                            </div>

                            <div className='flex items-center justify-between'>
                                <p className='w-[30%]'>Locatioon</p>
                                <div className='w-[10%]'>:</div>
                                <p className='w-[50%]'>/H No./R No./ City</p>
                            </div>
                            
                            <div className='flex items-center justify-between'>
                                <p className='w-[30%]'>Website </p>
                                <div className='w-[10%]'>:</div>
                                <p className='w-[50%]'>Chase It101.COM</p>
                            </div>
                            
                            <div className='flex items-center justify-between'>
                                <p className='w-[30%]'>Salary</p>
                                <div className='w-[10%]'>:</div>
                                <p className='w-[50%] text-[#436FB6] font-semibold '>$20k/Monthly</p>
                            </div>
                        </div>

                    </div>

                    <div className="bg-[#ECF1F8] p-6 rounded-lg">
                        <div className='flex justify-between mb-4'>
                            <p className='w-[40%] font-medium text-[#6F6F6F]'>Employment Status </p>
                            <div className='w-[10%]'>:</div>
                            <div className='w-[50%] h-full'>
                                <ul >
                                    {
                                        ["Full Time", "Private", "IT", "Day Shift"].map((service, index)=>
                                        <li key={index} className='list-disc text-[14px] font-normal text-[#565656]'>{service}</li>
                                        )
                                    }
                                </ul>
                            </div>
                        </div>

                        <div className='flex justify-between'>
                            <p className='w-[40%] font-medium text-[#6F6F6F]'>Skills & Expertise</p>
                            <div className='w-[10%]'>:</div>
                            <div className='w-[50%] h-full flex items-center flex-wrap gap-2'>
                                {
                                    ["Leadership Skill", "PI SQL", "No-SQL", "PHP", "Node.js", "React.js"].map((service, index)=>
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
                                }
                            </div>
                        </div>
                    </div>
                </div>

                <div className='grid grid-cols-12 gap-6'>
                    <div className="col-span-8 bg-[#ECF1F8] p-6 rounded-lg">
                        <h3 className='mb-3 text-[#436FB6]'>Job Requirements</h3>

                        <div className='grid grid-cols-2 gap-6'>
                            <div>
                                <p className='mb-2 text-[#6F6F6F] font-semibold'>Education : </p>
                                <ul >
                                    {
                                        ["Bachelor of Science (BSc) in Computer Science & Engineering", "B.Sc. Engineering in CSE/CS/EEE/Telecom. from any recognized and reputed university."].map((service, index)=>
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
                                    }
                                </ul>
                            </div>

                            <div>
                                <p className='mb-2 text-[#6F6F6F] font-semibold'>Responsibilities  : </p>
                                <ul >
                                    {
                                        ["Manage software development teams.", "Develop software modules.", "Identify bottlenecks and bugs and devise solutions to the problems.", "Ensure quick resolution of challenges and issues arising from technical demands."].map((service, index)=>
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
                                    }
                                </ul>
                            </div>
                            
                            <div>
                                <p className='mb-2 text-[#6F6F6F] font-semibold'>Experience  : </p>
                                <ul >
                                    {
                                        ["At least 8 years", "The applicants should have experience in the following business area(s) : University, IT Enabled Service"].map((service, index)=>
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
                                    }
                                </ul>
                            </div>
                            
                            <div>
                                <p className='mb-2 text-[#6F6F6F] font-semibold'>Compensation & Other Benefits  : </p>
                                <ul >
                                    {
                                        ["Higher initial pay may be offered to highly experienced and competent candidates.", "Candidates may indicate their expected salary in the application form.", "Provident Fund, Gratuity and other benefits as per the University rules/practice."].map((service, index)=>
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
                                    }
                                </ul>
                            </div>
                            
                            <div>
                                <p className='mb-2 text-[#6F6F6F] font-semibold'>Additional Requirements  : </p>
                                <ul >
                                    {
                                        ["Age 35 to 40 years", "The age limit may be relaxed for the highly experienced and competent candidates."].map((service, index)=>
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
                                    }
                                </ul>
                            </div>


                        </div>
                    </div>
                    <div className='col-span-4 bg-[#ECF1F8] rounded-lg p-4 h-fit'>
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
            </div>
        </>
    )
}

export default JobDetails 