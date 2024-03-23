import { Grid, Typography } from '@mui/material'
import React from 'react'

import { SaaSButton } from '../ThemeCust'
import { infoCards } from '../../Data'
import { CardBuidler } from '../CardBuilder/CardBuilder'

function AmazingTeam() {
  return (
    <Grid container spacing={8} marginTop={4}>
      <Grid item xs={1} />
      <Grid item xs={3} sx={{ width: '100%', textAlign: 'center' }}>
        <Typography
          variant="h4"
          sx={{
            whiteSpace: 'nowrap',
          }}
        >
          Our Amazing Team
        </Typography>

        <Typography>
          Writing result-oriented ad copy is difficult, as it must appeal to,
          entice, and convince consumers to take action
        </Typography>

        <SaaSButton
          sx={{
            marginTop: '20px',
            borderRadius: '10px',
            textTransform: 'none',
            fontWeight: 700,
            padding: '12px 24px',
          }}
        >
          Become An Author
        </SaaSButton>
      </Grid>
      <Grid item xs={7}>
        <Grid container spacing={2}>
          <Grid item xs={6}>
            <CardBuidler
              cardImgUrl={infoCards[0].imageUrl}
              cardHeader={infoCards[0].headerText}
              cardText={infoCards[0].text}
              truncate={false}
            />
          </Grid>
          <Grid item xs={6}>
            <CardBuidler
              cardImgUrl={infoCards[1].imageUrl}
              cardHeader={infoCards[1].headerText}
              cardText={infoCards[1].text}
              truncate={false}
            />
          </Grid>
        </Grid>
        <Grid container spacing={2}>
          <Grid item xs={6}>
            <CardBuidler
              cardImgUrl={infoCards[2].imageUrl}
              cardHeader={infoCards[2].headerText}
              cardText={infoCards[2].text}
              truncate={false}
            />
          </Grid>
          <Grid item xs={6}>
            <CardBuidler
              cardImgUrl={infoCards[3].imageUrl}
              cardHeader={infoCards[3].headerText}
              cardText={infoCards[3].text}
              truncate={false}
            />
          </Grid>
        </Grid>
        <Grid container spacing={4}>
          <Grid item xs={6}>
            <CardBuidler
              cardImgUrl={infoCards[4].imageUrl}
              cardHeader={infoCards[4].headerText}
              cardText={infoCards[4].text}
              truncate={false}
            />
          </Grid>
          <Grid item xs={6}>
            <CardBuidler
              cardImgUrl={infoCards[5].imageUrl}
              cardHeader={infoCards[5].headerText}
              cardText={infoCards[5].text}
              truncate={false}
            />
          </Grid>
        </Grid>
        {/* <Grid container spacing={2}>
          <Grid item xs={6}>
            <CardBuidler
              cardImgUrl={infoCards[6].imageUrl}
              cardHeader={infoCards[6].headerText}
              cardText={infoCards[6].text}
              truncate={false}
            />
          </Grid>
          <Grid item xs={6}>
            <CardBuidler
              cardImgUrl={infoCards[7].imageUrl}
              cardHeader={infoCards[7].headerText}
              cardText={infoCards[7].text}
              truncate={false}
            />
          </Grid>
        </Grid> */}
      </Grid>
      <Grid item xs={1} />
    </Grid>
  )
}

export default AmazingTeam
