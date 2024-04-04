import React, { useEffect, useState } from 'react'
import BackButton from '../../Components/BackButton';
import { MdKeyboardArrowRight } from "react-icons/md";
import { useNavigate } from 'react-router-dom';
import { Button, Checkbox, Form, Input, Modal } from 'antd';
import baseURL from '../../../Config';
import Swal from 'sweetalert2';


const settingsItem = [
    {
        title: "Notification",
        path: "notifications",
    },
    {
        title: "Profile",
        path: "profile",
    },
   
    {
        title: "Change password",
        path: "change-password",
    },
    
    {
        title: "Terms & Conditions",
        path: "terms-&-conditions",
    },
    {
        title: "Privacy policy",
        path: "privacy-policy",
    },
    {
        title: "About us",
        path: "about-us",
    },
    
];

const Settings = () => {
    const [openModal, setOpenModal] = useState(false)
    const [newPassError, setNewPassError] = useState("");
    const [conPassError, setConPassError] = useState("");
    const [curPassError, setCurPassError] = useState("");
    const [checked, setChecked] = useState("");
    const navigate = useNavigate();

    const handleChangePassword=async(values)=>{
        if(values?.current_password === values.new_password){
            setNewPassError("The New password is semilar with old Password");
        }else{
            setNewPassError("")
        }
        
        if(values?.new_password !== values.confirm_password){
            setConPassError("New Password and Confirm Password Doesn't Matched");
        }else{
            setConPassError("")
        }


        await baseURL.post(`/update-pass`, values, {
            headers: {
                "Content-Type": "application/json",
                authorization: `Bearer ${JSON.parse(localStorage.getItem('token'))}`
            }
        }).then((response)=>{
            if(response.status === 200){
                Swal.fire({
                    position: "center",
                    title: "Successfully!",
                    text: response.data.message,
                    icon: "success",
                    timer: 1500,
                    showConfirmButton: false,
                }).then(()=>{
                    setOpenModal(false)
                })
            }
        })
        .catch((error)=>{
            console.log(error)
            if(error.response.data.message){
                setCurPassError(error.response.data.message);
            }else{
                setCurPassError("")
            }
        })
    
    }

    const handleNavigate = (value) => {
        if (value === "change-password") {
            setOpenModal(true)
        } else {
            navigate(`/settings/${value}`);
        }
    };

    useEffect(()=>{
        async function getAPi(){
            const response = await baseURL.get(`/profile`,{
                headers: {
                "Content-Type": "application/json",
                authorization: `Bearer ${JSON.parse(localStorage.getItem('token'))}`,
                }
            });
            console.log(response)
            localStorage.setItem("user", JSON.stringify(response?.data?.user))
        }
        getAPi();
    }, [  ]);

    return (
        <div>
            <div style={{marginBottom: "24px"}}>
                <BackButton link="/" />
            </div>

            <div>
                {
                    settingsItem.map((setting, index) => (
                        <div
                            key={index}
                            className="
                                border 
                                border-[#4365b6] 
                                py-4 
                                mb-2 
                                px-4 
                                text-sm 
                                rounded-lg 
                                bg-white 
                                flex items-center 
                                justify-between 
                                cursor-pointer 
                                hover:bg-[#e6f1fc] 
                                hover:text-black
                            "
                            onClick={() => handleNavigate(setting.path)}
                        >
                            <h2>{setting.title}</h2>
                            <MdKeyboardArrowRight color='#4365b6' size={24} />
                        </div>
                    ))
                }
            </div>


            <Modal
                title="Change Password"
                centered
                open={openModal}
                onCancel={() => setOpenModal(false)}
                width={500}
                footer={false}
            >
                <div className='mt-5'>
                    <Form
                        name="normal_login"
                        className="login-form grid grid-cols-1 gap-6"
                        initialValues={{
                            remember: true,
                        }}
                        onFinish={handleChangePassword}
                    >

                    <div >
                        <label style={{display: "block", marginBottom: "8px" }}>Current Password</label>
                        <Form.Item
                            style={{marginBottom: 0}}
                            name="current_password"
                            rules={[
                                {
                                    required: true,
                                    message: "Please input Current password!",
                                },
                            ]}
                        >
                            <Input.Password
                                placeholder="Enter Password"
                                type="password"
                                style={{
                                    border: "none",
                                    height: "42px",
                                    background: "#F1F4F9",
                                    borderRadius: "90px",
                                    outline: "none",
                                }}
                            />
                        </Form.Item>
                        { curPassError && <label style={{display: "block", color: "red"}} htmlFor="error">{curPassError}</label>}
                    </div>
        
                    <div >
                        <label style={{display: "block", marginBottom: "5px" }} htmlFor="">New Password</label>
                        <Form.Item
                            name="new_password"
                            rules={[
                                {
                                required: true,
                                message: "Please input New Password!",
                                },
                            ]}
                            style={{marginBottom: 0}}
                        >
                            <Input.Password
                                type="password"
                                placeholder="Enter password"
                                style={{
                                    border: "none",
                                    height: "42px",
                                    background: "#F1F4F9",
                                    borderRadius: "90px",
                                    outline: "none",
                                }}
                            />
                        </Form.Item>
                        { newPassError && <label style={{display: "block", color: "red"}} htmlFor="error">{newPassError}</label>}
                    </div>
        
                    <div>
                        <label style={{display: "block", marginBottom: "5px" }} htmlFor="email">Re-Type Password </label>
                        <Form.Item
                            style={{marginBottom: 0}}
                            name="confirm_password"
                            rules={[
                                {
                                required: true,
                                message: "Please input your Re-type Password!",
                                },
                            ]}
                        >
                            <Input.Password
                                type="password"
                                placeholder="Enter password"
                                style={{
                                    border: "none",
                                    height: "42px",
                                    background: "#F1F4F9",
                                    borderRadius: "90px",
                                    outline: "none",
                                }}
                            />
                        </Form.Item>
                        { conPassError && <label style={{display: "block", color: "red"}} htmlFor="error">{conPassError}</label>}
                    </div>
        
                    <Form.Item name="remember"  noStyle style={{marginBottom: 0}}>
                        <Checkbox onChange={(e)=>setChecked(e.target.checked)} style={{color: "#6F6F6F"}}>I agree with terms of service and privacy policy</Checkbox>
                    </Form.Item>

                    <Form.Item style={{marginBottom: 0}}>
                        <Button
                            type="primary"
                            htmlType="submit"
                            block
                            disabled={!checked}
                            style={{
                                border: "none",
                                height: "42px",
                                background: "#436FB6",
                                borderRadius: "90px",
                                outline: "none",
                            }}
                        >
                            Confirm
                        </Button>
                    </Form.Item>
                    </Form>
                </div>
            </Modal>
        </div>
    )
}

export default Settings