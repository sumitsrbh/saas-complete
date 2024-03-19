import { styled, Button, Grid } from '@mui/material'

import image from './Images/SaaSLogo.png'

export function EmptySapce() {
  return (
    <Grid
      className="epmty-space32"
      style={{ height: '10px', width: '100%' }}
      // backgroundColor: 'red'
    />
  )
}

export const StyleDropDownfrmAppbr = {
  '& button': { textTransform: 'none' },
  '& a': { textTransform: 'none' },
  '& a:hover': { color: '#dde03d' },

  '& div': { alignItems: 'center' },
  backgroundColor: '#242424',
  margin: 'auto',
  padding: '10px 10px',
}

export const SaaSButton = styled(Button)`
  color: black;
  background-color: #dde03d;
  border-radius: 20px;

  :hover {
    color: white;
    background-color: #b5a606;
  }
`

export function ImgLogoComp() {
  return (
    <img
      style={{
        minWidth: '120px',
        maxWidth: '15%',
      }}
      src={image}
      alt="Company Logo"
    />
  )
}
