import React from 'react';
import { FaFacebook, FaInstagram, FaLinkedinIn, FaTwitter } from "react-icons/fa";


const Social = () => {
    return (
        <div className="flex justify-between pt-6 lg:flex-col fixed lg:top-[40%] right-0 bottom-[0%] lg:bottom-[40%]">
            <FaTwitter size={40} className="drop-shadow-xl m-4 cursor-pointer hover:scale-150 ease-in duration-300 transform hover:rotate-45" />
            <FaFacebook size={40} className="drop-shadow-xl m-4 cursor-pointer hover:scale-150 ease-in duration-300 transform hover:rotate-45" />
            <FaInstagram size={40} className="drop-shadow-xl m-4 cursor-pointer hover:scale-150 ease-in duration-300 transform hover:rotate-45" />
            <FaLinkedinIn size={40} className="drop-shadow-xl m-4 cursor-pointer hover:scale-150 ease-in duration-300 transform hover:rotate-45" />
        </div>
    )
}

export default Social;