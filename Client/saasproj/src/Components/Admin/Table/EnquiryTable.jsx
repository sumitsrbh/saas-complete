import {
  Alert,
  Box,
  Card,
  CardContent,
  CardHeader,
  Modal,
  Paper,
  Typography,
} from '@mui/material'
import { DataGrid, GridColDef, GridRenderCellParams } from '@mui/x-data-grid'
import { useData } from '../../DataContext/DataContext'
import { SaaSButton } from '../../ThemeCust'
import DeleteIcon from '@mui/icons-material/Delete'
import { useEffect, useState } from 'react'
import { CardBuidlerV2 } from '../../CardBuilder/CardBuilderV2'
import { CardBuidler } from '../../CardBuilder/CardBuilder'
import SubscribeCardAlike from '../../HomeCompCont/SubscribeCard'
import SubscribeCard from '../../HomeCompCont/SubscribeForm'

const typoStyle = {
  color: '#ffd400',
  // textAlign: 'center',
  fontSize: '16px',
  lineHeight: '26px',
  marginLeft: '5px',
  // letterSpacing: '-0.06em',
  fontWeight: '700',
}

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
  const [previewValue, setPreviewvalue] = useState(null)
  const [previewOpen, setPreviewOpen] = useState(false)
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

  const handleRowClick = (e) => {
    // console.log('value of e', e.row)
    setPreviewOpen(!previewOpen)
    setPreviewvalue(e.row)
  }
  const closeModal = () => {
    setPreviewOpen(!previewOpen)
  }

  return (
    <Paper sx={{ height: '400px', width: '100%' }}>
      <DataGrid
        loading={isLoading}
        rows={rows}
        columns={columns}
        onRowClick={handleRowClick}
      />
      {previewOpen && (
        <Modal
          open={previewOpen}
          sx={{
            paddingLeft: '400px',
            paddingRight: '400px',
            paddingTop: '100px',
          }}
          onClose={closeModal}
        >
          <Card>
            <CardContent>
              <SubscribeCard header={previewValue.subject} />
              <Box
                sx={{
                  backgroundColor: '#262320',
                }}
              >
                <Typography sx={typoStyle}>Name:{previewValue.name}</Typography>
                <Typography sx={typoStyle}>
                  Email:{previewValue.email}
                </Typography>
                <Typography sx={typoStyle}>
                  Body:{previewValue.message}
                </Typography>
              </Box>
            </CardContent>
          </Card>
        </Modal>
      )}
    </Paper>
  )
}

export default EnquiryTable
