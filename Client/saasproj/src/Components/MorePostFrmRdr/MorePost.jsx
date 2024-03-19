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

export const cardArray = [
  {
    imgUrl:
      'https://assets-global.website-files.com/5f0a4c1d99c861dc3b6d3a37/644acc93775c2fbd992f5c6a_10-saas-marketing-strategies-that-actually-work.jpg',
    header: 'Saas Marketing Strategies That Actually Work',
    text: "Are you in the market for Saas marketing strategies that work? You're not alone. With so many digital tools available, knowing which ones deliver results that last and create tangible value for your business can be challenging. In this blog post, we will discuss 10 Saas marketing strategies that have successfully driven leads, engagement, and ROI for businesses of all sizes - no matter their budget or industry. So, if you want to learn more about effectively growing your userbase through Saas marketing strategies that offer a triumphant return on investment - read on",
    badge: 'Listicle',
  },
  {
    imgUrl:
      'https://assets-global.website-files.com/5f0a4c1d99c861dc3b6d3a37/6388df6c6baec0ad99d67ccb_SaaS%20customer%20retention.jpg',
    header: 'How To Improve Your SaaS Customer Retention?',
    text: 'Are you a startup looking to gain an edge in the modern business market? If so, then building your success using SaaS applications could be beneficial. Software-as-a-service (SaaS) is one of the most efficient ways to tap into cutting edge technology and leverage it for maximum gains. From increasing revenue to streamlining processes, there are countless opportunities available when utilizing SaaS applications as part of a comprehensive business strategy. In this blog post, we will discuss how growing startups can take advantage from start to finish!',
    badge: '',
  },
  {
    imgUrl:
      'https://assets-global.website-files.com/5f0a4c1d99c861dc3b6d3a37/63aae958d827c509642d7872_final.jpg',
    header: 'Trendiest SaaS Startups In 2022',
    text: "Looking for a convenient and efficient way to access software applications? Then SaaS is the solution you’re searching for! Delivered over the internet, this method eliminates the trouble of physically installing or maintaining any type of application. With SaaS, there’s no need to install anything on your workstation or server – it really couldn't be easier!",
    badge: '',
  },
  {
    imgUrl:
      'https://assets-global.website-files.com/5f0a4c1d99c861dc3b6d3a37/642345cb6e41395b01154855_25-best-%20saas-tool-to-grow-your-business.jpg',
    header: '25+ Best SaaS Tool To Grow Your Business',
    text: 'Are you a startup looking to gain an edge in the modern business market? If so, then building your success using SaaS applications could be beneficial. Software-as-a-service (SaaS) is one of the most efficient ways to tap into cutting edge technology and leverage it for maximum gains. From increasing revenue to streamlining processes, there are countless opportunities available when utilizing SaaS applications as part of a comprehensive business strategy. In this blog post, we will discuss how growing startups can take advantage from start to finish!',
    badge: 'Listicle',
  },
  {
    imgUrl:
      'https://assets-global.website-files.com/5f0a4c1d99c861dc3b6d3a37/6390be5a5c0b4a63e1c7f882_Brand%20building%20strategies.jpg',
    header: 'Best SaaS Brand Building Strategies',
    text: 'The rise of SaaS has completely changed how businesses operate.In the current digital age, social media platforms have made it possible to carry out an innumerable number of business operations online. Even though this has made things more efficient, building a reputation and maintaining a brand is still difficult for SaaS founders and enterprises alike. Why? Because at the end of the day, people trust what they know- so a strong reputation is key when it comes to customers forming (or breaking) relationships with brands',
    badge: 'Listicle',
  },
  {
    imgUrl:
      'https://assets-global.website-files.com/5f0a4c1d99c861dc3b6d3a37/637e3fad5802ea15488a86d0_SaaS%20content%20marketing.jpg',
    header: 'SaaS Content Marketing: 7 Tips To Success',
    text: 'When you have an online business, content marketing should already be a part of your plan--this includes things such as writing for your website, creating landing pages, and posting updates to social medi',
    badge: 'Listicle',
  },
]

function MorePost() {
  const { cards } = useData()
  const initialCardLength = cards.length > 0 && cards.length
  const [visibleCards, setVisibleCards] = useState(initialCardLength - 3)
  console.log('Value of visible cards', visibleCards)

  const handleLoadMore = () => {
    setVisibleCards(visibleCards + 2)
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
        {cards.slice(12, visibleCards).map((card, index) => (
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
