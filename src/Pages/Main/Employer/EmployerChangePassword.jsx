import { Button, Checkbox, Form, Input } from 'antd'
import React, { useState } from 'react'
import BackButton from '../../../Components/BackButton';

const EmployerChangePassword = () => {
    const [newPassError, setNewPassError] = useState("");
    const [conPassError, setConPassError] = useState("");
    const [curPassError, setCurPassError] = useState("");
    const [checked, setChecked] = useState("");

    const handleChangePassword=(values)=>{

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
    
    }
    return (
        <>
            {/* heading */}
            <div style={{marginBottom: "15px"}}>
                <BackButton link='/employer-profile' />
            </div>

            <div className='bg-white p-6 rounded-lg'>
                <h1 className='capitalize text-[24px] font-medium text-[#565656]'> {"Change Password"}</h1>
                <div className='flex items-center justify-center pb-10'>
                    <Form
                        name="normal_login"
                        className="login-form w-[516px] grid grid-cols-1 gap-6"
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
                                        height: "48px",
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
                                        height: "48px",
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
                                        height: "48px",
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

                        <Form.Item>
                            <Button
                                type="primary"
                                htmlType="submit"
                                block
                                disabled={!checked}
                                style={{
                                    border: "none",
                                    height: "48px",
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
            </div>
        </>
    )
}

export default EmployerChangePassword;
