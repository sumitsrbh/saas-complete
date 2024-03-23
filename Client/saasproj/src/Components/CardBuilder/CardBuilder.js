import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
} from '@mui/material'
import { truncateText } from './TextTruncate'

export function CardBuidler({
  cardImgUrl,
  cardHeader,
  cardText,
  animation = true,
  cardContentDisplay,
  width,
  sqaure,
  truncate = true,
  truncateValue = 150,
}) {
  return (
    <Card elevation={0} square={sqaure} sx={{ background: 'transparent' }}>
      <CardActionArea>
        <CardContent sx={{ display: cardContentDisplay }}>
          <CardMedia
            component="img"
            image={cardImgUrl}
            style={{
              width: width,
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
              {truncate ? truncateText(cardText, truncateValue) : cardText}
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
