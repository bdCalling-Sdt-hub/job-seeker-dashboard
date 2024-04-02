import { Button, Modal } from "antd";
import React, { useState } from "react";
import OTPInput from "react-otp-input";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import Navigate from "../../Components/Navigate"
import baseURL from "../../../Config";

const Otp = () => {
  const navigate = useNavigate();
  const [otp, setOtp] = useState("");
  const [err, setErr] = useState("");
  const [open, setOpen] = useState(false)

  const handleResendEmail = async() => {
    await baseURL.post(`/forget-pass`, {email: JSON.parse(localStorage.getItem("email"))})
    .then((response)=>{
      if(response.status === 200){
        Swal.fire({
          position: "center",
          icon: "success",
          title: response?.data?.message,
          showConfirmButton: false,
          width: 700,
          timer: 1500
        }).then(() => {
          navigate("/otp");
        });
      }
    })

  };
  const handleVerifyOtp= async ()=>{
    const formData = new FormData();
    formData.append("otp", otp);
    formData.append("email", JSON.parse(localStorage.getItem("email")))


    await baseURL.post(`/email-verified`, {email: JSON.parse(localStorage.getItem('email')), otp: otp}, {
      headers: {
        "Content-Type": "application/json",
        authorization: `Bearer ${localStorage.getItem('access_token')}`,
      }
    })
    .then((response)=>{
      if(response.status === 200){
        Swal.fire({
          html: "Your password has been successfully reset. click confirm to set a new password",
          confirmButtonText: 'Confirm',
          customClass: {
            confirmButton: 'custom-send-button',
          }
        }).then((result) => {
          if (result.isConfirmed) {
            navigate("/update-password")
          }
        });
      }
    }).catch((error)=>{
      console.log(error)
      if(error.response.status === 422){
        Swal.fire({
          position: "center",
          icon: "error",
          title: error.response.data.message + " " + "OTP",
          showConfirmButton: false,
          timer: 1500
        })
      }
    })
  }

  const handleClose=()=>{
    setOpen(false)
  }

  return (
    <div className="w-full bg-[#FCFCFC] h-screen flex items-center justify-center">
      <div 
        className="w-[630px] bg-white rounded-xl py-[90px] px-[57px] relative"
        style={{boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)"}}
      >

        <h1 className="text-[32px] text-[#6A6D7C] mb-[13px] text-center">Check your email</h1>
        <p style={{width: "380px", color: "#B8B8B8",  margin: "0 auto 0 auto"}}>
          We sent a reset link to <span style={{color: "#545454"}}> contact@dscode...com </span>
          enter 6 digit code that mentioned in the email
        </p>


        <div style={{display: "flex", alignItems: "center", justifyContent: "center", marginTop: "30px",}}>
          <OTPInput
            value={otp}
            onChange={setOtp}
            numInputs={6}
            inputStyle={{
              height: "44px",
              width: "44px",
              borderRadius: "8px",
              marginRight: "16px",
              fontSize: "20px",
              border: "1px solid #A9A9A9",
              color: "#6B6B6B",
              outline: "none"
            }}
            renderInput={(props) => <input {...props} />}
          />
        </div>


        <Button
          disabled={otp.length < 6}
          onClick={handleVerifyOtp}
              block
              htmlType="submit"
              style={{
                height: "48px",
                fontWeight: "400px",
                fontSize: "18px",
                background: "#436FB6",
                borderRadius: "90px",
                margin: "40px 0",
                color: "white"
              }}
            >
              Verify
        </Button>
        <p className="text-center text-[#6A6D7C]">
          Didn’t receive code? {" "}
          <span onClick={handleResendEmail} className="text-[#436FB6] underline cursor-pointer">Resend </span>
        </p>
      </div>

      {
        open &&
        <Modal
          centered 
          open={open}
          onCancel={false}
          closeIcon={handleClose}
          footer={false}
        >
          <h1 className="text-[32px] text-[#6A6D7C] mb-[13px] text-center">Password reset</h1>
          <p style={{width: "320px", color: "#6A6D7C",  margin: "0 auto 0 auto"}}>
            Your password has been successfully reset. click confirm to set a new password
          </p>
          <button onClick={()=>navigate("/update-password")} className="w-full mt-10 h-[48px] text-white bg-[#436FB6] rounded-[90px]">Confirm</button>
        </Modal>
      }
    </div>
  );
};

export default Otp;
