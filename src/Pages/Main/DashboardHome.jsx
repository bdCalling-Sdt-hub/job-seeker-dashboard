import React from 'react'
import DashboardHomeEmployer from '../../Components/Dashboard/Employer/DashboardHome';
import DashboardHomeAdmin from '../../Components/Dashboard/Admin/DashboardHome';
const DashboardHome = () => {
    const user = {
        userType : "Employer"
    }
    return (
        <div>
            {
                user.userType === "Employer"
                ?
                <DashboardHomeEmployer/>
                :
                <DashboardHomeAdmin/>
            }
        </div>
    )
}

export default DashboardHome