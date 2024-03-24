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

const TotalSellerListTable = () =>{
  const [page, setPage] = useState( new URLSearchParams(window.location.search).get('page') || 1);
  const [open, setOpen] = useState();
  const dropdownRef = useRef();
  const handleDelete=(id)=>{
    Swal.fire({
        title: "Are you sure?",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes",
        cancelButtonText: "No"
      }).then((result) => {
        if (result.isConfirmed) {
          Swal.fire({
            title: "Deleted!",
            text: "Your file has been deleted.",
            icon: "success",
            showConfirmButton: false,
            timer: 1500,
          });
        }
    });
  }

  const columns = [
      {
        title: "S.No",
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
        title: "Status",
        dataIndex: "status",
        key: "status",
        render: (_, record) => (
          <p
              style={{
                  width: "88px",
                  height: "31px",
                  borderRadius: "100px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  background: record?.status === "Active" ? "#E0F9F7"  : "#FFC3C3" ,
                  color: record?.status === "Active" ? "#2FD5C7" : "#9C0101"
              }}
          >
              {record?.status}
          </p>
        )
      },
     
      
      {
        title: "ACTION",
        dataIndex: "printView",
        key: "printView",
        render: (_,record) => (
          <div style={{position: "relative"}}>
          <Link to="/">
            <img width="30" height="30" src="https://img.icons8.com/ios-glyphs/30/visible--v1.png" alt="visible--v1" style={{ cursor: "pointer" }}/>
          </Link> 
          

           
          </div>
        ),
      },
  ];


  const handlePageChange=(page)=>{
    setPage(page);
    const params = new URLSearchParams(window.location.search);
    params.set('page', page);
    window.history.pushState(null, "", `?${params.toString()}`);
  }

  useEffect(() => {
    const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setOpen("");
    }
    };
    document.addEventListener('click', handleClickOutside);
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, []);

  return(
    <div style={{height: "fit-content", borderRadius: "8px", background: "white", padding: "15px 24px 0 24px"}}>
      <div style={{display: "flex", alignItems: "center", marginBottom: "15px", justifyContent: "space-between"}}>
        <h1 style={{fontSize: "20px", fontWeight: 600, color: "#2F2F2F"}}>All Employer List</h1>
        <Link to="/seller-list">
          <p style={{color: "#2FD5C7", fontSize:"12px", textDecoration: "underline"}}>VIEW ALL</p>
        </Link>
      </div>
      <Table 
        columns={columns} 
        dataSource={data} 
        pagination={{
          pageSize: 4,
          defaultCurrent: parseInt(page),
          onChange: handlePageChange
        }}
      />
    </div>
  )

};
export default TotalSellerListTable;
