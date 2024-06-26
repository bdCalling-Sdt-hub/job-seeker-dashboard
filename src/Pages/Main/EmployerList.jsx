import React, { useEffect, useState } from 'react';
import BackButton from "../../Components/BackButton";
import { FiSearch } from 'react-icons/fi';
import { IoClose } from 'react-icons/io5';
import { Dropdown, Input, Pagination } from 'antd';
import { DownOutlined } from "@ant-design/icons";
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';
import { MdOutlineRemoveRedEye } from "react-icons/md";
import baseURL from '../../../Config';

const EmployerList = () => {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState(new URLSearchParams(window.location.search).get('category') || "all")
  const [page, setPage] = useState(new URLSearchParams(window.location.search).get('page') || 1);
  const [employer, setEmployer] = useState();

  const items = [
    {
      label: "All",
      key: "all",
    },
    {
      label: "Active",
      key: "active",
    },
    {
      label: "Blocked",
      key: "blocked",
    },
    {
      label: "Reported",
      key: "reported",
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

  useEffect(()=>{
    async function getAPi(){
      const response = await baseURL.get(`/employer-list?category_name=${search}&status=${category === "all" ? "" : category }`,{
        headers: {
          "Content-Type": "application/json",
          authorization: `Bearer ${JSON.parse(localStorage.getItem('token'))}`,
        }
      });
      setEmployer(response?.data?.data);
    }
    getAPi();
}, [category, search]);

  return (
    <div>
      <div style={{ marginBottom: "16px" }}>
        <BackButton link="/" />
      </div>
      <div className='bg-white px-5 py-4 rounded-xl'>
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
                  {category === "all" && "All"}
                  {category === "active" && "Active"}
                  {category === "blocked" && "Blocked"}
                  {category === "reported" && "Reported"}
                  <DownOutlined style={{ paddingLeft: "18px" }} color='#717171' />
                </p>
              </Dropdown>
            </div>

          </div>
        </div>
        
        {/* employee table list */}
        <div>
          <table className="w-full rounded-[5px] rounded-table">
            <tr className="text-left w-full bg-[#FEE3B8] custom-table-row">
              {
                ["Serial No", "Company Name", "Category", "Location", "Status", "Action"].map((item, index)=>
                  <th key={index}>
                    {item}
                  </th>
                )
              }
            </tr>

            
            {
              employer?.data?.map((item, index)=>
              <>
                <div key={index} style={{marginTop: '8px'}}></div>
                <tr key={index} className="bg-[#ECF1F8] custom-table-row" >
                  <td>{index + 1}</td>
                  <td>{item?.company_name}</td>
                  <td>{item?.category?.category_name}</td>
                  <td>{item.location}</td>
                  <td>
                    <p 
                      className={` w-[88px] h-[31px] rounded-[100px] flex items-center justify-center
                        ${item?.status === "active" && "bg-[#B0ECB2] text-[#009B06]"}
                        ${item?.status === "blocked" && "bg-[#F8B5B0] text-[#BA0E00]"}
                        ${item?.status === "reported" && "bg-[#FEE3B8] text-[#6F6F6F]"}
                        ${item?.status === "pending" && "bg-[#C5D2E8] text-[#365992]"}
                      `}
                    >
                      {item?.status}
                    </p>
                  </td>
                  <td className="py-[10px] pl-10 cursor-pointer">
                    <Link to={`/employer-details/${item?.user_id}`}>
                      <MdOutlineRemoveRedEye color='#6F6F6F' size={24} />
                    </Link>
                  </td>
                </tr>
              </>
              )
            }
          </table>
        </div>

        {/* pagination */}
        <div className='mt-6 flex items-center justify-center'>
          <Pagination 
            defaultCurrent={employer?.current_page} 
            total={employer?.total} 
            pageSize={employer?.per_page}
            onChange={handlePageChange}
          />
        </div>
      </div>
    </div>
  )
}

export default EmployerList