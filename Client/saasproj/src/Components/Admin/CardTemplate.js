import { Alert, AlertTitle, Box, Paper, TextField } from '@mui/material'
import axios from 'axios'
import { useState } from 'react'
import SubscribeCardAlike from '../HomeCompCont/SubscribeCard'
import { SaaSButton } from '../ThemeCust'

const initialValues = {
  badge: '',
  title: '',
  headertext: '',
  imagelink: '',
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

function CardTemplate() {
  const [input, setInputs] = useState(initialValues)
  const [error, setErr] = useState(false)
  const [resStatus, setResponseStatus] = useState()
  const handleChange = (e) => {
    setInputs((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }))
    console.log('Input values:', input)
  }

  const formSubmitHandler = async (e) => {
    e.preventDefault()
    try {
      const response = await axios.post('http://127.0.0.1:8000/api/cards', {
        headertext: input.headertext,
        author: input.author,
        body: input.body,
        badge: input.badge,
        date: new Date(),
        imagelink: input.imagelink,
      })
      if (response.data.message === 'success') {
        setInputs(initialValues)
      }
    } catch (err) {
      console.error(
        'Error submitting enquiry:',
        err.response,
        err.response.status,
        err.response.statusText
      )
      setErr(true)
      setResponseStatus(`${err.response.status},
        ${err.response.statusText}`)
    }
  }
  const buttonClickHandler = () => {
    if (error) {
      setErr(false)
      setResponseStatus('')
    }
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
          marginTop: '60px',
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

            <TextField
              name="imagelink"
              value={input.imagelink}
              placeholder="image url"
              type="text"
              variant="outlined"
              sx={{
                ...inputStyle,
                marginBottom: '20px',
              }}
              InputProps={inputPropStyle}
              onChange={handleChange}
            />
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
          {error && (
            <Alert severity="error">
              <AlertTitle>Error</AlertTitle>
              {resStatus}
            </Alert>
          )}
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

export default CardTemplate
