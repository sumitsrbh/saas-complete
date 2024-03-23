import {
  Box,
  Divider,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Typography,
} from '@mui/material'
import NavigateNextIcon from '@mui/icons-material/NavigateNext'

function FooterLink() {
  return (
    <Box sx={{ backgroundColor: 'transparent' }}>
      <Typography variant="h6" gutterBottom>
        Navigation
      </Typography>
      <List>
        {[
          'Home',
          'Companies',
          'Events',
          'Fundraise',
          'Listicle',
          'Metrics',
          'Operations',
        ].map((text, index) => (
          <Box key={index}>
            <Divider sx={{ backgroundColor: 'white' }} />
            <ListItem
              key={index}
              sx={{
                alignItems: 'center',
                paddingLeft: '2px',
                paddingRight: '2px',
                transition: 'all 0.6s ease-out',
                '&:hover': {
                  paddingRight: '5px',
                  backgroundColor: '#333',
                  transition: 'all 0.5s ease-out',
                },
              }}
            >
              <ListItemText
                primary={text}
                sx={{
                  color: 'white',
                  transition: 'all 0.6s ease-out',
                  '&:hover': {
                    paddingLeft: '30px',
                    backgroundColor: '#333',
                    transition: 'all 0.5s ease-out',
                  },
                }}
              />
              <NavigateNextIcon
                sx={{
                  color: '#ffd400',
                }}
              />
            </ListItem>
          </Box>
        ))}
        <Divider sx={{ backgroundColor: 'white' }} />
      </List>
    </Box>
  )
}

export default FooterLink
