import React, { useEffect, useState } from 'react'
import BackButton from '../../../Components/BackButton'
import baseURL from '../../../../Config';
import { Spin, Form, Input, Button } from 'antd';
import ImgConfig from '../../../../ImgConfig';
import { IconEdit } from '@tabler/icons-react';
import CustomModal from '../../../Common/CustomModal';
import Swal from "sweetalert2"

const Category = () => {
    const [openModal, setOpenModal] = useState(false);
    const [editModal, setEditModal] = useState(false);
    const [category, setCategory] = useState([]);
    const [refresh, setRefresh] = useState("");
    const [value, setValue] = useState();
    const [image, setImage] = useState();
    const [imgURL, setImgURL] = useState(image);
    const [error, setError] = useState("")
    if(refresh){
        setTimeout(()=>{
            setRefresh("")
        }, 1500)
    }


    useEffect(()=>{
        async function getAPi(){
            const response = await baseURL.get(`/show-category`,{
                headers: {
                "Content-Type": "application/json",
                authorization: `Bearer ${JSON.parse(localStorage.getItem('token'))}`,
                }
            });
            setCategory(response?.data?.data);
        }
        getAPi();
    }, [ refresh !== "" ]);


    const handeEditImage=(e)=>{
        const file= e.target.files[0];
        setImage(file)
        const imgUrl = URL.createObjectURL(file);
        setImgURL(imgUrl);
    }

    const handleAddCategory=async(values)=>{
        const formData = new FormData();
        formData.append("category_name", values.category_name);
        formData.append("category_image", image);
        setError("")

        await baseURL.post(`/add-category`, formData, {
            headers: {
            "Content-Type": "multipart/form-data",
                authorization: `Bearer ${JSON.parse(localStorage.getItem('token'))}`,
            }
        }).then((response)=>{
            if(response?.status === 200){
                Swal.fire({
                    position: "center",
                    icon: "success",
                    title: response?.data?.message,
                    showConfirmButton: false,
                    timer: 1500
                }).then(()=>{
                    setRefresh("done");
                    setOpenModal(false)
                })
            }
        }).catch((error)=>{
            if(error?.response?.data?.category_name[0]){
                setError(error?.response?.data?.category_name[0])
            }else{
                setError("")
            }
        })
    }

    const handleEditCategory=async(values)=>{
        const formData = new FormData();
        formData.append("category_name", values.category_name);
        formData.append("category_image", image);
        formData.append("id", value.id);
        setError("")

        await baseURL.post(`/update-category`, formData, {
            headers: {
            "Content-Type": "multipart/form-data",
                authorization: `Bearer ${JSON.parse(localStorage.getItem('token'))}`,
            }
        }).then((response)=>{
            if(response?.status === 200){
                Swal.fire({
                    position: "center",
                    icon: "success",
                    title: response?.data?.message,
                    showConfirmButton: false,
                    timer: 1500
                }).then(()=>{
                    setRefresh("done");
                    setEditModal(false)
                })
            }
        });
    }


    return (
        <>
            <div style={{marginBottom : "30px"}}>
                <BackButton link="/" />
            </div>

            <div 
                className='
                    bg-white 
                    p-6 
                    rounded-lg
                '
            >
                <div 
                    className='
                        flex 
                        items-center 
                        justify-between 
                        mb-6
                    '
                >
                    <h1 className='text-[20px] text-[#172740] font-medium'>Category</h1>

                    <button 
                        onClick={()=>setOpenModal(true)} 
                        className='bg-[#436FB6] text-white rounded-md px-4 py-1'
                    >
                        Add Category
                    </button>

                </div>

                {
                    category.length > 0
                    ?
                    <div className='flex items-center flex-wrap gap-6'>
                        {
                            category?.map((item, index)=>
                                <div 
                                    onClick={()=>( setValue(item) ,setEditModal(true))}
                                    key={index} 
                                    className='
                                        bg-[#F6F6F6] 
                                        w-[150px] 
                                        rounded-lg 
                                        p-4 
                                        group 
                                        relative 
                                        overflow-hidden
                                        cursor-pointer
                                    '
                                >
                                    <img 
                                        className='w-[80px]' 
                                        style={{margin: "0 auto"}}  
                                        src={`${ImgConfig}/${item?.category_image}`} 
                                        alt="" 
                                    />

                                    <p className='text-center mt-2'>{item?.category_name}</p>

                                    <div 
                                        className='
                                            absolute 
                                            translate-y-24 
                                            transition-all
                                            duration-100
                                            group-hover:translate-y-0  
                                            w-full 
                                            h-full 
                                            top-[40%] 
                                            left-[40%]
                                        '
                                    >
                                        <IconEdit size={24} />
                                    </div>
                                </div>
                            )
                        }
                    </div>

                    :

                    <div 
                        className='
                            w-full 
                            h-[150px] 
                            flex 
                            items-center 
                            justify-center
                        '
                    >
                        <Spin size="large" />
                    </div>
                }


                {
                    editModal && 
                    <CustomModal
                        open={editModal}
                        setOpen={setEditModal}
                        setValue={setValue}
                        title={"Edit Category"}
                        setImgURL={setImgURL}
                        body={
                            <div>
                                <Form 
                                    onFinish={handleEditCategory}
                                    initialValues={{
                                        category_name: value?.category_name,
                                        category_image: value?.category_image
                                    }}
                                >
                                    <div>
                                        <label style={{ display: "block", marginBottom : "5px"}}>Category name</label>
                                        <Form.Item style={{marginBottom: 0}} name="category_name">
                                            <Input 
                                                style={{
                                                    width: "100%",
                                                    height: "42px",
                                                    border: "none",
                                                    borderRadius: "8px",
                                                    padding : "16px",
                                                    color: "black",
                                                    outline: "none",
                                                    backgroundColor: "#ECF1F8",

                                                }}
                                                type="text" 
                                                placeholder="Enter Category name"
                                            />
                                        </Form.Item>
                                        { error && <label style={{display: "block", color: "red"}} htmlFor="">{error}</label> }
                                    </div>

                                    <div className='mb-6'>
                                        <label htmlFor="" style={{ display: "block", marginTop: "24px", marginBottom : "5px"}}>Category Image</label>
                                        <label htmlFor='img' 
                                            style={{
                                                display: "flex",
                                                width: "100%",
                                                marginBottom : "12px", 
                                                height: '200px', 
                                                alignItems: "center",
                                                justifyContent: "center",
                                                borderRadius: "8px",
                                                background: "#ECF1F8"

                                            }}
                                        >
                                            <img style={{width: "100px"}} src={imgURL ? imgURL : `${ImgConfig}/${value?.category_image}`} alt="" />
                                        </label>
                                        <input
                                            type='file' 
                                            id='img'
                                            style={{display: "none"}}
                                            onChange={handeEditImage}
                                        />
                                    </div>

                                    <Form.Item style={{marginBottom: 0}}>
                                        <Button
                                            type="primary"
                                            htmlType="submit"
                                            block
                                            style={{
                                                width : "100%",
                                                height: "45px",
                                                fontWeight: "400px",
                                                fontSize: "18px",
                                                background: "#436FB6",
                                            }}
                                        >
                                            Save
                                        </Button>
                                    </Form.Item>
                                </Form>
                            </div>
                        }
                    />
                }

                {
                    openModal && 
                    <CustomModal
                        open={openModal}
                        setOpen={setOpenModal}
                        title={"Create Category"}
                        setValue={setValue}
                        setImgURL={setImgURL}
                        body={
                            <div>
                                <Form 
                                    onFinish={handleAddCategory}
                                    name="normal_login"
                                    initialValues={{
                                        remember: true
                                    }}
                                >
                                    <div>
                                        <label style={{ display: "block", marginBottom : "5px"}}>Category name</label>
                                        <Form.Item 
                                            style={{marginBottom: 0}} 
                                            name="category_name"
                                            rules={[
                                                {
                                                    required: true,
                                                    message: "Please Category Name"
                                                }
                                            ]}
                                        >
                                            <Input 
                                                style={{
                                                    width: "100%",
                                                    height: "42px",
                                                    border: "none",
                                                    borderRadius: "8px",
                                                    padding : "16px",
                                                    color: "black",
                                                    outline: "none",
                                                    backgroundColor: "#ECF1F8"
                                                }}
                                                type="text" 
                                                placeholder="Enter Category name"
                                            />
                                        </Form.Item>
                                        { error && <label style={{display: "block", color: "red"}} htmlFor="">{error}</label> }
                                    </div>

                                    <div className='mt-4'>
                                        <label htmlFor="" style={{ display: "block", marginBottom : "5px"}}>Category Image</label>
                                        <label htmlFor='img' 
                                            style={{
                                                display: "flex",
                                                width: "100%",
                                                marginBottom : "12px", 
                                                height: '200px', 
                                                alignItems: "center",
                                                justifyContent: "center",
                                                borderRadius: "8px",
                                                background: "#ECF1F8"

                                            }}
                                        >
                                            <img style={{width: "100px"}} src={imgURL} alt="" />
                                        </label>
                                        <input
                                            type='file' 
                                            id='img'
                                            style={{display: "none"}}
                                            onChange={handeEditImage}
                                        />
                                    </div>

                                    <Form.Item style={{marginBottom: 0}}>
                                        <Button
                                            type="primary"
                                            htmlType="submit"
                                            block
                                            style={{
                                                width : "100%",
                                                height: "45px",
                                                fontWeight: "400px",
                                                fontSize: "18px",
                                                background: "#436FB6",
                                            }}
                                        >
                                            Save
                                        </Button>
                                    </Form.Item>
                                </Form>
                            </div>
                        }
                    />
                }
            </div>
        </>
    )
}

export default Category