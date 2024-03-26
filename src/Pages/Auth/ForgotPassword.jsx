import { Button, Form, Input, Typography } from "antd";
import React from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import Navigate from "../../Components/Navigate";

const ForgotPassword = () => {
  const navigate = useNavigate();
  const onFinish = (values) => {
    localStorage.setItem("email", JSON.stringify(values.email))
    console.log("Received values of form: ", values.email);
    Swal.fire({
      position: "center",
      icon: "success",
      title: "Send OTP ",
      showConfirmButton: false,
      timer: 1500
    }).then(() => {
      navigate("/otp")
    });
  };
  return (
    <div className="w-full bg-[#FCFCFC] h-screen flex items-center justify-center">
      <Form 
        name="normal_login"
        className="w-[630px] bg-white rounded-xl py-[90px] px-[57px] relative"
        style={{boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)"}}
        initialValues={{
          remember: true,
        }}        
        onFinish={onFinish}
      >
        <Navigate link="/login" />
        <h1 className="text-[32px] font-semibold text-[#494949] mb-[54px] text-center">Forgot Password</h1>

          <div>
            <label htmlFor="email" style={{display: "block", color:"#6A6D7C", fontWeight: 400, marginBottom: "13px" }}> Email Address</label>
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

          <Form.Item>
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
                marginTop: "40px",
              }}
            >
              Send a Code
            </Button>
          </Form.Item>
      </Form>
    </div>
  );
};

export default ForgotPassword;
