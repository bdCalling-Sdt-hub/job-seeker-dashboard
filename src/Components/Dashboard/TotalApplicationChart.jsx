import React, { useState, useEffect } from 'react';
import { DownOutlined } from "@ant-design/icons";
import { Dropdown, Space } from "antd";
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import baseURL from '../../../Config';


const TotalApplicationChart = () => {
  const [data, setData] = useState([]);
  const [growth, setGrowth] = useState("")
  const [year, setYear] = useState(new URLSearchParams(window.location.search).get('year') || 2024);

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
    const params = new URLSearchParams(window.location.search);
    params.set('year', key);
    window.history.pushState(null, "", `?${params.toString()}`);
  };

  useEffect(()=>{
    async function getAPi(){
        const response = await baseURL.get(`/month-wise-jobpost/${year}`,{
            headers: {
            "Content-Type": "application/json",
            authorization: `Bearer ${JSON.parse(localStorage.getItem('token'))}`,
            }
        });

        const result = Object.entries(response?.data?.data).map(([month, count]) => ({ month, count }));
        setGrowth(response?.data.yearly_growth)
        setData(result);
    }
    getAPi();
}, [ year ]);

  return(
  <div> 
    <div className='flex items-center justify-between'>
      <p className='text-[20px] font-semibold mb-[10px] text-black'>Total Application</p>
      <Dropdown menu={{ items, onClick }} >
        <p  className="cursor-pointer text-[#717171] border border-[#E9E9E9] rounded-[4px] py-1 px-3" onClick={(e) => e.preventDefault()}>
          {year}
          <DownOutlined style={{paddingLeft: "18px"}} color='#717171' />
        </p>
      </Dropdown>
    </div>

    <div className='flex items-center gap-[10px] mb-5'>
      <p className='text-xs font-normal text-[#808080]'>Overly Growth</p>
      <h1 className='text-sm font-bold text-[#2f2f2f]'>{growth}%</h1>
    </div>

    
    <BarChart
      width={750}
      height={190}
      data={data}
      
    >
      <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="month" />
        <YAxis />
        <Tooltip />
      <Bar  barSize={15} dataKey="count" stackId="a" fill="#436FB6" />
    </BarChart>
  </div>)
};


export default TotalApplicationChart;