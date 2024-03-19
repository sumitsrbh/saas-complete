import { Box, Card, Grid, Paper } from '@mui/material'
import React from 'react'
import { useNavigate } from 'react-router-dom'
import SubscribeCardAlike from '../HomeCompCont/SubscribeCard'
import SubscribeCard from '../HomeCompCont/SubscribeForm'

import { SaaSButton } from '../ThemeCust'
import EnquiryTemplate from './EnquiryTemplate'

function AdminPanel() {
  const navigate = useNavigate()
  const clickHandler = () => {
    navigate('/card-template')
  }
  return (
    <Paper
      elevation={0}
      sx={{ backgroundColor: '#262320', padding: '40px', marginTop: '80px' }}
    >
      <Grid container>
        <Grid xs={1} />
        <Grid xs={4}>
          <Card sx={{ padding: '1px' }}>
            <SubscribeCardAlike header="Create your Card" formOn={false} />
            <Box
              sx={{
                display: 'flex',
                justifyContent: 'center',
                backgroundColor: '#262320',
              }}
            >
              <SaaSButton onClick={clickHandler} sx={{ marginBottom: '50px' }}>
                {' '}
                Create
              </SaaSButton>
            </Box>
          </Card>
        </Grid>
        <Grid xs={1} />
        <Grid xs={4}>
          <Card sx={{ padding: '1px' }}>
            <SubscribeCardAlike header="Listed enquiry" formOn={false} />
            <Box
              sx={{
                display: 'flex',
                justifyContent: 'center',
                backgroundColor: '#262320',
              }}
            >
              <EnquiryTemplate />
            </Box>
          </Card>
        </Grid>
      </Grid>
    </Paper>
  )
}

export default AdminPanel
