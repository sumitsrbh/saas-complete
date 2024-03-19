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
import React, { useEffect, useState } from 'react'
import { SaaSButton } from '../ThemeCust'
// import imgObjHom from '../Images/ImageHomePage/ImgArryHom'
import { fetchImgObjHom } from '../../Data'
import { imgCard1 } from '../Images/ImageHomePage/ImgArryHom'
import { EmptySapce } from '../ThemeCust'
import styled from 'styled-components'

const CustomProgrssBar = styled(LinearProgress)`
  .MuiLinearProgress-barColorPrimary {
    background-color: #ffd400;
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
            {headerText}
          </Link>
        </CardContent>
      </Card>
    </Grid>
  )
}

function HomefirstRowFstColCard() {
  const [activeCard, setActiveCard] = useState(null)
  const [imgObjHom, setImgObjHom] = useState([])
  // console.log('Array length', imgObjHom.length)
  const theme = useTheme()
  const isScreenMd = useMediaQuery(theme.breakpoints.down('md'))
  const isScreenSm = useMediaQuery(theme.breakpoints.down('sm'))
  // console.log('Fetched data from card in component line 73')

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetchImgObjHom()
        const cards = response && response.cards.slice(0, 3)
        // console.log('Fetched data from card in component', response)
        setImgObjHom(cards)
      } catch (error) {
        console.error('Error fetching data:', error)
      }
    }
    fetchData()
  }, [])

  // fetchImgObjHom()
  //   .then((response) => {
  //     console.log(response)
  // setImgObjHom(response)
  //   })
  //   .catch((err) => {
  //     console.log('erro fetching data', err)
  //   })

  console.log('imgObjHom[0]', imgObjHom[0], typeof imgObjHom[0])
  console.log('imgObjHom', imgObjHom, typeof imgObjHom)
  const handleHover = (index) => {
    setActiveCard(index)
  }
  return (
    <Grid container>
      <Grid item xs={12}>
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
              fontSize: '16px',
              fontWeight: '400',
              letterSpacing: '9px',
              height: '90vh',
              position: 'relative',
            }}
          >
            <CardContent>
              <card>
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
                      fontSize: '30px',
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
              </card>
            </CardContent>
            {!isScreenSm && (
              <Grid container sx={{ position: 'absolute', bottom: '0' }}>
                <Grid item xs={12}>
                  <CustomProgrssBar variant="determinate" />
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
      </Grid>
    </Grid>
  )
}

export default HomefirstRowFstColCard
