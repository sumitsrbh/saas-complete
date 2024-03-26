import { Card, CardContent, CardMedia, Grid, Typography } from '@mui/material'
import { SaaSButton } from '../ThemeCust'
import { Link } from 'react-router-dom'

export function CardArry({
  badge,
  headerText,
  backgrndImg,
  gridVal,
  cardIndex,
  handleHover,
}) {
  return (
    <Grid item xs={gridVal}>
      <Card
        className="custom-card"
        onMouseEnter={() => handleHover(cardIndex)}
        sx={{ backgroundColor: 'transparent', boxShadow: 'none' }}
      >
        <CardContent
          sx={{
            backgroundImage: `url(${backgrndImg})`,
            color: 'white',
          }}
        >
          <SaaSButton>{badge}</SaaSButton>
          <CardMedia image={backgrndImg} />
          <Link
            underline="none"
            component="button"
            sx={{
              color: 'white',
              transition: 'color 0.2s ease-out',
              '&:hover': { color: '#dde03d' },
            }}
          >
            <Typography
              sx={{
                textAlign: 'left',
                fontSize: { lg: '14px', md: '13px', sm: '12px' },
                fontWeight: { lg: '600', md: '500', sm: '400' },
              }}
            >
              {headerText}
            </Typography>
            {/* {headerText} */}
          </Link>
        </CardContent>
      </Card>
    </Grid>
  )
}
