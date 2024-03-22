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

export const truncateText = (text, maxLength) => {
  console.log('In truncate text', text)
  if (text.length >= maxLength) {
    return text.substring(0, maxLength) + '...'
  } else {
    return text
  }
}

export function CardBuidler({
  cardImgUrl,
  cardHeader,
  cardText,
  animation = true,
  cardContentDisplay,
  width = '100%',
  sqaure,
  truncate = true,
}) {
  return (
    <Card elevation={0} square={sqaure} sx={{ background: 'transparent' }}>
      <CardActionArea>
        <CardContent sx={{ display: cardContentDisplay }}>
          <CardMedia
            component="img"
            image={cardImgUrl}
            style={{
              width: { width },
              height: '220px',
              transition: 'transform 0.5s ease',
              transform: 'translateX(0)',
            }}
            {...(animation && {
              onMouseEnter: (e) => {
                e.currentTarget.style.transform = 'translateX(5px)'
              },
              onMouseLeave: (e) => {
                e.currentTarget.style.transform = 'translateX(0)'
              },
            })}
          ></CardMedia>

          <div style={{ marginLeft: '1rem' }}>
            <Typography variant="h6">{cardHeader}</Typography>
            <Typography
              variant="caption"
              sx={{ color: '#777777', lineHeight: '20px' }}
            >
              {truncate ? truncateText(cardText, 150) : cardText}
            </Typography>
          </div>
        </CardContent>
      </CardActionArea>
    </Card>
  )
}

export function CardBuidlerV2({ cardImgUrl, cardHeader, cardText, cardBadge }) {
  return (
    <Card elevation={0}>
      <CardActionArea>
        <CardContent>
          <CardMedia
            component="img"
            image={cardImgUrl}
            style={{
              width: '100%',
              height: 'auto',
              transition: 'transform 0.5s ease',
              transform: 'translateX(0)',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateX(5px)'
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateX(0)'
            }}
          ></CardMedia>

          <Typography variant="h6">{cardHeader}</Typography>
          <Typography variant="caption">
            {truncateText(cardText, 150)}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  )
}

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
