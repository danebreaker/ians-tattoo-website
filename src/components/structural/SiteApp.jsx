import React, { useEffect, useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import SiteHome from '../content/SiteHome';
import AboutMe from '../content/AboutMe';
import SiteLayout from './SiteLayout';

export default function SiteApp() {
    return <BrowserRouter>
        <Routes>
            <Route path="/" element={<SiteLayout />}>
                <Route index element={<SiteHome />} />
                <Route path="/AboutMe" element={<AboutMe />} />
                <Route path="*" element={<SiteHome />} />
            </Route>
        </Routes>
    </BrowserRouter>
}