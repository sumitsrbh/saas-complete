import {
  Box,
  Card,
  CardHeader,
  Grid,
  Paper,
  TextField,
  Typography,
} from '@mui/material'
import React from 'react'

import aboutus from '../Images/ImageAboutUs/Aboutus.jpeg'
import { SaaSButton } from '../ThemeCust'
import AmazingTeam from './AmazingTeam'

const styledImg = {
  width: '100%',
  height: '30vw',
  marginTop: '50px',
}
const fontStyle = {
  fontFamily: 'Open Sans, sans-serif',
  fontSize: '14px',
  lineHeight: '24px',
  textSizeAadjust: '100%',
  color: '#777',
}

function AboutUs() {
  return (
    <Paper elevation={0}>
      <img src={aboutus} style={styledImg} alt="about-us" />
      <Grid container sx={{ padding: '80px 32px 32px 80px' }}>
        <Grid item xs={4}>
          <Typography
            variant="h2"
            sx={{
              fontWeight: '700',
              fontSize: '28px',
              fontFamily: 'Noto Sans HK',
              textSizeAdjust: '100%',
              lineHeight: '40px',
            }}
          >
            Our Mission
          </Typography>
        </Grid>

        <Grid item xs={8}>
          <Grid container spacing={4}>
            <Grid item xs={6}>
              <Typography sx={fontStyle}>
                What we see in the market when it comes to SaaS startups and
                companies is a rush for becoming bigger and broader company. We
                at SaaS Journal firmly believe that innovation happens at the
                smaller companies cos that is where the hunger is. SaaS Journal
                is an attempt to bring in all kinds of voices within the SaaS
                space to the forefront. We don't care what your last raise was
                or
              </Typography>
              <img
                src="https://assets-global.website-files.com/5f0a4c1cde4cddac7d2ad3b4/60f648f06e4ad586254082bd_android-chrome-512x512.png"
                style={{ maxWidth: '65px', marginTop: '30px' }}
                alt="aaset-global"
              />
            </Grid>
            <Grid item xs={6}>
              <Typography sx={fontStyle}>
                what unicorn or decacorn status your company has achieved. If
                you have an innovative solution and its improving the world in a
                positive manner we want to write about it and give it wider
                exposure. The attempt is give voice to the smaller companies who
                might be looking for a place to talk about what is unique and
                why they are different.
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      </Grid>

      <Box
        component="img"
        alt="fixed-image"
        src="https://assets-global.website-files.com/5f0a4c1cde4cddac7d2ad3b4/5f0a4c1d99c861a7126d3c4e_kaleidico-gVtJgTyi2iI-unsplash.jpg"
        sx={{
          zIndex: '999',
          // position: 'fixed',
          width: '100vw',
          height: '80vw',
          backgroundAttachment: 'fixed',
          backgroundPosition: '50%',
          backgroundSize: 'cover',
          marginTop: '24px',
          marginBottom: '48px',
        }}
      />
      <Grid container>
        <Grid item xs={1}></Grid>
        <Grid item xs={10}>
          <Card variant="outlined">
            <CardHeader
              title={
                <Box>
                  <Typography
                    variant="h4"
                    sx={{
                      fontSize: '18px',
                      fontWeight: '700',
                      lineHeight: '28px',
                      textAlign: 'center',
                    }}
                  >
                    <p>Join Our Newsletter and Get the Latest</p> Posts to Your
                    Inbox
                  </Typography>
                  <Box
                    sx={{
                      display: 'flex',
                      justifyContent: 'center',
                      marginTop: 2,
                    }}
                  >
                    <TextField
                      id="email"
                      label="Email"
                      variant="outlined"
                      sx={{ width: '30%' }}
                    />
                    <SaaSButton
                      sx={{
                        marginLeft: '5px',
                        borderRadius: '10px',
                        textTransform: 'none',
                        fontWeight: 700,
                        padding: '12px 24px',
                      }}
                    >
                      Subscribe
                    </SaaSButton>
                  </Box>
                </Box>
              }
            />
          </Card>
        </Grid>

        <Grid item xs={1}></Grid>
      </Grid>
      <AmazingTeam />
    </Paper>
  )
}

export default AboutUs
