import { Alert, Box, Paper, Typography } from '@mui/material'
import { DataGrid, GridColDef, GridRenderCellParams } from '@mui/x-data-grid'
import { useData } from '../../DataContext/DataContext'
import { SaaSButton } from '../../ThemeCust'
import DeleteIcon from '@mui/icons-material/Delete'
import { useEffect, useState } from 'react'

const columns: GridColDef[] = [
  { field: 'id', headerName: 'ID', width: 60 },
  // { field: 'serverId', headerName: 'Server Id', width: 250 },
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
    width: 70,
    renderCell: (params) => <DeleteButton id={params.row.serverId} />,
  },
]

function DeleteButton({ id }) {
  const { enquiryDelete, enquiryDeleteState, setEnquiryDeleteState } = useData()

  // console.log('In Enquiry Table, Deleted id passed renderCell:', id)

  const handleDelete = async () => {
    if (id !== 'null') {
      await enquiryDelete(id)
    }
  }
  return (
    <>
      <DeleteIcon onClick={handleDelete} />
      {enquiryDeleteState && (
        <Alert severity="success"> Enquiry Deleted.</Alert>
      )}
      {setEnquiryDeleteState(false)}
    </>
  )
}

function EnquiryTable() {
  const { enquiry, isLoading } = useData()
  const [rows, setRows] = useState([])
  useEffect(() => {
    setRows(
      enquiry.map((enq, index) => ({
        id: index + 1,
        serverId: enq._id,
        name: enq.name,
        subject: enq.subject,
        email: enq.email,
        message: enq.message,
      }))
    )
  }, [enquiry])

  return (
    <Paper sx={{ height: '400px', width: '100%' }}>
      <DataGrid loading={isLoading} rows={rows} columns={columns} />
    </Paper>
  )
}

export default EnquiryTable
