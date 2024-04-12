import {
  Alert,
  Box,
  Card,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  Paper,
} from '@mui/material'
import CardTable from './Table/CardTable'
import SubscribeCardAlike from '../HomeCompCont/SubscribeCard'
import EnquiryTable from './Table/EnquiryTable'
import { SaaSButton } from '../ThemeCust'

import { useNavigate } from 'react-router-dom'
import { useData } from '../DataContext/DataContext'
import { useState } from 'react'
import CardTemplate from './CardTemplate'
import EditTemplate from './Table/EditTemplate'
import CardEditForm from './Table/CardEditForm'

function AdminPanelV2() {
  const navigate = useNavigate()
  const { logged, cardEditState, cardEditValue } = useData()
  const [selectedTab, setSelectedTab] = useState('Cards')
  const [cardTable, setCardTable] = useState(false)
  const [enquiryTable, setEnquiryTable] = useState(false)

  const handleTabClick = (tab) => {
    setSelectedTab(tab)
    if (tab === 'Cards') {
      setCardTable(true)
      setEnquiryTable(false)
      // navigate('/cards-table')
    } else if (tab === 'Enquiry') {
      // Navigate to the Enquiry table
      setEnquiryTable(true)
      setCardTable(false)
      // navigate('/enquiry-table')
    } else if (tab === 'Card Create') {
      setEnquiryTable(false)
      setCardTable(false)
    }
  }
  console.log('In admin panel cardEditState', cardEditState)

  return (
    <Box
      sx={{
        backgroundColor: '#262320',
        marginTop: '80px',
        display: 'flex',
      }}
    >
      {' '}
      {logged ? (
        <>
          <Paper
            elevation={10}
            sx={{
              backgroundColor: '#262320',
              width: '150px',
              marginRight: '10px',
              borderRadius: '2px',
              // borderStyle: 'solid',
              // borderWidth: '1px',
              // borderLeftWidth: 0,
              // borderBottomWidth: 0,
              // borderColor: '#ffd340',
            }}
          >
            <List>
              {['Cards', 'Enquiry', 'Card Create'].map((text) => (
                <ListItem key={text}>
                  <ListItemButton
                    sx={{
                      color: '#ffd400',
                      '&:hover': {
                        textDecoration: 'underline',
                      },
                    }}
                    selected={selectedTab === text}
                    onClick={() => handleTabClick(text)}
                  >
                    {text}
                  </ListItemButton>
                </ListItem>
              ))}
            </List>
          </Paper>

          <Box sx={{ flexGrow: 1 }}>
            {!cardTable && !enquiryTable && !cardEditState && <CardTemplate />}
            {cardTable && !cardEditState && <CardTable />}
            {enquiryTable && !cardEditState && <EnquiryTable />}
            {cardEditState && <CardEditForm />}
          </Box>
        </>
      ) : (
        <Alert severity="warning">Please login</Alert>
      )}
    </Box>
  )
}

export default AdminPanelV2
