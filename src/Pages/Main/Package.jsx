import React, { useEffect, useState } from 'react';
import { Link, useNavigate} from "react-router-dom"
import BackButton from '../../Components/BackButton';
import { FaCircleCheck } from "react-icons/fa6"
import { Button } from 'antd';
import baseURL from "../../../Config"

const Package = () => {
    const [packages, setPackages] = useState([]);
    const { userType } = JSON.parse(localStorage.getItem("user"));
    const [selectedPackage, setSelectedPackage] = useState(new URLSearchParams(window.location.search).get('package') || "Basic");
    const filterData = packages.find((item) => item?.package_name === selectedPackage);
    const navigate = useNavigate();

    const handlePackageChange = (value) => {
        setSelectedPackage(value);
        const params = new URLSearchParams(window.location.search);
        params.set('package', value);
        window.history.pushState(null, "", `?${params.toString()}`);
    }

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

    return (
        <>
            {/* headers */}
            <div style={{marginBottom : "30px"}}>
                <BackButton link="/" />
            </div>

            

            {
                packages?.length > 0
                ?
                <div className='bg-white p-6 rounded-lg'>
                    <div className='flex items-center gap-6'>

                        {
                            packages?.map((item, index)=>(
                                <div 
                                    key={index} 
                                    onClick={()=>(( localStorage.setItem("package", JSON.stringify(item)) ,handlePackageChange(item.package_name)))} 
                                    className={`
                                        w-[335px] h-[101px] 
                                        rounded-[20px] 
                                        p-6 cursor-pointer
                                        ${selectedPackage == item?.package_name ? "bg-[#436FB6]" : "bg-white"} 
                                        flex  items-center justify-between
                                    `}
                                    style={{boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)"}}
                                >
                                    <div style={{ color: selectedPackage == item?.package_name ? "#F1F1F1" : "#565656"}}>
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
                                        style={{ color: selectedPackage == item?.package_name ? "#FBA51A" : "#436FB6"}} 
                                        className='text-2xl font-bold'
                                    >
                                        $ {item.amount}
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
                                <p>{filterData?.package_name}</p>
                            </div>

                            <div className='flex items-center mb-5'>
                                <label style={{display: "block", width: "50%"}} htmlFor="">Package Price</label>
                                <div className='w-[10%]'>:</div>
                                <p>{filterData?.amount}</p>
                            </div>
                            <div className='flex items-center mb-5'>
                                <label style={{display: "block", width: "50%"}} htmlFor="">Package Validation</label>
                                <div className='w-[10%]'>:</div>
                                <p>{filterData?.duration} {parseInt(filterData?.duration) < 2 ? "Month" : "Months"}</p>
                            </div>

                            <div className='flex items-center mb-5'>
                                <label style={{display: "block", width: "50%"}} htmlFor="">Package Type</label>
                                <div className='w-[10%]'>:</div>
                                <p>{"Payment"}</p>
                            </div>
                        </div>

                        <div className='bg-[#ECF1F8] rounded-[5px] p-6 mb-4 h-[235px]'>
                            <h1 className='text-[#565656] mb-4'>Conditions :</h1>

                            <div className='grid grid-cols-1 gap-4'>
                                {
                                    filterData?.feature?.map((item, index)=>
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
                            <p className="text-[#6F6F6F]">{filterData?.notice}</p>
                        </div>
                    </div>

                    <div style={{display: "flex", alignItems: "flex-end", justifyContent: "flex-end"}}>
                        {
                            userType === "ADMIN" || userType === "SUPER ADMIN" 
                            ?
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
                            :
                            <Button
                                onClick={()=>navigate("/subscription")}
                                style={{
                                    width: "130px",
                                    height: "40px",
                                    background: "#436FB6",
                                    borderRadius: "90px",
                                    border: "none",
                                    outline: "none",
                                    color: "#FDFDFD",
                                }}
                            >
                                Buy Package
                            </Button>
                        }
                    </div>
                </div>
                :
                <div className='w-[100%] h-[80vh] flex items-center justify-center'>
                    <p>No Package Found !</p>
                </div>

            }

            
        </>
    )
}

export default Package