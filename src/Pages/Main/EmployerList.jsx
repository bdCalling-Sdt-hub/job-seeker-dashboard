import React, { useEffect, useRef, useState } from 'react';
import BackButton from "../../Components/BackButton";
import { MdOutlineFilterList } from 'react-icons/md';
import { FiEye, FiSearch } from 'react-icons/fi';
import { IoClose } from 'react-icons/io5';
import { Calendar, Dropdown, Input, Pagination, Slider, Table } from 'antd';
import { DownOutlined } from "@ant-design/icons";
import { FaRegTrashCan } from 'react-icons/fa6';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';
import { MdOutlineRemoveRedEye } from "react-icons/md";

const data = [
  {
    key: "1",
    companyname: "spark tech",
    category: "IT",
    location: "Banasree",
    status: "Pending",
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
    status: "Inactive",
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
    status: "Pending",
  },
  {
    key: "6",
    companyname: "spark tech",
    category: "IT",
    location: "Banasree",
    status: "Inactive",
  },
  {
    key: "7",
    companyname: "spark tech",
    category: "IT",
    location: "Banasree",
    status: "Pending",
  },
  {
    key: "8",
    companyname: "spark tech",
    category: "IT",
    location: "Banasree",
    status: "Active",
  },
  {
    key: "9",
    companyname: "spark tech",
    category: "IT",
    location: "Banasree",
    status: "Active",
  },
  {
    key: "10",
    companyname: "spark tech",
    category: "IT",
    location: "Banasree",
    status: "Active",
  },
];

const EmployerList = () => {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState(new URLSearchParams(window.location.search).get('category') || "All")
  const [page, setPage] = useState(new URLSearchParams(window.location.search).get('page') || 1);

  const items = [
    {
      label: "All",
      key: "All",
    },
    {
      label: "Information technology",
      key: "Information technology",
    },
    {
      label: "Accounts",
      key: "Accounts",
    },
    {
      label: "Electrical engineer",
      key: "Electrical engineer",
    },
  ];

  const handleDelete = (id) => {
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

  const handlePageChange = (page) => {
    setPage(page);
    const params = new URLSearchParams(window.location.search);
    params.set('page', page);
    window.history.pushState(null, "", `?${params.toString()}`);
  }

  const onClick = ({ key }) => {
    setCategory(key)
    const params = new URLSearchParams(window.location.search);
    params.set('category', key);
    window.history.pushState(null, "", `?${params.toString()}`);
  };

  return (
    <div>
      <div style={{ marginBottom: "16px" }}>
        <BackButton link="/" />
      </div>
      <div className='bg-white p-5 rounded-xl'>
        <h1 className='text-[20px] font-semibold text-[#2F2F2F]'>Total Employer List</h1>



        <div className='flex items-center justify-between my-4'>
          <div className='w-[450px] h-[40px] rounded-lg'>
              <Input
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Search Company"
                prefix={<FiSearch size={14} color="#868FA0" />}
                suffix={<IoClose onClick={() => setSearch("")} style={{ cursor: "pointer" }} size={14} color="#2B2A2A" />}
                style={{
                  width: "100%",
                  height: "100%",
                  fontSize: "14px"
                }}
                size="middle"
                value={search}
              />
            </div>

          <div className='flex items-center gap-4 relative'>

            <div className='h-[40px] rounded-[8px] border border-[#E9E9E9] flex items-center justify-between px-2 py-[5px] text-[#8B8B8B]'>

              <Dropdown menu={{ items, onClick }} >
                <p
                  style={{
                    cursor: "pointer",
                    color: '#717171',
                    borderRadius: "4px",
                  }}
                  onClick={(e) => e.preventDefault()}
                >
                  {category}
                  <DownOutlined style={{ paddingLeft: "18px" }} color='#717171' />
                </p>
              </Dropdown>
            </div>

          </div>
        </div>
        
        {/* employee table list */}
        <div>
          <table className="w-full rounded-[5px] rounded-table">
            <tr className="text-left w-full bg-[#FEE3B8] " style={{borderRadius: "8px"}}>
              {
                ["Serial No", "Company Name", "Category", "Location", "Status", "Action"].map((item, index)=>
                  <th
                    style={{
                      borderTopLeftRadius: item === "Serial No" ? "8px" : 0,
                      borderBottomLeftRadius: item === "Serial No" ? "8px" : 0,
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
              (data?.slice(0, 8))?.map((item, index)=>
              <>
                <div key={index} style={{marginTop: '8px'}}></div>
                <tr key={index} className="bg-[#ECF1F8] custom-table-row" >
                  <td className="py-[10px] pl-10">{item.key}</td>
                  <td className="py-[10px] pl-10">{item.companyname}</td>
                  <td className="py-[10px] pl-10">{item.category}</td>
                  <td className="py-[10px] pl-10">{item.location}</td>
                  <td className="py-[10px] pl-10">
                    <p style={{
                      width: "88px",
                      height: "31px",
                      borderRadius: "100px",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      // background: item?.status === "Active" ? "#B0ECB2" : "#F8B5B0",
                      // color: item?.status === "Active" ? "#009B06" : "#BA0E00"
                    }} 
                      className={`
                        ${item?.status === "Active" && "bg-[#B0ECB2] text-[#009B06]"}
                        ${item?.status === "Inactive" && "bg-[#F8B5B0] text-[#BA0E00]"}
                        ${item?.status === "Pending" && "bg-[#C5D2E8] text-[#365992]"}
                      `}
                    >
                      {item?.status}
                    </p>
                  </td>
                  <td className="py-[10px] pl-10 cursor-pointer"><MdOutlineRemoveRedEye color='#6F6F6F' size={24} /></td>
                </tr>
              </>
              )
            }
          </table>
        </div>

        {/* pagination */}
        <div className='mt-6 flex items-center justify-center'>
          <Pagination 
            defaultCurrent={page} 
            total={50} 
            onChange={handlePageChange}
          />
        </div>
      </div>
    </div>
  )
}

export default EmployerList