import React from 'react';
import { LoginBG } from "../assets";

const Authentication = () => {
  return (
    <div
        style={{
            background: `url(${LoginBG})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat'
        }}
        className="w-screen h-screen flex justify-center px-4 py-6"
        >
            <div className="w-full lg:w-96 px-4 py-6 rounded-md backdrop-blur-md">
                <p>Welcome Back!</p>
            </div>
    </div>
  );
};

export default Authentication;