import {
  Box,
  Divider,
  Grid,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  IconButton,
  Paper,
  Typography,
  Link,
} from '@mui/material'

import React from 'react'
import { ImgLogoComp } from '../ThemeCust'
import NavigateNextIcon from '@mui/icons-material/NavigateNext'
import FacebookIcon from '@mui/icons-material/Facebook'
import TwitterIcon from '@mui/icons-material/Twitter'
import InstagramIcon from '@mui/icons-material/Instagram'
import LinkedInIcon from '@mui/icons-material/LinkedIn'
const importantLinkArry = [
  'Submit a Press Release',
  'Editorial Policy',
  'Advertise',
  'Careers',
  'About us',
]

const iconStyle = {
  backgroundColor: '#777777',
  marginRight: '10px',
  '&:hover': {
    backgroundColor: 'white',
  },
}

function CustomPaper({ children }) {
  return (
    <Paper
      elevation={0}
      sx={{
        backgroundColor: 'transparent',
      }}
    >
      {children}
    </Paper>
  )
}

function MyNavLink() {
  return (
    <Box sx={{ backgroundColor: 'transparent' }}>
      <Typography variant="h6" gutterBottom>
        Navigation
      </Typography>
      <List>
        {[
          'Home',
          'Companies',
          'Events',
          'Fundraise',
          'Listicle',
          'Metrics',
          'Operations',
        ].map((text, index) => (
          <div>
            <Divider key={index} sx={{ backgroundColor: 'white' }} />
            <ListItem
              key={index}
              sx={{
                alignItems: 'center',
                paddingLeft: '0px',
                paddingRight: '0px',
              }}
            >
              <ListItemText
                key={index}
                primary={text}
                sx={{ color: 'white' }}
              />
              <ListItemIcon>
                <NavigateNextIcon
                  key={index}
                  sx={{
                    color: '#ffd400',
                    width: '100%',
                  }}
                />
              </ListItemIcon>
            </ListItem>
          </div>
        ))}
        <Divider sx={{ backgroundColor: 'white' }} />
      </List>
    </Box>
  )
}

function Footer() {
  return (
    <Box
      sx={{
        backgroundColor: '#242424',

        marginRight: 'auto',
        marginLeft: 'auto',
        paddingTop: '20px',
        paddingLeft: '80px',
        paddingRight: '70px',
        borderTop: '1px solid',
        borderColor: '#ffd400',
      }}
    >
      <Grid container spacing={2} marginTop={5}>
        <Grid item xs={3}>
          <CustomPaper>
            <ImgLogoComp />
            <Typography
              sx={{
                fontFamily: 'Open Sans,sans-serif',
                lineHeight: '24px',
                color: 'white',
                // position: 'relative',
                minHheight: '1px',

                fontSize: '14px',
              }}
            >
              Your #1 source for
              <Link
                key="saas news"
                sx={{
                  color: '#ffd420',
                  textDecoration: 'none',
                  '&:hover': {
                    textDecoration: 'underline',
                    textDecorationColor: '#ffd420',
                  },
                }}
              >
                {' '}
                SaaS news
              </Link>
              , trends & happenings. Discuss new products, tool launches,
              community updates, funding updates and anything related to the
              space.
              <br></br>
              <br></br> We are looking to help the bootstrapped SaaS founders
              worldwide get a platform to showcase their products and learn from
              others and become successful SaaS Operators and founders.
            </Typography>
          </CustomPaper>
        </Grid>
        <Grid item xs={3}>
          <Box
            elevation={0}
            sx={{ backgroundColor: 'transparent', color: '#ffd400' }}
          >
            <MyNavLink />
          </Box>
        </Grid>
        <Grid item xs={3}>
          <CustomPaper>
            <Typography
              variant="h6"
              gutterBottom
              sx={{ color: '#ffd400', marginLeft: '35px' }}
            >
              Important Links
            </Typography>
            {importantLinkArry.map((link, index) => (
              <ListItemText
                key={index}
                primary={link}
                sx={{
                  color: '#ffffff',
                  marginLeft: '35px',
                  padding: '13px 0 0 0',

                  '&:hover': {
                    textDecoration: 'underline',
                  },
                }}
              />
            ))}
          </CustomPaper>
        </Grid>
        <Grid item xs={3}>
          <Paper
            elevation={0}
            sx={{ backgroundColor: 'transparent', color: '#ffd400' }}
          >
            <Typography
              variant="h6"
              gutterBottom
              sx={{ color: '#ffd400', marginBottom: '20px' }}
            >
              Important Links
            </Typography>
            <IconButton aria-label="Facebook" sx={iconStyle}>
              <FacebookIcon />
            </IconButton>
            <IconButton aria-label="Twitter" sx={iconStyle}>
              <TwitterIcon />
            </IconButton>
            <IconButton aria-label="Instagram" sx={iconStyle}>
              <InstagramIcon />
            </IconButton>
            <IconButton aria-label="LinkedIn" sx={iconStyle}>
              <LinkedInIcon />
            </IconButton>
          </Paper>
        </Grid>
      </Grid>
    </Box>
  )
}

export default Footer
