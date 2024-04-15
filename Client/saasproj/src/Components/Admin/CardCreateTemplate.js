import {
  Alert,
  AlertTitle,
  Box,
  Paper,
  Snackbar,
  TextField,
} from '@mui/material'
import axios from 'axios'
import { useState } from 'react'
import SubscribeCardAlike from '../HomeCompCont/SubscribeCard'
import { SaaSButton } from '../ThemeCust'
import DriveFolderUploadTwoToneIcon from '@mui/icons-material/DriveFolderUploadTwoTone'
import { useData } from '../DataContext/DataContext'

const initialValues = {
  badge: '',
  title: '',
  headertext: '',
  imagelink: null,
  body: '',
  author: '',
  date: '',
}

const inputStyle = {
  '& .MuiOutlinedInput-root': {
    '& fieldset': {
      borderColor: 'white',
    },
    '&:hover fieldset': {
      borderColor: 'yellow',
    },
    '&.Mui-focused fieldset': {
      borderColor: 'yellow',
    },
  },
  textAlign: 'center',
}

const inputPropStyle = {
  style: {
    color: 'white',
    fontSize: '14px',
    fontWeight: '500',
  },
}

function CardCreateTemplate() {
  const {
    cardCreated,
    setCardCreated,
    setSelectedTab,
    setCardTable,
    setCards,
  } = useData()
  const [input, setInputs] = useState(initialValues)
  const [error, setErr] = useState(false)
  const [snackbarKey, setSnackbarKey] = useState(0)
  const handleChange = (e) => {
    const { name, value, files } = e.target

    if (name === 'imagelink' && files.length > 0) {
      // console.log('imagelink: ', name, '/n', 'files: ', files)
      // Access the first file from the FileList

      const selectedFile = files[0]

      // Sanitize the file name by replacing spaces with underscores
      const sanitizedFileName = selectedFile.name.replace(/\s+/g, '_')

      if (!selectedFile.type.startsWith('image/')) {
        alert('Please select an image file.')
        return
      }
      console.log('Image file path selectedFile: ', selectedFile)
      // Create a new File object with the sanitized file name
      const sanitizedFile = new File([selectedFile], sanitizedFileName, {
        type: selectedFile.type,
      })
      setInputs((prevState) => ({
        ...prevState,
        [name]: sanitizedFile,
      }))
    } else {
      // For regular text inputs, update the state with the input value
      setInputs((prevState) => ({
        ...prevState,
        [name]: value,
      }))
    }
  }

  const formSubmitHandler = async (e) => {
    e.preventDefault()
    try {
      const formData = new FormData()
      Object.entries(input).forEach(([key, value]) => {
        formData.append(key, value)
      })

      const response = await axios.post(
        'http://127.0.0.1:8000/api/cards',
        formData
      )
      console.log('response in the CardCreateTemplate', response.data.data)
      if (response.data.message === 'Card created') {
        const cardsData = response && response.data.data.cards
        const reversedCardsData = cardsData.reverse()
        setCards(reversedCardsData)
        setInputs(initialValues)
        setSnackbarKey((prevKey) => prevKey + 1)
        setCardCreated(true)
      }
    } catch (err) {
      console.log('Error submitting enquiry:', err)
      setErr(true)
      // setResponseStatus(`${err.response.status},
      //   ${err.response.statusText}`)
    }
  }
  const handleSnackbarClose = () => {
    setCardCreated(false)
    setSelectedTab('Cards Table')
  }
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
      }}
    >
      <Paper
        elevation={0}
        sx={{
          backgroundColor: '#262320',
          padding: '30px',
          // marginTop: '60px',
        }}
      >
        <form onSubmit={formSubmitHandler}>
          <Box sx={{ display: 'flex', flexDirection: 'column' }}>
            <SubscribeCardAlike
              header="Enter Card Particulars"
              formOn={false}
            />
            <TextField
              name="headertext"
              value={input.headertext}
              placeholder="Enter header for Card"
              type="text"
              variant="outlined"
              sx={{
                ...inputStyle,
                marginBottom: '20px',
              }}
              InputProps={inputPropStyle}
              onChange={handleChange}
            />

            <TextField
              name="author"
              value={input.author}
              placeholder="Author"
              type="text"
              variant="outlined"
              sx={{
                ...inputStyle,
                marginBottom: '20px',
              }}
              InputProps={inputPropStyle}
              onChange={handleChange}
            />

            <TextField
              name="badge"
              value={input.badge}
              placeholder="Badge"
              type="text"
              variant="outlined"
              sx={{
                ...inputStyle,
                marginBottom: '20px',
              }}
              InputProps={inputPropStyle}
              onChange={handleChange}
            />
            <Box
              sx={{
                display: 'flex',
                alignText: 'center',
                justifyContent: 'center',
              }}
            >
              <TextField
                name="imagelink"
                // value={input.imagelink}
                placeholder="Upload an image "
                accept="image/*"
                type="file"
                variant="outlined"
                sx={{
                  ...inputStyle,
                  marginBottom: '20px',
                  marginRight: '10px',
                }}
                InputProps={inputPropStyle}
                onChange={handleChange}
              />
              {input.imagelink && (
                <img
                  src={URL.createObjectURL(input.imagelink)}
                  alt="Preview"
                  style={{ height: 100, marginBottom: 25 }}
                />
              )}
            </Box>
          </Box>
          <TextField
            name="body"
            value={input.body}
            placeholder="Type in body text"
            type="text"
            variant="outlined"
            multiline
            rows={5}
            sx={{
              ...inputStyle,
              '& textarea': {
                height: 'auto',
                minHeight: '30px',
              },
              marginBottom: '20px',
              width: '150%',
            }}
            InputProps={inputPropStyle}
            onChange={handleChange}
          />
          <Snackbar
            key={snackbarKey}
            open={cardCreated || error}
            autoHideDuration={2000}
            onClose={handleSnackbarClose}
            // message="Card Created"
            anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
            // sx={{ backgroundColor: '#dde03d' }}
          >
            {error ? (
              <Alert severity="error" onClose={errorHandle}>
                <AlertTitle>Error</AlertTitle>
              </Alert>
            ) : (
              <Alert severity="success">
                <AlertTitle>Card Created</AlertTitle>
              </Alert>
            )}
          </Snackbar>

          <SaaSButton
            type="submit"
            onSubmit={formSubmitHandler}
            // onClick={buttonClickHandler}
            sx={{
              borderRadius: '10px',
              textTransform: 'none',
              fontWeight: 700,
              padding: '12px 24px',
              marginTop: '20px',
            }}
          >
            Submit
          </SaaSButton>
        </form>
      </Paper>
    </Box>
  )
}

export default CardCreateTemplate
