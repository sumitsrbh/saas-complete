import { Box, Drawer, Paper } from '@mui/material'
import CardTable from './Table/CardTable'
import SubscribeCardAlike from '../HomeCompCont/SubscribeCard'
import EnquiryTable from './Table/EnquiryTable'
import { SaaSButton } from '../ThemeCust'

import { useNavigate } from 'react-router-dom'

function AdminPanelV2() {
  const navigate = useNavigate()
  const callCardTemplate = () => {
    navigate('/card-template')
  }
  return (
    <Paper
      elevation={0}
      sx={{ backgroundColor: '#262320', padding: '100px', marginTop: '80px' }}
    >
      <Paper>
        <SubscribeCardAlike header="SaaSJouranl List" formOn={false} />
        <Box sx={{ backgroundColor: '#262320' }}>
          <SaaSButton sx={{ marginBottom: '30px' }} onClick={callCardTemplate}>
            Create Card
          </SaaSButton>
        </Box>

        <CardTable />

        <SubscribeCardAlike header="Enquiry List" formOn={false} />

        <EnquiryTable />
      </Paper>
    </Paper>
  )
}

export default AdminPanelV2
