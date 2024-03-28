import { Button, Input, Form } from 'antd';
import React, { useState } from 'react';
import { CiEdit } from "react-icons/ci";
import Swal from 'sweetalert2';

const Profile = () => {
    const [image, setImage] = useState("https://img.freepik.com/free-photo/bohemian-man-with-his-arms-crossed_1368-3542.jpg?size=626&ext=jpg");
    const [imgURL, setImgURL] = useState(image);


    const handleChangeProfile=(values)=>{
        Swal.fire({
            position: "center",
            icon: "success",
            title: "Profile Updated Successfully",
            showConfirmButton: false,
            timer: 1500
        });
    };

    const onChange = (e) => {
        const file= e.target.files[0];
        console.log(file)
        const imgUrl = URL.createObjectURL(file);
        setImgURL(imgUrl);
        setImage(file)
    };

    const initialValuesData={
        fullName : "Nadir Hossain",
        email: "nadirhossain336@gmail.com",
        contact_no: "01756953936",
        address: "Khilgaon",
        company_name: "bdCalling",
        division: "Dhaka",
        designation: "Developer",
        location: "Banasree"
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
                onFinish={handleChangeProfile}
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
                            name="contact_no"
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
                                placeholder="Enter Your Address"
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
                        <label style={{display: "block", marginBottom: "5px" }} htmlFor="name">Company Name</label>
                        <Form.Item
                            style={{marginBottom: 0}}
                            name="company_name"
                        >
                            <Input
                                type="text"
                                placeholder="Enter Your Company Name"
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
                        <label style={{display: "block", marginBottom: "5px" }} htmlFor="email">Division</label>
                        <Form.Item
                            style={{marginBottom: 0}}
                            name="division"
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

                    <div>
                        <label style={{display: "block", marginBottom: "5px" }} htmlFor="email">Designation</label>
                        <Form.Item
                            style={{marginBottom: 0}}
                            name="designation"
                        >
                            <Input
                                type="text"
                                placeholder="Enter Designation"
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
                        <label style={{display: "block", marginBottom: "5px" }} htmlFor="email">Office Location</label>
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