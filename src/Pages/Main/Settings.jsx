import React from 'react'
import BackButton from '../../Components/BackButton';
import { MdKeyboardArrowRight } from "react-icons/md";

const Settings = () => {
    const settingsItem = [
        {
            title: "Notification",
            path: "notification",
        },
        {
            title: "Profile",
            path: "profile",
        },
       
        {
            title: "Change password",
            path: "change-password",
        },
        
        {
            title: "Terms of service",
            path: "term-of-service",
        },
        {
            title: "Privacy policy",
            path: "privacy-policy",
        },
        {
            title: "About us",
            path: "about-us",
        },
        
    ];
    return (
        <div>
            <div style={{marginBottom: "24px"}}>
                <BackButton link="/" />
            </div>

            <div>
                {
                    settingsItem.map((setting, index) => (
                        <div
                            key={index}
                            className="
                                border 
                                border-[#4365b6] 
                                py-4 
                                mb-2 
                                px-4 
                                text-sm 
                                rounded-lg 
                                bg-white 
                                flex items-center 
                                justify-between 
                                cursor-pointer 
                                hover:bg-[#e6f1fc] 
                                hover:text-black"
                            // onClick={() => handleNavigate(setting.path)}
                        >
                            <h2>{setting.title}</h2>
                            <MdKeyboardArrowRight color='#4365b6' size={24} />
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default Settings