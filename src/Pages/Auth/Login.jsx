import { LockOutlined, MailOutlined } from "@ant-design/icons";
import { Button, Checkbox, Form, Input } from "antd";
import React from "react";
import { useNavigate } from "react-router";
const Login = () => {
  const onFinish = (values) => {
    console.log("Received values of form: ", values);
  };

  const navigate = useNavigate();

  return (
    <div className="w-full bg-[#FCFCFC] h-screen flex items-center justify-center" >
        <Form
          name="normal_login"
          className="w-[630px] bg-white rounded-xl py-[90px] px-[57px]"
          style={{boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)"}}
          initialValues={{
            remember: true,
          }}
          onFinish={onFinish}
        >
          <h1 className="text-[32px] text-[#6A6D7C] text-center">Login in to Account</h1>
          <p className="text-lg text-[#6A6D7C] text-center font-normal mt-[11px] mb-[34px]">Please enter your email and password to continue</p>

          <div style={{marginBottom: "48px"}}>
            <label htmlFor="email" style={{display: "block", marginBottom: "13px" }}> Email </label>
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
                placeholder="Enter your email address"
                type="email"
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

          <div style={{marginBottom: "32px"}}>
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


          <div className="flex items-center justify-between">
            <Form.Item name="remember" valuePropName="checked" noStyle>
              <Checkbox style={{color: "#6F6F6F"}}>Remember me</Checkbox>
            </Form.Item>
            <a
              className="login-form-forgot"
              style={{ color: "#FBA51A" }}
              href="/forgot-password"
            >
              Forgot password
            </a>
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
                margin: "40px 0",
              }}
            >
              Sign In
            </Button>
          </Form.Item>

          <p className="text-center text-[16px] font-normal text-[#202224]">Don’t have an account? <span className="text-[18px] font-normal text-[#436FB6] underline">Create Account</span></p>
        </Form>
    </div>
  );
};

export default Login;
