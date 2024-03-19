import { Box, Paper, ThemeProvider } from '@mui/material'
import { Router, Routes, Route } from 'react-router-dom'
// import NavDrawer from './NavDrawer/NavDrawer'
import '../src/App.css'
import NavDrawerV2 from './NavDrawer/NavDrawerV2'

import Home from './Components/HomeCompCont/Home'
import AboutUs from './Components/AboutUsCont/AboutUs'
import AdvertiseWdUs from './Components/AdvertiseWdUsCont/AdvertiseWdUs'
import ContactUs from './Components/ContactUs/ContanctUs'
import React, { useEffect } from 'react'
import Footer from './Components/Footer/Footer'
import NavDrawer from './NavDrawer/NavDrawer'
import LogIn from './Components/Admin/LogIn'
import AdminPanel from './Components/Admin/AdminPanel'
import CardTemplate from './Components/Admin/CardTemplate'
import { DataProvider } from './Components/DataContext/DataContext'

const navIndexArray = [
  { text: 'Home', route: '/' },
  { text: 'About us', route: '/about-us' },
  { text: 'Contact us', route: '/contact-us' },
  { text: 'Advertise with us', route: '/advertise-with-us' },
  // { text: 'Promote Your SaaS', route: '/promote-your-saas' },
]
function App() {
  console.log('In the app.js')
  return (
    <DataProvider>
      <Paper elevation={0}>
        <NavDrawer links={navIndexArray} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/contact-us" element={<ContactUs />} />
          <Route path="/advertise-with-us" element={<AdvertiseWdUs />} />
          <Route path="/login" element={<LogIn />} />
          <Route path="/admin-panel" element={<AdminPanel />} />
          <Route path="/card-template" element={<CardTemplate />} />
        </Routes>

        <Footer />
      </Paper>
    </DataProvider>
  )
}

export default App
