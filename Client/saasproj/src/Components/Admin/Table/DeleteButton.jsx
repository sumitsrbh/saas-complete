import { Alert } from '@mui/material'
import { useData } from '../../DataContext/DataContext'
import DeleteIcon from '@mui/icons-material/Delete'

export function DeleteButton({ id }) {
  const { cardDelete, cardDeleteState, setCardDeleteState } = useData()

  const handleDelete = async () => {
    if (id !== 'null') {
      await cardDelete(id)
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
