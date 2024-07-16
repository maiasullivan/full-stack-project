import React, { useEffect, useCallback } from 'react';
import { LoginBG } from "../assets";
import { FcGoogle } from "react-icons/fc";
import { GoogleAuthProvider, signInWithRedirect, getRedirectResult } from 'firebase/auth';
import { auth } from '../config/firebase.config';

const Authentication = () => {
    const googleProvider = new GoogleAuthProvider();

    const handleLoginAction = useCallback(() => {
        signInWithRedirect(auth, googleProvider);
    }, [googleProvider]);

    useEffect(() => {
        const fetchRedirectResult = async () => {
            try {
                const result = await getRedirectResult(auth);
                if (result) {
                    console.log(result);
                }
            } catch (error) {
                console.error('Error during login:', error);
            }
        };

        fetchRedirectResult();
    }, []);

    return (
        <div
            style={{
                background: `url(${LoginBG})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
            }}
            className="w-screen h-screen flex items-center justify-center px-4 py-6"
        >
            <div className="w-full lg:w-96 px-4 py-6 rounded-md backdrop-blur-md flex items-center justify-center flex-col gap-8">
                <div className="flex flex-col items-center justify-center gap-2">
                    <p className="text-2xl text-gray-400">Welcome Back!</p>
                    <p className="text-lg text-gray-500">Sign in to access your store</p>
                </div>

                <div
                    onClick={handleLoginAction}
                    className="w-full px-4 py-3 flex items-center justify-center border border-gray-400 bg-slate-100 cursor-pointer rounded-md active:scale-95 transition-all duration-150 ease-in-out"
                >
                    <FcGoogle className="text-2xl" />
                    <p className="text-lg font-semibold text-gray-600">Sign in with Gmail</p>
                </div>
            </div>
        </div>
    );
};

export default Authentication;
