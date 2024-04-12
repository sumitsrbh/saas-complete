import { Typography, Grid, Paper } from '@mui/material'

function SubscribeCard({ header }) {
  return (
    <Paper
      sx={{
        backgroundColor: '#262320',
      }}
      square={true}
    >
      <Grid container>
        <Grid item xs={2}></Grid>
        <Grid item xs={8}>
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
        </Grid>
        <Grid item xs={2}></Grid>
      </Grid>
    </Paper>
  )
}

export default SubscribeCard
