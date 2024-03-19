import {
  AppBar,
  Grid,
  IconButton,
  Tab,
  Tabs,
  Toolbar,
  Box,
  useMediaQuery,
  useTheme,
} from '@mui/material'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import {
  StyleDropDownfrmAppbr,
  SaaSButton,
  ImgLogoComp,
} from '../Components/ThemeCust'
import DrawerCmpnt from './DrawerCmpnt'

function NavDrawerV2({ links }) {
  const [currentTab, setCurrentTab] = useState(0)
  const theme = useTheme()
  const isBelowMd = useMediaQuery(theme.breakpoints.down('md'))

  return (
    <AppBar sx={StyleDropDownfrmAppbr}>
      <Toolbar sx={{ paddingLeft: '15px', paddingRight: '15px' }}>
        <Grid container>
          <Grid item xs={2}>
            <IconButton>
              <ImgLogoComp />
            </IconButton>
          </Grid>

          <Grid item xs={1} />
          <Grid item xs={5}>
            <Tabs
              TabIndicatorProps={{
                sx: { backgroundColor: '#dde03d' },
              }}
              textColor="inherit"
              value={currentTab}
              role="navigation"
              // onChange={(e, val) => setCurrentTab(val)}
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
                    fontWeight: '400',
                    letterSpacing: '0.8',
                    fontSize: '16px',
                  }}
                ></Tab>
              ))}
            </Tabs>
          </Grid>
          <Grid item xs={1} />
          <Grid item xs={2}>
            <Box sx={{ display: 'flex', justifyContent: 'center' }}>
              <SaaSButton
                color="secondary"
                variant="contained"
                sx={{
                  fontWeight: '400',
                  letterSpacing: '0.8',
                  fontSize: '16px',
                }}
              >
                Promote Your SaaS
              </SaaSButton>
            </Box>
          </Grid>
        </Grid>
      </Toolbar>
      <DrawerCmpnt />
    </AppBar>
  )
}

export default NavDrawerV2
