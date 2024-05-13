import { Button, Input, Form, Select } from 'antd';
import React, { useEffect, useState } from 'react';
import { CiEdit } from "react-icons/ci";
import Swal from 'sweetalert2';
import BackButton from '../../../Components/BackButton';
import { Link } from 'react-router-dom';
import baseURL from '../../../../Config';
import ImgURL from '../../../../ImgConfig';

const EmployerProfile = () => {
    const user = localStorage.getItem("user") ? JSON.parse(localStorage.getItem("user")) : {}
    const userInfo = localStorage.getItem("userInfo") === "undefined" ? {} : JSON.parse(localStorage.getItem("userInfo"));
    const [image, setImage] = useState( user?.image ? `${ImgURL}/${user?.image}` : "https://img.freepik.com/free-photo/bohemian-man-with-his-arms-crossed_1368-3542.jpg?size=626&ext=jpg");
    const [imgURL, setImgURL] = useState(image);

   

    const handleChangeProfile=async(values)=>{
        const response = await baseURL.post(`/update/recruiter`, {...values, image: image}, {
            headers: {
                "Content-Type": "multipart/form-data",
                authorization: `Bearer ${JSON.parse(localStorage.getItem('token'))}`
            }
        })
        localStorage.setItem("userInfo", JSON.stringify(response.data.data));
        if(response.status === 200){
            Swal.fire({
                position: "center",
                icon: "success",
                title: "Profile Updated Successfully",
                showConfirmButton: false,
                timer: 1500
            });
        }
        
    };

    const onChange = (e) => {
        const file= e.target.files[0];
        const imgUrl = URL.createObjectURL(file);
        setImgURL(imgUrl);
        setImage(file)
    };

    const initialValuesData={
        email: user?.email,
        verify_no: userInfo?.verify_no,
        phone: userInfo?.phone,
        location: userInfo?.location,
        companyName: userInfo?.company_name,
        division: "Dhaka",
        country: userInfo?.country,
        website_url: userInfo?.website_url,
        facebook_url: userInfo?.facebook_url,
        linkdin_url: userInfo?.linkdin_url,
        instagram_url: userInfo?.instagram_url,
        company_des: userInfo?.company_des,
        catId: userInfo?.category?.id,
        company_service: userInfo?.company_service,
    }

    const [category, setCategory] = useState([]);
    useEffect(()=>{
        async function getApi(){
            const response = await baseURL.get(`/show-category`, {
                headers: {
                    "Content-Type": "application/json",
                    authorization: `Bearer ${JSON.parse(localStorage.getItem('token'))}`
                }
            })
            setCategory(response?.data?.data);
        }
        getApi();
    }, []);

    const options = category?.map((item) => ({value: item?.id, label: item?.category_name}));

    return (
        <>
            {/* heading */}
            <div style={{marginBottom: "15px"}}>
                <BackButton link='/settings' />
            </div>

            <div className='bg-white p-6 rounded-lg'>
                <h1 className='capitalize mb-[30px] text-[24px] font-medium text-[#565656]'>Employer Profile</h1>


                <div className='flex items-center justify-between'>
                    <div className='w-[118px] h-[118px] relative mb-6'>
                        <img 
                            src={ imgURL}
                            style={{
                                width: "118px", 
                                height: "118px", 
                                borderRadius: "50%", 
                                border: "2px solid #436FB6"
                            }} 
                            alt="profile" 
                        />
                        <input onChange={onChange} type="file" id='photo' style={{display: "none"}} />
                        <label
                            htmlFor='photo' 
                            className='
                                bg-white
                                absolute 
                                top-[30%]
                                rounded-full 
                                -right-3 
                                w-[32px] 
                                h-[32px] 
                                border 
                                border-[#436FB6] 
                                flex items-center justify-center
                                cursor-pointer
                            '
                        >
                            <CiEdit size={16} />
                        </label>
                    </div>
                    
                    <Link to="/change-password" className='text-[#436FB6] hover:text-[#436FB6] font-bold'>
                        <p>Change Password</p>
                    </Link>
                </div>


                <Form
                    name="normal_login"
                    className="login-form grid grid-cols-1 gap-6"
                    initialValues={initialValuesData}
                    onFinish={handleChangeProfile}
                >
                    <div className="grid grid-cols-12 gap-6">

                        <div className='col-span-4' >
                            <label style={{display: "block", marginBottom: "8px" }}>Company name</label>
                            <Form.Item
                                style={{marginBottom: 0}}
                                name="companyName"
                            >
                                <Input
                                    placeholder="Enter Company Name"
                                    type="text"
                                    style={{
                                        border: "none",
                                        height: "48px",
                                        background: "#F1F4F9",
                                        borderRadius: "90px",
                                        outline: "none",
                                        padding: "0 16px"
                                    }}
                                />
                            </Form.Item>
                        </div>
            
                        <div className='col-span-4' >
                            <label style={{display: "block", marginBottom: "5px" }} htmlFor="">Company verification no:</label>
                            <Form.Item
                                name="verify_no"
                                style={{marginBottom: 0}}
                            >
                                <Input
                                    type="text"
                                    placeholder="Enter Verification Number"
                                    style={{
                                        border: "none",
                                        height: "48px",
                                        background: "#F1F4F9",
                                        borderRadius: "90px",
                                        outline: "none",
                                        padding: "0 16px"
                                    }}
                                />
                            </Form.Item>
                        </div>
            
                        <div className='col-span-4' >
                            <label style={{display: "block", marginBottom: "5px" }} htmlFor="email">Website Link</label>
                            <Form.Item
                                style={{marginBottom: 0}}
                                name="website_url"
                            >
                                <Input
                                    type="text"
                                    placeholder="Enter Your Contact Number"
                                    style={{
                                        border: "none",
                                        height: "48px",
                                        background: "#F1F4F9",
                                        borderRadius: "90px",
                                        outline: "none",
                                        padding: "0 16px"
                                    }}
                                />
                            </Form.Item>
                        </div>

                        <div className='col-span-4' >
                            <label style={{display: "block", marginBottom: "5px" }} htmlFor="email">Email</label>
                            <Form.Item
                                style={{marginBottom: 0}}
                                name="email"
                            >
                                <Input
                                    type="text"
                                    placeholder="Enter Your Email"
                                    style={{
                                        border: "none",
                                        height: "48px",
                                        background: "#F1F4F9",
                                        borderRadius: "90px",
                                        outline: "none",
                                        padding: "0 16px"
                                    }}
                                />
                            </Form.Item>
                        </div >


                        <div className='col-span-4' >
                            <label style={{display: "block", marginBottom: "5px" }} htmlFor="name">Location</label>
                            <Form.Item
                                style={{marginBottom: 0}}
                                name="location"
                            >
                                <Input
                                    type="text"
                                    placeholder="Enter Your Location"
                                    style={{
                                        border: "none",
                                        height: "48px",
                                        background: "#F1F4F9",
                                        borderRadius: "90px",
                                        outline: "none",
                                        padding: "0 16px"
                                    }}
                                />
                            </Form.Item>
                        </div>

                        <div className='col-span-4' >
                            <label style={{display: "block", marginBottom: "5px" }} htmlFor="email">Facebook media link </label>
                            <Form.Item
                                style={{marginBottom: 0}}
                                name="facebook_url"
                            >
                                <Input
                                    type="text"
                                    placeholder="Enter Your  Linkedin Link"
                                    style={{
                                        border: "none",
                                        height: "48px",
                                        background: "#F1F4F9",
                                        borderRadius: "90px",
                                        outline: "none",
                                        padding: "0 16px"
                                    }}
                                />
                            </Form.Item>
                        </div>

                        <div className='col-span-4' >
                            <label style={{display: "block", marginBottom: "5px" }} htmlFor="email">Linkedin media link </label>
                            <Form.Item
                                style={{marginBottom: 0}}
                                name="linkdin_url"
                            >
                                <Input
                                    type="text"
                                    placeholder="Enter Your Division"
                                    style={{
                                        border: "none",
                                        height: "48px",
                                        background: "#F1F4F9",
                                        borderRadius: "90px",
                                        outline: "none",
                                        padding: "0 16px"
                                    }}
                                />
                            </Form.Item>
                        </div>

                        <div className='col-span-4' >
                            <label style={{display: "block", marginBottom: "5px" }} htmlFor="email">Instagram media link </label>
                            <Form.Item
                                style={{marginBottom: 0}}
                                name="instagram_url"
                            >
                                <Input
                                    type="text"
                                    placeholder="Enter Your Instagram Link"
                                    style={{
                                        border: "none",
                                        height: "48px",
                                        background: "#F1F4F9",
                                        borderRadius: "90px",
                                        outline: "none",
                                        padding: "0 16px"
                                    }}
                                />
                            </Form.Item>
                        </div>

                        <div className='col-span-4' >
                            <label style={{display: "block", marginBottom: "5px" }} htmlFor="email">Phone No</label>
                            <Form.Item
                                style={{marginBottom: 0}}
                                name="phone"
                            >
                                <Input
                                    type="text"
                                    placeholder="Enter Phone No"
                                    style={{
                                        border: "none",
                                        height: "48px",
                                        background: "#F1F4F9",
                                        borderRadius: "90px",
                                        outline: "none",
                                        padding: "0 16px"
                                    }}
                                />
                            </Form.Item>
                        </div>

                        <div className='col-span-4' >
                            <label style={{display: "block", marginBottom: "8px"}} htmlFor="">Work Category</label>
                            <Form.Item name="catId" style={{marginBottom: "0"}}
                                rules={[
                                    {
                                        required: true,
                                        message: "Please Enter Work Category"
                                    }
                                ]}v
                            >
                                <Select
                                    options={options}
                                    style={{
                                        borderRadius: "90px",
                                        background: "#F1F4F9"
                                    }}
                                />
                            </Form.Item>
                        </div>

                        <div className='col-span-4' >
                            <label style={{display: "block", marginBottom: "5px" }} htmlFor="email">Country</label>
                            <Form.Item
                                style={{marginBottom: 0}}
                                name="country"
                            >
                                <Input
                                    type="text"
                                    placeholder="Enter Country"
                                    style={{
                                        border: "none",
                                        height: "48px",
                                        background: "#F1F4F9",
                                        borderRadius: "90px",
                                        outline: "none",
                                        padding: "0 16px"
                                    }}
                                />
                            </Form.Item>
                        </div>
                        
                        <div className='col-span-4' >
                            <label style={{display: "block", marginBottom: "5px" }} htmlFor="email">Company Service</label>
                            <Form.Item
                                style={{marginBottom: 0}}
                                name="company_service"
                            >
                                <Input
                                    type="text"
                                    placeholder="Enter Company Service"
                                    style={{
                                        border: "none",
                                        height: "48px",
                                        background: "#F1F4F9",
                                        borderRadius: "90px",
                                        outline: "none",
                                        padding: "0 16px"
                                    }}
                                />
                            </Form.Item>
                        </div>
                        
                        <div className='col-span-8' >
                            <label style={{display: "block", marginBottom: "5px" }} htmlFor="email">Company Details</label>
                            <Form.Item
                                style={{marginBottom: 0}}
                                name="company_des"
                            >
                                <Input.TextArea
                                    type="text"
                                    placeholder="Enter Company details"
                                    style={{
                                        border: "none",
                                        height: "110px",
                                        resize: "none",
                                        background: "#F1F4F9",
                                        borderRadius: "8px",
                                        outline: "none",
                                        padding: "10px"
                                    }}
                                />
                            </Form.Item>
                        </div>
                    </div>

                    <Form.Item
                        style={{
                            marginBottom: 0,
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center"
                        }}
                    >
                        <Button
                            type="primary"
                            htmlType="submit"
                            block
                            style={{
                                width: "172px",
                                border: "none",
                                height: "48px",
                                background: "#436FB6",
                                borderRadius: "90px",
                                outline: "none",
                            }}
                        >
                            Save & Change
                        </Button>
                    </Form.Item>
                </Form>
            </div>
        </>
    )
}

export default EmployerProfile;