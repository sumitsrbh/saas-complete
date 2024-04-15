import { Suspense, lazy } from 'react'
import { Routes, Route } from 'react-router-dom'

import { Paper } from '@mui/material'

// import NavDrawer from './NavDrawer/NavDrawer'
import '../src/App.css'

import Footer from './Components/Footer/Footer'
import NavDrawer from './NavDrawer/NavDrawer'
import { DataProvider } from './Components/DataContext/DataContext'
import AdminPanelV2 from './Components/Admin/AdminPanelV2'
import CardTable from './Components/Admin/Table/CardTable'
import EnquiryTable from './Components/Admin/Table/EnquiryTable'

const Home = lazy(() => import('./Components/HomeCompCont/Home'))
const AboutUs = lazy(() => import('./Components/AboutUsCont/AboutUs'))
const AdvertiseWdUs = lazy(() =>
  import('./Components/AdvertiseWdUsCont/AdvertiseWdUs')
)
const ContactUs = lazy(() => import('./Components/ContactUs/ContanctUs'))

const LogIn = lazy(() => import('./Components/Admin/LogIn'))
// const AdminPanel = lazy(() => import('./Components/Admin/AdminPanel'))
const AdminPanel = lazy(() => import('./Components/Admin/AdminPanelV2'))
const CardCreateTemplate = lazy(() =>
  import('./Components/Admin/CardCreateTemplate')
)

const navIndexArray = [
  { text: 'Home', route: '/' },
  { text: 'About us', route: '/about-us' },
  { text: 'Contact us', route: '/contact-us' },
  { text: 'Advertise with us', route: '/advertise-with-us' },
  // { text: 'Promote Your SaaS', route: '/promote-your-saas' },
]
function App() {
  return (
    <DataProvider>
      <Paper elevation={0}>
        <NavDrawer links={navIndexArray} />

        <Suspense fallback={<div>Loading...</div>}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about-us" element={<AboutUs />} />
            <Route path="/contact-us" element={<ContactUs />} />
            <Route path="/advertise-with-us" element={<AdvertiseWdUs />} />
            <Route path="/login" element={<LogIn />} />
            {/* <Route path="/admin-panel" element={<AdminPanel />} /> */}
            <Route path="/admin-panel" element={<AdminPanelV2 />} />
            <Route path="/card-create" element={<CardCreateTemplate />} />
          </Routes>
        </Suspense>

        <Footer />
      </Paper>
    </DataProvider>
  )
}

export default App
