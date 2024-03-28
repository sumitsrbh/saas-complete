import {
  Box,
  Card,
  CardContent,
  CardMedia,
  Grid,
  LinearProgress,
  Link,
  Typography,
  useMediaQuery,
  useTheme,
} from '@mui/material'
import React, { useState } from 'react'
import { SaaSButton } from '../ThemeCust'
// import imgObjHom from '../Images/ImageHomePage/ImgArryHom'
import styled from 'styled-components'
import { useData } from '../DataContext/DataContext'

const CustomProgrssBar = styled(LinearProgress)`
  .MuiLinearProgress-barColorPrimary {
    background-color: #dde03d;
  }
`

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

function HomefirstRowFstColCard() {
  const { cards } = useData()
  const [activeCard, setActiveCard] = useState(null)
  const imgObjHom = cards.slice(0, 3)
  // console.log('Array length', imgObjHom.length)
  const theme = useTheme()
  const isScreenMd = useMediaQuery(theme.breakpoints.down('md'))
  const isScreenSm = useMediaQuery(theme.breakpoints.down('sm'))

  const handleHover = (index) => {
    setActiveCard(index)
  }

  const progressWidth =
    activeCard !== null ? ((activeCard + 1) / imgObjHom.length) * 100 : 0

  return (
    <Card container>
      <Card>
        {imgObjHom.length ? (
          <Card
            className="card-for-backgroundImg"
            sx={{
              backgroundImage: `url(${
                activeCard === null
                  ? imgObjHom[0].imagelink
                  : imgObjHom[activeCard].imagelink
              })`,
              transition: 'background-image 0.8s ease-In-Out',
              backgroundSize: 'cover',
              color: '#dde03d',
              fontSize: { lg: '16px', md: '14px', sm: '12px' },
              fontWeight: { lg: '400', md: '350', sm: '300' },
              letterSpacing: '9px',
              height: '83vh',
              position: 'relative',
              width: '100%',
            }}
          >
            <CardContent>
              <Box>
                <CardContent
                  sx={{
                    transition: 'all 0.8s ease-In-Out',
                  }}
                >
                  <SaaSButton>
                    {activeCard === null
                      ? imgObjHom[0].badge
                      : imgObjHom[activeCard].badge}
                  </SaaSButton>

                  <Typography
                    variant="h4"
                    sx={{
                      marginTop: '10px',
                      fontSize: { lg: '30px', md: '24px', sm: '20px' },
                      fontWeight: '600',
                      letterSpacing: '-0.06em',
                      transition: 'color 0.8s ease-In-Out',
                    }}
                  >
                    {activeCard === null
                      ? imgObjHom[0].headertext
                      : imgObjHom[activeCard]?.headertext}
                  </Typography>
                </CardContent>
              </Box>
            </CardContent>
            {!isScreenSm && (
              <Grid container sx={{ position: 'absolute', bottom: '0' }}>
                <Grid item xs={12}>
                  <CustomProgrssBar
                    variant="determinate"
                    value={progressWidth}
                    sx={{
                      position: 'realtive',
                      width: '100%',
                    }}
                  />
                  <Grid container spacing={1}>
                    {imgObjHom.map((item, index) => (
                      <CardArry
                        key={index}
                        badge={item.badge}
                        headerText={item.headertext}
                        gridVal={4}
                        cardIndex={index}
                        handleHover={handleHover}
                      />
                    ))}
                  </Grid>
                </Grid>
              </Grid>
            )}
          </Card>
        ) : null}
      </Card>
    </Card>
  )
}

export default HomefirstRowFstColCard
