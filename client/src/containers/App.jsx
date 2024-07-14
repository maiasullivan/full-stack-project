import React, {Suspense} from 'react'
import {Routes, Route} from "react-router-dom"
import Layout from '../layouts/Layout';
import AdminLayout from '../layouts/AdminLayout';
import { AdminHome, Home, UserProfile } from '../pages';

const App = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
        <Routes>
            <Route element={<Layout />}>
                <Route path="/" element={<Home />}/>
                <Route path="/profile/:uid" element={<UserProfile />}/>
            </Route>
            

                <Route path="/admin/*" element={<AdminLayout />}>
                    <Route index element={<AdminHome />} />
            </Route>
        </Routes>
    </Suspense>
  );
};

export default App;