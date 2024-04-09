import { Box, Paper } from '@mui/material'
import CardTable from './Table/CardTable'
import SubscribeCardAlike from '../HomeCompCont/SubscribeCard'
import EnquiryTable from './Table/EnquiryTable'

function AdminPanelV2() {
  return (
    <Paper
      elevation={0}
      sx={{ backgroundColor: '#262320', padding: '100px', marginTop: '80px' }}
    >
      <Paper>
        <SubscribeCardAlike header="SaaSJouranl List" formOn={false} />
        <CardTable />

        <SubscribeCardAlike header="Enquiry List" formOn={false} />
        <EnquiryTable />
      </Paper>
    </Paper>
  )
}

export default AdminPanelV2
