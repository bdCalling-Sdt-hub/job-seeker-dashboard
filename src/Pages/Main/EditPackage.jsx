import React, { useEffect, useState } from 'react';
import BackButton from '../../Components/BackButton';
import { Form, Input, Button } from 'antd';
import {  PlusOutlined } from '@ant-design/icons';
import baseURL from '../../../Config';
import { LuMinusCircle } from "react-icons/lu";
import Swal from "sweetalert2";

const EditPackage = () => {
    const [packages, setPackages] = useState([]);
    const selectedData  = JSON.parse(localStorage.getItem("package"));
    const [selectedPackage, setSelectedPackage] = useState(new URLSearchParams(window.location.search).get('package') || selectedData.id);

    useEffect(()=>{
        async function getAPi(){
          const response = await baseURL.get(`/show-package`,{
            headers: {
              "Content-Type": "application/json",
              authorization: `Bearer ${JSON.parse(localStorage.getItem('token'))}`,
            }
          });
          setPackages(response?.data?.data);
        }
        getAPi();
    }, []);

    const handleSubmit=async(values)=>{
        await baseURL.post(`/update-package`, {...values, id: selectedData.id, candidate_limit: 10, post_limit: 2}, {
            headers: {
              "Content-Type": "application/json",
              authorization: `Bearer ${JSON.parse(localStorage.getItem('token'))}`,
            }
        }).then((response)=>{
            if(response.status ===200){
                Swal.fire({
                    title: "Successfully",
                    text: response?.data?.message,
                    icon: "success",
                    showConfirmButton: false,
                    timer: 1500,
                });
            }
        })
    }

    const initialFormValues={
        package_name :   selectedData.package_name ,
        amount : selectedData.amount,
        notice : "quam vitae laoreet non nibh consectetur eu ac in Sed volutpat Nunc dignissim, eget tortor. tincidunt dui Nullam tincidunt In odio dui. Donec commodo vitae dui est. amet, commodo odio In Ut Donec Donec In ex orci nisl. eget Morbi sit ex at ",
        duration : selectedData.duration,
        feature: selectedData.feature,
        post_limit: selectedData?.post_limit
    }
    return (
        <div className='bg-white p-6 rounded-lg'>
            {/* headers */}
            <div style={{marginBottom : "30px"}}>
                <BackButton link="/package" />
            </div>


            <div className='flex items-center gap-6'>

                {
                    packages?.map((item, index)=>(
                        <div 
                            key={index}
                            className={`
                                w-[335px] h-[101px] 
                                rounded-[20px] 
                                p-6
                                ${selectedPackage == item?.id ? "bg-[#436FB6]" : "bg-white"} 
                                flex  items-center justify-between
                            `}
                            style={{boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)"}}
                        >
                            <div style={{ color: selectedPackage == item?.id ? "#F1F1F1" : "#565656"}}>
                                <h3 
                                    className='
                                        text-base 
                                        mb-[8px] 
                                        font-semibold
                                    '
                                >
                                    {item?.package_name}
                                </h3>
                                <div className='text-[12px] font-normal'>{"Payment Type"}</div>
                            </div>
                            <div
                                style={{ color: selectedPackage == item?.id? "#FBA51A" : "#436FB6"}} 
                                className='text-2xl font-bold'
                            >
                                $ {item.amount}
                            </div>
                        </div>

                    ))
                }
            </div>

            {/* edit Package section */}
            
            <Form initialValues={initialFormValues} onFinish={handleSubmit}>
                <div className='grid grid-cols-3 gap-6 mt-[53px]'>
                    <div className='bg-[#ECF1F8] rounded-[5px] p-6 h-[470px]'>
                        <h1 className='text-[#565656]'>Primary Data:</h1>
                        <div className='grid grid-cols-1 gap-4 mt-4'>
                            <div>
                                <label style={{display: "block", marginBottom: "8px" }} htmlFor="">Package Type</label>

                                <Input
                                    placeholder=''
                                    value={"Payment Type"}
                                    readOnly
                                    style={{
                                        width:"100%",
                                        border: "none",
                                        height: "30px",
                                        padding: "18px 15px",
                                        background: "white",
                                        borderRadius: "8px",
                                        outline: "none",
                                        color: "#949494",
                                        fontSize: "14px"
                                    }}
                                />
                                
                            </div>

                            <div>
                                <label style={{display: "block", marginBottom: "8px"}} htmlFor="">Package Name</label>
                                <Form.Item name="package_name" style={{marginBottom: "0"}}>
                                    <Input
                                        placeholder=''
                                        style={{
                                            width:"100%",
                                            border: "none",
                                            height: "30px",
                                            padding: "18px 15px",
                                            background: "white",
                                            borderRadius: "8px",
                                            outline: "none",
                                            color: "#949494",
                                            fontSize: "14px"
                                        }}
                                    />
                                </Form.Item>
                            </div>

                            <div>
                                <label style={{display: "block", marginBottom: "8px"}} htmlFor="">Package Price</label>
                                <Form.Item name="amount" style={{marginBottom: "0"}}>
                                    <Input
                                        placeholder=''
                                        style={{
                                            width:"100%",
                                            border: "none",
                                            height: "30px",
                                            padding: "18px 15px",
                                            background: "white",
                                            borderRadius: "8px",
                                            outline: "none",
                                            color: "#949494",
                                            fontSize: "14px"
                                        }}
                                    />
                                </Form.Item>
                            </div>

                            <div>
                                <label style={{display: "block", marginBottom: "8px"}} htmlFor="">Package Validation</label>
                                <Form.Item name="duration" style={{marginBottom: "0"}}>
                                    <Input
                                        placeholder=''
                                        style={{
                                            width:"100%",
                                            border: "none",
                                            height: "30px",
                                            padding: "18px 15px",
                                            background: "white",
                                            borderRadius: "8px",
                                            outline: "none",
                                            color: "#949494",
                                            fontSize: "14px"
                                        }}
                                    />
                                </Form.Item>
                            </div>

                            <div>
                                <label style={{display: "block", marginBottom: "8px"}} htmlFor="">Job Limit</label>
                                <Form.Item name="post_limit" style={{marginBottom: "0"}}>
                                    <Input
                                        placeholder=''
                                        style={{
                                            width:"100%",
                                            border: "none",
                                            height: "30px",
                                            padding: "18px 15px",
                                            background: "white",
                                            borderRadius: "8px",
                                            outline: "none",
                                            color: "#949494",
                                            fontSize: "14px"
                                        }}
                                    />
                                </Form.Item>
                            </div>
                        </div>
                    </div>

                    <div className='bg-[#ECF1F8] rounded-[5px] p-6 mb-4 h-[400px]'>
                        <h1 className='text-[#565656] mb-4'>Conditions :</h1>

                        <div className="grid grid-cols-1 gap-4">
                                    <Form.List name="feature">
                                        {
                                            (fields, { add, remove }) => (
                                                <>
                                                    {
                                                        fields.map((field, index) => (
                                                            
                                                                <Form.Item
                                                                    key={index}
                                                                    validateTrigger={['onChange', 'onBlur']}
                                                                    style={{marginBottom : 0}}
                                                                    className='w-full'
                                                                >
                                                                    <div  className='flex items-center gap-[30px] w-full'>
                                                                        <Form.Item
                                                                            {...field}
                                                                            validateTrigger={['onChange', 'onBlur']}
                                                                            style={{marginBottom : 0}}
                                                                            className='w-full'
                                                                        >
                                                                            <Input
                                                                                style={{
                                                                                    width:"100%",
                                                                                    border: "none",
                                                                                    height: "30px",
                                                                                    padding: "18px 15px",
                                                                                    background: "white",
                                                                                    borderRadius: "8px",
                                                                                    outline: "none",
                                                                                    color: "#949494",
                                                                                    fontSize: "14px"
                                                                                }}
                                                                            />
                                                                        </Form.Item>
                                                                        <LuMinusCircle 
                                                                            className='cursor-pointer' 
                                                                            size={35} 
                                                                            color='#B9B9B9' 
                                                                            onClick={() => remove(field.name)}
                                                                        />
                                                                    </div>
                                                                </Form.Item>
                                                            // </Form.Item>
                                                        ))
                                                    }

                                                    <Form.Item style={{display: "flex", alignItems: "flex-end", justifyContent: "flex-end"}}>
                                                        <Button
                                                            onClick={() => add()}
                                                            style={{
                                                                width: "32px",
                                                                height: "32px",
                                                                background: "white",
                                                                borderRadius: "50%",
                                                                border: "1px solid #B9B9B9",
                                                                outline: "none",
                                                                color: "#B9B9B9",
                                                                fontSize: "18px",
                                                                display: fields?.length === 6 ? "none" : "flex",
                                                                alignItems: "center",
                                                                justifyContent: "center"
                                                            }}
                                                        >
                                                            <PlusOutlined size={16} color='#B9B9B9' />
                                                        </Button>
                                                    </Form.Item>
                                                </>
                                            )
                                        }
                                    </Form.List>   
                        </div>

                    </div>

                    <div className='bg-[#ECF1F8] rounded-[5px] p-6 mb-4 h-[400px]'>
                        <h1 className='text-[#565656] mb-4'>Package Notice :</h1>
                        <Form.Item name="notice">
                            <Input.TextArea
                                placeholder=''
                                value={"quam vitae laoreet non nibh consectetur eu ac in Sed volutpat Nunc dignissim, eget tortor. tincidunt dui Nullam tincidunt In odio dui. Donec commodo vitae dui est. amet, commodo odio In Ut Donec Donec In ex orci nisl. eget Morbi sit ex at "}
                                style={{
                                    width: "100%",
                                    height: "310px",
                                    color: "#949494",
                                    resize: "none"
                                }}
                            />
                        </Form.Item>
                    </div>
                </div>

                <Form.Item style={{display: "flex", alignItems: "flex-end", justifyContent: "flex-end"}}>
                    <Button
                        htmlType='submit'
                        block
                        style={{
                            width: "200px",
                            height: "42px",
                            background: "#436FB6",
                            borderRadius: "90px",
                            border: "none",
                            outline: "none",
                            color: "#FDFDFD",
                            fontSize: "18px"
                        }}
                    >
                        Update
                    </Button>
                </Form.Item>


            </Form>
        </div>
        
    )
}

export default EditPackage;