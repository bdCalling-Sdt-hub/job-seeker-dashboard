import React from 'react';
import { Modal } from 'antd';

const CustomModal = ({open, setOpen, body, title, setValue, setImgURL}) => {
    return (
        <Modal
            centered 
            title={title} 
            open={open} 
            onCancel={()=>(setValue({}) , setImgURL() ,setOpen(false))}
            footer={false}
        >
            <div className=''>
                {body}
            </div>
        </Modal>
    )
}

export default CustomModal;