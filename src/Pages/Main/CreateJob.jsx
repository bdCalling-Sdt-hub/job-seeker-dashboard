import React from 'react'
import BackButton from '../../Components/BackButton'
import { Button, Form, Input } from 'antd'

const CreateJob = () => {

    const handleOnFinis=(values)=>{
        console.log(values)
        const formData = new FormData();
        const education = values?.experience.split(",").map((item)=> item);
        console.log(education);
        formData.append("", values.education)
        formData.append("", values.education)
        formData.append("", values.education)
        formData.append("", values.education)
        formData.append("", values.education)
        formData.append("", values.education)
        formData.append("", values.education)
        formData.append("", values.education)
        formData.append("", values.education)
        formData.append("", values.education)
        formData.append("", values.education)
        formData.append("", values.education)
        formData.append("", values.education)
        formData.append("", values.education)
        formData.append("", values.education)
        formData.append("", values.education)
        formData.append("", values.education)

    }
    return (
        <>
            <div style={{marginBottom: "20px"}}>
                <BackButton link="/job-post" />
            </div>

            <div className='bg-white p-6 rounded-lg'>
                <h1 className='mb-[30px] text-[20px] font-medium text-[#565656]'>Create Post</h1>

                <Form onFinish={handleOnFinis} className='grid grid-cols-1 gap-6'>
                    <div className='grid grid-cols-3 gap-6'>
                        <div>
                            <label style={{display: "block", marginBottom: "8px"}} htmlFor="">Job Title</label>
                            <Form.Item name="job_title" style={{marginBottom: "0"}}>
                                <Input
                                    placeholder='Enter Job Title'
                                    style={{
                                        width:"100%",
                                        border: "none",
                                        height: "40px",
                                        padding: "18px 15px",
                                        background: "#F1F4F9",
                                        borderRadius: "90px",
                                        outline: "none",
                                        color: "#949494",
                                        fontSize: "14px"
                                    }}
                                />
                            </Form.Item>
                        </div>

                        <div>
                            <label style={{display: "block", marginBottom: "8px"}} htmlFor="">Company name</label>
                            <Form.Item name="company_name" style={{marginBottom: "0"}}>
                                <Input
                                    placeholder='Enter Company Name'
                                    style={{
                                        width:"100%",
                                        border: "none",
                                        height: "40px",
                                        padding: "18px 15px",
                                        background: "#F1F4F9",
                                        borderRadius: "90px",
                                        outline: "none",
                                        color: "#949494",
                                        fontSize: "14px"
                                    }}
                                />
                            </Form.Item>
                        </div>
                        
                        
                        <div>
                            <label style={{display: "block", marginBottom: "8px"}} htmlFor="">Company  Email</label>
                            <Form.Item name="company_email" style={{marginBottom: "0"}}>
                                <Input
                                    placeholder='Enter Company Email'
                                    style={{
                                        width:"100%",
                                        border: "none",
                                        height: "40px",
                                        padding: "18px 15px",
                                        background: "#F1F4F9",
                                        borderRadius: "90px",
                                        outline: "none",
                                        color: "#949494",
                                        fontSize: "14px"
                                    }}
                                />
                            </Form.Item>
                        </div>
                        
                        
                        <div>
                            <label style={{display: "block", marginBottom: "8px"}} htmlFor="">Appling Last Date</label>
                            <Form.Item name="application_last_date" style={{marginBottom: "0"}}>
                                <Input
                                    placeholder='Enter Application Last Date'
                                    style={{
                                        width:"100%",
                                        border: "none",
                                        height: "40px",
                                        padding: "18px 15px",
                                        background: "#F1F4F9",
                                        borderRadius: "90px",
                                        outline: "none",
                                        color: "#949494",
                                        fontSize: "14px"
                                    }}
                                />
                            </Form.Item>
                        </div>
                        
                        <div>
                            <label style={{display: "block", marginBottom: "8px"}} htmlFor="">Company  location</label>
                            <Form.Item name="location" style={{marginBottom: "0"}}>
                                <Input
                                    placeholder='Enter Company Location'
                                    style={{
                                        width:"100%",
                                        border: "none",
                                        height: "40px",
                                        padding: "18px 15px",
                                        background: "#F1F4F9",
                                        borderRadius: "90px",
                                        outline: "none",
                                        color: "#949494",
                                        fontSize: "14px"
                                    }}
                                />
                            </Form.Item>
                        </div>
                        
                        <div>
                            <label style={{display: "block", marginBottom: "8px"}} htmlFor="">Job Vacancy</label>
                            <Form.Item name="vacancy" style={{marginBottom: "0"}}>
                                <Input
                                    placeholder=''
                                    style={{
                                        width:"100%",
                                        border: "none",
                                        height: "40px",
                                        padding: "18px 15px",
                                        background: "#F1F4F9",
                                        borderRadius: "90px",
                                        outline: "none",
                                        color: "#949494",
                                        fontSize: "14px"
                                    }}
                                />
                            </Form.Item>
                        </div>

                    </div>

                    <hr />

                    <div className='grid grid-cols-3 gap-6'>
                        <div>
                            <label style={{display: "block", marginBottom: "8px"}} htmlFor="">Job Type</label>
                            <Form.Item name="job_type" style={{marginBottom: "0"}}>
                                <Input
                                    placeholder='Enter Job Type'
                                    style={{
                                        width:"100%",
                                        border: "none",
                                        height: "40px",
                                        padding: "18px 15px",
                                        background: "#F1F4F9",
                                        borderRadius: "90px",
                                        outline: "none",
                                        color: "#949494",
                                        fontSize: "14px"
                                    }}
                                />
                            </Form.Item>
                        </div>
                        
                        <div>
                            <label style={{display: "block", marginBottom: "8px"}} htmlFor="">Work Type</label>
                            <Form.Item name="Work Type" style={{marginBottom: "0"}}>
                                <Input
                                    placeholder='Enter Work Type'
                                    style={{
                                        width:"100%",
                                        border: "none",
                                        height: "40px",
                                        padding: "18px 15px",
                                        background: "#F1F4F9",
                                        borderRadius: "90px",
                                        outline: "none",
                                        color: "#949494",
                                        fontSize: "14px"
                                    }}
                                />
                            </Form.Item>
                        </div>

                        <div>
                            <label style={{display: "block", marginBottom: "8px"}} htmlFor="">Work Category</label>
                            <Form.Item name="category" style={{marginBottom: "0"}}>
                                <Input
                                    placeholder='Enter Working Category'
                                    style={{
                                        width:"100%",
                                        border: "none",
                                        height: "40px",
                                        padding: "18px 15px",
                                        background: "#F1F4F9",
                                        borderRadius: "90px",
                                        outline: "none",
                                        color: "#949494",
                                        fontSize: "14px"
                                    }}
                                />
                            </Form.Item>
                        </div>
                        
                        <div>
                            <label style={{display: "block", marginBottom: "8px"}} htmlFor="">Work Shift</label>
                            <Form.Item name="shift" style={{marginBottom: "0"}}>
                                <Input
                                    placeholder='Enter Work Shift'
                                    style={{
                                        width:"100%",
                                        height: "40px",
                                        border: "none",
                                        padding: "18px 15px",
                                        background: "#F1F4F9",
                                        borderRadius: "90px",
                                        outline: "none",
                                        color: "#949494",
                                        fontSize: "14px"
                                    }}
                                />
                            </Form.Item>
                        </div>
                        
                        <div>
                            <label style={{display: "block", marginBottom: "8px"}} htmlFor="">Area</label>
                            <Form.Item name="area" style={{marginBottom: "0"}}>
                                <Input
                                    placeholder='Enter Area'
                                    style={{
                                        width:"100%",
                                        border: "none",
                                        height: "40px",
                                        padding: "18px 15px",
                                        background: "#F1F4F9",
                                        borderRadius: "90px",
                                        outline: "none",
                                        color: "#949494",
                                        fontSize: "14px"
                                    }}
                                />
                            </Form.Item>
                        </div>
                    </div>

                    <p className=' text-[#436FB6] text-[18px] font-medium'>Job Requirement</p>

                    <div>
                        <label style={{display: "block", marginBottom: "8px"}} htmlFor="">Education : </label>
                        <Form.Item name="education" style={{marginBottom: "0"}}>
                            <Input.TextArea
                                placeholder='Enter Education Requirement. Example: At least 8 years, The applicants should have experienced'
                                style={{
                                    width:"100%",
                                    height: "120px",
                                    border: "none",
                                    resize: "none",
                                    padding: "10px 15px",
                                    background: "#F1F4F9",
                                    borderRadius: "8px",
                                    outline: "none",
                                    color: "#949494",
                                    fontSize: "14px"
                                }}
                            />
                        </Form.Item>
                    </div>

                    <div>
                        <label style={{display: "block", marginBottom: "8px"}} htmlFor="">Experience  : </label>
                        <Form.Item name="experience" style={{marginBottom: "0"}}>
                            <Input.TextArea
                                placeholder='Enter Education Requirement. Example: At least 8 years, The applicants should have experienced'
                                style={{
                                    width:"100%",
                                    height: "120px",
                                    border: "none",
                                    resize: "none",
                                    padding: "10px 15px",
                                    background: "#F1F4F9",
                                    borderRadius: "8px",
                                    outline: "none",
                                    color: "#949494",
                                    fontSize: "14px"
                                }}
                            />
                        </Form.Item>
                    </div>
                    
                    <div>
                        <label style={{display: "block", marginBottom: "8px"}} htmlFor="">Additional Requirements  :  </label>
                        <Form.Item name="additional_requirements " style={{marginBottom: "0"}}>
                            <Input.TextArea
                                placeholder='Enter Education Requirement. Example: At least 8 years, The applicants should have experienced'
                                style={{
                                    width:"100%",
                                    height: "120px",
                                    border: "none",
                                    resize: "none",
                                    padding: "10px 15px",
                                    background: "#F1F4F9",
                                    borderRadius: "8px",
                                    outline: "none",
                                    color: "#949494",
                                    fontSize: "14px"
                                }}
                            />
                        </Form.Item>
                    </div>
                    
                    <div>
                        <label style={{display: "block", marginBottom: "8px"}} htmlFor="">Responsibilities  : </label>
                        <Form.Item name="responsibilities" style={{marginBottom: "0"}}>
                            <Input.TextArea
                                placeholder='Enter Education Requirement. Example: At least 8 years, The applicants should have experienced'
                                style={{
                                    width:"100%",
                                    height: "120px",
                                    border: "none",
                                    resize: "none",
                                    padding: "10px 15px",
                                    background: "#F1F4F9",
                                    borderRadius: "8px",
                                    outline: "none",
                                    color: "#949494",
                                    fontSize: "14px"
                                }}
                            />
                        </Form.Item>
                    </div>
                    
                    <div>
                        <label style={{display: "block", marginBottom: "8px"}} htmlFor="">Compensation & Other Benefits  : </label>
                        <Form.Item name="compensation_and_benefits" style={{marginBottom: "0"}}>
                            <Input.TextArea
                                placeholder='Enter Education Requirement. Example: At least 8 years, The applicants should have experienced'
                                style={{
                                    width:"100%",
                                    height: "120px",
                                    border: "none",
                                    resize: "none",
                                    padding: "10px 15px",
                                    background: "#F1F4F9",
                                    borderRadius: "8px",
                                    outline: "none",
                                    color: "#949494",
                                    fontSize: "14px"
                                }}
                            />
                        </Form.Item>
                    </div>

                    <Form.Item name="compensation_and_benefits" style={{marginBottom: "0", display: "flex", alignItems: "center", justifyContent: "center"}}>
                        <Button
                            block
                            htmlType='submit'
                            style={{
                                width: "120px",
                                height: "40px",
                                border: "none",
                                outline: "none",
                                background: "#436FB6",
                                color: "white",
                                borderRadius: "90px",
                                boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)"
                            }}
                        >
                            Post Job
                        </Button>
                    </Form.Item>


                </Form>
            </div>
        </>
    )
}

export default CreateJob