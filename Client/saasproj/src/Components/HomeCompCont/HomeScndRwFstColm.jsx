import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  CircularProgress,
  Grid,
  Typography,
} from '@mui/material'
import React from 'react'
import { EmptySapce } from '../ThemeCust'
import { useData } from '../DataContext/DataContext'
import { CardBuidler } from '../CardBuilder/CardBuilder'

function HomeScndRwFstColm() {
  const { cards } = useData()
  if (cards.length === 0) {
    return <CircularProgress />
  }

  return (
    <Grid container marginTop={8}>
      <Grid container className="sndrw-first-row">
        <Grid item xs={6}>
          <CardBuidler
            cardImgUrl={cards[4].imagelink}
            cardHeader={cards[4].headertext}
            cardText={cards[4].body}
            cardBadge={cards[4].badge}
          />
        </Grid>
        <Grid item xs={6}>
          <CardBuidler
            cardImgUrl={cards[5].imagelink}
            cardHeader={cards[5].headertext}
            cardText={cards[5].body}
          />
        </Grid>
      </Grid>
      <EmptySapce />

      <Grid container className="sndrw-second-row">
        <Grid item xs={6}>
          <CardBuidler
            cardImgUrl={cards[6].imagelink}
            cardHeader={cards[6].headertext}
            cardText={cards[6].body}
          />
        </Grid>
        <Grid item xs={6}>
          <CardBuidler
            cardImgUrl={cards[7].imagelink}
            cardHeader={cards[7].headertext}
            cardText={cards[7].body}
          />
        </Grid>
      </Grid>

      <Grid container className="sndrw-third-row">
        <Grid item sx={{ width: '100%' }}>
          <CardActionArea>
            <CardMedia
              component="img"
              image="https://assets-global.website-files.com/5f0a4c1cde4cddac7d2ad3b4/63984482665829dad1eddd9a_Your%20Startups%20Strategy%20Partner.png"
            />
          </CardActionArea>
        </Grid>
        <Grid item xs={6}>
          <CardBuidler
            cardImgUrl={cards[8].imagelink}
            cardHeader={cards[8].headertext}
            cardText={cards[8].body}
          />
        </Grid>
        <Grid item xs={6}>
          <CardBuidler
            cardImgUrl={cards[9].imagelink}
            cardHeader={cards[9].headertext}
            cardText={cards[9].body}
          />
        </Grid>
      </Grid>
      <Grid container className="sndrw-fourth-row">
        <Grid item xs={6}>
          <CardBuidler
            cardImgUrl={cards[10].imagelink}
            cardHeader={cards[10].headertext}
            cardText={cards[10].body}
          />
        </Grid>
        <Grid item xs={6}>
          <CardBuidler
            cardImgUrl={cards[11].imagelink}
            cardHeader={cards[11].headertext}
            cardText={cards[11].body}
          />
        </Grid>
      </Grid>
    </Grid>
  )
}

export default HomeScndRwFstColm
