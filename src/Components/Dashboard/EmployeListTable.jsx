import { Table } from "antd";
import React, { useEffect, useState } from "react";
import { MdOutlineRemoveRedEye } from "react-icons/md";
import { Link } from "react-router-dom";
import baseURL from "../../../Config";

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

const EmployeListTable = () =>{
  const [employer, setEmployer] = useState();
  useEffect(()=>{
    async function getAPi(){
      const response = await baseURL.get(`/employer-list`,{
        headers: {
          "Content-Type": "application/json",
          authorization: `Bearer ${JSON.parse(localStorage.getItem('token'))}`,
        }
      });
      setEmployer(response?.data?.data?.data);
    }
    getAPi();
}, []);

  return(
    <div className="h-fit rounded-[8px] bg-white p-5" >
      <div className="flex items-center justify-between mb-[15px]">
        <h1 className="text-[20px] font-semibold text-[#2f2f2f]">All Employer List</h1>
        <Link to="/employer-list">
          <p className="text-[#3C64A4] text-[12px] underline">VIEW ALL</p>
        </Link>
      </div>

      <table className="w-full rounded-[5px] rounded-table">
        <thead>
          <tr className="text-left w-full bg-[#FEE3B8] custom-table-row">
            {
              ["Serial No", "Company Name", "Category", "Location", "Status", "Action"].map((item, index)=>
                <th key={index} >
                  {item}
                </th>
              )
            }
          </tr>
        </thead>

        <tbody>
        {
          (employer?.slice(0, 4))?.map((item, index)=>
          <React.Fragment key={index}>
            <div  style={{marginTop: '8px'}}></div>
            
              <tr  className="bg-[#ECF1F8] custom-table-row" >
                <td>{index + 1}</td>
                <td>{item?.company_name}</td>
                <td>{item?.category?.category_name}</td>
                <td>{item?.location}</td>
                <td>
                  <p 
                    className={` w-[88px] h-[28px] rounded-[100px] text-[13px] flex items-center justify-center
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
          </React.Fragment>
          )
        }
        </tbody>
      </table>

      
    </div>
  )

};
export default EmployeListTable;
