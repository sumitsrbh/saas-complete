import { Box, Button, Paper, TextField } from '@mui/material'
import { useState } from 'react'
import { useData } from '../../DataContext/DataContext'

function CardEditForm() {
  const { cardEditValue, cardUpdate } = useData()
  const [input, setInput] = useState(cardEditValue)

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
    } else {
      setInput((prevInput) => ({
        ...prevInput,
        [name]: value,
      }))
    }
  }

  const formSubmitHandler = async (e) => {
    e.preventDefault()
    try {
      const response = await cardUpdate(cardEditValue.id, input)
      // Handle response
    } catch (error) {
      // Handle error
    }
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
            <img
              src={input.imagelink}
              alt="Preview"
              style={{ height: 100, marginRight: 10, width: '50%' }}
            />
            <input
              accept="image/*"
              id="image-upload"
              type="file"
              name="imagelink"
              style={{ display: 'none' }}
              onChange={handleChange}
            />
            <label htmlFor="image-upload">
              <Button variant="contained" component="span">
                Upload Image
              </Button>
            </label>
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

          <Button
            type="submit"
            variant="contained"
            color="primary"
            sx={{ width: '100%' }}
          >
            Submit
          </Button>
        </form>
      </Paper>
    </Box>
  )
}

export default CardEditForm
