import React, { Suspense, useEffect } from 'react';
import { Routes, Route } from "react-router-dom";
import { Layout, AdminLayout, AuthLayout } from '../layouts';
import { AdminHome, Authentication, Home, UserProfile } from '../pages';
import { auth } from "../config/firebase.config";

const App = () => {
    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged((userCred) => {
            if (userCred) {
                userCred.getIdToken().then((token) => {
                  console.log(token); // For debugging purposes, remove in production
                });
            }
        });

        return () => unsubscribe();
    }, [auth]);

    return (
        <Suspense fallback={<div>Loading...</div>}>
            <Routes>
                <Route element={<Layout />}>
                    <Route path="/" element={<Home />} />
                    <Route path="/profile/:uid" element={<UserProfile />} />
                </Route>
                <Route path="/admin/*" element={<AdminLayout />}>
                    <Route index element={<AdminHome />} />
                </Route>
                <Route path="/auth/*" element={<AuthLayout />}>
                    <Route index element={<Authentication />} />
                </Route>
            </Routes>
        </Suspense>
    );
};

export default App;
