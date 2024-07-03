import React, { useEffect, useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import SiteHome from '../content/SiteHome';
import AboutMe from '../content/AboutMe';
import SiteLayout from './SiteLayout';
import Commissions from '../content/Commissions';
import Gallery from '../content/Gallery';
import Tattoos from '../content/Tattoos';
import Music from '../content/Music';
import Contact from '../content/Contact';

export default function SiteApp() {
    return <BrowserRouter>
        <Routes>
            <Route path="/" element={<SiteLayout />}>
                <Route index element={<SiteHome />} />
                <Route path="/AboutMe" element={<AboutMe />} />
                <Route path="/Commissions" element={<Commissions />} />
                <Route path="/Contact" element={<Contact />} />
                <Route path="/Gallery" element={<Gallery />} />
                <Route path="/Tattoos" element={<Tattoos />} />
                <Route path="/Music" element={<Music />} />
                <Route path="*" element={<SiteHome />} />
            </Route>
        </Routes>
    </BrowserRouter>
}