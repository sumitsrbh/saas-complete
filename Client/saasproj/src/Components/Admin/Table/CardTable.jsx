import { DataGrid, GridColDef } from '@mui/x-data-grid'
import { Alert, Backdrop, Modal, Paper } from '@mui/material'
import { useData } from '../../DataContext/DataContext'
import DeleteIcon from '@mui/icons-material/Delete'
import EditIcon from '@mui/icons-material/Edit'
import PreviewIcon from '@mui/icons-material/Preview'
import { useEffect, useState } from 'react'
import { formatDate } from '../../CardBuilder/DateFormat'
import { CardBuidlerV2 } from '../../CardBuilder/CardBuilderV2'
import { DeleteButton } from './DeleteButton'
import { Preview } from './PreviewButton'
import { EditButton } from './EditButton'

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
    field: 'preview',
    headerName: 'Preview',
    width: 70,
    renderCell: (params) => {
      return <Preview previewValue={params.row} />
    },
  },

  {
    field: 'edit',
    headerName: 'Edit',
    width: 70,
    renderCell: (params) => {
      return <EditButton id={params.row.serverId} />
    },
  },

  {
    field: 'delete',
    headerName: 'Delete',
    width: 70,
    renderCell: (params) => <DeleteButton id={params.row.serverId} />,
  },
]

function CardTable() {
  const { cards, isLoading } = useData()
  const [rows, setRows] = useState([])

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
  return (
    <Paper sx={{ height: '400px', width: 'auto' }}>
      <DataGrid
        loading={isLoading}
        rows={rows}
        columns={columns}
        // onRowClick={handleRowClick}
      />
    </Paper>
  )
}

export default CardTable
