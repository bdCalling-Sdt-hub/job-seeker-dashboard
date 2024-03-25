import React, { useEffect, useState } from 'react';
import { DownOutlined } from "@ant-design/icons";
import { Dropdown, Space } from "antd";
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';



const data = [
  {
    name: 'Jan',
    uv: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: 'Fab',
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: 'Mar',
    uv: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: 'Apr',
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    name: 'May',
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
  {
    name: 'Jun',
    uv: 2390,
    pv: 3800,
    amt: 2500,
  },
  {
    name: 'Jul',
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
  {
    name: 'Aug',
    uv: 1490,
    pv: 4300,
    amt: 2100,
  },
  {
    name: 'Sep',
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
  {
    name: 'Oct',
    uv: 2090,
    pv: 4300,
    amt: 2100,
  },
  {
    name: 'Nov',
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
  {
    name: 'Dec',
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
];


export default function EmployerOverview() {
  const [year, setYear] = useState(2024)

  const items = [
    {
      label: 2023,
      key: "2023",
    },
    {
      label: 2024,
      key: "2024",
    },
    {
      label: 2025,
      key: "2025",
    },
    {
      label: 2026,
      key: "2026",
    },
  ];
  const onClick = ({ key }) => {
    setYear(key)
  };
    return (
      <div>
        <div className='flex items-center justify-between'>
          <p className='text-[20px] font-semibold mb-[10px] text-black'>Employer Overview</p>
          <Dropdown menu={{ items, onClick }} >
            <p  className="cursor-pointer text-[#717171] border border-[#E9E9E9] rounded-[4px] py-1 px-3" onClick={(e) => e.preventDefault()}
            >
              {year}
              <DownOutlined style={{paddingLeft: "18px"}} color='#717171' />
            </p>
          </Dropdown>
        </div>

        <div className='flex items-center gap-[31px] mb-5'>
          <div className='flex gap-[10px]'>
            <p className='text-xs font-normal text-[#808080]'>Overly Growth</p>
            <h1 className='text-sm font-bold text-[#2f2f2f]'>38.38%</h1>
          </div>
          <div className='flex gap-[10px]'>
            <p className='text-xs font-normal text-[#808080]'>Monthly</p>
            <h1 className='text-sm font-bold text-[#2f2f2f]'>15.5%</h1>
          </div>
          <div className='flex gap-[10px]'>
            <p className='text-xs font-normal text-[#808080]'>Daily</p>
            <h1 className='text-sm font-bold text-[#2f2f2f]'>58.50%</h1>
          </div>
        </div>

        
      
        <AreaChart
          width={750}
          height={200}
          data={data}
          margin={{
            top: 1,
            right: 10,
            left: -10,
            bottom: 10,
          }}
        >
        
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Area type="monotone" dataKey="uv" stroke="#4365b6" fill="#4365b6" />
        </AreaChart>
     
      </div>
    )
  
}