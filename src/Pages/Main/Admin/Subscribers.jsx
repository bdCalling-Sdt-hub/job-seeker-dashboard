import React, { useEffect, useState } from 'react'
import BackButton from '../../../Components/BackButton'
import { Dropdown, Input, Pagination } from 'antd';
import { DownOutlined } from "@ant-design/icons";
import { FiSearch } from 'react-icons/fi';
import { IoClose } from 'react-icons/io5';
import { MdOutlineRemoveRedEye } from 'react-icons/md';
import { Link } from 'react-router-dom';
import baseURL from '../../../../Config';
import moment from 'moment';

const Subscribers = () => {
    const [account, setAccount] = useState(new URLSearchParams(window.location.search).get('account') || "Daily");
    const [page, setPage] = useState(new URLSearchParams(window.location.search).get('page') || 1);
    const [search, setSearch] = useState("");
    const [subscriber, setSubscriber] = useState();



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



    useEffect(()=>{
        async function getAPi(){
          const response = await baseURL.get(`/package-wise-company-subscription`,{
            headers: {
              "Content-Type": "application/json",
              authorization: `Bearer ${JSON.parse(localStorage.getItem('token'))}`,
            }
          });
          setSubscriber(response?.data?.data);
        }
        getAPi();
    }, []);


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
                        <tr className="text-left w-full bg-[#FEE3B8] custom-table-row">
                            {
                                ["Serial No", "Company Name", "Package", "Package Price", "Date", "Status", "Visit Profile"].map((item, index)=>
                                    <th key={index}>
                                        {item}
                                    </th>
                                )
                            }
                        </tr>

                        
                        {
                            (subscriber?.slice(0, 10))?.map((item, index)=>
                                <React.Fragment key={index}>
                                    <div style={{marginTop: '8px'}}></div>
                                    <tr className="bg-[#ECF1F8] text-[#949494] custom-table-row">
                                        <td>{index + 1}</td>
                                        <td>{item?.recruiter?.company_name}</td>
                                        <td>{item?.package?.package_name}</td>
                                        <td>$ {item?.package?.amount}</td>
                                        <td>{moment(item?.package?.created_at).format('L')}</td>
                                        <td>
                                            <p 
                                                className={` w-[88px] h-[27px] rounded-[100px] text-[13px] flex items-center justify-center
                                                    ${item?.package?.status === "Active" && "bg-[#B0ECB2] text-[#009B06]"}
                                                    ${item?.package?.status === "Completed" && "bg-[#FEE3B8] text-[#C98415]"}
                                                `}
                                            >
                                                {item?.subscription?.status }
                                            </p>
                                        </td>
                                        <td>
                                            <Link to={`/subscriber-details/${item?.user_id}/${item?.package?.id} `}>
                                                <MdOutlineRemoveRedEye color='#6F6F6F' size={24} />
                                            </Link>
                                        </td>
                                    </tr>
                                </ React.Fragment>
                            )
                        }
                    </table>
                </div>

                {/* pagination for data */}

                <div className='mt-5 flex items-center justify-center'>
                    <Pagination 
                        defaultCurrent={page} 
                        total={subscriber?.length} 
                        onChange={handlePageChange}
                    />
                </div>

            </div>
        </>
    )
}

export default Subscribers