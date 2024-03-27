import React, { useState } from 'react'
import BackButton from '../../Components/BackButton'
import { Dropdown, Input, Pagination } from 'antd';
import { DownOutlined } from "@ant-design/icons";
import { FiSearch } from 'react-icons/fi';
import { IoClose } from 'react-icons/io5';
import { MdOutlineRemoveRedEye } from 'react-icons/md';

const data = [
    {
        key: "1",
        companyname: "spark tech",
        package: "Basic",
        date: "Dec 30, 2024 5:18",
        price: "800",
    },
    {
        key: "2",
        companyname: "spark tech",
        package: "Essential",
        date: "Dec 30, 2024 5:18",
        price: "550",
    },
    {
        key: "3",
        companyname: "spark tech",
        package: "Essential Pro",
        date: "Dec 30, 2024 5:18",
        price: "650",
    },
    {
        key: "4",
        companyname: "spark tech",
        package: "Basic",
        date: "Dec 30, 2024 5:18",
        price: "600",
    },
    {
        key: "5",
        companyname: "spark tech",
        package: "Essential",
        date: "Dec 30, 2024 5:18",
        price: "750",
    },
    {
        key: "6",
        companyname: "spark tech",
        package: "Basic",
        date: "Dec 30, 2024 5:18",
        price: "900",
    },
    {
        key: "7",
        companyname: "spark tech",
        package: "Essential Pro",
        date: "Dec 30, 2024 5:18",
        price: "300",
    },
    {
        key: "8",
        companyname: "spark tech",
        package: "Basic",
        date: "Dec 30, 2024 5:18",
        price: "500",
    },
    {
        key: "9",
        companyname: "spark tech",
        package: "Essential Pro",
        date: "Dec 30, 2024 5:18",
        price: "600",
    },
    {
        key: "10",
        companyname: "spark tech",
        package: "Basic",
        date: "Dec 30, 2024 5:18",
        price: "700",
    },
];

const Accounts = () => {
    const [account, setAccount] = useState(new URLSearchParams(window.location.search).get('account') || "Daily");
    const [page, setPage] = useState(new URLSearchParams(window.location.search).get('page') || 1);
    const [search, setSearch] = useState("");
    const items = [
        {
            label: "Daily",
            key: "Daily",
        },
        {
            label: "Weekly",
            key: "Weekly",
        },
        {
            label: "Monthly",
            key: "Monthly",
        }
    ];

    const onClick = ({ key }) => {
        setAccount(key)
        const params = new URLSearchParams(window.location.search);
        params.set('account', key);
        window.history.pushState(null, "", `?${params.toString()}`);
    };

    const handlePageChange = (page) => {
        setPage(page);
        const params = new URLSearchParams(window.location.search);
        params.set('page', page);
        window.history.pushState(null, "", `?${params.toString()}`);
    }


    return (
        <>
            {/* heading */}
            <div style={{marginBottom: "15px"}}>
                <BackButton link='/' />
            </div>

            <div className='bg-white p-6 rounded-[5px]'>

                {/* search and filter section */}
                <div className='flex items-center justify-between mb-[14px]'>
                    <Input
                        onChange={(e) => setSearch(e.target.value)}
                        placeholder="Search Company"
                        prefix={<FiSearch size={14} color="#868FA0" />}
                        suffix={<IoClose onClick={() => setSearch("")} style={{ cursor: "pointer" }} size={14} color="#868FA0" />}
                        style={{
                            width: "450px",
                            height:"40px",
                            padding: "10px 15px",
                            fontSize: "14px",
                            fontWeight: 400,
                            borderRadius: "8px",
                            color: "#A1A9B8",
                        }}
                        size="middle"
                        value={search}
                    />

                    <div 
                        className='
                            bg-white 
                            h-[40px] 
                            w-[120px] 
                            rounded-[8px] 
                            border 
                            border-[#E9E9E9] 
                            flex 
                            items-center 
                            justify-between 
                            px-3 
                            py-[5px] 
                            text-[#8B8B8B]
                        '
                    >
                        <Dropdown menu={{ items, onClick }}>
                            <p
                                style={{
                                    cursor: "pointer",
                                    color: '#717171',
                                    borderRadius: "4px",
                                }}
                                onClick={(e) => e.preventDefault()}
                            >
                                { account }
                                <DownOutlined style={{ paddingLeft: "18px" }} color='#717171' />
                            </p>
                        </Dropdown>
                    </div>
                </div>

                {/* employee table list */}
                <div>
                    <table className="w-full rounded-[5px] rounded-table">
                        <tr className="text-left w-full bg-[#FEE3B8] custom-table-row" style={{borderRadius: "8px"}}>
                            {
                                ["Serial No", "Company Name", "Package", "Date Form", "Package Price"].map((item, index)=>
                                    <th key={index}  className="py-[10px] px-10">
                                        {item}
                                    </th>
                                )
                            }
                        </tr>

                        
                        {
                            data?.map((item, index)=>
                                <>
                                    <div key={index} style={{marginTop: '8px'}}></div>
                                    <tr key={index} className="bg-[#ECF1F8] text-[#949494] custom-table-row" >
                                        <td className="py-[10px] pl-10">{item.key}</td>
                                        <td className="py-[10px] pl-10">{item.companyname}</td>
                                        <td className="py-[10px] pl-10">{item.package}</td>
                                        <td className="py-[10px] pl-10">{item.date}</td>
                                        <td className="py-[10px] pl-10">$ {item.price}</td>
                                    </tr>
                                </>
                            )
                        }
                    </table>
                    <div className="text-right bg-[#FEE3B8] rounded-lg py-[10px] px-10 mt-2 text-base font-bold text-[#436FB6]" >
                        <p>Total:- $2500</p>
                    </div>
                </div>

                {/* pagination for data */}

                <div className='mt-6 flex items-center justify-center'>
                    <Pagination 
                        defaultCurrent={page} 
                        total={data?.length} 
                        onChange={handlePageChange}
                    />
                </div>

            </div>
        </>
    )
}

export default Accounts