import {
  Alert,
  Box,
  List,
  ListItem,
  ListItemButton,
  Paper,
} from '@mui/material'
import CardTable from './Table/CardTable'
import EnquiryTable from './Table/EnquiryTable'

import { useNavigate } from 'react-router-dom'
import { useData } from '../DataContext/DataContext'
import CardCreateTemplate from './CardCreateTemplate'
import CardEditForm from './Table/CardEditForm'

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

  console.log('In admin panel cardEditState', cardEditState)

  return (
    <Box
      sx={{
        backgroundColor: '#262320',
        marginTop: '80px',
        display: 'flex',
      }}
    >
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
            {selectedTab === 'Card Create' && <CardCreateTemplate />}
            {selectedTab === 'Cards Table' && <CardTable />}
            {selectedTab === 'Enquiry' && <EnquiryTable />}
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
