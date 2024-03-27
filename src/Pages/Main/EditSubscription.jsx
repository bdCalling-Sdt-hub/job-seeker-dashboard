import React, { useState } from 'react';
import { useNavigate, useParams} from "react-router-dom"
import BackButton from '../../Components/BackButton';
import { Form, Input, Button } from 'antd';
import {  PlusOutlined } from '@ant-design/icons';

const EditSubscription = () => {
    const { name } = useParams();
    console.log(name)
    const [selectedPackage, setSelectedPackage] = useState(new URLSearchParams(window.location.search).get('package') || name);
    const navigate = useNavigate();

    const handleChangeEditPage=(value)=>{
        localStorage.setItem("package", JSON.stringify(value))
        navigate("/edit-package")
    }

    

    const data = [
        {
            name: "Basic",
            price: 20,
            validity: 1,
            PackageType: "Payment Package",
            notice: "quam vitae laoreet non nibh consectetur eu ac in Sed volutpat Nunc dignissim, eget tortor. tincidunt dui Nullam tincidunt In odio dui. Donec commodo vitae dui est. amet, commodo odio In Ut Donec Donec In ex orci nisl. eget Morbi sit ex at ",
            validation: "1 Month",
            features: [
                "Add 15 Products for your business",
                "Edit Products details",
                "Manage Orders",
            ]
        },
        {
            name: "Essential",
            price: 50,
            validity: 2,
            PackageType: "Payment Package",
            notice: "quam vitae laoreet non nibh consectetur eu ac in Sed volutpat Nunc dignissim, eget tortor. tincidunt dui Nullam tincidunt In odio dui. Donec commodo vitae dui est. amet, commodo odio In Ut Donec Donec In ex orci nisl. eget Morbi sit ex at ",
            validation: "1 Months",
            features: [
                "Add 15 Products for your business",
                "Edit Products details",
                "Manage Orders",
            ]
        },
        {
            name: "Essential Pro",
            price: 100,
            validity: 3,
            PackageType: "Payment Package",
            notice: "quam vitae laoreet non nibh consectetur eu ac in Sed volutpat Nunc dignissim, eget tortor. tincidunt dui Nullam tincidunt In odio dui. Donec commodo vitae dui est. amet, commodo odio In Ut Donec Donec In ex orci nisl. eget Morbi sit ex at ",
            validation: "1 Months",
            features: [
                "Add 15 Products for your business",
                "Edit Products details",
                "Manage Orders",
            ]
        }

    ]

    const handlePackageChange = (value) => {
        setSelectedPackage(value);
        const params = new URLSearchParams(window.location.search);
        params.set('package', value);
        window.history.pushState(null, "", `?${params.toString()}`);
    }


    const filterData = data.find((item) => item.name === selectedPackage);

    const initialFormValues={
        name :  filterData?.name,
        price : filterData?.price,
        notice : filterData?.notice,
        validation : filterData?.validation,
        conditions: filterData?.features
    }
    return (
        <div className='bg-white p-6'>
            {/* headers */}
            <div style={{marginBottom : "30px"}}>
                <BackButton link="/" />
            </div>


            <div className='flex items-center gap-6'>

                {
                    data?.map((item, index)=>(
                        <div 
                            key={index} 
                            onClick={()=>(handlePackageChange(item.name),window.location.reload())} 
                            className={`
                                w-[335px] h-[101px] 
                                rounded-[20px] 
                                p-6 cursor-pointer
                                ${selectedPackage === item?.name ? "bg-[#436FB6]" : "bg-white"} 
                                flex  items-center justify-between
                            `}
                            style={{boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)"}}
                        >
                            <div style={{ color: selectedPackage === item?.name ? "#F1F1F1" : "#565656"}}>
                                <h3 
                                    className='
                                        text-base 
                                        mb-[8px] 
                                        font-semibold
                                    '
                                >
                                    {item?.name}
                                </h3>
                                <div className='text-[12px] font-normal'>{item.PackageType}</div>
                            </div>
                            <div
                                style={{ color: selectedPackage === item?.name ? "#FBA51A" : "#436FB6"}} 
                                className='text-2xl font-bold'
                            >
                                $ {item.price}
                            </div>
                        </div>

                    ))
                }
            </div>

            {/* edit Package section */}
            
            <Form initialValues={initialFormValues} >
                <div className='grid grid-cols-3 gap-6 mt-[53px]'>
                    <div className='bg-[#ECF1F8] rounded-[5px] p-6 h-[400px]'>
                        <h1 className='text-[#565656]'>Primary Data:</h1>

                        {/* <div className='flex items-center mb-5'>
                            <label style={{display: "block", width: "50%"}} htmlFor="">Package Type</label>
                            <div className='w-[10%]'>:</div>
                            <Input
                                placeholder=''
                                value={"Payment Type"}
                                readOnly
                                style={{
                                    width: "100%"
                                }}
                            />
                            
                        </div> */}
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
                                <Form.Item name="name" style={{marginBottom: "0"}}>
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
                                <Form.Item name="price" style={{marginBottom: "0"}}>
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
                                <Form.Item name="validation" style={{marginBottom: "0"}}>
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
                                    <Form.List name="conditions">
                                        {
                                            (fields, { add, remove }) => (
                                                <>
                                                    {
                                                        fields.map((field, index) => (
                                                            
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
                                    color: "#949494"
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
                            height: "48px",
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

export default EditSubscription;