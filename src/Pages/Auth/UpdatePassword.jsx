import { Button, Form, Input } from "antd";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import baseURL from "../../../Config";

const UpdatePassword = () => {
  const navigate = useNavigate();
  const [conPassError, setConPassError] = useState("");
  const onFinish = async(values) => {
    const { password, confirmation_password } = values;
    if(password !== confirmation_password){
      setConPassError("Password Doesn't Matched")
    }else{
      setConPassError("")
    } 
    await baseURL.post(`/reset-pass`, {password: password, password_confirmation: confirmation_password, email: JSON.parse(localStorage.getItem("email"))})
    .then((response)=>{
      if(response.status === 200){
        Swal.fire({
          title: "Successfully",
          text: "Your password has been updated, please change your password regularly to avoid this happening",
          confirmButtonText: 'Confirm',
          customClass: {
            confirmButton: 'custom-send-button',
          }
        }).then((result) => {
          if (result.isConfirmed) {
            navigate("/")
          }
        });
      }
    }).catch((error)=>{
      if(error.response.status === 401){
        Swal.fire({
          position: "center",
          icon: "error",
          title: error.response.data.message,
          showConfirmButton: false,
          timer: 1500
        })
      }
    })
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
        <h1 style={{fontSize: "32px", color: "#6A6D7C", marginBottom: "13px", textAlign: "center"}}>Set a new password</h1>
        <p style={{width: "275px", color: "#6A6D7C", fontSize: "14px", fontWeight: 400,  margin: "0 auto 0 auto"}}>
          Create a new password. Ensure it differs from
          previous ones for security
        </p>
    
        <div style={{margin: "45px 0 20px 0"}}>
            <label style={{display: "block", color:"#6A6D7C", marginBottom: "13px" }} htmlFor="">New Password</label>
            <Form.Item
                name="password"
                rules={[
                  {
                      required: true,
                      message: "Please input your new Password!",
                  },
                ]}
                style={{marginBottom: 0}}
            >
                <Input.Password
                  type="password"
                  placeholder="Enter New password"
                  style={{
                    border: "none",
                    height: "48px",
                    background: "#F1F4F9",
                    borderRadius: "90px",
                    padding: "0 16px",
                    outline: "none"
                  }}
                />
            </Form.Item>
        </div>
    
        <div style={{marginBottom: "40px"}}>
            <label style={{display: "block", color:"#6A6D7C", marginBottom: "13px" }} htmlFor="email">Confirm Password</label>
            <Form.Item
                style={{marginBottom: 0}}
                name="confirmation_password"
                rules={[
                    {
                    required: true,
                    message: "Please input your Confirm Password!",
                    },
                ]}
            >
                <Input.Password
                    type="password"
                    placeholder="Enter Confirm password"
                    style={{
                      border: "none",
                      height: "48px",
                      background: "#F1F4F9",
                      borderRadius: "90px",
                      padding: "0 16px",
                      outline: "none"
                    }}
                />
            </Form.Item>
            { conPassError && <label style={{display: "block", color: "red"}} htmlFor="error">{conPassError}</label>}
        </div>

        <Form.Item>
          <Button
            type="primary"
            htmlType="submit"
            block
            style={{
              border: "none",
              height: "48px",
              background: "#436FB6",
              color: "white",
              borderRadius: "90px",
              padding: "0 16px",
              outline: "none"
            }}
          >
            UPDATE PASSWORD
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default UpdatePassword;
