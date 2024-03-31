import React from 'react'
import BackButton from '../../Components/BackButton'

const CandidateProfile = () => {
    return (
        <>
            <div style={{marginBottom : "20px"}}>
                <BackButton link="/employer-details" />
            </div>

            <div className='bg-white p-6 rounded-lg border'>
                <h1 className='text-[20px] text-[#172740] font-medium mb-6'>Candidate Profile</h1>

                <div className=' bg-[#ECF1F8] w-full flex p-6 rounded-lg mb-6'>
                    <div className='w-[20%]'>
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
                            <div className='flex text-[#436FB6] items-center justify-between'>
                                <p className='w-[20%]'>Name</p>
                                <div className='w-[5%]'>:</div>
                                <p className='w-[75%] text-[#6F6F6F]'>User Hossain</p>
                            </div>
                            
                            <div className='flex text-[#436FB6] items-center justify-between'>
                                <p className='w-[20%]'>Email</p>
                                <div className='w-[5%]'>:</div>
                                <p className='w-[75%] text-[#6F6F6F]'>user@gmail.com</p>
                            </div>
                            
                            <div className='flex items-center justify-between'>
                                <p className='w-[20%]'>Phone</p>
                                <div className='w-[5%]'>:</div>
                                <p className='w-[75%] text-[#6F6F6F]'>+900000</p>
                            </div>
                            
                            <div className='flex items-center justify-between'>
                                <p className='w-[20%]'>NID</p>
                                <div className='w-[5%]'>:</div>
                                <p className='w-[75%] text-[#6F6F6F]'>87451448</p>
                            </div>
                            
                            <div className='flex items-center justify-between'>
                                <p className='w-[20%]'>Gender</p>
                                <div className='w-[5%]'>:</div>
                                <p className='w-[75%] text-[#6F6F6F]'>Male</p>
                            </div>
                            
                            <div className='flex items-center justify-between'>
                                <p className='w-[20%]'>Present Address</p>
                                <div className='w-[5%]'>:</div>
                                <p className='w-[75%] text-[#6F6F6F]'>Banasree/Rampura- Dhaka-1219</p>
                            </div>
                            
                            <div className='flex items-center justify-between'>
                                <p className='w-[20%]'>Parmanent Address</p>
                                <div className='w-[5%]'>:</div>
                                <p className='w-[75%] text-[#6F6F6F]'>Dhaka, Dhaka, Dhaka</p>
                            </div>
                        </div>
                    </div>
                </div>


                <div className="grid grid-cols-12 gap-6">

                    <div className=' bg-[#ECF1F8] col-span-6 p-6 rounded-lg'>
                        <p className='text-[20px] text-[#565656] font-normal mb-6'>Educational</p>

                        <div className='grid grid-cols-1 gap-4'>
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
                        </div>
                    </div>
                    
                    <div className=' bg-[#ECF1F8] col-span-6 p-6 rounded-lg'>
                        <p className='text-[20px] text-[#565656] font-normal mb-6'>Work Experience</p>

                        <div className='grid grid-cols-1 gap-4'>
                            <div className='flex items-center justify-between'>
                                <p className='w-[30%]'>Job Title</p>
                                <div className='w-[5%]'>:</div>
                                <p className='w-[65%] text-[#6F6F6F]'>Software Developer</p>
                            </div>
                            
                            <div className='flex items-center justify-between'>
                                <p className='w-[30%]'>Company</p>
                                <div className='w-[5%]'>:</div>
                                <p className='w-[65%] text-[#6F6F6F]'>bdCalling</p>
                            </div>
                            
                            <div className='flex items-center justify-between'>
                                <p className='w-[30%]'>Location</p>
                                <div className='w-[5%]'>:</div>
                                <p className='w-[65%] text-[#6F6F6F]'>Banasree</p>
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
                                    orci nibh luctus odio gravida ultrices 
                                    eget urna ultrices sit urna. vitae 
                                    ipsum Cras Morbi facilisis dui. lacus Vestibulum
                                </p>
                            </div>
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
                    
                    <div className=' bg-[#ECF1F8] col-span-6 p-6 rounded-lg'>
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