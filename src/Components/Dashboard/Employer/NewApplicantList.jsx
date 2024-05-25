import React, {useEffect, useState} from "react";
import { MdOutlineRemoveRedEye } from "react-icons/md";
import { Link } from "react-router-dom";
import baseURL from '../../../../Config';
import moment from "moment";


const NewApplicantList = () => {

    const [data, setData] = useState([]);
    


    useEffect(()=>{
        async function getApi(){
            const response = await baseURL.get(`/application/list`, {
                headers: {
                    "Content-Type": "application/json",
                    authorization: `Bearer ${JSON.parse(localStorage.getItem('token'))}`
                }
            })
            setData (response?.data?.data?.data)
        }
        getApi();
    }, []);
    return (
        <div className="bg-white rounded-lg p-5">
            <div className='flex items-center justify-between mb-[10px]'>
                <p className='text-[20px] font-medium  text-[#565656]'>Job Candidate list</p>

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
                        <React.Fragment key={index}>
                            <div style={{marginTop: '8px'}}></div>
                            <tr className="bg-[#ECF1F8] custom-table-row" >
                                <td>{item?.id}</td>
                                <td>{item?.id}</td>
                                <td>{item?.user?.fullName}</td>
                                <td>{item?.job_post?.job_title}</td>
                                <td>{item?.category?.category_name}</td>
                                <td>{moment(item?.created_at).format('L')}</td>
                                <td>
                                    <p 
                                        className={` w-[88px] capitalize h-[28px] rounded-[100px] text-[13px] flex items-center justify-center
                                            ${item?.status === "select" && "bg-[#B0ECB2] text-[#009B06]"}
                                            ${item?.status === "reject" && "bg-[#F8B5B0] text-[#BA0E00]"}
                                            ${item?.status === "pending" && "bg-[#C5D2E8] text-[#365992]"}
                                        `}
                                    >
                                        {item?.status}
                                    </p>
                                </td>
                                <td className="py-[10px] pl-10 cursor-pointer">
                                    <Link to={`/candidate-short-profile/${item.id}`}>
                                        <MdOutlineRemoveRedEye color='#6F6F6F' size={24} />
                                    </Link>
                                </td>
                            </tr>
                        </React.Fragment>
                    )
                }
            </table>
        </div>
    )
}

export default NewApplicantList