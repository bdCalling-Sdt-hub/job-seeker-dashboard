import { Table } from "antd";
import React from "react";
import { MdOutlineRemoveRedEye } from "react-icons/md";
import { Link } from "react-router-dom";

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

  return(
    <div className="h-fit rounded-[8px] bg-white p-6" >
      <div className="flex items-center justify-between mb-[15px]">
        <h1 className="text-[20px] font-semibold text-[#2f2f2f]">All Employer List</h1>
        <Link to="/employer-list">
          <p className="text-[#3C64A4] text-[12px] underline">VIEW ALL</p>
        </Link>
      </div>

      <table className="w-full rounded-[5px] rounded-table">
        <tr className="text-left w-full bg-[#FEE3B8] custom-table-row">
          {
            ["Serial No", "Company Name", "Category", "Location", "Status", "Action"].map((item, index)=>
              <th key={index} >
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
              <td>{item.key}</td>
              <td>{item.companyname}</td>
              <td>{item.category}</td>
              <td>{item.location}</td>
              <td>
                <p 
                  className={` w-[88px] h-[28px] rounded-[100px] text-[13px] flex items-center justify-center
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
  )

};
export default EmployeListTable;
