import { Box, Tab, Tabs } from '@mui/material'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { StyleDropDownfrmAppbr } from '../Components/ThemeCust'

function NavLinks({ links, oreintationCust = 'horizontal' }) {
  const [currentTab, setCurrentTab] = useState(0)
  // const handleTabChange = (e, newValue) => {
  //   setCurrentTab(newValue)
  // }

  return (
    <Box sx={StyleDropDownfrmAppbr} justifyItems="center">
      <Tabs
        TabIndicatorProps={{
          sx: { backgroundColor: '#dde03d', marginRight: '0px' },
        }}
        textColor="inherit"
        value={currentTab}
        role="navigation"
        orientation={oreintationCust}
        // onChange={handleTabChange}
      >
        {links.map((link, index) => (
          <Tab
            disableRipple
            key={index}
            label={link.text}
            component={Link}
            // to={`/${link.route}`}
            to={link.route}
            onMouseEnter={() => setCurrentTab(index)}
            sx={{
              fontWeight: { md: '300', lg: '400' },
              letterSpacing: '0.8',
              fontSize: { md: '14px', lg: '16px' },
            }}
          ></Tab>
        ))}
      </Tabs>
    </Box>
  )
}

export default NavLinks
