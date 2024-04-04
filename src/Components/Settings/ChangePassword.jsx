import { Button, Checkbox, Form, Input } from 'antd'
import React, { useState } from 'react'

const ChangePassword = () => {
    
    return (
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
    )
}

export default ChangePassword;
