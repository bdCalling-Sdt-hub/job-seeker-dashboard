import { Col, Row } from "antd";
import React from "react";
import "./DashboardHome.css";
import EmployeListTable from "../../../Components/Dashboard/EmployeListTable";
import TotalSellerChart from "./TotalApplicationChart";
import DailyOverviewChart from "./DailyOverviewChart";
import { HiUserGroup } from "react-icons/hi";
import { FaUserPlus } from "react-icons/fa6";
import { LuBox } from "react-icons/lu";
import { TbDatabaseDollar } from "react-icons/tb";
import UserCard from "./UserCard";
import { Link } from "react-router-dom";
import { RiUserAddFill } from "react-icons/ri";
import { SiGoogleforms } from "react-icons/si";
import TotalApplicationChart from "./TotalApplicationChart";

function DashboardHome() {
  const onChange = (pageNumber) => {
    console.log("Page: ", pageNumber);
  };

  const data = [
    {
      name: "Total Employers",
      count: "50k",
      icon: <HiUserGroup color="#00B2DC" size={32} />,
      bgColor: "#E2F7FC"
    },
   {
      name: "Total Job post",
      count: "865",
      icon: <RiUserAddFill color="#F98002" size={32} />,
      bgColor: "#FFE3C7"
    },
    {
      name: "Total Job Post",
      count: "2k",
      icon: <img width="35" height="35" src="https://img.icons8.com/pulsar-line/48/clipboard-approve.png" alt="clipboard-approve"/>,
      bgColor: "#DDE0FF"
    },
    {
      name: "Total Apply",
      count: "2k+",
      icon: <SiGoogleforms color="#F98002" size={32} />,
      bgColor: "#DDE0FF"
    },
    {
      name: "Total Earning",
      count: "1000k",
      icon: <TbDatabaseDollar color="#5664FD" size={32} />,
      bgColor: "#DDE0FF"
    },
  ]

  return (
    <div>
      <Row gutter={26}>
        {
          data.map((item, index)=>
            <Col key={index}  xs={{span:24}} sm={{span:24}} md={{span:12}} lg={{span:6}}>
              <div className='income-card'>
                  <div className="w-[64px] h-[64px] rounded-full flex items-center justify-center"  style={{background: `${item.bgColor}`}}>
                    {item?.icon}
                  </div>
                  
                  <div>
                    <p className="text-[32px] font-semibold text-[#50525D]">{item.count} +</p>
                    <p className="text-[16px] font-normal text-[#6A6D7C]">{item.name}</p>
                  </div>
              </div>
            </Col>
          )
        }
      </Row>
      <div className="my-5 grid grid-cols-2 gap-5">
        <div className="w-full h-[305px] rounded-[15px] p-5 bg-white">
          <DailyOverviewChart />
        </div>
          
        <div className="w-full h-[305px] rounded-[15px] p-5 bg-white">
          <TotalApplicationChart />
        </div>
      </div>
      <EmployeListTable />
    </div>
  );
}

export default DashboardHome;
