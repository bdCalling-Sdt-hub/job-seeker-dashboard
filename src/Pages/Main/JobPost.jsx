import React from 'react';
import BackButton from '../../Components/BackButton';
import EmployerJobPost from '../../Components/Dashboard/EmployerJobPost';
import AdminJobPost from '../../Components/Dashboard/AdminJobPost';

const JobPost = () => {
    const { userType } = JSON.parse(localStorage.getItem("user"));
    return (
        <>
            <div style={{marginBottom: "20px"}}>
                <BackButton link="/" />
            </div>

            <div>
                {
                    userType === "ADMIN" || userType === "SUPER ADMIN"
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