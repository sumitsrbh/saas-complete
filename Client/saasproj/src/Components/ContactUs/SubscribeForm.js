import { Box, Paper, TextField } from '@mui/material'
import axios from 'axios'
import { useState } from 'react'
import { SaaSButton } from '../ThemeCust'

const initialValues = {
  name: '',
  email: '',
  subject: '',
  message: '',
  response: '',
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
  textAlign: 'center', // Centering text within TextField
}

const inputPropStyle = {
  style: {
    color: 'white',
    fontSize: '14px',
    fontWeight: '500',
  },
}

function SubscribeForm() {
  const [input, setInputs] = useState(initialValues)

  const handleChange = (e) => {
    setInputs((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }))
  }
  const formSubmitHandler = async (e) => {
    console.log('input value:', input)
    e.preventDefault()
    try {
      const response = await axios.post('http://127.0.0.1:8000/api/enquiry', {
        name: input.name,
        email: input.email,
        subject: input.subject,
        message: input.message,
      })
      setInputs((e) => {
        input.response = response
      })
      console.log('server response-input:', input.response)
    } catch (err) {
      console.error('Error submitting enquiry:', err)
    }
  }
  const buttonClickHandler = (e) => {
    setInputs(initialValues)
  }

  return (
    <Paper
      sx={{
        backgroundColor: '#262320',
      }}
    >
      <form onSubmit={formSubmitHandler}>
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'space-around',
            width: '50%',
            marginLeft: '300px',
          }}
        >
          <TextField
            name="name"
            value={input.name}
            placeholder="Your Name"
            type="text"
            variant="outlined"
            sx={{ ...inputStyle, width: '48%', marginBottom: '20px' }}
            InputProps={inputPropStyle}
            onChange={handleChange}
          />
          <TextField
            name="email"
            value={input.email}
            placeholder="Your email"
            type="email"
            variant="outlined"
            sx={{ ...inputStyle, width: '48%', marginBottom: '20px' }}
            InputProps={inputPropStyle}
            onChange={handleChange}
          />
        </Box>
        <Box
          sx={{
            justifyContent: 'space-around',
            width: '50%',
            marginLeft: '300px',
          }}
        >
          <TextField
            name="subject"
            value={input.subject}
            placeholder="Subject for message"
            type="text"
            variant="outlined"
            fullWidth
            sx={{ ...inputStyle, marginBottom: '20px' }} // Added marginBottom for spacing
            InputProps={inputPropStyle}
            onChange={handleChange}
          />
          <TextField
            name="message"
            value={input.message}
            placeholder="Type in your message"
            type="text"
            variant="outlined"
            fullWidth
            multiline
            rows={5}
            sx={{
              ...inputStyle,
              '& textarea': {
                height: 'auto',
                minHeight: '30px',
              },
              marginBottom: '20px',
            }}
            InputProps={inputPropStyle}
            onChange={handleChange}
          />
          <SaaSButton
            type="submit"
            onSubmit={formSubmitHandler}
            onClick={buttonClickHandler}
            sx={{
              borderRadius: '10px',
              textTransform: 'none',
              fontWeight: 700,
              padding: '12px 24px',
              marginBottom: '20px',
            }}
          >
            Submit
          </SaaSButton>
        </Box>
      </form>
    </Paper>
  )
}

export default SubscribeForm
