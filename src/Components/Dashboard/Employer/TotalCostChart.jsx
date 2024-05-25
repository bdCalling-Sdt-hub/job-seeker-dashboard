import React, { useEffect, useState } from 'react';
import { DownOutlined } from "@ant-design/icons";
import { Dropdown } from 'antd';
import { AreaChart, Area, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';
import baseURL from '../../../../Config';

const TotalCostChart = () => {
    const [data, setData] = useState();
    const [year, setYear] = useState(2024);
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

    useEffect(()=>{
        async function getApi(){
            const response = await baseURL.get(`/coust/ratio?year=${year}`, {
                headers: {
                    "Content-Type": "application/json",
                    authorization: `Bearer ${JSON.parse(localStorage.getItem('token'))}`
                }
            })
            console.log(response?.data)
            setData(response?.data.monthly_income);
        }
        getApi();
    }, [year]);


    return (
        <div style={{ width: '100%', height: '310px' }}>
            <div className='flex items-center justify-between year'>
                <p className='text-[20px] font-medium  text-[#565656]'>Cost Ratio</p>
                <Dropdown menu={{ items, onClick }} >
                    <p  className=" cursor-pointer text-[#717171] border border-[#E9E9E9] rounded-[4px] py-1 px-3" onClick={(e) => e.preventDefault()}>
                        {year}
                        <DownOutlined style={{paddingLeft: "18px"}} color='#717171' />
                    </p>
                </Dropdown>
            </div>

            {/* chart */}
            <div style={{ width: '100%', marginTop: 25, height: 'calc(100% - 80px)'}}>
                <ResponsiveContainer>
                    <AreaChart
                        data={data}
                        style={{
                            marginLeft: "-20px"
                        }}
                    >
                        
                        <XAxis dataKey="month_name" />
                        <YAxis />
                        <Tooltip />
                        <Area type="monotone" dataKey="count" stroke="#4365b6" fill="#4365b6" />
                    </AreaChart>
                </ResponsiveContainer>
            </div>
        </div>
    )
}

export default TotalCostChart