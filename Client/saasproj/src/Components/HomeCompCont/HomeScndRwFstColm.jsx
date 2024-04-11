import {
  CardActionArea,
  CardMedia,
  CircularProgress,
  Grid,
} from '@mui/material'
import React from 'react'
import { useData } from '../DataContext/DataContext'
// import { CardBuidler } from '../CardBuilder/CardBuilder'
import { CardBuidlerV2 } from '../CardBuilder/CardBuilderV2'

function HomeScndRwFstColm() {
  const { cards } = useData()
  let cardToDisplayIndex = ''
  if (cards.length === 0) {
    return <CircularProgress />
  } else {
    cardToDisplayIndex = cards.length
    cards.map((card, index) => {
      console.log('card image link fetched ', card.imagelink)
    })
  }

  return (
    <Grid container marginTop={8}>
      <Grid container className="sndrw-first-row" spacing={2}>
        {/* {cards.slice(4, 12).map((card, index) => (
        <Grid key={index} item md={6} sm={6} xs={12}>
          <CardBuidlerV2
            cardImgData={card.imagelink}
            cardHeader={card.headertext}
            cardText={card.body}
            cardBadge={card.badge}
            truncate={true}
            truncateValue={150}
          />
        </Grid>
      ))} */}
        <Grid item md={6} sm={6} xs={12}>
          {cardToDisplayIndex >= 4 && (
            <CardBuidlerV2
              cardImgUrl={cards[4].imagelink}
              cardHeader={cards[4].headertext}
              cardText={cards[4].body}
              cardBadge={cards[4].badge}
              cardContentDisplay="row"
              truncate={true}
              truncateValue={150}
              animation={true}
            />
          )}
        </Grid>
        <Grid item md={6} sm={6} xs={12}>
          <CardBuidlerV2
            cardImgUrl={cards[5].imagelink}
            cardHeader={cards[5].headertext}
            cardText={cards[5].body}
            cardBadge={cards[5].badge}
            truncate={true}
            truncateValue={150}
          />
        </Grid>
      </Grid>

      <Grid container className="sndrw-second-row" spacing={2}>
        <Grid item md={6} sm={6} xs={12}>
          <CardBuidlerV2
            cardImgUrl={cards[6].imagelink}
            cardHeader={cards[6].headertext}
            cardText={cards[6].body}
            cardBadge={cards[6].badge}
            truncate={true}
            truncateValue={150}
          />
        </Grid>
        <Grid item md={6} sm={6} xs={12}>
          <CardBuidlerV2
            cardImgUrl={cards[7].imagelink}
            cardHeader={cards[7].headertext}
            cardText={cards[7].body}
            cardBadge={cards[7].badge}
            truncate={true}
            truncateValue={150}
          />
        </Grid>
      </Grid>

      <Grid item sx={{ width: '100%', marginBottom: '30px' }}>
        <CardActionArea>
          <CardMedia
            component="img"
            image="https://assets-global.website-files.com/5f0a4c1cde4cddac7d2ad3b4/63984482665829dad1eddd9a_Your%20Startups%20Strategy%20Partner.png"
          />
        </CardActionArea>
      </Grid>

      <Grid container className="sndrw-third-row" spacing={2}>
        <Grid item md={6} sm={6} xs={12}>
          <CardBuidlerV2
            cardImgUrl={cards[8].imagelink}
            cardHeader={cards[8].headertext}
            cardText={cards[8].body}
            cardBadge={cards[8].badge}
            truncate={true}
            truncateValue={150}
          />
        </Grid>
        <Grid item md={6} sm={6} xs={12}>
          <CardBuidlerV2
            cardImgUrl={cards[9].imagelink}
            cardHeader={cards[9].headertext}
            cardText={cards[9].body}
            cardBadge={cards[9].badge}
            truncate={true}
            truncateValue={150}
          />
        </Grid>
      </Grid>
      <Grid container className="sndrw-fourth-row" spacing={2}>
        <Grid item md={6} sm={6} xs={12}>
          <CardBuidlerV2
            cardImgUrl={cards[10].imagelink}
            cardHeader={cards[10].headertext}
            cardText={cards[10].body}
            cardBadge={cards[10].badge}
            truncate={true}
            truncateValue={150}
          />
        </Grid>
        <Grid item md={6} sm={6} xs={12}>
          {cardToDisplayIndex >= 11 && (
            <CardBuidlerV2
              cardImgUrl={cards[11].imagelink}
              cardHeader={cards[11].headertext}
              cardText={cards[11].body}
              cardBadge={cards[11].badge}
              truncate={true}
              truncateValue={150}
            />
          )}
        </Grid>
      </Grid>
    </Grid>
  )
}

export default HomeScndRwFstColm
