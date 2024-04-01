import React from "react";
import { MdOutlineRemoveRedEye } from "react-icons/md";
import { Link } from "react-router-dom";

const data = [
    {
        key: "1",
        application_no: "#20221",
        name: "Tushar",
        title: "Php Developer",
        department: "Software Engineer",
        date: "Dec 30, 2024",
        status: "Pending",
    },
    {
        key: "2",
        application_no: "#20222",
        name: "Nadir",
        title: "Full Stack Developer",
        department: "Software Engineer",
        date: "Dec 30, 2024",
        status: "Pending",
    },
    {
        key: "3",
        application_no: "#20223",
        name: "Fahim",
        title: "Full Stack Developer",
        department: "Software Engineer",
        date: "Dec 30, 2024",
        status: "Pending",
    },
    {
        key: "4",
        application_no: "#20224",
        name: "Jusef",
        title: "Php Developer",
        department: "Software Engineer",
        date: "Dec 30, 2024",
        status: "Pending",
    },
    {
        key: "5",
        application_no: "#20225",
        name: "Rahman",
        title: "Php Developer",
        department: "Software Engineer",
        date: "Dec 30, 2024",
        status: "Pending",
    },
    {
        key: "6",
        application_no: "#20226",
        name: "Shanto",
        title: "Fluter Developer",
        department: "Software Engineer",
        date: "Dec 30, 2024",
        status: "Pending",
    },
    {
        key: "7",
        application_no: "#20227",
        name: "Rafsan",
        title: "Fluter Developer",
        department: "Software Engineer",
        date: "Dec 30, 2024",
        status: "Pending",
    },
    {
        key: "8",
        application_no: "#20228",
        name: "Assad Brush",
        title: "UX/UI",
        department: "Software Engineer",
        date: "Dec 30, 2024",
        status: "Pending",
    },
    {
        key: "9",
        application_no: "#20229",
        name: "Khusi",
        title: "UX/UI",
        department: "Software Engineer",
        date: "Dec 30, 2024",
        status: "Pending",
    },
    {
        key: "10",
        application_no: "#202210",
        name: "Nadim",
        title: "Fluter",
        department: "Software Engineer",
        date: "Dec 30, 2024",
        status: "Pending",
    }
];

const NewApplicantList = () => {
    return (
        <div className="bg-white rounded-lg p-5">
            <div className='flex items-center justify-between mb-[10px]'>
                <p className='text-[20px] font-medium  text-[#565656]'>New Applicant</p>

                <Link to="/new-applicant">
                    <p className="text-[#3C64A4] text-[12px] font-normal underline">VIEW ALL</p>
                </Link>
            </div>
            <table className="w-full rounded-[5px] rounded-table">

                <tr className="text-left w-full bg-[#FEE3B8] custom-table-row">
                {
                    ["Serial No", "Application NO", "Name", "Job Title", "Department", "Appling Date", "Status", "Action"].map((item, index)=>
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
                                <td>{item.application_no}</td>
                                <td>{item.name}</td>
                                <td>{item.title}</td>
                                <td>{item.department}</td>
                                <td>{item.date}</td>
                                <td>
                                    <p 
                                        className={` w-[88px] h-[28px] rounded-[100px] text-[13px] flex items-center justify-center
                                            ${item?.status === "Active" && "bg-[#B0ECB2] text-[#009B06]"}
                                            ${item?.status === "Inactive" && "bg-[#F8B5B0] text-[#BA0E00]"}
                                            ${item?.status === "Pending" && "bg-[#C5D2E8] text-[#365992]"}
                                        `}
                                    >
                                        {item?.status}
                                    </p>
                                </td>
                                <td className="py-[10px] pl-10 cursor-pointer">
                                    <Link to={"/candidate-short-profile/2"}>
                                        <MdOutlineRemoveRedEye color='#6F6F6F' size={24} />
                                    </Link>
                                </td>
                            </tr>
                        </>
                    )
                }
            </table>
        </div>
    )
}

export default NewApplicantList