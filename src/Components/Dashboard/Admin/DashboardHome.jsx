import React from "react";
import { HiUserGroup } from "react-icons/hi";
import { TbDatabaseDollar } from "react-icons/tb";
import { RiUserAddFill } from "react-icons/ri";
import { SiGoogleforms } from "react-icons/si";
import { ImBriefcase } from "react-icons/im";
import TotalApplicationChart from "../TotalApplicationChart";
import EmployeListTable from "../EmployeListTable";
import EmployerOverview from "../EmployerOverview";

const data = [
    {
      name: "Total Employers",
      count: "50k",
      icon: <HiUserGroup color="#00B2DC" size={32} />,
      bgColor: "#E2F7FC"
    },
   {
      name: "New Employers",
      count: "865",
      icon: <RiUserAddFill color="#F98002" size={32} />,
      bgColor: "#FFE3C7"
    },
    {
      name: "Total Job Post",
      count: "865",
      icon: <ImBriefcase color="#FF011C" size={32} />,
      bgColor: "#FFE7E9"
    },
    {
      name: "Total Apply",
      count: "2k",
      icon: <SiGoogleforms color="#00C2FF" size={32} />,
      bgColor: "#C5D2E8"
    },
    {
      name: "Total Earning",
      count: "1000k",
      icon: <TbDatabaseDollar color="#5664FD" size={32} />,
      bgColor: "#DDE0FF"
    },
  ]
const DashboardHome = () => {
    return (
        <div>
            <div className="grid grid-cols-5 gap-5">
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
                <div className="w-full h-[305px] rounded-[15px] p-5 bg-white">
                    <EmployerOverview />
                </div>
                
                <div className="w-full h-[305px] rounded-[15px] p-5 bg-white">
                    <TotalApplicationChart />
                </div>
            </div>
            <EmployeListTable />
        </div>
    )
}

export default DashboardHome