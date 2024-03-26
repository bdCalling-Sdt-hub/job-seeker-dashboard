import { Button, Checkbox, Form, Input } from "antd";
import React from "react";
import { useNavigate } from "react-router";
import { Link } from "react-router-dom";
const Login = () => {
    const onFinish = (values) => {
        console.log("Received values of form: ", values);
    };

    const navigate = useNavigate();

    return (
        <div className="w-full bg-[#FCFCFC] h-screen flex items-center justify-center" >
            <Form
                name="normal_login"
                className="w-[630px] bg-white rounded-xl p-[57px]"
                style={{boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)"}}
                initialValues={{
                    remember: true,
                }}
                onFinish={onFinish}
            >
            <h1 className="text-[32px] text-[#6A6D7C] text-center">Create an Account</h1>
            <p className="text-lg text-[#6A6D7C] text-center font-normal mt-[11px] mb-[34px]">Create a account to continue</p>

            <div style={{marginBottom: "30px"}}>
                <label htmlFor="email" style={{display: "block", marginBottom: "13px" }}>Full name </label>
                <Form.Item
                    style={{marginBottom: 0}}
                    name="fullName"
                    id="email"
                    rules={[
                        {
                        required: true,
                        message: "Please input your name!",
                        },
                    ]}
                >
                <Input
                    placeholder="Enter your Full name address"
                    type="text"
                    style={{
                        border: "none",
                        height: "48px",
                        background: "#F1F4F9",
                        borderRadius: "90px",
                        padding: "0 16px",
                        color: "#A6A6A6",
                        fontSize: "16px",
                        fontWeight: 400,
                        outline: "none"
                    }}
                />
                </Form.Item>
            </div>

            <div style={{marginBottom: "30px"}}>
                <label htmlFor="email" style={{display: "block", marginBottom: "13px" }}>Email </label>
                <Form.Item
                    style={{marginBottom: 0}}
                    name="email"
                    id="email"
                    rules={[
                        {
                        required: true,
                        message: "Please input your email!",
                        },
                    ]}
                >
                <Input
                    placeholder="Enter your Full name address"
                    type="text"
                    style={{
                        border: "none",
                        height: "48px",
                        background: "#F1F4F9",
                        borderRadius: "90px",
                        padding: "0 16px",
                        color: "#A6A6A6",
                        fontSize: "16px",
                        fontWeight: 400,
                        outline: "none"
                    }}
                />
                </Form.Item>
            </div>

            <div style={{marginBottom: "30px"}}>
                <label style={{display: "block", marginBottom: "13px" }} htmlFor="password">Password</label>
                <Form.Item
                    style={{marginBottom: 0}}
                    name="password"
                    rules={[
                        {
                        required: true,
                        message: "Please input your Password!",
                        },
                    ]}
                >
                <Input.Password
                    type="password"
                    placeholder="Enter your password"
                    style={{
                        border: "none",
                        height: "48px",
                        background: "#F1F4F9",
                        borderRadius: "90px",
                        padding: "0 16px",
                        color: "#A6A6A6",
                        fontSize: "16px",
                        fontWeight: 400,
                        outline: "none"
                    }}
                />
                </Form.Item>
            </div>

            <div>
                <label style={{display: "block", marginBottom: "13px" }} htmlFor="password">Confirm Password</label>
                <Form.Item
                    style={{marginBottom: 0}}
                    name="confirm_password"
                    rules={[
                        {
                        required: true,
                        message: "Please input Confirm Password!",
                        },
                    ]}
                >
                <Input.Password
                    type="password"
                    placeholder="Enter your Confirm password"
                    style={{
                        border: "none",
                        height: "48px",
                        background: "#F1F4F9",
                        borderRadius: "90px",
                        padding: "0 16px",
                        color: "#A6A6A6",
                        fontSize: "16px",
                        fontWeight: 400,
                        outline: "none"
                    }}
                />
                </Form.Item>
            </div>

            <Form.Item
                style={{marginBottom: 0}}
            >
                <Button
                    type="primary"
                    htmlType="submit"
                    className="login-form-button"
                    block
                    style={{
                        height: "48px",
                        fontWeight: "400px",
                        fontSize: "18px",
                        background: "#436FB6",
                        borderRadius: "90px",
                        margin: "35px 0",
                    }}
                >
                    Sign Up
                </Button>
            </Form.Item>

            <p className="text-center text-[16px] font-normal text-[#202224]">
                Already have an account? 
                <Link to="/login" className="text-[18px] font-normal text-[#436FB6] underline">Login</Link>
            </p>
            </Form>
        </div>
    );
};

export default Login;
