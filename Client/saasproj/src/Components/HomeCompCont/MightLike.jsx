import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Grid,
  Link,
  Paper,
} from '@mui/material'
import React, { useState } from 'react'
import { youMightLike } from '../../Data'
import { SaaSButton } from '../ThemeCust'
import { CardArry } from './HomefirstRowFstColCard'
import { CardBuidler, truncateText } from './HomeScndRwFstColm'
import { useData } from '../DataContext/DataContext'

export function CardArryMightLike({
  badge,
  headerText,
  backgrndImg,
  index,
  handleHover,
}) {
  return (
    <Card
      container
      className="custom-card"
      onMouseEnter={() => handleHover}
      sx={{
        backgroundColor: 'transparent',
        boxShadow: 'none',
      }}
    >
      <CardActionArea>
        <CardContent sx={{ display: 'flex' }}>
          <Card sx={{ flexShrink: 0, marginRight: 2 }}>
            <CardMedia
              component="img"
              image={backgrndImg}
              sx={{
                width: 70,
                height: '100%',
              }}
            />
          </Card>

          <Paper
            sx={{
              backgroundColor: 'transparent',
              boxShadow: 'none',
              margin: '-4px 0 10px 0',
            }}
          >
            <Link
              underline="none"
              component="button"
              sx={{
                color: 'white',
                fontSize: '14px',
                fontWeight: '600',
                letterSpacing: '1px',
                lineHeight: '24px',
                textAlign: 'left',

                transition: 'color 0.2s ease-out',
                '&:hover': { color: '#dde03d' },
              }}
            >
              {headerText}
            </Link>
            {/* <SaaSButton>{badge}</SaaSButton> */}
          </Paper>
        </CardContent>
      </CardActionArea>
    </Card>
  )
}

function MightLike() {
  const { cards, isLoading } = useData()
  const [activeCard, setActiveCard] = useState()
  const handleHover = (index) => setActiveCard(index)
  return (
    <Card square={true}>
      <CardContent
        sx={{
          backgroundColor: '#262320',
        }}
      >
        {cards.slice(-10, cards.length).map((card, index) => (
          <CardArryMightLike
            backgrndImg={card.imagelink}
            headerText={truncateText(card.headertext, 40)}
            badge={card.badge}
            handleHover={handleHover}
          />
        ))}
      </CardContent>
    </Card>
  )
}

export default MightLike
