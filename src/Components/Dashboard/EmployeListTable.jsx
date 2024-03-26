import { Table } from "antd";
import React from "react";
import { Link } from "react-router-dom";

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

  return(
    <div className="h-fit rounded-[8px] bg-white p-6" >
      <div className="flex items-center justify-between mb-[15px]">
        <h1 className="text-[20px] font-semibold text-[#2f2f2f]">All Employer List</h1>
        <Link to="/seller-list">
          <p className="text-[#3C64A4] text-[12px] underline">VIEW ALL</p>
        </Link>
      </div>

      <table className="w-full rounded-[5px] rounded-table">
        <tr className="text-left w-full bg-[#FEE3B8]" style={{borderRadius: "8px"}}>
          {
            ["Serial No", "Company Name", "Category", "Location"].map((item, index)=>
              <th
                style={{
                  borderTopLeftRadius: item === "Serial No" ? "8px" : 0,
                  borderBottomLeftRadius: item === "Serial No" ? "8px" : 0,
                  borderTopRightRadius: item === "Location" ? "8px" : 0,
                  borderBottomRightRadius: item === "Location" ? "8px" : 0,
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
          (data?.slice(0, 4))?.map((item, index)=>
          <>
            <div key={index} style={{marginTop: '8px'}}></div>
            <tr key={index} className="bg-[#F2F8FE]" >
              <td className="py-[10px] rounded-[5px] pl-10">{item.key}</td>
              <td className="py-[10px] pl-10">{item.companyname}</td>
              <td className="py-[10px] pl-10">{item.category}</td>
              <td className="py-[10px] rounded-[5px] pl-10">{item.location}</td>
            </tr>
          </>
          )
        }
      </table>
    </div>
  )

};
export default EmployeListTable;
