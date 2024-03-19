import { BorderColor } from '@mui/icons-material'
import {
  Box,
  Card,
  CardContent,
  CardMedia,
  Grid,
  Paper,
  Typography,
} from '@mui/material'
import React, { useState } from 'react'
import { CardBuidler, CardBuidlerV2 } from '../HomeCompCont/HomeScndRwFstColm'
import { SaaSButton } from '../ThemeCust'
import { useData } from '../DataContext/DataContext'

function MorePost() {
  const { cards } = useData()
  console.log('more post:Value of CardLength', cards.length)
  const initialCardLength = Math.max(12, cards.length)
  console.log('more post:Value of initialCardLength', initialCardLength)
  const [visibleCards, setVisibleCards] = useState(initialCardLength)
  console.log('more post:Value of visible cards', visibleCards)

  const handleLoadMore = () => {
    setVisibleCards((prevValue) => Math.min(prevValue + 3, cards.length))
  }
  return (
    <Grid container spacing={3} marginTop={5}>
      <Grid item xs={8}>
        <Typography
          variant="h5"
          sx={{
            fontFamily: 'Noto Sans HK',
            fontSize: '22px',
            fontWeight: '700',
            lineHeight: '32px',
          }}
        >
          More post from reader
        </Typography>
      </Grid>
      <Grid item xs={8}>
        {cards.length > 0 &&
          cards
            .slice(12, visibleCards)
            .map((card, index) => (
              <CardBuidler
                key={index}
                cardImgUrl={card.imagelink}
                cardHeader={card.headertext}
                cardText={card.body}
                animation={false}
                cardContentDisplay="flex"
                width="50%"
              />
            ))}
      </Grid>
      {visibleCards < cards.length && (
        <Grid item xs={8} sx={{ textAlign: 'center' }}>
          <SaaSButton
            variant="outlined"
            onClick={handleLoadMore}
            sx={{
              width: '90%',
              paddingTop: '20px',
              paddingBottom: '20px',
              borderRadius: '40px',
              backgroundColor: 'white',
              borderColor: 'black',
              borderWidth: '1px',
              '&:hover': {
                borderColor: 'white',
              },
            }}
          >
            Load More Posts
          </SaaSButton>
        </Grid>
      )}
    </Grid>
  )
}

export default MorePost
