import { Alert, Modal } from '@mui/material'
import { useData } from '../../DataContext/DataContext'
import EditIcon from '@mui/icons-material/Edit'
import { useState } from 'react'

export function EditButton({ id }) {
  const { cardGet } = useData()

  const handleEdit = async () => {
    if (id !== 'null') {
      console.log('editButton values', id)
      await cardGet(id)
    }
  }

  return <EditIcon onClick={handleEdit} />
}
