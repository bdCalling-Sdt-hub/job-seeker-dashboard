import React, { useState } from 'react';
import { Link, useNavigate} from "react-router-dom"
import BackButton from '../../Components/BackButton';
import { FaCircleCheck } from "react-icons/fa6"
import { Button } from 'antd';

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

const Package = () => {
    const [selectedPackage, setSelectedPackage] = useState(new URLSearchParams(window.location.search).get('package') || "Basic");
    const navigate = useNavigate();
    const filterData = data.find((item) => item.name === selectedPackage);

    const handlePackageChange = (value) => {
        setSelectedPackage(value);
        const params = new URLSearchParams(window.location.search);
        params.set('package', value);
        window.history.pushState(null, "", `?${params.toString()}`);
    }

    return (
        <>
            {/* headers */}
            <div style={{marginBottom : "30px"}}>
                <BackButton link="/" />
            </div>

            <div className='bg-white p-6 rounded-lg'>
                <div className='flex items-center gap-6'>

                    {
                        data?.map((item, index)=>(
                            <div 
                                key={index} 
                                onClick={()=>handlePackageChange(item.name)} 
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


                <div className='grid grid-cols-3 gap-6 mt-[53px]'>
                    <div className='bg-[#ECF1F8] text-[#6F6F6F] rounded-[5px] p-6 h-[235px]'>
                        <h1 className='text-[#565656] mb-[22px]'>Primary Data:</h1>

                        <div className='flex items-center mb-5'>
                            <label style={{display: "block", width: "50%"}} htmlFor="">Package Name</label>
                            <div className='w-[10%]'>:</div>
                            <p>{filterData?.name}</p>
                        </div>

                        <div className='flex items-center mb-5'>
                            <label style={{display: "block", width: "50%"}} htmlFor="">Package Price</label>
                            <div className='w-[10%]'>:</div>
                            <p>{filterData?.price}</p>
                        </div>
                        <div className='flex items-center mb-5'>
                            <label style={{display: "block", width: "50%"}} htmlFor="">Package Validation</label>
                            <div className='w-[10%]'>:</div>
                            <p>{filterData?.validation}</p>
                        </div>

                        <div className='flex items-center mb-5'>
                            <label style={{display: "block", width: "50%"}} htmlFor="">Package Type</label>
                            <div className='w-[10%]'>:</div>
                            <p>{filterData?.PackageType}</p>
                        </div>
                    </div>

                    <div className='bg-[#ECF1F8] rounded-[5px] p-6 mb-4 h-[235px]'>
                        <h1 className='text-[#565656] mb-4'>Conditions :</h1>

                        <div className='grid grid-cols-1 gap-4'>
                            {
                                filterData?.features?.map((item, index)=>
                                    <div key={index} className="flex items-center gap-[10px]">
                                        <FaCircleCheck size={16} color="#00C208"/>
                                        <p className="text-[#6F6F6F]">{item}</p>
                                    </div>
                                )
                            }
                        </div>
                    </div>

                    <div className='bg-[#ECF1F8] rounded-[5px] p-6 mb-4 h-[235px]'>
                        <h1 className='text-[#565656] mb-4'>Package Notice :</h1>
                        <p className="text-[#6F6F6F]">{filterData.notice}</p>
                    </div>
                </div>

                <div style={{display: "flex", alignItems: "flex-end", justifyContent: "flex-end"}}>
                    <Link to={`/edit-package/${selectedPackage}`}>
                        <Button
                            style={{
                                width: "100px",
                                height: "30px",
                                background: "#436FB6",
                                borderRadius: "90px",
                                border: "none",
                                outline: "none",
                                color: "#FDFDFD",
                            }}
                        >
                            Edit
                        </Button>
                    </Link>
                </div>
            </div>
        </>
    )
}

export default Package