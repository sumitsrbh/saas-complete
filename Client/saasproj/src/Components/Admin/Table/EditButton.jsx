import { Alert, Modal } from '@mui/material'
import { useData } from '../../DataContext/DataContext'
import EditIcon from '@mui/icons-material/Edit'
import { useState } from 'react'

export function EditButton({ id }) {
  const { cardGet, cardEditState, setCardEditValue } = useData()
  const [modelOpen, setModalOpen] = useState(false)

  const handleEdit = async () => {
    if (id !== 'null') {
      console.log('editButton values', id)
      const response = await cardGet(id)
      if (response) {
        console.log('In EditButton, repose fro cardget', response.cards)
      }
    }
  }

  return <EditIcon onClick={handleEdit} />
}
