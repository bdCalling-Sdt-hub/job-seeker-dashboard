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
          render: (_,record, index) => (
            <p>{index + 1}</p>
          ),
        },
        {
          title: "Name",
          dataIndex: "name",
          key: "name",
          render: (_,record) => (
            <p>{ record?.data?.name }</p>
          ),
        },
        {
          title: "Message",
          dataIndex: "Message",
          key: "Message",
          render: (_,record) => (
            <p>{ record?.data?.message }</p>
          ),
        },
        {
          title: "Time-Date",
          dataIndex: "time",
          key: "time",
          render: (_,record) => (
            <p>{moment(record?.data?.time).startOf('hour').fromNow()}</p>
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
        
        if(user?.userType === "RECRUITER"){
          let response;
          response = await baseURL.get(`/notification` ,{
            headers: {
              "Content-Type": "application/json",
              authorization: `Bearer ${JSON.parse(localStorage.getItem('token'))}`,
            }
          });
          setData(response?.data?.notifications);
        }else{
          let response;
          response = await baseURL.get( `/admin-notification` ,{
            headers: {
              "Content-Type": "application/json",
              authorization: `Bearer ${JSON.parse(localStorage.getItem('token'))}`,
            }
          });
          setData( response?.data?.Notifications);
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
                      defaultCurrent: parseInt(page),
                      onChange: handlePageChange
                    }}
                />
            </div>
        </div>
    )
}

export default Notification