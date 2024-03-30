import React from 'react';
import BackButton from '../../Components/BackButton';
import EmployerJobPost from '../../Components/Dashboard/EmployerJobPost';
import AdminJobPost from '../../Components/Dashboard/AdminJobPost';

const JobPost = () => {
    const user = {
        userType:"User"
    }
    return (
        <>
            <div style={{marginBottom: "20px"}}>
                <BackButton link="/" />
            </div>

            <div>
                {
                    user.userType === "Admin"
                    ?
                    <AdminJobPost/>
                    :
                    <EmployerJobPost/>
                }
            </div>
        </>
    )
}

export default JobPost