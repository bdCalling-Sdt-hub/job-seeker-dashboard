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
      }
  ];

  return(
    <div className="h-fit rounded-[8px] bg-white p-6" >
      <div className="flex items-center justify-between mb-[15px]">
        <h1 className="text-[20px] font-semibold text-[#2f2f2f]">All Employer List</h1>
        <Link to="/seller-list">
          <p className="text-[#3C64A4] text-[12px] underline">VIEW ALL</p>
        </Link>
      </div>
      <Table 
        columns={columns} 
        dataSource={data?.slice(0, 4)} 
        pagination={false}
        className="employee-table"
      />
    </div>
  )

};
export default EmployeListTable;
