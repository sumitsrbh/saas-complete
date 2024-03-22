import { Card, CardActionArea, CardMedia, Grid } from '@mui/material'

import SubscribeCardAlike from './SubscribeCard'
import HomefirstRowFstColCard from './HomefirstRowFstColCard'
import HomeFrstRowScndCol from './HomeFrstRowScndCol'

import { EmptySapce } from '../ThemeCust'
import MightLike from './MightLike'
import HomeScndRwFstColm from './HomeScndRwFstColm'
import MorePost from '../MorePostFrmRdr/MorePost'

function Home() {
  // console.log('HOme start')

  return (
    <Grid
      className="main-container"
      container
      sx={{
        marginRight: 'auto',
        marginLeft: 'auto',
        paddingLeft: '80px',
        paddingRight: '70px',
        marginTop: '130px',
        marginBottom: '30px',
      }}
    >
      <Grid item xs={12}>
        <Card>
          <CardActionArea>
            <CardMedia
              component="img"
              image="https://assets-global.website-files.com/5f0a4c1cde4cddac7d2ad3b4/63984428ecdaebb9c7b4a6bc_NCJ%20qualetics%20ads.png"
            />
          </CardActionArea>
        </Card>
      </Grid>
      <Grid marginTop={5} className="first-row" container spacing={4}>
        <Grid item xs={8}>
          <HomefirstRowFstColCard />
        </Grid>

        {/* Second column of first row */}

        <Grid item xs={4}>
          {/* Top right container */}
          <HomeFrstRowScndCol />
        </Grid>
      </Grid>

      <EmptySapce />
      <Grid className="second-row" container spacing={4}>
        <Grid item xs={8}>
          <HomeScndRwFstColm />
        </Grid>

        <Grid item xs={4}>
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
      </Grid>

      <MorePost />
    </Grid>
  )
}

export default Home
