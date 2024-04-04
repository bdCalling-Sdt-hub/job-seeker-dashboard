import { Form, Input, Modal, Table, Button } from 'antd';
import React, { useEffect, useState } from 'react'
import { MdOutlineDelete } from 'react-icons/md';
import BackButton from '../../Components/BackButton';
import baseURL from '../../../Config';


const data = [
    {
        key: "1",
        fullName: "Tushar",
        email: "tushar@gmail.com",
        userType: "ADMIN",
    },
    {
        key: "2",
        fullName: "Rahman",
        email: "rahman@gmail.com",
        userType: "ADMIN",
    },
    {
        key: "3",
        fullName: "Rafsan",
        email: "rafsan@gmail.com",
        userType: "ADMIN",
    },
    {
        key: "4",
        fullName: "jusef",
        email: "jusef@gmail.com",
        userType: "ADMIN",
    },
    {
        key: "5",
        fullName: "Asad",
        email: "asad@gmail.com",
        userType: "ADMIN",
    },
    {
        key: "6",
        fullName: "Fahim",
        email: "fahim@gmail.com",
        userType: "ADMIN",
    },
    {
        key: "7",
        fullName: "Nadir",
        email: "nadir@gmail.com",
        userType: "ADMIN",
    }
  ];
  
const MakeAdmin = () => {
    const [openAddModel, setOpenAddModel] = useState(false);
    const [reFresh, setReFresh] = useState("");
    const [admins, setAdmins] = useState();

    if(reFresh){
        setTimeout(()=>{
            setReFresh("")
        }, 1500)
    }

    const handleDelete=async(value)=>{
        /* Swal.fire({
            title: "Are you sure to delete this User?",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            showCancelButton: "No",
            confirmButtonText: "Yes",
        }).then(async(result) => {
            if (result.isConfirmed) {
                const response = await baseURL.get(`/delete-admin/${value?.id}`,
                    {
                        headers: {
                            authorization: `Bearer ${localStorage.getItem('token')}`
                        }
                    }
                )
                if(response.status === 200){
                    Swal.fire({
                        position: "center",
                        title: "Deleted!",
                        text: "User Deleted Successfully",
                        icon: "success",
                        timer: 1500,
                        showConfirmButton: false,
                    }).then(()=>{
                        dispatch(AllAdmin());
                    })
                }
                        
            }
        });  */

    }
    
    useEffect(()=>{
        async function getAPi(){
            const response = await baseURL.get(`/show-admin`, {
                headers: {
                    "Content-Type": "application/json",
                    authorization: `Bearer ${JSON.parse(localStorage.getItem('token'))}`
                }
            });
            setAdmins(response?.data?.data);
        }
        getAPi();
    }, []);


    return (
        <div >
            <div style={{margin: "24px 0"}}>
                <div className='flex items-center justify-between w-full'>
                    <BackButton link="/" />
                    <button className='w-[164px] h-[36px] rounded-[90px] text-white bg-[#436FB6] border-none outline-none'
                        onClick={()=>setOpenAddModel(true)}
                    >
                        Make Admin
                    </button>
                </div>
            </div>

            {/* admin table list */}
            <div className='bg-white px-3 rounded-md py-4 w-full'>
                <table className="w-full rounded-[5px]">
                    <tr className="text-left w-full bg-[#FEE3B8]" style={{borderRadius: "8px"}}>
                    {
                        ["Full Name", "Email", "User Type", "Action"].map((item, index)=>
                        <th
                            style={{
                                borderTopLeftRadius: item === "Full Name" ? "8px" : 0,
                                borderBottomLeftRadius: item === "Full Name" ? "8px" : 0,
                                borderTopRightRadius: item === "Action" ? "8px" : 0,
                                borderBottomRightRadius: item === "Action" ? "8px" : 0,
                            }} 
                            key={index} 
                            className="py-[10px] px-10"
                        >
                            {item}
                        </th>
                        )
                    }
                    </tr>

                    
                    {
                        (data?.slice(0, 4))?.map((item, index)=>
                            <>
                                <div key={index} style={{marginTop: '8px'}}></div>
                                    <tr key={index} className="bg-[#ECF1F8] custom-table-row" >
                                    <td className="py-[10px] pl-10">{item.fullName}</td>
                                    <td className="py-[10px] pl-10">{item.email}</td>
                                    <td className="py-[10px] pl-10">{item.userType}</td>
                                    <td className="py-[10px] pl-10">
                                        <MdOutlineDelete 
                                            onClick={()=>handleDelete(record)} 
                                            className='cursor-pointer' 
                                            size={25} 
                                            color='red'
                                        />
                                    </td>
                                </tr>
                            </>
                        )
                    }
                </table>
            </div>

            <Modal
                title="Make Admin"
                centered
                open={openAddModel}
                onCancel={() => setOpenAddModel(false)}
                width={500}
                footer={false}
            >
                <div className='mt-5'>
                    <Form
                        name="normal_login"
                        initialValues={{
                            remember: true,
                        }}
                    >
                        <div style={{marginBottom: "16px"}}>
                            <label style={{display: "block", marginBottom: "5px" }}>Full Name</label>
                            <Form.Item
                                style={{marginBottom: 0}}
                                name="fullName"
                                rules={[
                                    {
                                    required: true,
                                    message: "Please input User Full Name",
                                    },
                                ]}
                            >
                                <Input
                                    placeholder="Enter Full Name"
                                    type="text"
                                    style={{
                                        border: "none",
                                        padding:"0 16px",
                                        height: "48px",
                                        background: "#F1F4F9",
                                        borderRadius: "90px",
                                        outline: "none",
                                        fontSize: "16px",
                                        fontWeight: 400,
                                        color: "#D1D2D6"
                                    }}
                                />
                            </Form.Item>
                        </div>
            
                        <div style={{marginBottom: "16px"}}>
                            <label style={{display: "block", marginBottom: "5px" }} htmlFor="">Email </label>
                            <Form.Item
                                name="email"
                                rules={[
                                    {
                                    required: true,
                                    message: "Please input User Email",
                                    },
                                ]}
                                style={{marginBottom: 0}}
                            >
                                <Input
                                    type="text"
                                    placeholder="Enter User Email"
                                    style={{
                                        border: "none",
                                        padding:"0 16px",
                                        height: "48px",
                                        background: "#F1F4F9",
                                        borderRadius: "90px",
                                        outline: "none",
                                        fontSize: "16px",
                                        fontWeight: 400,
                                        color: "#D1D2D6"
                                    }}
                                />
                            </Form.Item>
                        </div>
            
                        <div style={{marginBottom: "16px"}}>
                            <label style={{display: "block", marginBottom: "5px" }} htmlFor="password">Password</label>
                            <Form.Item
                                style={{marginBottom: 0}}
                                name="password"
                                rules={[
                                    {
                                    required: true,
                                    message: "Please input User Password!",
                                    },
                                ]}
                            >
                                <Input.Password
                                    type="password"
                                    placeholder="Enter User password"
                                    style={{
                                        border: "none",
                                        padding:"0 16px",
                                        height: "48px",
                                        background: "#F1F4F9",
                                        borderRadius: "90px",
                                        outline: "none",
                                        fontSize: "16px",
                                        fontWeight: 400,
                                        color: "#D1D2D6"
                                    }}
                                />
                            </Form.Item>
                        </div>

                        <div style={{marginBottom: "16px"}}>
                            <label style={{display: "block", marginBottom: "5px" }} htmlFor="password">User Type</label>
                            <Form.Item
                                style={{marginBottom: 0}}
                                name="userType"
                            >
                                <Input
                                    type="Text"
                                    placeholder="Enter User password"
                                    style={{
                                        border: "none",
                                        padding:"0 16px",
                                        height: "48px",
                                        background: "#F1F4F9",
                                        borderRadius: "90px",
                                        outline: "none",
                                        fontSize: "16px",
                                        fontWeight: 400,
                                    }}
                                    defaultValue="ADMIN"
                                    readOnly
                                />
                            </Form.Item>
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
                                    outline: "none",
                                }}
                            >
                                Submit
                            </Button>
                        </Form.Item>
                    </Form>
                </div>
            </Modal>
        </div>
    )
}

export default MakeAdmin