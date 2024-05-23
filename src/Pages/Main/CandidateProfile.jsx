import React, { useEffect, useState } from 'react'
import BackButton from '../../Components/BackButton'
import { useParams } from 'react-router-dom'
import baseURL from '../../../Config';
import ImgURL from '../../../ImgConfig';
import { Spin } from 'antd';

const CandidateProfile = () => {
    const { id } = useParams();
    const user = {
        status: "recruited"
    }

    const [applicant, setApplicant] = useState();
    const [job, setJob] = useState();
    const [candidate, setCandidate] = useState();
    const [expirence, setExpirence] = useState({});
    const [education, setEducation] = useState({});

    useEffect(()=>{
        async function getApi(){
            const response = await baseURL.get(`/apply/details/${id}`, {
                headers: {
                    "Content-Type": "application/json",
                    authorization: `Bearer ${JSON.parse(localStorage.getItem('token'))}`
                }
            })
            console.log(response?.data?.Cv[0])
            setEducation(response?.data?.Cv[0]?.education)
            setExpirence(response?.data?.Cv[0]?.experience)
            setApplicant (response?.data?.Cv[0]);
            setCandidate(response?.data?.Cv[0]?.candidate)
        }
        getApi();
    }, []);

    return (
        <>
            <div style={{marginBottom : "20px"}}>
                <BackButton link="/candidate-short-profile/2" />
            </div>

            <div className='bg-white p-6 rounded-lg border'>
                <h1 className='text-[20px] text-[#172740] font-medium mb-6'>Candidate Profile</h1>

                <div className={`${user.status === "recruited" ? "bg-[#E6F9E6]" : "bg-[#ECF1F8] "}  w-full flex gap-10 p-6 rounded-lg mb-6`}>
                    <div className='w-[20%]'>
                        <img 
                            style={{
                                width: "260px", 
                                height: "230px",
                                borderRadius: "8px",
                            }} 
                            src={ applicant?.image ? `${ImgURL}/${applicant?.image}` :  "https://avatars.design/wp-content/uploads/2021/02/corporate-avatars-TN-1.jpg"  }  
                            alt="" 
                        />
                    </div>

                    <div className='w-[70%]  '>
                        <div className='grid grid-cols-1 gap-4'>
                            <div className='flex text-[#436FB6] items-center justify-between'>
                                <p className='w-[20%]'>Name</p>
                                <div className='text-[#436FB6] w-[5%]'>:</div>
                                <p className='w-[75%] text-[#436FB6] flex items-center justify-between'>
                                    {applicant?.fullName} 
                                    {/* { user.status === "recruited" && <span className='text-[#E81100]'>You have already hired this candidate</span> } */}
                                </p>
                            </div>
                            
                            <div className='flex text-[#436FB6] items-center justify-between'>
                                <p className='w-[20%]'>Email</p>
                                <div className='w-[5%] text-[#436FB6]'>:</div>
                                <p className='w-[75%] text-[#436FB6]'>{applicant?.email} </p>
                            </div>
                            
                            <div className='flex items-center justify-between'>
                                <p className='w-[20%]'>Phone</p>
                                <div className='w-[5%]'>:</div>
                                <p className='w-[75%] text-[#6F6F6F]'>{candidate?.phone_number ? candidate?.phone_number  : "No Mobile Added Yet"} </p>
                            </div>
                            
                            <div className='flex items-center justify-between'>
                                <p className='w-[20%]'>NID</p>
                                <div className='w-[5%]'>:</div>
                                <p className='w-[75%] text-[#6F6F6F]'>{candidate?.nid_number ? candidate?.nid_number : "No Nid Added Yet"}</p>
                            </div>
                            
                            <div className='flex items-center justify-between'>
                                <p className='w-[20%]'>Gender</p>
                                <div className='w-[5%]'>:</div>
                                <p className='w-[75%] text-[#6F6F6F]'>{candidate?.gender ? candidate?.gender : "No Gender Added Yet"}</p>
                            </div>
                            
                            <div className='flex items-center justify-between'>
                                <p className='w-[20%]'>Present Address</p>
                                <div className='w-[5%]'>:</div>
                                <p className='w-[75%] text-[#6F6F6F]'>{candidate?.present_address ? candidate?.present_address : "No Location Added Yet"}</p>
                            </div>
                            
                            <div className='flex items-center justify-between'>
                                <p className='w-[20%]'>Parmanent Address</p>
                                <div className='w-[5%]'>:</div>
                                <p className='w-[75%] text-[#6F6F6F]'>{candidate?.permanent_address ? candidate?.permanent_address : "No Address Added Yet"}</p>
                            </div>
                        </div>
                    </div>
                </div>


                <div className="grid grid-cols-12 gap-6">

                    <div className={`${user.status === "recruited" ? "bg-[#E6F9E6]" : "bg-[#ECF1F8] "}  col-span-6 p-6 rounded-lg`}>
                        <p className='text-[20px] text-[#565656] font-normal mb-6'>Educational</p>

                        <div className='grid grid-cols-1 gap-4'>

                            {
                                education?.length > 0? 
                                education?.map((item, index)=>{
                                    return (
                                        <React.Fragment key={index}>
                                            <div className='flex items-center justify-between'>
                                                <p className='w-[30%]'>Level of Education</p>
                                                <div className='w-[5%]'>:</div>
                                                <p className='w-[65%] text-[#6F6F6F]'>BSC</p>
                                            </div>
                            
                                            <div className='flex items-center justify-between'>
                                                <p className='w-[30%]'>Exam/Degree Title </p>
                                                <div className='w-[5%]'>:</div>
                                                <p className='w-[65%] text-[#6F6F6F]'>Computer Science</p>
                                            </div>
                                            
                                            <div className='flex items-center justify-between'>
                                                <p className='w-[30%]'>Institution</p>
                                                <div className='w-[5%]'>:</div>
                                                <p className='w-[65%] text-[#6F6F6F]'>abc Universtiy</p>
                                            </div>
                            
                                            <div className='flex items-center justify-between'>
                                                <p className='w-[30%]'>Result</p>
                                                <div className='w-[5%]'>:</div>
                                                <p className='w-[65%] text-[#6F6F6F]'>3.58</p>
                                            </div>
                                            
                                            <div className='flex items-center justify-between'>
                                                <p className='w-[30%]'>Result Type</p>
                                                <div className='w-[5%]'>:</div>
                                                <p className='w-[65%] text-[#6F6F6F]'>CGPA</p>
                                            </div>
                            
                                            <div className='flex items-center justify-between'>
                                                <p className='w-[30%]'>Passing Year</p>
                                                <div className='w-[5%]'>:</div>
                                                <p className='w-[65%] text-[#6F6F6F]'>2022</p>
                                            </div>
                                            
                                            <div className='flex items-center justify-between'>
                                                <p className='w-[30%]'>Duration</p>
                                                <div className='w-[5%]'>:</div>
                                                <p className='w-[65%] text-[#6F6F6F]'>4</p>
                                            </div>
                                        </React.Fragment>
                                    )
                                })
                                :
                                <div className='flex items-center justify-center'>
                                    <Spin />
                                </div>
                            }
                        </div>
                    </div>
                    
                    <div className=' bg-[#ECF1F8] col-span-6 p-6 rounded-lg'>
                        <p className='text-[20px] text-[#565656] font-normal mb-6'>Work Experience</p>
                        <div className='grid grid-cols-1 gap-4'>
                            {
                                expirence?.length > 0? 
                                expirence?.map((item, index)=> {
                                    return (
                                        <React.Fragment key={index}>
                                            <div className='flex items-center justify-between'>
                                                <p className='w-[30%]'>Job Title</p>
                                                <div className='w-[5%]'>:</div>
                                                <p className='w-[65%] text-[#6F6F6F]'>{item?.job_title}</p>
                                            </div>
                            
                                            <div className='flex items-center justify-between'>
                                                <p className='w-[30%]'>Company</p>
                                                <div className='w-[5%]'>:</div>
                                                <p className='w-[65%] text-[#6F6F6F]'>{item?.company_name}</p>
                                            </div>
                                            
                                            <div className='flex items-center justify-between'>
                                                <p className='w-[30%]'>Location</p>
                                                <div className='w-[5%]'>:</div>
                                                <p className='w-[65%] text-[#6F6F6F]'>{item?.location}</p>
                                            </div>
                            
                                            <div className='flex items-center justify-between'>
                                                <p className='w-[30%]'>Working Time</p>
                                                <div className='w-[5%]'>:</div>
                                                <p className='w-[65%] text-[#6F6F6F]'> 9 AM to 6 PM</p>
                                            </div>
                                            
                                            <div className='flex justify-between'>
                                                <p className='w-[30%]'>Job Description</p>
                                                <div className='w-[5%]'>:</div>
                                                <p className='w-[65%] text-[#6F6F6F]'>
                                                    {item?.responsibility}
                                                </p>
                                            </div>
                                        </React.Fragment>
                                    )
                                })
                                :
                                <div className='flex items-center justify-center'>
                                    <Spin />
                                </div>
                            }
                        </div>
                    </div>
                    
                    <div className=' bg-[#ECF1F8] col-span-6 p-6 rounded-lg'>
                        <p className='text-[20px] text-[#565656] font-normal mb-6'>Training Summary</p>

                        <div className='grid grid-cols-1 gap-4'>
                            <div className='flex items-center justify-between'>
                                <p className='w-[30%]'>Training Title </p>
                                <div className='w-[5%]'>:</div>
                                <p className='w-[65%] text-[#6F6F6F]'>Redux</p>
                            </div>
                            
                            <div className='flex items-center justify-between'>
                                <p className='w-[30%]'>Training Topic</p>
                                <div className='w-[5%]'>:</div>
                                <p className='w-[65%] text-[#6F6F6F]'>Thinking of Redux Way</p>
                            </div>
                            
                            <div className='flex items-center justify-between'>
                                <p className='w-[30%]'>Institute Name</p>
                                <div className='w-[5%]'>:</div>
                                <p className='w-[65%] text-[#6F6F6F]'>Learn With Sumit</p>
                            </div>
                            
                            <div className='flex items-center justify-between'>
                                <p className='w-[30%]'>Location</p>
                                <div className='w-[5%]'>:</div>
                                <p className='w-[65%] text-[#6F6F6F]'>Online</p>
                            </div>
                            
                            <div className='flex items-center justify-between'>
                                <p className='w-[30%]'>Duration</p>
                                <div className='w-[5%]'>:</div>
                                <p className='w-[65%] text-[#6F6F6F]'>4 Months</p>
                            </div>
                            
                            <div className='flex items-center justify-between'>
                                <p className='w-[30%]'>Training Time</p>
                                <div className='w-[5%]'>:</div>
                                <p className='w-[65%] text-[#6F6F6F]'>feb 2, 2022 - aug 2,2022</p>
                            </div>
                            
                            <div className='flex justify-between'>
                                <p className='w-[30%]'>Description</p>
                                <div className='w-[5%]'>:</div>
                                <p className='w-[65%] text-[#6F6F6F]'>
                                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                                    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                                    when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
                                    It has survived not only five centuries, but also the leap into electronic typesetting,
                                </p>
                            </div>
                        </div>
                    </div>
                    
                    <div className={`${user.status === "recruited" ? "bg-[#E6F9E6]" : "bg-[#ECF1F8] "}  col-span-6 p-6 rounded-lg`}>
                        <p className='text-[20px] text-[#565656] font-normal mb-6'>Skills/ Activities</p>

                        <div className='grid grid-cols-1 gap-4'>
                            <div className='flex items-center justify-between'>
                                <p className='w-[30%]'>Skill </p>
                                <div className='w-[5%]'>:</div>
                                <p className='w-[65%] text-[#6F6F6F]'>UX , Ui, video Editing, Graphic Design</p>
                            </div>
                            
                            <div className='flex items-center justify-between'>
                                <p className='w-[30%]'>Extra Curricular Activities </p>
                                <div className='w-[5%]'>:</div>
                                <p className='w-[65%] text-[#6F6F6F]'>Blood Donation</p>
                            </div>
                            
                            <div className='flex items-center justify-between'>
                                <p className='w-[30%]'>Hobbies</p>
                                <div className='w-[5%]'>:</div>
                                <p className='w-[65%] text-[#6F6F6F]'>Gaming</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default CandidateProfile;