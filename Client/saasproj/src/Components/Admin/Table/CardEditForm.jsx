import {
  Alert,
  AlertTitle,
  Box,
  Button,
  Paper,
  Snackbar,
  TextField,
} from '@mui/material'
import { useState } from 'react'
import { useData } from '../../DataContext/DataContext'
import { SaaSButton } from '../../ThemeCust'
import axios from 'axios'

function CardEditForm() {
  const {
    cardEditValue,
    cardUpdate,
    setCardEditState,
    setCardEditValue,
    cardEditState,
    setSelectedTab,
    setCards,
  } = useData()
  const [input, setInputs] = useState({
    author: cardEditValue.author,
    badge: cardEditValue.badge,
    body: cardEditValue.body,
    headertext: cardEditValue.headertext,
    imagelink: cardEditValue.imagelink,
  })
  const inputId = cardEditValue._id
  const [imagePreview, setImagePreview] = useState(null)
  const [snackbarKey, setSnackbarKey] = useState(0)
  const [snackbarOpen, setSnackbarOpen] = useState(false)
  const [error, setErr] = useState(false)
  // const [resStatus, setResponseStatus] = useState()
  const [modifiedFields, setModifiedFields] = useState({})

  // console.log('pre loded vlaue of edit card', input)
  // console.log('id to be edited', inputId)

  const handleChange = (e) => {
    const { name, value, files } = e.target

    if (name === 'imagelink' && files.length > 0) {
      const selectedFile = files[0]
      const sanitizedFileName = selectedFile.name.replace(/\s+/g, '_')
      if (!selectedFile.type.startsWith('image/')) {
        alert('Please select an image file.')
        return
      }
      const sanitizedFile = new File([selectedFile], sanitizedFileName, {
        type: selectedFile.type,
      })

      setImagePreview(URL.createObjectURL(selectedFile))

      setInputs((prevState) => ({
        ...prevState,
        [name]: sanitizedFile,
      }))
      console.log('image file 00', input.imagelink)
    } else {
      setInputs((prevState) => ({
        ...prevState,
        [name]: value,
      }))
    }
    console.log('image file 01', input.imagelink)
  }

  const cardEditFormSubmitHandler = async (e) => {
    e.preventDefault()
    try {
      const formData = new FormData()
      Object.entries(input).forEach(([key, value]) => {
        formData.append(key, value)
      })
      const response = await axios.patch(
        `http://127.0.0.1:8000/api/cards/${inputId}`,
        formData
      )
      // console.log('response  fetchUpdateCard after update', response)

      if (response) {
        const cardsData = response && response.data.data
        // console.log('response.data.data.cards', response.data.data.cards)
        const reversedCardsData = cardsData.cards.reverse()
        console.log('in the response of card edit snackbarOpen, cardEditVal')
        setCards(reversedCardsData)
        setSnackbarOpen(true)
        setCardEditValue(null)
        console.log('in the if statement cardEdit state', cardEditState)
        setInputs(null)

        setCardEditState(false)
        setSelectedTab('Cards Table')
        setSnackbarKey((prevKey) => prevKey + 1)
      }
    } catch (error) {
      console.log('Error Updation', error)
      throw error
    }
  }
  console.log('CardEdit state in cardEdit Form ', cardEditState)
  const cancelButtonClick = () => {
    setCardEditState(false)
    setCardEditValue(null)
  }
  const handleSnackbarClose = () => {
    setSnackbarOpen(false)
    setCardEditState(false)
    setSelectedTab('Cards Table')
  }

  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#262320',
        padding: '20px',
      }}
    >
      <Paper
        elevation={0}
        sx={{
          backgroundColor: 'white',
          padding: '30px',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <form onSubmit={cardEditFormSubmitHandler} style={{ width: '100%' }}>
          <Box
            sx={{
              display: 'flex',
              gap: '10px',
              width: '100%',
              alignItems: 'center',
              marginBottom: '20px',
            }}
          >
            {/* display image */}
            <img
              src={cardEditValue.imagelink}
              alt="Preview"
              style={{ height: 200, marginRight: 10, width: '40%' }}
            />
            {/* uplod image */}
            <TextField
              name="imagelink"
              id="image-upload"
              accept="image/*"
              type="file"
              variant="outlined"
              style={{ display: 'none' }}
              onChange={handleChange}
            />
            <label htmlFor="image-upload">
              <SaaSButton component="span">Upload Image</SaaSButton>
            </label>
            {imagePreview && (
              <img
                src={imagePreview}
                alt="Preview"
                style={{ height: 100, marginLeft: 10 }}
              />
            )}
          </Box>

          <TextField
            name="badge"
            label="Badge"
            value={input.badge}
            type="text"
            variant="outlined"
            sx={{ width: '100%', marginBottom: '20px' }}
            onChange={handleChange}
          />

          <TextField
            name="headertext"
            label="Header Text"
            value={input.headertext}
            type="text"
            variant="outlined"
            sx={{ width: '100%', marginBottom: '20px' }}
            onChange={handleChange}
          />

          <TextField
            name="author"
            label="Author"
            value={input.author}
            type="text"
            variant="outlined"
            sx={{ width: '100%', marginBottom: '20px' }}
            onChange={handleChange}
          />

          <TextField
            name="body"
            label="Body"
            value={input.body}
            type="text"
            variant="outlined"
            multiline
            rows={5}
            sx={{ width: '100%', marginBottom: '20px' }}
            onChange={handleChange}
          />

          <Snackbar
            key={snackbarKey}
            open={snackbarOpen || error}
            autoHideDuration={2000}
            onClose={handleSnackbarClose}
            anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
          >
            {error ? (
              <Alert severity="error">
                <AlertTitle>Error</AlertTitle>
              </Alert>
            ) : (
              <Alert severity="success">
                <AlertTitle>Card Edited</AlertTitle>
              </Alert>
            )}
          </Snackbar>

          <Box
            sx={{
              display: 'flex',
              justifyContent: 'center',
              width: '100%',
            }}
          >
            <Button
              onClick={cardEditFormSubmitHandler}
              type="submit"
              variant="contained"
              color="primary"
              sx={{ width: '45%', marginRight: '10px' }}
            >
              Update
            </Button>
            <Button
              onClick={cancelButtonClick}
              type="reset"
              variant="contained"
              color="primary"
              sx={{ width: '45%', marginLeft: '10px' }}
            >
              Cancel
            </Button>
          </Box>
        </form>
      </Paper>
    </Box>
  )
}

export default CardEditForm
