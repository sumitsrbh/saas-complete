import { Modal, Typography } from '@mui/material'
import { useData } from '../../DataContext/DataContext'
import { useState } from 'react'
import CardEditForm from './CardEditForm'

const EditTemplate = () => {
  const { cardEditValue, setCardEditState, cardEditState } = useData()
  //   const [modelOpen, setModalOpen] = useState(false)

  console.log(' EditTemplate 000, cardEditState', cardEditState)
  //   const closeModal = () => {
  //     setModalOpen(!modelOpen)
  //     setCardEditState(false)
  //   }

  //   return (
  //     <>
  //       {cardEditState && (
  //         <Modal
  //           open="true"
  //           sx={{
  //             paddingLeft: '400px',
  //             paddingRight: '400px',
  //             paddingTop: '100px',
  //           }}
  //           //   onClose={closeModal}
  //         >
  //           {/* <CardEditForm editValues={cardEditValue} /> */}
  //         </Modal>
  //       )}
  //     </>
  //   )
}

export default EditTemplate
