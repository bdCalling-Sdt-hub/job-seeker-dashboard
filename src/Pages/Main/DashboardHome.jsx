import React from 'react'
import DashboardHomeEmployer from '../../Components/Dashboard/Employer/DashboardHome';
import DashboardHomeAdmin from '../../Components/Dashboard/Admin/DashboardHome';
const DashboardHome = () => {
    const { userType } = JSON.parse(localStorage.getItem("user"));
    return (
        <div>
            {
                userType === "RECRUITER"
                ?
                <DashboardHomeEmployer/>
                :
                <DashboardHomeAdmin/>
            }
        </div>
    )
}

export default DashboardHome