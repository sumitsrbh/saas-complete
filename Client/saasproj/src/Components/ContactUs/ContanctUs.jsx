import { Card, CardMedia, Grid, Paper, Typography } from '@mui/material'

import React from 'react'
import SubscribeCard from '../HomeCompCont/SubscribeForm'
import SubscribeForm from './SubscribeForm'

function ContanctUs() {
  return (
    <Paper elevation={0} square={true} sx={{ backgroundColor: '#777777' }}>
      <Grid container>
        <Card sx={{ width: '100%' }}>
          <CardMedia
            component="img"
            image="https://assets-global.website-files.com/5f0a4c1cde4cddac7d2ad3b4/5f0db12093abbdc8bdfef7b1_Privacy_Policy-HeaderImage.jpg"
            sx={{
              height: '350px',
            }}
          />
        </Card>
        <Grid item xs={5} />
        <Grid item xs={1} />
        <Grid item xs={6}>
          <Typography
            variant="h2"
            marginTop={-25}
            color="white"
            fontSize={'40px'}
            textAlign="center"
          >
            Let's get in touch
          </Typography>
        </Grid>
      </Grid>
      {/* <SubscribeCardAlike header={'How can we help'} /> */}
      <SubscribeCard header={'How can we help'} />
      <SubscribeForm />
    </Paper>
  )
}

export default ContanctUs
