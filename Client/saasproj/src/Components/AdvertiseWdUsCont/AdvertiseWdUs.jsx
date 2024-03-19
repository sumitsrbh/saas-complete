import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Card,
  CardContent,
  CardHeader,
  CardMedia,
  Grid,
  Link,
  Paper,
  Typography,
} from '@mui/material'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import React from 'react'
import SubscribeCardAlike from '../HomeCompCont/SubscribeCard'
import { SaaSButton } from '../ThemeCust'

const avaTarInside =
  'https://assets-global.website-files.com/5f0a4c1cde4cddac7d2ad3b4/5f0d1a41d22b58ec37f69536_004-id-card-p-500.png'

const avaTarHomepg =
  'https://assets-global.website-files.com/5f0a4c1cde4cddac7d2ad3b4/5f0d1a41cf7fb31ed9b1e129_031-trophy.png'
const allWebPckg =
  'https://assets-global.website-files.com/5f0a4c1cde4cddac7d2ad3b4/5f0d1a4204e1018ca9d4862a_022-target.png'
const cardStyle = {
  color: '#ffffff80',
  marginBottom: '20px',
  marginTop: '20px',
  '&:hover': {
    color: '#ffa32d',
  },
}
function CardAdvrtsie({ avatar, avtrBgColor, header, amount, text }) {
  return (
    <Card
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        backgroundColor: '#777777',
        padding: '25px',
        flexGrow: 1,
      }}
    >
      <CardHeader
        avatar={
          <img
            src={avatar}
            alt="Avatar"
            style={{
              width: '80px',
              height: '80px',
              borderRadius: '50%',
              backgroundColor: avtrBgColor,
            }}
          />
        }
      />

      <Typography varaint="h6" sx={cardStyle}>
        {header}
      </Typography>
      <Typography sx={cardStyle}>
        <span style={{ fontSize: '28px', fontWeight: '500' }}> ${amount}</span>
        <span
          style={{
            fontSize: '0.9em',
            verticalAlign: 'sub',
            marginLeft: '5px',
          }}
        >
          / month
        </span>
      </Typography>
      <Typography sx={cardStyle}>{text}</Typography>
      <SaaSButton sx={{ borderRadius: '5px', margin: '20px 0 20px 0' }}>
        Buy Package
      </SaaSButton>
    </Card>
  )
}

function CardBuilder() {
  return (
    <Grid container spacing={4}>
      <Grid item xs={4}>
        <CardAdvrtsie
          avatar={avaTarInside}
          avtrBgColor={'#ffa32d'}
          header={'Inside Package'}
          amount={'360'}
          text={
            <>
              <p>1 sidebar banner (320x440px)</p>
              <p>All the internal post pages</p>
            </>
          }
        />
      </Grid>
      <Grid item xs={4}>
        <CardAdvrtsie
          avatar={avaTarHomepg}
          avtrBgColor={'#06c25e'}
          header={'Home Page Package'}
          amount={'820'}
          text={
            <>
              <p>1 Home Top banner (1440x128px) and</p>
              <p>1 Home Bottom banner (728x90px)</p>
            </>
          }
        />
      </Grid>
      <Grid item xs={4}>
        <CardAdvrtsie
          avatar={allWebPckg}
          avtrBgColor={'#5d66fe'}
          header={'All Website Package'}
          amount={'1250'}
          text={
            <>
              <p>All Banners on every page</p>
              <p>Home as well as Internal pages</p>
            </>
          }
        />
      </Grid>
    </Grid>
  )
}
export function Expandlepanel({ headerText, text1, text2, text3 }) {
  return (
    <Accordion sx={{ backgroundColor: '#777777' }}>
      <AccordionSummary expandIcon={<ExpandMoreIcon />}>
        <Typography variant="h6" sx={{ color: '#ffffff80' }}>
          {headerText}
        </Typography>
      </AccordionSummary>
      <AccordionDetails>
        <Typography sx={{ color: '#ffffff80' }}>{text1}</Typography>
        <Typography sx={{ color: '#ffffff80' }}>{text2}</Typography>
        <Typography sx={{ color: '#ffffff80' }}>{text3}</Typography>
      </AccordionDetails>
    </Accordion>
  )
}

function AdvertiseWdUs() {
  return (
    <Paper elevation={0} sx={{ backgroundColor: '#262320', padding: '40px' }}>
      <Grid container>
        <Card sx={{ width: '100%' }}>
          <CardMedia
            component="img"
            image="https://assets-global.website-files.com/5f0a4c1cde4cddac7d2ad3b4/5f0d1842cf63ccc11bf0aeb4_Advertise_With_Us-HeaderImage.jpg"
            sx={{
              height: '350px',
            }}
          />
        </Card>
        <Grid item xs={5} />
        <Grid item xs={1} />
        <Grid item xs={6}>
          <Typography
            variant="h2"
            marginTop={-20}
            color="#ffd400"
            fontWeight={700}
            fontSize={'40px'}
            textAlign="center"
          >
            Advertise with us
          </Typography>
        </Grid>
      </Grid>
      <SubscribeCardAlike
        header={'Showcase your SaaS products'}
        text={
          <>
            Get in front of your peers, your prospects or even get viewed by
            Investors
            <p>
              as they browse SaaS Journal to find the latest happenings in the
              SaaS World
            </p>
          </>
        }
        formOn={false}
      />
      <Grid container>
        <Grid item xs={1} />
        <Grid item xs={10}>
          <CardBuilder />
        </Grid>
        <Grid item xs={1} />
      </Grid>
      <Grid container marginTop={20}>
        <Grid item xs={4}>
          <SubscribeCardAlike
            header={'Frequently Asked Questions'}
            formOn={false}
          />
        </Grid>
        <Grid item xs={8} marginTop={5}>
          <Expandlepanel
            headerText={'How many people will see my ad?'}
            text1={
              'The SaaS industry is growing in leaps and bounds every year and the visibility of new SaaS platforms like SaaS Journal create a funnel for discovery, awareness, sales and investor relationship. While still in the nascent stages of our growth our numbers are increasing day by day so please reach out to us to get the most recents stats.'
            }
          />
          <Expandlepanel
            headerText={'Who is your primary audience?'}
            text1={
              <>
                <p>
                  Our primary audience is can be divided into four distinct
                  profile
                </p>
                <p>
                  - Entrepreneurs and decision makers here to discover the
                  latest innovations in SaaS products
                </p>
                <p>
                  - Consultants, Agencies and organizations looking for sales
                  partnerships and affiliate agreements
                </p>
                <p>
                  - SaaS Sales leadership to understand the market and the
                  competition
                </p>
                <p>
                  - Investors who want to keep a broad overview of the industry
                  they are tracking within SaaS
                </p>
              </>
            }
          ></Expandlepanel>
          <Expandlepanel
            headerText={'Any other channels other than the website?'}
            text1={
              <p>
                As is the proven success model of SaaS industry we market
                heavily on all knowns Social Media Channels and have customized
                packages for Social Media, Content Marketing and community
                engagement. Please get in touch with us using the{' '}
                <Link sx={{ color: '#ffd400' }}>Contact Us</Link> form in case
                you need any help on any of these.
              </p>
            }
          ></Expandlepanel>
          <Expandlepanel
            headerText={'Do you have any discounts?'}
            text1={
              'We are open to hear about barter offers or a genuine need of discount.'
            }
          ></Expandlepanel>
        </Grid>
      </Grid>
    </Paper>
  )
}

export default AdvertiseWdUs
