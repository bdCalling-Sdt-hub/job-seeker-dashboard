import React, { useEffect, useState } from "react";
import { HiUserGroup } from "react-icons/hi";
import { TbDatabaseDollar } from "react-icons/tb";
import { RiUserAddFill } from "react-icons/ri";
import { SiGoogleforms } from "react-icons/si";
import { ImBriefcase } from "react-icons/im";
import TotalApplicationChart from "../TotalApplicationChart";
import EmployeListTable from "../EmployeListTable";
import EmployerOverview from "../EmployerOverview";
import baseURL from "../../../../Config";


const DashboardHome = () => {
    const [summery, setSummery] = useState()

    useEffect(()=>{
        async function getAPi(){
          const response = await baseURL.get(`/dashboard`,{
            headers: {
              "Content-Type": "application/json",
              authorization: `Bearer ${JSON.parse(localStorage.getItem('token'))}`,
            }
          });
          setSummery(response?.data);
          console.log(response.data)
        }
        getAPi();
    }, []);
    
    const data = [
        {
          name: "Total Employers",
          count: summery?.total_employers          ,
          icon: <HiUserGroup color="#00B2DC" size={32} />,
          bgColor: "#E2F7FC"
        },
        {
          name: "Total Job Post",
          count: summery?.total_job_post,
          icon: <ImBriefcase color="#FF011C" size={32} />,
          bgColor: "#FFE7E9"
        },
        {
          name: "Total Apply",
          count: summery?.total_applier,
          icon: <SiGoogleforms color="#00C2FF" size={32} />,
          bgColor: "#C5D2E8"
        },
        {
          name: "Total Earning",
          count: summery?.total_earning,
          icon: <TbDatabaseDollar color="#5664FD" size={32} />,
          bgColor: "#DDE0FF"
        },
    ]
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