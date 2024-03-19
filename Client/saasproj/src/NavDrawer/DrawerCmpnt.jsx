import {
  Drawer,
  IconButton,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu'

import React from 'react'
import NavLinks from './NavLinks'
import { ImgLogoComp } from '../Components/ThemeCust'

const listStyle = {
  width: '240px',
  '& .MuiPaper-elevation ': {
    backgroundColor: '#242424',
  },
}

function DrawerCmpnt({ links }) {
  const [openDrawer, setOpenDrawer] = React.useState(false)
  return (
    <React.Fragment>
      <Drawer
        sx={listStyle}
        open={openDrawer}
        onClose={() => setOpenDrawer(false)}
      >
        <List sx={{ color: 'white' }}>
          <IconButton>
            <IconButton sx={{ maxWidth: '180px' }}>
              <ImgLogoComp />
            </IconButton>
          </IconButton>
          <NavLinks links={links} oreintationCust={'vertical'} />
        </List>
      </Drawer>
      <IconButton onClick={() => setOpenDrawer(!openDrawer)}>
        <MenuIcon sx={{ fontSize: '40px', color: 'white' }} />
      </IconButton>
    </React.Fragment>
  )
}

export default DrawerCmpnt
