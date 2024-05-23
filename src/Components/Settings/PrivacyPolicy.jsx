import React, { useEffect, useRef, useState } from 'react'
import JoditEditor from "jodit-react";
import { Button } from 'antd';
import baseURL from "../../../Config"
import Swal from 'sweetalert2';

const PrivacyPolicy = () => {
    const editor = useRef(null);
    const [data, setData] = useState()
    const [content, setContent] = useState("");
    const [refresh, setRefresh] = useState("");

    if(refresh){
        setTimeout(()=>{
            setRefresh("")
        }, 1500)
    }

    useEffect(()=>{
        setContent(data)
    }, [data]);


    useEffect(()=>{
        async function getAPi(){
          const response = await baseURL.get(`/privacy-policy`,{
            headers: {
              "Content-Type": "application/json",
              authorization: `Bearer ${JSON.parse(localStorage.getItem('token'))}`,
            }
          });
          setData(response?.data?.data[0]?.description);
        }
        getAPi();
    }, [ refresh !== "" ]);

    const handleUpdate=async(id)=>{
        await baseURL.post(`/update-privacy-policy/${id}`, {description: content},{
            headers: {
              "Content-Type": "application/json",
              authorization: `Bearer ${JSON.parse(localStorage.getItem('token'))}`,
            }
        }).then((response)=>{
            if(response.status === 200){
                Swal.fire({
                    position: "center",
                    title: "Successfully!",
                    text: response.data.message,
                    icon: "success",
                    timer: 1500,
                    showConfirmButton: false,
                }).then(()=>{
                    setRefresh("done")
                })
            }
        })
    }

    
    return (
        <div>
            <JoditEditor
                ref={editor}
                value={content}
                onChange={(newContent) => {
                    setContent(newContent);
                }}
            />

            <Button
                block
                onClick={()=>handleUpdate(data?.id)}
                style={{
                    marginTop: "30px",
                    backgroundColor: "#436FB6",
                    color: "#fff",
                    height: "42px",
                    borderRadius: "90px"
                }}
            >
                Update
            </Button>
        </div>
    )
}

export default PrivacyPolicy;