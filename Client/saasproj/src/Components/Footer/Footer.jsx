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
import FooterLink from './FooterLink'
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

function Footer() {
  return (
    <Paper
      container
      sx={{
        backgroundColor: '#242424',

        marginRight: 'auto',
        marginLeft: 'auto',
        paddingTop: '20px',
        paddingLeft: { lg: '70px', md: '80px', sm: '90px' },
        paddingRight: { lg: '70px', md: '80px', sm: '90px' },
        borderTop: '1px solid',
        borderColor: '#ffd400',
      }}
    >
      <Grid
        container
        spacing={2}
        marginTop={5}
        display={'flex'}
        justifyContent={'space-between'}
      >
        <Grid item lg={3} md={6} sm={12}>
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
        <Grid item lg={3} md={6} sm={12}>
          <Box
            elevation={0}
            sx={{ backgroundColor: 'transparent', color: '#ffd400' }}
          >
            <FooterLink />
          </Box>
        </Grid>
        <Grid item lg={2} md={6} sm={12}>
          <CustomPaper>
            <Typography
              variant="h6"
              gutterBottom
              sx={{ color: '#ffd400', marginLeft: '0px', width: '100%' }}
            >
              Important Links
            </Typography>
            {importantLinkArry.map((link, index) => (
              <ListItemText
                key={index}
                primary={link}
                sx={{
                  color: '#ffffff',

                  textAlign: 'left',
                  '&:hover': {
                    textDecoration: 'underline',
                  },
                }}
              />
            ))}
          </CustomPaper>
        </Grid>
        <Grid item lg={3} md={6} sm={12}>
          <Paper
            elevation={0}
            sx={{
              backgroundColor: 'transparent',
              color: '#ffd400',
              width: '100%',
              // textAlign: 'center',
            }}
          >
            <Typography
              variant="h6"
              gutterBottom
              sx={{
                color: '#ffd400',
                marginBottom: '20px',
              }}
            >
              Connect with us
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
    </Paper>
  )
}

export default Footer
