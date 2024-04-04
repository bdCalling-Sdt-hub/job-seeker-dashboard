import { Button, Input, Form } from 'antd';
import React, { useEffect, useState } from 'react';
import { CiEdit } from "react-icons/ci";
import Swal from 'sweetalert2';
import baseURL from '../../../Config';
import ImgConfig from '../../../ImgConfig';

const Profile = () => {
    const profile = JSON.parse(localStorage.getItem("user"));
    const [image, setImage] = useState(profile?.image ? `${ImgConfig}${profile?.image}` :"https://img.freepik.com/free-photo/bohemian-man-with-his-arms-crossed_1368-3542.jpg?size=626&ext=jpg");
    const [imgURL, setImgURL] = useState(image);
    
    const handleUpdate=async(values)=>{
        const formData = new FormData();
        formData.append("fullName", values.fullName)
        formData.append("email", values.email)
        formData.append("mobile", values.mobile)
        formData.append("address", values.address)
        formData.append("image", image);

        await baseURL.post(`/profile/edit/${profile?.id}?_method=PUT`, formData,{
            headers: {
              "Content-Type": "multipart/form-data",
              authorization: `Bearer ${JSON.parse(localStorage.getItem('token'))}`,
            }
        }).then((response)=>{
            localStorage.setItem("user", JSON.stringify(response?.data?.data))
            if(response.status === 200){
                Swal.fire({
                    position: "center",
                    title: "Successfully!",
                    text: response.data.message,
                    icon: "success",
                    timer: 1500,
                    showConfirmButton: false,
                });
            }
        })
    }

    const onChange = (e) => {
        const file= e.target.files[0];
        const imgUrl = URL.createObjectURL(file);
        setImgURL(imgUrl);
        setImage(file)
    };

    const initialValuesData={
        fullName : profile?.fullName,
        email: profile?.email,
        mobile: profile?.mobile,
        address: profile?.address
    }

    return (
        <div>
            <div className='w-[118px] h-[118px] relative mb-6'>
                <img 
                    src={imgURL}
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
            <Form
                name="normal_login"
                className="login-form grid grid-cols-1 gap-6"
                initialValues={initialValuesData}
                onFinish={handleUpdate}
            >
                <div className="grid grid-cols-2 gap-6">

                    <div >
                        <label style={{display: "block", marginBottom: "8px" }}>Full Name</label>
                        <Form.Item
                            style={{marginBottom: 0}}
                            name="fullName"
                        >
                            <Input
                                placeholder="Enter your Full Name"
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
        
                    <div >
                        <label style={{display: "block", marginBottom: "5px" }} htmlFor="">Email</label>
                        <Form.Item
                            name="email"
                            style={{marginBottom: 0}}
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
                    </div>
        
                    <div>
                        <label style={{display: "block", marginBottom: "5px" }} htmlFor="email">Contact No</label>
                        <Form.Item
                            style={{marginBottom: 0}}
                            name="mobile"
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

                    <div>
                        <label style={{display: "block", marginBottom: "5px" }} htmlFor="email">Address</label>
                        <Form.Item
                            style={{marginBottom: 0}}
                            name="address"
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
    )
}

export default Profile;