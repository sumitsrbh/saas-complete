import { DataGrid, GridColDef, GridRenderCellParams } from '@mui/x-data-grid'
import { Alert, Box, Paper } from '@mui/material'
import { useData } from '../../DataContext/DataContext'
import DeleteIcon from '@mui/icons-material/Delete'
import EditIcon from '@mui/icons-material/Edit'
import axios from 'axios'
import { useEffect, useState } from 'react'

let idToDelete = ''
const columns: GridColDef[] = [
  { field: 'id', headerName: 'ID', width: 60 },
  { field: 'serverId', headerName: 'Server Id', width: 250 },
  { field: 'headerText', headerName: 'Header Text', width: 350 },
  { field: 'badges', headerName: 'Badges', width: 150 },
  { field: 'author', headerName: 'Author', width: 150 },
  { field: 'date', headerName: 'Date', width: 150 },
  { field: 'image', headerName: 'Image', width: 150 },
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
