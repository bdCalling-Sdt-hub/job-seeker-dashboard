import { Button, Table, } from "antd";
import React, { useEffect, useRef, useState } from "react";
import { FiEye, } from "react-icons/fi";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import { FaRegTrashCan } from "react-icons/fa6";
import { CiMenuKebab } from "react-icons/ci";


const data = [
  {
    key: "1",
    companyname: "spark tech",
    category: "IT",
    location: "Banasree",
    status: "Active",
  },
  {
    key: "2",
    companyname: "spark tech",
    category: "IT",
    location: "Banasree",
    status: "Active",
  },
  {
    key: "3",
    companyname: "spark tech",
    category: "IT",
    location: "Banasree",
    status: "Active",
  },
  {
    key: "4",
    companyname: "spark tech",
    category: "IT",
    location: "Banasree",
    status: "Active",
  },
  {
    key: "5",
    companyname: "spark tech",
    category: "IT",
    location: "Banasree",
    status: "Active",
  },
  
];

const EmployeListTable = () =>{
  const [open, setOpen] = useState();
  

  const columns = [
      {
        title: "Serial No",
        dataIndex: "key",
        key: "key",
      },
      {
        title: "Company Name",
        dataIndex: "companyname",
        key: "company",
      },
      {
        title: "Category",
        dataIndex: "category",
        key: "category",
      },
      
      {
        title: "Location",
        dataIndex: "location",
        key: "location",
      },
      {
        title: "ACTION",
        dataIndex: "printView",
        key: "printView",
        render: (_,record) => (
          <Link to="/">
            <img width="30" height="30" src="https://img.icons8.com/ios-glyphs/30/visible--v1.png" alt="visible--v1" style={{ cursor: "pointer" }}/>
          </Link>
        ),
      },
  ];

  return(
    <div className="h-fit rounded-[8px] bg-white p-6" >
      <div style={{display: "flex", alignItems: "center", marginBottom: "15px", justifyContent: "space-between"}}>
        <h1 style={{fontSize: "20px", fontWeight: 600, color: "#2F2F2F"}}>All Employer List</h1>
        <Link to="/seller-list">
          <p style={{color: "#2FD5C7", fontSize:"12px", textDecoration: "underline"}}>VIEW ALL</p>
        </Link>
      </div>
      <Table 
        columns={columns} 
        dataSource={data?.slice(0, 4)} 
        pagination={false}
      />
    </div>
  )

};
export default EmployeListTable;
