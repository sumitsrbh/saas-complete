import { Alert, Paper, TextField } from '@mui/material'

import { useNavigate } from 'react-router-dom'

import { useState } from 'react'
import { SaaSButton } from '../ThemeCust'
import { Login } from '@mui/icons-material'
import LogoutIcon from '@mui/icons-material/Logout'

import axios from 'axios'
import SubscribeCardAlike from '../HomeCompCont/SubscribeCard'
import { useData } from '../DataContext/DataContext'

const contanierStyle = {
  textAlign: 'center',
  width: '350px',
  margin: '0 auto',
  marginTop: '160px',
  marginBottom: '100px',
}
const inputPropStyle = {
  style: {
    color: 'white',
    fontSize: '14px',
    fontWeight: '500',
  },
}
// const logo = {
//   height: '40vmin',
//   pointerEvents: 'none',
// }
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
  marginTop: '20px',
}

const initialValues = {
  email: '',
  password: '',
}

function LogIn() {
  const {
    logged,
    setLoggedIn,
    logOutHanlder,
    input,
    setInputs,
    loginFromSubmitHandler,
  } = useData()

  const [error, setError] = useState(null)
  const navigate = useNavigate()
  console.log('State of login', logged.state)
  const handleChange = (e) => {
    setInputs((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value.trim(),
    }))
  }
  // const formSubmitHandler = async (e) => {
  //   e.preventDefault()
  //   try {
  //     const response = await axios.post(
  //       'http://127.0.0.1:8000/api/users/login',
  //       {
  //         email: input.email,
  //         password: input.password,
  //       }
  //     )
  //     console.log('In login', response)
  //     if (response.status === 200) {
  //       console.log('login status', response.status)
  //       setLoggedIn({
  //         state: true,
  //         value: 'Logout',
  //         token: response.data.token,
  //       })

  //       navigate('/admin-panel')
  //     }
  //   } catch (err) {
  //     console.log(err)
  //     setError(err.response.data.message || 'Wrong credentials.')
  //   }
  // }
  const formSubmitHandlerCall = async (e) => {
    e.preventDefault()
    try {
      const loginResponse = await loginFromSubmitHandler(
        input.email,
        input.password
      )
      // console.log('loginResponse', loginResponse)
    } catch (error) {
      // console.log('Error Login', error)
    }
  }

  const logInHanlder = () => {
    navigate('/login')
  }

  return (
    <div style={contanierStyle}>
      <Paper elevation={3} sx={{ padding: '20px', backgroundColor: '#242424' }}>
        <SubscribeCardAlike header="DSHG Sonic" formOn={false} />
        <div>
          {error && <Alert severity="error">{error}</Alert>}
          <form onSubmit={formSubmitHandlerCall}>
            {!logged.state ? (
              <>
                <TextField
                  name="email"
                  value={input.email}
                  placeholder="Your email"
                  type="text"
                  variant="outlined"
                  fullWidth
                  sx={inputStyle}
                  InputProps={inputPropStyle}
                  onChange={handleChange}
                />
                <br />
                <TextField
                  name="password"
                  value={input.password}
                  placeholder="password"
                  type="password"
                  variant="outlined"
                  fullWidth
                  sx={inputStyle}
                  InputProps={inputPropStyle}
                  onChange={handleChange}
                />
              </>
            ) : (
              // <Alert severity="info">You are LoggedIn </Alert>
              <></>
            )}

            {!logged.state ? (
              <SaaSButton
                sx={{ marginTop: '20px' }}
                type="submit"
                onClick={logInHanlder}
              >
                <Login />
                {logged.value}
              </SaaSButton>
            ) : (
              <SaaSButton
                sx={{ marginTop: '20px' }}
                type="submit"
                onClick={logOutHanlder}
              >
                <LogoutIcon />
                {logged.value}
              </SaaSButton>
            )}
          </form>
        </div>
      </Paper>
    </div>
  )
}

export default LogIn
