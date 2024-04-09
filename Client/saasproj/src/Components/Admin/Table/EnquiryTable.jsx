import { Box, Paper, Typography } from '@mui/material'
import { DataGrid, GridColDef, GridRenderCellParams } from '@mui/x-data-grid'
import { useData } from '../../DataContext/DataContext'
import { SaaSButton } from '../../ThemeCust'
import DeleteIcon from '@mui/icons-material/Delete'

const columns: GridColDef[] = [
  { field: 'id', headerName: 'ID', width: 60 },
  { field: 'serverId', headerName: 'Server Id', width: 250 },
  {
    field: 'name',
    headerName: 'Name',
    width: 150,
    // editable: true,
  },
  {
    field: 'subject',
    headerName: 'Subject',
    width: 150,
    // editable: true,
  },
  {
    field: 'email',
    headerName: 'Email',
    width: 250,
    // editable: true,
  },
  {
    field: 'message',
    headerName: 'Message',
    width: 350,
    // editable: true,
  },
  {
    field: 'delete',
    headerName: 'Delete',
    width: 150,
    // editable: true,
    renderCell: (params) => {
      return <DeleteIcon />
    },
  },
]

function EnquiryTable() {
  const { enquiry, isLoading } = useData()
  const rows = enquiry.map((enq, index) => ({
    id: index + 1,
    serverId: enq._id,
    name: enq.name,
    subject: enq.subject,
    email: enq.email,
    message: enq.message,
  }))

  return (
    <Paper sx={{ height: '400px', width: '100%' }}>
      <DataGrid loading={isLoading} rows={rows} columns={columns} />
    </Paper>
  )
}

export default EnquiryTable
