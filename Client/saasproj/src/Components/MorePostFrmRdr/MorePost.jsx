import { Grid, Typography } from '@mui/material'
import React, { useState } from 'react'
import { SaaSButton } from '../ThemeCust'
import { useData } from '../DataContext/DataContext'
import { CardBuidler } from '../CardBuilder/CardBuilder'
import { CardBuidlerV2 } from '../CardBuilder/CardBuilderV2'

function MorePost() {
  const { cards } = useData()
  const initialCardLength = Math.max(12, cards.length)
  const [visibleCards, setVisibleCards] = useState(initialCardLength)

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
            marginLeft: '15px',
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
              <CardBuidlerV2
                key={index}
                cardImgUrl={card.imagelink}
                cardHeader={card.headertext}
                cardDate={card.date}
                cardText={card.body}
                cardBadge={card.badge}
                animation={false}
                cardContentDisplay="flex"
                truncateValue={400}
                cardWidth={'100%'}
              />
            ))}
      </Grid>
      {visibleCards < cards.length && (
        <Grid item xs={8}>
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
