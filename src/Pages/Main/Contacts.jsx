import React from 'react'
import AdminContacts from './Admin/AdminContacts';
import EmployerContacts from './Employer/EmployerContacts';

const Contacts = () => {
    const { userType } = JSON.parse(localStorage.getItem("user"));
    
    return (
        <>
            {
                userType === "RECRUITER"
                ?
                <EmployerContacts/>
                :
                <AdminContacts/>
            }
        </>
    )
}

export default Contacts; 