import {
  Alert,
  Box,
  List,
  ListItem,
  ListItemButton,
  Paper,
  Typography,
} from '@mui/material'
import CardTable from './Table/CardTable'
import EnquiryTable from './Table/EnquiryTable'

import { useNavigate } from 'react-router-dom'
import { useData } from '../DataContext/DataContext'
import CardCreateTemplate from './CardCreateTemplate'
import CardEditForm from './Table/CardEditForm'

const contanierStyle = {
  textAlign: 'center',
  width: '350px',
  margin: '0 auto',
  marginTop: '160px',
  marginBottom: '100px',
}

function AdminPanelV2() {
  const navigate = useNavigate()
  const {
    logged,
    cardEditState,
    cardTable,
    setCardTable,
    cardEditValue,
    handleTabClick,
    selectedTab,
    enquiryTable,
    setEnquiryTable,
  } = useData()

  // console.log('In admin panel cardEditState', cardEditState)
  console.log('In admin panel logged state', logged.state)

  return (
    <Box
      sx={{
        backgroundColor: '#262320',
        marginTop: '80px',
        display: 'flex',
      }}
    >
      {logged.state ? (
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
              {['Card Create', 'Cards Table', 'Enquiry'].map((text) => (
                <ListItem key={text}>
                  <ListItemButton
                    sx={{
                      backgroundColor: '#7777',
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
            {selectedTab === 'Card Create' && !cardEditState && (
              <CardCreateTemplate />
            )}
            {selectedTab === 'Cards Table' && !cardEditState && <CardTable />}
            {selectedTab === 'Enquiry' && !cardEditState && <EnquiryTable />}
            {cardEditState && <CardEditForm />}
          </Box>
        </>
      ) : (
        <Paper sx={contanierStyle}>
          <Alert severity="warning">Please login</Alert>
          <Typography>{logged.state}</Typography>
        </Paper>
      )}
    </Box>
  )
}

export default AdminPanelV2
