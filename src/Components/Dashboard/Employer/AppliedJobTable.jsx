import React from 'react'
import { Link } from 'react-router-dom';

const data = [
    {
        key: "1",
        category: "IT",
        vacancy: 15,
        applied: 30,
        Date: "Jul 20, 2024",
    },
    {
        key: "2",
        category: "IT",
        vacancy: 5,
        applied: 10,
        Date: "Jul 20, 2024",
    },
    {
        key: "3",
        category: "IT",
        vacancy: 40,
        applied: 80,
        Date: "Dec 20, 2024",
    },
    {
        key: "4",
        category: "IT",
        vacancy: 7,
        applied: 14,
        Date: "Aug 20, 2024",
    },
    {
        key: "5",
        category: "IT",
        vacancy: 30,
        applied: 60,
        Date: "Feb 20, 2024",
    },
    {
        key: "6",
        category: "IT",
        vacancy: 20,
        applied: 30,
        Date: "Jan 20, 2024",
    },
    {
        key: "7",
        category: "IT",
        vacancy: 10,
        applied: 20,
        Date: "Apr 20, 2024",
    },
    {
        key: "8",
        category: "IT",
        vacancy: 5,
        applied: 10,
        Date: "Jun 20, 2024",
    },
    {
        key: "9",
        category: "IT",
        vacancy: 10,
        applied: 30,
        Date: "May 20, 2024",
    },
    {
        key: "10",
        category: "IT",
        vacancy: 20,
        applied: 100,
        Date: "May 20, 2023",
    },
];

const AppliedJobTable = () => {
    return (
        <div>
            <div className='flex items-center justify-between mb-[5px]'>
                <p className='text-[20px] font-medium  text-[#565656]'>Applied Job</p>
                <Link to="/applied-job">
                    <p className="text-[#3C64A4] text-[12px] font-normal underline">VIEW ALL</p>
                </Link>
            </div>
            <table className="w-full rounded-[5px] rounded-table">
                <tr className="text-left w-full bg-[#FEE3B8] custom-table-row">
                    {
                        ["Serial No", "Category", "Vacancy", "Applied", "Date"].map((item, index)=>
                            <th key={index} >
                                {item}
                            </th>
                        )
                    }
                </tr>

        
                {
                    (data?.slice(0, 4))?.map((item, index)=>
                        <>
                            <div key={index} style={{marginTop: '8px'}}></div>
                            <tr key={index} className="bg-[#ECF1F8] custom-table-row" >
                                <td>{item.key}</td>
                                <td>{item.category}</td>
                                <td>{item.vacancy}</td>
                                <td className='bg-[#F7F0E2]'>{item.applied}</td>
                                <td>{item.Date}</td>
                            </tr>
                        </>
                    )
                }
            </table>
        </div>
    )
}

export default AppliedJobTable