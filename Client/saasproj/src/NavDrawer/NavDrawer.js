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
  const isBelowMd = useMediaQuery(theme.breakpoints.down('md'))

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
            <Grid item xs={1} />
            <Grid item xs={5}>
              <NavLinks links={links} />
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
            <SaaSButton component={Link} to={'/login'}>
              <Login />
              <Typography>Login</Typography>
            </SaaSButton>
          </Grid>
        )}
      </Toolbar>
    </AppBar>
  )
}

export default NavDrawer
