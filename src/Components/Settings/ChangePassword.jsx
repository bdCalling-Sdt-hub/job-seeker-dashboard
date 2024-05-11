import { Button, Checkbox, Form, Input } from 'antd'
import React, { useState } from 'react'
import baseURL from '../../../Config'
import Swal from 'sweetalert2'

const ChangePassword = () => {
    const [newPassError, setNewPassError] = useState("");
    const [conPassError, setConPassError] = useState("");
    const [curPassError, setCurPassError] = useState("");


    const handleChangePassword= (values)=>{
        console.log("received", values)
        if(values?.currentPass === values.newPass){ 
            setNewPassError("New password cannot be the same as old password")
        }
        else{  
            setNewPassError("")
        }
        
        if(values?.confirmPass !== values.newPass){ 
            setConPassError("New Password and Confirm Password Doesn't Matched")
        }else{ 
            setConPassError("")
        }

        console.log("Data")
        // const response = await baseURL.post(`/update-pass`, values, {
        //     headers: {
        //         "Content-Type": "application/json",
        //         authorization: `Bearer ${JSON.parse(localStorage.getItem('token'))}`
        //     }
        // })
        // console.log(response)
        // if(response.status === 200){
        //     Swal.fire({
        //         position: "center",
        //         icon: "success",
        //         title: "Password Changed Successfully",
        //         showConfirmButton: false,
        //         timer: 1500
        //     });
        // }
    }

    const onFinish = (values) => {
        console.log('Success:', values);
      };

    return (
        <div className='flex items-center justify-center pb-10'>
           <Form
    name="basic"
    labelCol={{
      span: 8,
    }}
    wrapperCol={{
      span: 16,
    }}
    style={{
      maxWidth: 600,
    }}
    initialValues={{
      remember: true,
    }}
    onFinish={onFinish}
    onFinishFailed={onFinishFailed}
    autoComplete="off"
  >
    <Form.Item
      label="Username"
      name="username"
      rules={[
        {
          required: true,
          message: 'Please input your username!',
        },
      ]}
    >
      <Input />
    </Form.Item>

    <Form.Item
      label="Password"
      name="password"
      rules={[
        {
          required: true,
          message: 'Please input your password!',
        },
      ]}
    >
      <Input.Password />
    </Form.Item>

    <Form.Item
      name="remember"
      valuePropName="checked"
      wrapperCol={{
        offset: 8,
        span: 16,
      }}
    >
      <Checkbox>Remember me</Checkbox>
    </Form.Item>

    <Form.Item
      wrapperCol={{
        offset: 8,
        span: 16,
      }}
    >
      <Button type="primary" htmlType="submit">
        Submit
      </Button>
    </Form.Item>
  </Form>
        </div>
    )
}

export default ChangePassword;
