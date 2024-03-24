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


export default function DailyRentChart() {
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

  /* useEffect(() => {
    if(year !== 2024){
      window.history.pushState(null, "", `?year=${year}`);
    }
  }, [year]);

  useEffect(() => {
    const searchParams = new URLSearchParams(window.location.search);
    const yearParam = searchParams.get('year');
    if (yearParam) {
      const parsedYear = parseInt(yearParam, 10);
      setYear(parsedYear);
    } else {
      window.location.reload();
    }
  }, []); */


    return (
      <div>
        <div style={{display : "flex", alignItems: "center", justifyContent : "space-between"}}>
          <p style={{marginTop:"0px", fontSize: "20px", fontWeight: 600, marginBottom:"10px", color: "black",}}>Employer Overview</p>
          <Dropdown menu={{ items, onClick }} >
            <p style={{
              // width: "79px", 
              cursor: "pointer", 
              color:'#717171', 
              border: "1px solid #E9E9E9",
              borderRadius: "4px",
              padding: "4px 12px"
            }} onClick={(e) => e.preventDefault()}
            >
              {year}
              <DownOutlined style={{paddingLeft: "18px"}} color='#717171' />
            </p>
          </Dropdown>
        </div>

        <div style={{display: "flex", alignItems: "center", gap: "31px", marginBottom: "19px"}}>
          <div style={{display:"flex"}}>
            <p style={{fontSize: "12px", fontWeight: 400, color: "#808080",marginRight:"10px"}}>Overly Growth</p>
            <h1 style={{fontSize: "14px", fontWeight: 700, color: "#2F2F2F"}}>38.38%</h1>
          </div>
          <div  style={{display:"flex"}}>
            <p style={{fontSize: "12px", fontWeight: 400, color: "#808080",marginRight:"10px"}}>Monthly</p>
            <h1 style={{fontSize: "14px", fontWeight: 700, color: "#2F2F2F"}}>15.5%</h1>
          </div>
          <div  style={{display:"flex"}}>
            <p style={{fontSize: "12px", fontWeight: 400, color: "#808080",marginRight:"10px"}}>Daily</p>
            <h1 style={{fontSize: "14px", fontWeight: 700, color: "#2F2F2F"}}>58.50%</h1>
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