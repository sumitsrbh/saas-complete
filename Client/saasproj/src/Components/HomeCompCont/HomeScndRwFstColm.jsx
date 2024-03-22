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
import { EmptySapce, SaaSButton } from '../ThemeCust'
import { fetchImgObjHom } from '../../Data'
import { useData } from '../DataContext/DataContext'

const card1 = {
  imgUrl:
    'https://assets-global.website-files.com/5f0a4c1d99c861dc3b6d3a37/6566283485d7467f0fd2243c_unveiling_the_power_of_micro_saas_niche_solutions_redefining_the_software_landscape.jpg',
  header:
    'Unveiling The Power Of Micro-SaaS: Niche Solutions Redefining The Software Landscape',
  text: 'In the ever-evolving landscape of technology, Software as a Service (SaaS) has become a dominant force, providing users with convenient, web-based solutions for various needs.SaaS platforms like Google Suite, Slack, Salesforce, and Microsoft Office 365 have revolutionized how businesses operate, offering cloud-hosted products accessible through web browsers or dedicated clients.',
  badge: 'Operations',
}
const card2 = {
  imgUrl:
    'https://assets-global.website-files.com/5f0a4c1d99c861dc3b6d3a37/654a7bd4d36096420b015e6b_mastering_the_art_of_saas_success_tackling_the_top_10_industry_challenges_head_on.jpg',
  header:
    'Mastering The Art Of SaaS Success Tackling The Top 10 Industry Challenges Head-On',
  text: 'In the ever-evolving landscape of the technology industry, Software as a Service(SaaS) companies have emerged as the driving force behind digital transformation. These innovative firms offer a diverse range of software solutions, ranging from customer relationship management to project management tools, all delivered via cloud-based services. However, despite their incredible growth and potential for success, SaaS companies face a unique set of challenges that can impact their ability to thrive in this competitive market. In this comprehensive article, we will delve into the ten most significant problems that SaaS companies encounter and explore various strategies to effectively overcome them.',
  badge: 'Listicle',
}
const card3 = {
  imgUrl:
    'https://assets-global.website-files.com/5f0a4c1d99c861dc3b6d3a37/653fef450bd428d3b8f0d2f0_ai_and_saas_the_dynamic_duo_of_tech_transformation.png',
  header: 'AI And SaaS: The Dynamic Duo Of Tech Transformation',
  text: 'In the ever-evolving landscape of technology, two prominent domains have been making significant strides in recent years: Software as a Service (SaaS) and Artificial Intelligence (AI)',
  badge: 'Operation',
}
const card4 = {
  imgUrl:
    'https://assets-global.website-files.com/5f0a4c1d99c861dc3b6d3a37/64c2b73d982204532d451472_saas_compliance_navigating_regulatory_requirements_in_the_cloud.jpg',
  header: 'Mastering The Art Of Pitching A Sophisticated SaaS Solution',
  text: "he world of Software as a Service (SaaS) is constantly evolving, with new companies popping up all the time, each vying for their slice of the market. But how do you distinguish yourself from the competition and show potential clients that your solution is the right one for them? That's where effective pitching comes in. A successful SaaS pitch requires a strategic approach that combines technical knowledge with storytelling skills and a deep understanding of your client's pain points. In this article, we'll explore the critical components of a winning SaaS pitch and provide helpful insights and tips to help you master the art of selling a sophisticated SaaS solution. So, whether you're a startup or an established company looking to expand your offerings, read on and learn how you can take your pitching game to the next level.",
  badge: 'Operations',
}
const card5 = {
  imgUrl:
    'https://assets-global.website-files.com/5f0a4c1d99c861dc3b6d3a37/64c2b73d982204532d451472_saas_compliance_navigating_regulatory_requirements_in_the_cloud.jpg',
  header: 'SaaS Compliance: Navigating Regulatory Requirements In The Cloud',
  text: 'As more businesses move their services and applications to the cloud, software-as-a-service (SaaS) compliance has rapidly become a priority for organizations. When done correctly, deploying SaaS solutions can offer an organization greater scalability and agility; however, there are certain regulatory requirements that must be met in order to ensure legal compliance. In this blog post, we will explore key elements of SaaS compliance so you can navigate these challenges with confidence and ensure your organization remains safely compliant.',
  badge: 'Operations',
}
const card6 = {
  imgUrl:
    'https://assets-global.website-files.com/5f0a4c1d99c861dc3b6d3a37/64c2b998584de81b49840bca_unveiling_the_powerful_duo_ai_and_iot_in_saas_applications.jpg',
  header: 'Unveiling The Powerful Duo: AI And IoT In SaaS Applications',
  text: 'The future of technology is rapidly evolving with the rise of Artificial Intelligence (AI) and the Internet of Things (IoT) in Software as a Service (SaaS) applications. This article delves into the dynamic intersection of AI and IoT within the SaaS landscape. As we venture into an era of unprecedented connectivity and intelligence, businesses and individuals alike must embrace these innovative technologies to unlock their full potential.',
  badge: 'Operations',
}
const card7 = {
  imgUrl:
    'https://assets-global.website-files.com/5f0a4c1d99c861dc3b6d3a37/6491e37d3b832381b3700cd7_saas_analytics_leveraging_data_to_drive_business_growth%20.jpg',
  header: 'SaaS Analytics: Leveraging Data To Drive Business Growth',
  text: "Data is the lifeblood of any business, and leveraging analytics to unlock its full potential has become essential in today's competitive landscape. With so much available data out there, it can be challenging to know where to start—especially with SaaS products which often have multiple layers of customer data sitting within them. In this blog post, we will look at how SaaS businesses can use analytics to drive business growth. We'll cover topics such as why analyzing your SaaS product is critical for success, what metrics you should consider measuring, and how best practice approaches and tools can help simplify the process so that all the key insights are easily accessible. By reading through this article, you'll understand how to leverage existing user data more effectively and efficiently, enabling you to make informehttps://assets-global.website-files.com/5f0a4c1d99c861dc3b6d3a37/6491ec4213b648dfaa04ae13_saas_why_you_need_open_standards_and_apis.jpgd decisions that will lead to better decision-making for your business.",
  badge: '',
}
const card8 = {
  imgUrl:
    'https://assets-global.website-files.com/5f0a4c1d99c861dc3b6d3a37/6491ec4213b648dfaa04ae13_saas_why_you_need_open_standards_and_apis.jpg',
  header: 'SaaS: Why You Need Open Standards And APIs',
  text: "Software as a service (SaaS) has long been a game-changing solution for businesses looking to maximize their efficiency and enhance customer experience. Not only does it reduce the need for physical servers, but SaaS also offers the flexibility of cloud computing services while helping organizations stay agile with Access to future advancements in technology. But since each enterprise is different, there's one crucial factor that could make or break an organization's success – Open standards and Application Programming Interfaces (APIs). Without open standards and APIs, businesses face difficulty in integrating solutions from multiple resources into one seamless operation, thus, holding back agile operations and decision-making. In this blog post, we will discuss why open standards and APIs are necessary when leveraging any SaaS solution",
  badge: 'Operations',
}
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
  cardBadge,
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
// function CardArrayOrganiser() {
//   for (let i = 0; i < 2; i++) {
//     for (let j = 0; j < 2; j++) {}
//   }
// }

function HomeScndRwFstColm() {
  const { cards } = useData()
  if (cards.length === 0) {
    return <CircularProgress />
  }
  // const cardsReady = cards.length > 0 && cards !== 'undefined'

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
