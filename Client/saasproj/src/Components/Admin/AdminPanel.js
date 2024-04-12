import {
  Alert,
  Box,
  Card,
  Drawer,
  Grid,
  List,
  ListItem,
  ListItemButton,
  Paper,
} from '@mui/material'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import SubscribeCardAlike from '../HomeCompCont/SubscribeCard'
import SubscribeCard from '../HomeCompCont/SubscribeForm'
import CardTemplate from './CardTemplate'
import EnquiryTable from './Table/EnquiryTable'

import { SaaSButton } from '../ThemeCust'
import EnquiryTemplate from './EnquiryTemplate'
import CardTable from './Table/CardTable'
import { useData } from '../DataContext/DataContext'

function AdminPanel() {
  const { logged } = useData()
  const [open, setOpen] = useState(true)
  const navigate = useNavigate()
  const clickHandler = () => {
    navigate('/card-template')
  }
  const clickToLogin = () => {
    navigate('/login')
  }
  const handleDrawerItemClick = (route) => {
    navigate(route)
  }
  return (
    <Paper
      elevation={0}
      sx={{
        backgroundColor: '#262320',
        padding: '40px',
        marginTop: '80px',
        display: 'flex',
      }}
    >
      <Drawer open={open} varaint="permanent" sx={{ width: '50px' }}>
        <List>
          {['Cards', 'Enquiry'].map((text) => (
            <ListItem key={text}>
              <ListItemButton
                onClick={() =>
                  handleDrawerItemClick(`/${text.toLowerCase()}-table`)
                }
              >
                {text}
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Drawer>

      {/* <Grid container>
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
                <SaaSButton
                  onClick={clickHandler}
                  sx={{ marginBottom: '50px' }}
                >
                  {' '}
                  Create
                </SaaSButton>
              </Box>
              <CardTable />
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
       */}
    </Paper>
  )
}

export default AdminPanel
