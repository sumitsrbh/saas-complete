import { Alert, AlertTitle, Snackbar } from '@mui/material'
import { useData } from '../../DataContext/DataContext'
import DeleteIcon from '@mui/icons-material/Delete'
import { useState } from 'react'

export function DeleteButton({ id }) {
  const { cardDelete, cardDeleteState, setCardDeleteState } = useData()
  const [error, setError] = useState(false)

  const handleDelete = async () => {
    try {
      if (id !== 'null') {
        const response = await cardDelete(id)
        if (response) {
          setCardDeleteState(true)
        }
      }
    } catch (err) {
      console.log('Delete error', err)
      setError(true)
    }
  }

  const snackbarHandler = () => {
    setCardDeleteState(false)
  }
  return (
    <>
      <DeleteIcon onClick={handleDelete} />
      <Snackbar
        open={cardDeleteState || error}
        autoHideDuration={2000}
        onClose={snackbarHandler}
        anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
      >
        {error ? (
          <Alert severity="error">
            <AlertTitle>Error</AlertTitle>
          </Alert>
        ) : (
          <Alert severity="success">
            <AlertTitle>Card Deleted</AlertTitle>
          </Alert>
        )}
      </Snackbar>
    </>
  )
}
