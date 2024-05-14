import { Table } from 'antd';
import React, { useEffect, useState } from 'react'
import { RiDeleteBin6Line } from "react-icons/ri";
import BackButton from '../../Components/BackButton';
import baseURL from '../../../Config';
import ImgConfig from '../../../ImgConfig';
import moment from 'moment';


const Notification = () => {
  const [page, setPage] = useState( new URLSearchParams(window.location.search).get('page') || 1);
  const user = JSON.parse(localStorage.getItem("user"))
  const columns = [
        {
          title: "S.No",
          dataIndex: "key",
          key: "key",
          render: (_,record) => (
            <p>{record?.id}</p>
          ),
        },
        {
          title: "Subject",
          dataIndex: "subject",
          key: "subject",
          render: (_,record) => (
            <p>{record?.subject}</p>
          ),
        },
        {
          title: "Message",
          dataIndex: "Message",
          key: "Message",
          render: (_,record) => (
            <p>{record?.message}</p>
          ),
        },
        {
          title: "Time-Date",
          dataIndex: "date",
          key: "date",
          render: (_,record) => (
            <p>{moment(record?.created_at).startOf('day').fromNow()}</p>
          ),
        }
  ];

  const handlePageChange=(page)=>{
    setPage(page);
    const params = new URLSearchParams(window.location.search);
    params.set('page', page);
    window.history.pushState(null, "", `?${params.toString()}`);
  }

  const [data, setData] = useState([]);


    useEffect(()=>{
      async function getAPi(){
        const response = await baseURL.get( user?.userType === "ADMIN" ?  `/admin-notification` : "/show-message-admin" ,{
          headers: {
            "Content-Type": "application/json",
            authorization: `Bearer ${JSON.parse(localStorage.getItem('token'))}`,
          }
        });
        if(user?.userType === "ADMIN"){
          setData( response?.data?.Notifications);
        }else{
          setData( response?.data?.data?.data);
        }
      }
      getAPi();
    }, []);
    return (
        <div>
            
            <div style={{marginBottom: "24px"}}>
                <BackButton link="/" />
            </div>
            <div
                style={{
                    background: "white",
                    padding: "24px",
                    borderRadius: "14px"
                }}
            >
                <h1 style={{fontSize: "32px", fontWeight: 600, color: "#6A6D7C"}}>Notifications </h1>
                <Table 
                    columns={columns} 
                    dataSource={data} 
                    pagination={{
                      pageSize: 8,
                      defaultCurrent: parseInt(page),
                      onChange: handlePageChange
                    }}
                />
            </div>
        </div>
    )
}

export default Notification