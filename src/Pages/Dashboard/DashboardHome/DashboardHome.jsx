import { Col, Row } from "antd";
import React from "react";
import "./DashboardHome.css";
import TotalSellerListTable from "../../../Components/Dashboard/TotalSellerListTable";
import TotalSellerChart from "./TotalApplicationChart";
import DailyOverviewChart from "./DailyOverviewChart";
import { HiUserGroup } from "react-icons/hi";
import { FaUserPlus } from "react-icons/fa6";
import { LuBox } from "react-icons/lu";
import { TbDatabaseDollar } from "react-icons/tb";
import UserCard from "./UserCard";
import { Link } from "react-router-dom";
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
      icon: <img width="35" height="35" src="https://img.icons8.com/ios/50/permanent-job.png" alt="permanent-job"/>,
      bgColor: "#FFF3D6"
    },
    {
      name: "Total Apply",
      count: "2k",
      icon: <img width="35" height="35" src="https://img.icons8.com/pulsar-line/48/clipboard-approve.png" alt="clipboard-approve"/>,
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
              <div  className='income-card'>
                  <div 
                    style={{
                      background: `${item.bgColor}`,
                      width: "64px",
                      height: "64px",
                      borderRadius: "100%",
                      display:"flex",
                      alignItems: "center",
                      justifyContent: "center"
                    }}
                  >
                    {item?.icon}
                  </div>
                  <div>
                    <p
                      style={{
                        fontSize:"32px",
                        fontWeight:"600", 
                        color: "#50525D" ,
                      }}
                    >{item.count} +</p>
                    <p 
                      style={{
                        fontSize:"16px",
                        fontWeight:"400", 
                        color: "#6A6D7C" ,
                      }}
                    >
                      {item.name}
                    </p>
                  </div>
              </div>
            </Col>
          )
        }
      </Row>
      <div style={{ marginTop: "20px", marginBottom: "15px", display: "grid" ,gridTemplateColumns: "auto auto auto", gap: "20px" }} >
            <div  style={{ width: '780px', height: "305px", borderRadius:"15px", padding:"20px",backgroundColor:"#fff"}}>
              <DailyOverviewChart />
            </div>
          
            <div
              style={{
                borderRadius: "15px",
                backgroundColor: "#fff",
                width: '780px',
                height: "300px",
                padding:"10px 20px 20px 20px"
              }}
            >
              <TotalApplicationChart />
            </div>

            
      </div>
      <TotalSellerListTable />
    </div>
  );
}

export default DashboardHome;
