import React from 'react';
import BackButton from '../../Components/BackButton';


const UploadedCVViewer = () => {
    return (
        <>
            <div style={{marginBottom : "20px"}}>
                <BackButton link="/candidate-short-profile/2" />
            </div>

            <iframe src='/book.pdf#toolbar=3' width="100%" height="100%"></iframe>
        </>
    )
}

export default UploadedCVViewer