import React from 'react'
import { useParams } from 'react-router-dom';
import BackButton from '../../Components/BackButton';
import AboutUs from '../../Components/Settings/AboutUs';
import PrivacyPolicy from '../../Components/Settings/PrivacyPolicy';
import TermsConditions from '../../Components/Settings/TermsConditions';
import Notifications from '../../Components/Settings/Notifications';
import Profile from '../../Components/Settings/Profile';

const SettingsDetails = () => {
    const { settingType } = useParams();
    const title = settingType?.split("-").join(" ");
    return (
        <>
            {/* heading */}
            <div style={{marginBottom: "15px"}}>
                <BackButton link='/settings' />
            </div>

            <div className='bg-white p-6 rounded-lg relative'>
                <h1 className='capitalize text-[24px] font-medium text-[#565656]'> {title}</h1>

                <div className='mt-[25px]'>
                    { settingType === "about-us"  && <AboutUs/> }
                    { settingType === "privacy-policy"  && <PrivacyPolicy /> }
                    { settingType === "terms-&-conditions"  && <TermsConditions /> }
                    { settingType === "notifications"  && <Notifications /> }
                    { settingType === "profile"  && <Profile /> }
                </div>
            </div>
        </>
    )
}

export default SettingsDetails