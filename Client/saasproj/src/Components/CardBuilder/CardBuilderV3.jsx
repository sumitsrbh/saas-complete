import {
  Card,
  CardActionArea,
  CardContent,
  CardHeader,
  CardMedia,
  Typography,
  useMediaQuery,
  useTheme,
} from '@mui/material'
import { truncateText } from './TextTruncate'
import { SaaSButton } from '../ThemeCust'
import { formatDate } from './DateFormat'
import CalendarTodayIcon from '@mui/icons-material/CalendarToday'

export function CardBuidlerV2({
  cardImgUrl = '',
  cardHeader = '',
  cardText = '',
  cardBadge = '',
  truncate = true,
  truncateValue = 0,
  cardContentDisplay = '',
  cardDate = '',
  animation = true,
}) {
  const theme = useTheme()
  const isBelowLG = useMediaQuery(theme.breakpoints.down('lg'))
  return (
    <Card elevation={0} sx={{ marginBottom: '20px' }}>
      <CardActionArea
        sx={{
          display: cardContentDisplay,
          flexDirection: isBelowLG ? 'column' : 'row',
          alignItems: 'center',
        }}
      >
        <div style={{ width: 'auto', height: 'auto' }}>
          <CardMedia
            component="img"
            image={cardImgUrl}
            style={{
              width: '300px',
              height: '100%',
              objectFit: 'cover',
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
          />
        </div>
        <CardContent>
          {/* <Typography variant="h6">{cardHeader}</Typography> */}
          <CardHeader title={cardHeader} sx={{ padding: '0px' }} />

          <Card
            elevation={0}
            sx={{
              display: 'flex',
              alignItems: 'center',
            }}
          >
            <SaaSButton
              variant="outlined"
              sx={{
                fontSize: { lg: '10px', md: '8px' },
                padding: '5px',
                borderRadius: '25px',

                backgroundColor: 'white',
                borderColor: '#777777',
                borderWidth: '1px',

                '&:hover': {
                  borderColor: 'white',
                },
              }}
            >
              {cardBadge}
            </SaaSButton>
            <CalendarTodayIcon
              sx={{ fontSize: '12px', margin: '0 5px 0 5px' }}
            />
            <Typography sx={{ fontSize: '12px', color: '#777777' }}>
              {formatDate(cardDate)}
            </Typography>
          </Card>
          <Typography
            variant="caption"
            sx={{ color: '#777777', lineHeight: '20px' }}
          >
            {truncate ? truncateText(cardText, truncateValue) : cardText}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  )
}
