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

function CardEditForm() {
  const {
    cardEditValue,
    cardUpdate,
    setCardEditState,
    setCardEditValue,
    cardEditState,
  } = useData()
  const [input, setInput] = useState(cardEditValue)
  const [imagePreview, setImagePreview] = useState(null)
  const [snackbarKey, setSnackbarKey] = useState(0)
  const [error, setErr] = useState(false)
  const [resStatus, setResponseStatus] = useState()
  const [modifiedFields, setModifiedFields] = useState({})

  const handleChange = (e) => {
    const { name, value, files } = e.target

    if (name === 'imagelink' && files.length > 0) {
      const selectedFile = files[0]

      if (!selectedFile.type.startsWith('image/')) {
        alert('Please select an image file.')
        return
      }

      setInput((prevInput) => ({
        ...prevInput,
        [name]: selectedFile,
      }))
      setImagePreview(URL.createObjectURL(selectedFile))
      setModifiedFields((prevFields) => ({
        ...prevFields,
        [name]: selectedFile,
      }))
    } else {
      setInput((prevInput) => ({
        ...prevInput,
        [name]: value,
      }))
      setModifiedFields((prevFields) => ({
        ...prevFields,
        [name]: value,
      }))
    }
  }

  const formSubmitHandler = async (e) => {
    e.preventDefault()
    try {
      console.log('cardEditValue.id', input._id)
      console.log('cardEditValue, input', input)
      const response = await cardUpdate(input._id, input)
      console.log('response after calling cardUpdate', response)
      console.log('response.data', response)
      //   console.log('response.data.message', response.data.message)
      if (response === 'Card updated') {
        setCardEditState(false)
        setCardEditValue(null)
        setSnackbarKey((prevKey) => prevKey + 1)
      }
    } catch (err) {
      console.log(
        'Error submitting enquiry:',
        err
        // err.response,
        // err.response.status,
        // err.response.statusText
      )
      setErr(true)
      //   setResponseStatus(`${err.response.status},
      // ${err.response.statusText}`)
    }
  }
  const cancelButtonClick = () => {
    setCardEditState(false)
    setCardEditValue(null)
  }
  const handleSnackbarClose = () => {}
  const errorHandle = () => {
    setErr(false)
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
        <form onSubmit={formSubmitHandler} style={{ width: '100%' }}>
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
              src={imagePreview || input.imagelink}
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
            placeholder="Badge"
            type="text"
            variant="outlined"
            sx={{ width: '100%', marginBottom: '20px' }}
            onChange={handleChange}
          />

          <TextField
            name="headertext"
            label="Header Text"
            value={input.headertext}
            placeholder="Enter header for Card"
            type="text"
            variant="outlined"
            sx={{ width: '100%', marginBottom: '20px' }}
            onChange={handleChange}
          />

          <TextField
            name="author"
            label="Author"
            value={input.author}
            placeholder="Author"
            type="text"
            variant="outlined"
            sx={{ width: '100%', marginBottom: '20px' }}
            onChange={handleChange}
          />

          <TextField
            name="body"
            label="Body"
            value={input.body}
            placeholder="Type in body text"
            type="text"
            variant="outlined"
            multiline
            rows={5}
            sx={{ width: '100%', marginBottom: '20px' }}
            onChange={handleChange}
          />

          <Snackbar
            key={snackbarKey}
            open={!cardEditState}
            autoHideDuration={2000}
            onClose={handleSnackbarClose}
            message="Card Created"
            anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
            sx={{ backgroundColor: '#dde03d' }}
          />
          {error && (
            <Alert severity="error" onClose={errorHandle}>
              <AlertTitle>Error</AlertTitle>
              {resStatus}
            </Alert>
          )}

          <Box
            sx={{
              display: 'flex',
              justifyContent: 'center',
              width: '100%',
            }}
          >
            <Button
              onClick={formSubmitHandler}
              type="submit"
              variant="contained"
              color="primary"
              sx={{ width: '45%', marginRight: '10px' }}
            >
              Submit
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
