import { Card, CardContent, Typography, TextField, Box } from '@mui/material'
import { useState } from 'react'
import { SaaSButton } from '../ThemeCust'

function SubscribeForm({ inputFields }) {
  const [input, setInput] = useState()

  return (
    <>
      <TextField
        value={input}
        placeholder="Your email"
        type="text"
        variant="standard"
        fullWidth
        InputProps={{
          style: {
            color: 'white',
            fontSize: '12px',
            fontWeight: '500',
            padding: '15px 10px 15px 10px',
          },
        }}
        onChange={(e) => setInput(e.target.value)}
      />
      <Box sx={{ display: 'flex', marginTop: '20px' }}>
        <SaaSButton
          variant="outlined"
          sx={{
            width: '60%',
            color: 'white',
            borderRadius: '40px',
            backgroundColor: 'transparent',
            borderColor: 'white',
            borderWidth: '1px',
            margin: 'auto',
            textAlign: 'center',

            '&:hover': {
              borderColor: 'transparent',
            },
          }}
        >
          Submit
        </SaaSButton>
      </Box>
    </>
  )
}

function SubscribeCardAlike({ header, text, formOn = true }) {
  return (
    <Card square={true} elevation={0}>
      <CardContent
        sx={{
          backgroundColor: '#262320',
          paddingLeft: '30px',
          paddingRight: '30px',
        }}
      >
        <Typography
          sx={{
            color: '#ffd400',
            textAlign: 'center',
            fontSize: '24px',
            lineHeight: '26px',
            marginBottom: '23px',
            padding: '17px 0 0',
            letterSpacing: '-0.06em',
            fontWeight: '700',
          }}
          variant="h3"
        >
          {header}
        </Typography>
        <Typography
          sx={{
            color: '#ffffff80',
            lineHeight: '30px',
            margin: '0 0 15px',
            marginBlockStart: '1em',
            marginBlockEnd: '1em',
            marginInlineStart: '0px',
            marginInlineEnd: '0px',
            fontSize: '14px',
            textAlign: 'center',
          }}
        >
          {text}
        </Typography>
        {formOn && <SubscribeForm />}
      </CardContent>
    </Card>
  )
}

export default SubscribeCardAlike
