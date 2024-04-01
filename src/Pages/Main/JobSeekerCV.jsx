import React from 'react'
import BackButton from '../../Components/BackButton'

const JobSeekerCV = () => {
    return (
        <>
            <div style={{marginBottom : "20px"}}>
                <BackButton link="/candidate-short-profile/2" />
            </div>

            <div className='bg-white p-6 rounded-lg'>
                <h1 className='text-[20px] text-[#172740] font-medium mb-6'>Job Seeker CV Details</h1>
                <div className={`bg-[#ECF1F8] w-full flex p-6 rounded-lg mb-6`}>
                    <div className='w-[20%]'>
                        <img 
                            style={{
                                width: "260px", 
                                height: "230px",
                                borderRadius: "50%",
                            }} 
                            src="https://avatars.design/wp-content/uploads/2021/02/corporate-avatars-TN-1.jpg" 
                            alt="" 
                        />
                    </div>

                    <div className='w-[70%]  '>
                        <div className='grid grid-cols-1 gap-4'>
                            <div className='flex items-center justify-between'>
                                <p className='w-[20%]'>Name</p>
                                <div className=' w-[5%]'>:</div>
                                <p className='w-[75%]'>
                                    User Hossain 
                                </p>
                            </div>
                            
                            <div className='flex  items-center justify-between'>
                                <p className='w-[20%]'>Email</p>
                                <div className='w-[5%]'>:</div>
                                <p className='w-[75%]'>user@gmail.com</p>
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

                            <div className='flex justify-between'>
                                <p className='w-[20%]'>Details</p>
                                <div className='w-[5%]'>:</div>
                                <p className='w-[75%] text-[#6F6F6F]'>
                                    quam vitae laoreet non nibh consectetur eu ac in Sed volutpat Nunc 
                                    dignissim, eget tortor. tincidunt dui Nullam tincidunt In odio dui.
                                    Donec commodo vitae dui est. amet, commodo odio In Ut Donec Donec 
                                    In ex orci nisl. eget Morbi sit ex at
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* education */}
                <div className=" bg-[#ECF1F8] w-full p-6 rounded-lg mb-6">
                    <h1 className='text-[20px] text-[#172740] font-medium mb-6'>Education</h1>
                    <div className='grid grid-cols-2 '>
                        <div className='grid grid-cols-1 gap-6'>
                            1
                            <div className='flex items-center justify-between'>
                                <p className='w-[30%]'>Level of Education  </p>
                                <div className='w-[5%]'>:</div>
                                <p className='w-[65%] text-[#6F6F6F]'>UX , Ui, video Editing, Graphic Design</p>
                            </div>
                                    
                            <div className='flex items-center justify-between'>
                                <p className='w-[30%]'>Exam/Degree Title </p>
                                <div className='w-[5%]'>:</div>
                                <p className='w-[65%] text-[#6F6F6F]'>Blood Donation</p>
                            </div>
                                    
                            <div className='flex items-center justify-between'>
                                <p className='w-[30%]'>Institution</p>
                                <div className='w-[5%]'>:</div>
                                <p className='w-[65%] text-[#6F6F6F]'>Gaming</p>
                            </div>
                            
                            <div className='flex items-center justify-between'>
                                <p className='w-[30%]'>Result</p>
                                <div className='w-[5%]'>:</div>
                                <p className='w-[65%] text-[#6F6F6F]'>Gaming</p>
                            </div>
                            
                            <div className='flex items-center justify-between'>
                                <p className='w-[30%]'>Result Type</p>
                                <div className='w-[5%]'>:</div>
                                <p className='w-[65%] text-[#6F6F6F]'>Gaming</p>
                            </div>
                            
                            <div className='flex items-center justify-between'>
                                <p className='w-[30%]'>Passing Year</p>
                                <div className='w-[5%]'>:</div>
                                <p className='w-[65%] text-[#6F6F6F]'>Gaming</p>
                            </div>
                            
                            <div className='flex items-center justify-between'>
                                <p className='w-[30%]'>Duration</p>
                                <div className='w-[5%]'>:</div>
                                <p className='w-[65%] text-[#6F6F6F]'>Gaming</p>
                            </div>
                        </div>
                    
                        <div className='grid grid-cols-1 gap-6'>
                            2
                            <div className='flex items-center justify-between'>
                                <p className='w-[30%]'>Level of Education  </p>
                                <div className='w-[5%]'>:</div>
                                <p className='w-[65%] text-[#6F6F6F]'>UX , Ui, video Editing, Graphic Design</p>
                            </div>
                                    
                            <div className='flex items-center justify-between'>
                                <p className='w-[30%]'>Exam/Degree Title </p>
                                <div className='w-[5%]'>:</div>
                                <p className='w-[65%] text-[#6F6F6F]'>Blood Donation</p>
                            </div>
                                    
                            <div className='flex items-center justify-between'>
                                <p className='w-[30%]'>Institution</p>
                                <div className='w-[5%]'>:</div>
                                <p className='w-[65%] text-[#6F6F6F]'>Gaming</p>
                            </div>
                            
                            <div className='flex items-center justify-between'>
                                <p className='w-[30%]'>Result</p>
                                <div className='w-[5%]'>:</div>
                                <p className='w-[65%] text-[#6F6F6F]'>Gaming</p>
                            </div>
                            
                            <div className='flex items-center justify-between'>
                                <p className='w-[30%]'>Result Type</p>
                                <div className='w-[5%]'>:</div>
                                <p className='w-[65%] text-[#6F6F6F]'>Gaming</p>
                            </div>
                            
                            <div className='flex items-center justify-between'>
                                <p className='w-[30%]'>Passing Year</p>
                                <div className='w-[5%]'>:</div>
                                <p className='w-[65%] text-[#6F6F6F]'>Gaming</p>
                            </div>
                            
                            <div className='flex items-center justify-between'>
                                <p className='w-[30%]'>Duration</p>
                                <div className='w-[5%]'>:</div>
                                <p className='w-[65%] text-[#6F6F6F]'>Gaming</p>
                            </div>
                        </div>
                    </div>
                </div>
                
                {/* work experience */}
                <div className="bg-[#ECF1F8] w-full p-6 rounded-lg mb-6">
                    <h1 className='text-[20px] text-[#172740] font-medium mb-6'>Work Experience</h1>
                    <div className='grid grid-cols-2 gap-6'>
                        <div className='grid grid-cols-1 gap-4'>
                            1
                            <div className='flex items-center justify-between'>
                                <p className='w-[25%]'>Job Title </p>
                                <div className='w-[5%]'>:</div>
                                <p className='w-[70%] text-[#6F6F6F]'>UX , Ui, video Editing, Graphic Design</p>
                            </div>
                                    
                            <div className='flex items-center justify-between'>
                                <p className='w-[25%]'>Company</p>
                                <div className='w-[5%]'>:</div>
                                <p className='w-[70%] text-[#6F6F6F]'>Blood Donation</p>
                            </div>
                                    
                            <div className='flex items-center justify-between'>
                                <p className='w-[25%]'>Location</p>
                                <div className='w-[5%]'>:</div>
                                <p className='w-[70%] text-[#6F6F6F]'>Gaming</p>
                            </div>

                            <div className='flex items-center justify-between'>
                                <p className='w-[25%]'>Working Time </p>
                                <div className='w-[5%]'>:</div>
                                <p className='w-[70%] text-[#6F6F6F]'>UX , Ui, video Editing, Graphic Design</p>
                            </div>
                                    
                            <div className='flex justify-between'>
                                <p className='w-[25%]'>Job Details</p>
                                <div className='w-[5%]'>:</div>
                                <p className='w-[70%] text-[#6F6F6F]'>
                                    orci nibh luctus odio gravida ultrices eget urna ultrices sit urna. 
                                    vitae ipsum Cras Morbi facilisis dui. lacus Vestibulum
                                </p>
                            </div>
                        </div>
                        
                        <div className='grid grid-cols-1 gap-4'>
                            2
                            <div className='flex items-center justify-between'>
                                <p className='w-[25%]'>Job Title </p>
                                <div className='w-[5%]'>:</div>
                                <p className='w-[70%] text-[#6F6F6F]'>UX , Ui, video Editing, Graphic Design</p>
                            </div>
                                    
                            <div className='flex items-center justify-between'>
                                <p className='w-[25%]'>Company</p>
                                <div className='w-[5%]'>:</div>
                                <p className='w-[70%] text-[#6F6F6F]'>Blood Donation</p>
                            </div>
                                    
                            <div className='flex items-center justify-between'>
                                <p className='w-[25%]'>Location</p>
                                <div className='w-[5%]'>:</div>
                                <p className='w-[70%] text-[#6F6F6F]'>Gaming</p>
                            </div>

                            <div className='flex items-center justify-between'>
                                <p className='w-[25%]'>Working Time </p>
                                <div className='w-[5%]'>:</div>
                                <p className='w-[70%] text-[#6F6F6F]'>UX , Ui, video Editing, Graphic Design</p>
                            </div>
                                    
                            <div className='flex justify-between'>
                                <p className='w-[25%]'>Job Details</p>
                                <div className='w-[5%]'>:</div>
                                <p className='w-[70%] text-[#6F6F6F]'>
                                    orci nibh luctus odio gravida ultrices eget urna ultrices sit urna. 
                                    vitae ipsum Cras Morbi facilisis dui. lacus Vestibulum
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                
                {/* training summery */}
                <div className=" bg-[#ECF1F8] w-full p-6 rounded-lg mb-6">
                    <h1 className='text-[20px] text-[#172740] font-medium mb-6'>Training Summery</h1>
                    <div className='grid grid-cols-2 gap-6'>
                        <div className='grid grid-cols-1 gap-4'>
                            1
                            <div className='flex items-center justify-between'>
                                <p className='w-[30%]'>Training Title  </p>
                                <div className='w-[5%]'>:</div>
                                <p className='w-[65%] text-[#6F6F6F]'>UX/UI Designing</p>
                            </div>
                                    
                            <div className='flex items-center justify-between'>
                                <p className='w-[30%]'>Training Topic</p>
                                <div className='w-[5%]'>:</div>
                                <p className='w-[65%] text-[#6F6F6F]'>ABC Skills Academy</p>
                            </div>
                                    
                            <div className='flex items-center justify-between'>
                                <p className='w-[30%]'>Institute Name</p>
                                <div className='w-[5%]'>:</div>
                                <p className='w-[65%] text-[#6F6F6F]'>H No./ R No./ City/ Country</p>
                            </div>
                            
                            <div className='flex items-center justify-between'>
                                <p className='w-[30%]'>Location</p>
                                <div className='w-[5%]'>:</div>
                                <p className='w-[65%] text-[#6F6F6F]'>4 Month</p>
                            </div>
                            
                            
                            <div className='flex items-center justify-between'>
                                <p className='w-[30%]'>Duration</p>
                                <div className='w-[5%]'>:</div>
                                <p className='w-[65%] text-[#6F6F6F]'>feb 2, 2022 - aug 2,2022</p>
                            </div>
                            
                            
                            <div className='flex justify-between'>
                                <p className='w-[30%]'>Details </p>
                                <div className='w-[5%]'>:</div>
                                <p className='w-[65%] text-[#6F6F6F]'>Gaming</p>
                            </div>
                        </div>
                    
                        <div className='grid grid-cols-1 gap-4'>
                            2
                            <div className='flex items-center justify-between'>
                                <p className='w-[30%]'>Training Title  </p>
                                <div className='w-[5%]'>:</div>
                                <p className='w-[65%] text-[#6F6F6F]'>UX , Ui, video Editing, Graphic Design</p>
                            </div>
                                    
                            <div className='flex items-center justify-between'>
                                <p className='w-[30%]'>Training Topic</p>
                                <div className='w-[5%]'>:</div>
                                <p className='w-[65%] text-[#6F6F6F]'>Blood Donation</p>
                            </div>
                                    
                            <div className='flex items-center justify-between'>
                                <p className='w-[30%]'>Institute Name</p>
                                <div className='w-[5%]'>:</div>
                                <p className='w-[65%] text-[#6F6F6F]'>Gaming</p>
                            </div>
                            
                            <div className='flex items-center justify-between'>
                                <p className='w-[30%]'>Location</p>
                                <div className='w-[5%]'>:</div>
                                <p className='w-[65%] text-[#6F6F6F]'>Gaming</p>
                            </div>
                            
                            
                            <div className='flex items-center justify-between'>
                                <p className='w-[30%]'>Duration</p>
                                <div className='w-[5%]'>:</div>
                                <p className='w-[65%] text-[#6F6F6F]'>Gaming</p>
                            </div>
                            
                            
                            <div className='flex justify-between'>
                                <p className='w-[30%]'>Details </p>
                                <div className='w-[5%]'>:</div>
                                <p className='w-[65%] text-[#6F6F6F]'>Gaming</p>
                            </div>
                        </div>
                    </div>
                </div>
                
                {/* skills and portfolio */}
                <div className="grid grid-cols-2 gap-6 w-full mb-6">
                    <div className="bg-[#ECF1F8] w-full p-6 rounded-lg">
                        <h1 className='text-[20px] text-[#172740] font-medium mb-6'>Skills/ Activities</h1>
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

                    <div className="bg-[#ECF1F8] w-full p-6 rounded-lg">
                        <h1 className='text-[20px] text-[#172740] font-medium mb-6'>Portfolio Link</h1>
                        <div className='grid grid-cols-1 gap-4'>
                            <div className='flex items-center justify-between'>
                                <p className='w-[30%]'>Portfolio Url 1</p>
                                <div className='w-[5%]'>:</div>
                                <p className='w-[65%] text-[#6F6F6F]'>UX , Ui, video Editing, Graphic Design</p>
                            </div>
                                        
                            <div className='flex items-center justify-between'>
                                <p className='w-[30%]'>Portfolio Url 2</p>
                                <div className='w-[5%]'>:</div>
                                <p className='w-[65%] text-[#6F6F6F]'>Blood Donation</p>
                            </div>
                                        
                            <div className='flex items-center justify-between'>
                                <p className='w-[30%]'>Portfolio Url 3</p>
                                <div className='w-[5%]'>:</div>
                                <p className='w-[65%] text-[#6F6F6F]'>Gaming</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* reference */}
                <div className="bg-[#ECF1F8] w-full p-6 rounded-lg mb-6">
                    <h1 className='text-[20px] text-[#172740] font-medium mb-6'>Reference</h1>
                    <div className='grid grid-cols-2 gap-6'>
                        <div className='grid grid-cols-1 gap-4'>
                            1
                            <div className='flex items-center justify-between'>
                                <p className='w-[30%]'>Name  </p>
                                <div className='w-[5%]'>:</div>
                                <p className='w-[65%] text-[#6F6F6F]'>UX , Ui, video Editing, Graphic Design</p>
                            </div>
                                    
                            <div className='flex items-center justify-between'>
                                <p className='w-[30%]'>Designation </p>
                                <div className='w-[5%]'>:</div>
                                <p className='w-[65%] text-[#6F6F6F]'>Sr. Product Designer</p>
                            </div>
                                    
                            <div className='flex items-center justify-between'>
                                <p className='w-[30%]'>Organization </p>
                                <div className='w-[5%]'>:</div>
                                <p className='w-[65%] text-[#6F6F6F]'>BD Calling It.</p>
                            </div>
                            
                            <div className='flex items-center justify-between'>
                                <p className='w-[30%]'>Address </p>
                                <div className='w-[5%]'>:</div>
                                <p className='w-[65%] text-[#6F6F6F]'>H No./ R No./ City/ Country</p>
                            </div>
                            
                            <div className='flex items-center justify-between'>
                                <p className='w-[30%]'>Email  </p>
                                <div className='w-[5%]'>:</div>
                                <p className='w-[65%] text-[#6F6F6F]'>Alex101@gmail.com</p>
                            </div>
                            
                            <div className='flex items-center justify-between'>
                                <p className='w-[30%]'>Contact No  </p>
                                <div className='w-[5%]'>:</div>
                                <p className='w-[65%] text-[#6F6F6F]'>+99000000000</p>
                            </div>
                        </div>
                    
                        <div className='grid grid-cols-1 gap-4'>
                            2
                            <div className='flex items-center justify-between'>
                                <p className='w-[30%]'>Name  </p>
                                <div className='w-[5%]'>:</div>
                                <p className='w-[65%] text-[#6F6F6F]'>UX , Ui, video Editing, Graphic Design</p>
                            </div>
                                    
                            <div className='flex items-center justify-between'>
                                <p className='w-[30%]'>Designation </p>
                                <div className='w-[5%]'>:</div>
                                <p className='w-[65%] text-[#6F6F6F]'>Sr. Product Designer</p>
                            </div>
                                    
                            <div className='flex items-center justify-between'>
                                <p className='w-[30%]'>Organization </p>
                                <div className='w-[5%]'>:</div>
                                <p className='w-[65%] text-[#6F6F6F]'>BD Calling It.</p>
                            </div>
                            
                            <div className='flex items-center justify-between'>
                                <p className='w-[30%]'>Address </p>
                                <div className='w-[5%]'>:</div>
                                <p className='w-[65%] text-[#6F6F6F]'>H No./ R No./ City/ Country</p>
                            </div>
                            
                            <div className='flex items-center justify-between'>
                                <p className='w-[30%]'>Email  </p>
                                <div className='w-[5%]'>:</div>
                                <p className='w-[65%] text-[#6F6F6F]'>Alex101@gmail.com</p>
                            </div>
                            
                            <div className='flex items-center justify-between'>
                                <p className='w-[30%]'>Contact No  </p>
                                <div className='w-[5%]'>:</div>
                                <p className='w-[65%] text-[#6F6F6F]'>+99000000000</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default JobSeekerCV