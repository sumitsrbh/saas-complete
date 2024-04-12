import { DataGrid, GridColDef } from '@mui/x-data-grid'
import { Alert, Backdrop, Modal, Paper } from '@mui/material'
import { useData } from '../../DataContext/DataContext'
import DeleteIcon from '@mui/icons-material/Delete'
import EditIcon from '@mui/icons-material/Edit'
import PreviewIcon from '@mui/icons-material/Preview'
import { useEffect, useState } from 'react'
import { formatDate } from '../../CardBuilder/DateFormat'
import { CardBuidlerV2 } from '../../CardBuilder/CardBuilderV2'

const columns: GridColDef[] = [
  { field: 'id', headerName: 'ID', width: 60 },
  // { field: 'serverId', headerName: 'Server Id', hideable: true, width: 250 },
  { field: 'headerText', headerName: 'Header Text', width: 350 },
  { field: 'badges', headerName: 'Badges', width: 150 },
  { field: 'author', headerName: 'Author', width: 150 },
  {
    field: 'date',
    headerName: 'Date',
    width: 150,
    renderCell: (params) => <>{formatDate(params.row.date)}</>,
  },
  {
    field: 'image',
    headerName: 'Image',
    width: 150,
    renderCell: (params) => (
      <img
        alt="cards-preview"
        src={params.row.image}
        style={{
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          padding: '1px',
        }}
      />
    ),
  },

  {
    field: 'edit',
    headerName: 'Edit',
    width: 70,
    renderCell: (params) => {
      return <EditIcon />
    },
  },

  {
    field: 'delete',
    headerName: 'Delete',
    width: 70,
    renderCell: (params) => <DeleteButton id={params.row.serverId} />,
  },
]

function DeleteButton({ id }) {
  const { cardDelete, cardDeleteState, setCardDeleteState } = useData()

  // console.log('In Card Table, Deleted id passed renderCell:', id)

  const handleDelete = async () => {
    if (id !== 'null') {
      await cardDelete(id)
      // console.log('afterDeleteCard', afterDeleteCard)
    }
  }

  return (
    <>
      <DeleteIcon onClick={handleDelete} />
      {cardDeleteState && <Alert severity="success"> Card Deleted.</Alert>}
      {setCardDeleteState(false)}
    </>
  )
}

function CardTable() {
  const { cards, isLoading } = useData()
  const [rows, setRows] = useState([])
  const [previewValue, setPreviewvalue] = useState(null)
  const [previewOpen, setPreviewOpen] = useState(false)
  useEffect(() => {
    setRows(
      cards.map((card, index) => ({
        id: index + 1,
        serverId: card._id,
        headerText: card.headertext,
        badges: card.badge,
        author: card.author,
        date: card.date,
        image: card.imagelink,
        body: card.body,
      }))
    )
  }, [cards])
  const handleRowClick = (e) => {
    console.log('value of e', e.row)
    setPreviewOpen(!previewOpen)
    setPreviewvalue(e.row)
  }
  const closeModal = () => {
    setPreviewOpen(!previewOpen)
  }

  return (
    <Paper sx={{ height: '400px', width: 'auto' }}>
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
          <CardBuidlerV2
            cardHeader={previewValue.headerText}
            cardImgUrl={previewValue.image}
            cardBadge={previewValue.badges}
            cardDate={previewValue.date}
            cardText={previewValue.body}
            truncate={false}
            animation={false}
          />
        </Modal>
      )}
    </Paper>
  )
}

export default CardTable
