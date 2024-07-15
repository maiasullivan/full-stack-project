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
            <div className="w-full lg:w-96 px-4 py-6 rounded-md backdrop-blur-md flex items-center justify-center flex-col">
                <p className="text-2xl">Welcome Back!</p>
                <p>Sign in to access your store</p>
            </div>
    </div>
  );
};

export default Authentication;