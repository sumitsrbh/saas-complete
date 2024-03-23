import {
  Card,
  CardActionArea,
  CardMedia,
  Grid,
  Paper,
  useMediaQuery,
  useTheme,
} from '@mui/material'

import SubscribeCardAlike from './SubscribeCard'
import HomefirstRowFstColCard from './HomefirstRowFstColCard'
import HomeFrstRowScndCol from './HomeFrstRowScndCol'

import MightLike from './MightLike'
import HomeScndRwFstColm from './HomeScndRwFstColm'
import MorePost from '../MorePostFrmRdr/MorePost'

function Home() {
  const theme = useTheme()
  const isScreenMd = useMediaQuery(theme.breakpoints.down('md'))
  const isScreenSm = useMediaQuery(theme.breakpoints.down('sm'))
  return (
    <Paper
      className="main-container"
      elevation={0}
      sx={{
        marginRight: 'auto',
        marginLeft: 'auto',
        paddingLeft: { lg: '70px', md: '20px', sm: '10px' },
        paddingRight: { lg: '70px', md: '20px', sm: '10px' },
        marginTop: '130px',
        marginBottom: '30px',
      }}
    >
      <Grid xs={12}>
        {!isScreenMd && (
          <Card>
            <CardActionArea>
              <CardMedia
                component="img"
                image="https://assets-global.website-files.com/5f0a4c1cde4cddac7d2ad3b4/63984428ecdaebb9c7b4a6bc_NCJ%20qualetics%20ads.png"
              />
            </CardActionArea>
          </Card>
        )}
      </Grid>
      <Grid container marginTop={1} spacing={4}>
        <Grid item lg={8} md={7} xs={12}>
          <HomefirstRowFstColCard />
        </Grid>
        <Grid item lg={4} md={5} xs={12}>
          <HomeFrstRowScndCol />
        </Grid>
      </Grid>

      <Grid container spacing={4}>
        <Grid item lg={8} md={7} xs={12}>
          <HomeScndRwFstColm />
        </Grid>
        {!isScreenMd && (
          <Grid marginTop={5} item lg={4} md={5} xs={0}>
            <SubscribeCardAlike
              header={'Subscribe'}
              text={'Get our latest posts and announcements in your inbox'}
            />
            <SubscribeCardAlike
              header={'You might also like'}
              text={''}
              formOn={false}
            />
            <MightLike />
          </Grid>
        )}
      </Grid>
      <MorePost />
    </Paper>
  )
}

export default Home
