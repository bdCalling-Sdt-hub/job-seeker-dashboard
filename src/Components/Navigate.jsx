import React from 'react';
import { Link } from 'react-router-dom';
import { GoArrowLeft } from "react-icons/go";

const Navigate = ({ link }) => {
    return (
        <Link to={`${link}`}>
            <div
                className='
                    w-10 
                    absolute
                    top-3
                    left-3 
                    bg-white 
                    h-10 
                    rounded-full 
                    flex 
                    items-center 
                    justify-center
                '
                style={{boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)"}}
            >
                <GoArrowLeft 
                    color='#565656' 
                    size={24}
                />
            </div>
        </Link>
    )
}

export default Navigate