import React from "react";
import { HiUserGroup } from "react-icons/hi";
import { TbDatabaseDollar } from "react-icons/tb";
import { IconCreditCard } from '@tabler/icons-react';
import { ImBriefcase } from "react-icons/im";
import EmployeListTable from "../EmployeListTable";
import AppliedJobTable from "./AppliedJobTable";
import TotalCostChart from "./TotalCostChart";
import NewApplicantList from "./NewApplicantList";


const data = [
    {
      name: "Total Employers",
      count: "50k",
      icon: <HiUserGroup color="#00B2DC" size={32} />,
      bgColor: "#E2F7FC"
    },
    {
      name: "Total Job Post",
      count: "865",
      icon: <ImBriefcase color="#FF011C" size={32} />,
      bgColor: "#FFE7E9"
    },
    {
      name: "Subscription",
      count: "2k",
      icon: <IconCreditCard color="#00C2FF" size={32} />,
      bgColor: "#C5D2E8"
    },
    {
      name: "Total Cost",
      count: "1000k",
      icon: <TbDatabaseDollar color="#5664FD" size={32} />,
      bgColor: "#DDE0FF"
    },
  ]
const DashboardHome = () => {
    return (
        <div>
            <div className="grid grid-cols-4 gap-5">
                {
                    data.map((item, index)=>
                        <div key={index} className=' bg-white p-6 text-black text-center rounded-[15px] h-[112px] flex gap-5 items-center'>
                        <div className="w-[64px] h-[64px] rounded-full flex items-center justify-center"  style={{background: `${item.bgColor}`}}>
                            {item?.icon}
                        </div>
                            
                        <div>
                            <p className="p-0 m-0 text-[32px] font-semibold text-[#50525D]">{item.count} +</p>
                            <p className="p-0 m-0 text-[16px] font-normal text-[#6A6D7C]">{item.name}</p>
                        </div>
                        </div>
                    )
                }
            </div>

            <div className="my-5 grid grid-cols-2 gap-5">
                <div className="w-full h-[310px] rounded-[15px] p-5 bg-white">
                    <AppliedJobTable/>
                </div>
                
                <div className="w-full h-[310px] rounded-[15px] p-5 bg-white">
                    <TotalCostChart />
                </div>
            </div>
            <NewApplicantList />
        </div>
    )
}

export default DashboardHome