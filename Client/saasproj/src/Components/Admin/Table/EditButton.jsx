import EditIcon from '@mui/icons-material/Edit'

import { useState } from 'react'
import PreviewIcon from '@mui/icons-material/Preview'
import { Modal } from '@mui/material'
import { CardBuidlerV2 } from '../../CardBuilder/CardBuilderV2'

export function Preview({ previewValue }) {
  const [modelOpen, setModalOpen] = useState(false)

  // console.log('Preview value on view,previewValue', previewValue)
  const closeModal = () => {
    setModalOpen(!modelOpen)
  }
  return (
    <>
      <PreviewIcon onClick={() => setModalOpen(true)} />
      <Modal
        open={modelOpen}
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
    </>
  )
}
