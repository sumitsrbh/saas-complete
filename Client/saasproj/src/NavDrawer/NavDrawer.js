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
  Typography,
} from '@mui/material'
import { Link } from 'react-router-dom'
import {
  StyleDropDownfrmAppbr,
  SaaSButton,
  ImgLogoComp,
} from '../Components/ThemeCust'
import DrawerCmpnt from './DrawerCmpnt'
import NavLinks from './NavLinks'
import { Login } from '@mui/icons-material'

function NavDrawer({ links }) {
  const theme = useTheme()

  const isBelowLg = useMediaQuery(theme.breakpoints.down('lg'))
  const isBelowMd = useMediaQuery(theme.breakpoints.down('md'))
  const isBelowSm = useMediaQuery(theme.breakpoints.down('sm'))

  return (
    <AppBar sx={StyleDropDownfrmAppbr}>
      <Toolbar>
        {isBelowMd ? (
          <Grid container>
            <Grid item xs={2}>
              <IconButton disableRipple component={Link} to={links[0].route}>
                <ImgLogoComp />
              </IconButton>
            </Grid>
            <Grid item xs={9} />
            <Grid item xs={1}>
              <DrawerCmpnt links={links} />
            </Grid>
          </Grid>
        ) : (
          <Grid container>
            <Grid item xs={2}>
              <IconButton disableRipple component={Link} to={links[0].route}>
                <ImgLogoComp />
              </IconButton>
            </Grid>
            <Grid item xs={4} md={6}>
              <NavLinks links={links} />
            </Grid>
            <Grid
              item
              xs={4}
              md={4}
              sx={{ display: 'flex', justifyItems: 'space-around ' }}
            >
              {!isBelowMd && (
                <SaaSButton
                  color="secondary"
                  variant="contained"
                  sx={{
                    fontWeight: { md: '300', lg: '400' },
                    letterSpacing: '0.8',
                    fontSize: { md: '14px', lg: '16px' },
                    marginRight: '10px',
                  }}
                >
                  Promote Your SaaS
                </SaaSButton>
              )}
              <SaaSButton component={Link} to={'/login'}>
                <Login />
                <Typography
                  sx={{
                    fontSize: { md: '14px', lg: '16px' },
                  }}
                >
                  Login
                </Typography>
              </SaaSButton>
            </Grid>
          </Grid>
        )}
      </Toolbar>
    </AppBar>
  )
}

export default NavDrawer
