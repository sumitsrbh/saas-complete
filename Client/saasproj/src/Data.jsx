import axios from 'axios'
import { useEffect } from 'react'

export const fetchImgObjHom = async () => {
  try {
    const response = await axios.get('http://127.0.0.1:8000/api/cards')
    // console.log('Response data from Card fetching::', response.data.data)
    return response.data.data
  } catch (error) {
    console.error('Error fetching imgObjHom:', error)
    // throw error
  }
}

// console.log('Inside the Data component!')
export const youMightLike = [
  {
    imageUrl:
      'https://assets-global.website-files.com/5f0a4c1d99c861dc3b6d3a37/60d32f8b67266143f2069069_isaac-smith-AT77Q0Njnt0-unsplash.jpg',
    text: "In 1943, Peter Drucker, a management consultant, and the author conducted a two-year internal scientific study of General Motors, one of the world's largest corporations at the time. Drucker published his thoughts and recommendations in The Concept of the Corporation after attending multiple board meetings, development and decision-making procedures, and other interviews. Despite this, the automobile business dismissed his suggestions. The company's chairman, Alfred Sloan, went so far as to refuse to accept the publication in any shape, form, or format",
    headerText: 'SaaS Monetization - A Paradigm Shift In Thinking',
    badge: 'Metrics',
  },
  {
    imageUrl:
      'https://assets-global.website-files.com/5f0a4c1d99c861dc3b6d3a37/60d3327a537648ef3e5c9d67_dole777-EQSPI11rf68-unsplash.jpg',
    text: "You can invest a big portion of your budget, but the cost of acquiring clients is considerable and does not appear to be associated with many conversions. You suspect the B2B SaaS product isn't the finest social media platform, but you don't have any other options, so you continue to promote it",
    headerText: 'SaaS Marketing Channels For 2021',
    badge: 'OPerations',
  },
  {
    imageUrl:
      'https://assets-global.website-files.com/5f0a4c1d99c861dc3b6d3a37/60d4cf61d794cf0f6680a421_alexander-shatov-k1xf2D7jWUs-unsplash.jpg',
    text: "Social networking is one of the simplest ways to advertise goods and services online. Social media platforms like Twitter, Facebook, and Instagram make it simple to spread information about your SaaS product, connect with potential consumers, advertise exclusive discounts, provide customized service out a lot of hassle (for example, you don't have to be introduced on LinkedIn or wait for someone to add you on Facebook). s, and much more. The main strength of Twitter is that it allows you to communicate with nearly anyone with.",
    headerText: 'How Do You Use Twitter As A SaaS Business?',
    badge: 'Metrics',
  },
  {
    imageUrl:
      'https://assets-global.website-files.com/5f0a4c1d99c861dc3b6d3a37/60d4e0363497a2a794c61dd7_alexander-shatov-CTZhGbSxWLI-unsplash.jpg',
    text: 'Every month, 2.5 billion people use Facebook to connect with friends and family and discover things that matter. Find new customers and develop long-term relationships with them.',
    headerText: 'How Do You Use Facebook As A SaaS Business?',
    badge: '',
  },
  {
    imageUrl:
      'https://assets-global.website-files.com/5f0a4c1d99c861dc3b6d3a37/60d333da06b15926c568b0ce_emma-matthews-digital-content-production-O_CLjxjzN3M-unsplash.jpg',
    text: 'Using social media to market your SaaS is really rising today. Create pages on the websites that your clients visit, then give substantial content to help them remember you',
    headerText: 'How To Increase Social Media Followers As A SaaS Owner',
    badge: 'Listicle',
  },
  {
    imageUrl:
      'https://assets-global.website-files.com/5f0a4c1d99c861dc3b6d3a37/60db325f594ab912e88447d8_cardmapr-nl-oJAHi6JyFF4-unsplash.jpg',
    text: "oftware-as-a-service is overtaking the industry. Whether it's payment processing, website development, or restaurant management apps, there's a SaaS tool that can manage it",
    headerText: 'Fintech Scales Vertical SaaS',
    badege: 'Operations',
  },
  {
    imageUrl:
      'https://assets-global.website-files.com/5f0a4c1d99c861dc3b6d3a37/60dcc10d39a6c324460aa0e9_patrick-tomasso-fMntI8HAAB8-unsplash.jpg',
    text: 'There is a small community of review pages that keep us up-to-date on the latest trends in B2B technology and SaaS. Online reviews are the comments made by consumers who have bought or used a product',
    headerText: 'SaaS Customer Research - 21 Tips To Do It The Right Way',
    badege: 'Listicle',
  },
  {
    imageUrl:
      'https://assets-global.website-files.com/5f0a4c1d99c861dc3b6d3a37/60db63d4b3d70c46667d22de_martin-sanchez-Tzoe6VCvQYg-unsplash.jpg',
    text: 'Covid and related lockdowns may be the most disturbing action most of us have ever experienced',
    headerText: 'SaaS Fundraising In The Post-Covid World',
    badege: 'Fundraise',
  },
]

export const infoCards = [
  {
    imageUrl:
      'https://assets-global.website-files.com/5f0a4c1d99c861dc3b6d3a37/63924671ac5e123db177cba3_REALYN%20SARMIENTO.jpg',
    headerText: 'Realyn Sarmiento',
    text: "Realyn's experience working for a publication in the past gives her an edge in social media marketing, news writing and content curation--skills she puts to use at SaaS Journal. At SaaS Journal, she is responsible for tasks such as research, content curation and marketing.",
  },
  {
    imageUrl:
      'https://assets-global.website-files.com/5f0a4c1d99c861dc3b6d3a37/6398427ce742b818f6152aa7_sa%202022.jpg',
    headerText: 'Sheilla Mae Lim',
    text: '',
  },
  {
    imageUrl:
      'https://assets-global.website-files.com/5f0a4c1d99c861dc3b6d3a37/60f6489d2051bf7951f843cb_SS_Adriana_Peterson.png',
    headerText: 'Adriana Peterson',
    text: 'Adriana has a background in Social Media Marketing, Video Editing, Content Writing and overall Marketing Strategy. At SaaS Journal she is responsible for growth hacking and social media but also heavily involved in content curation, partnership & alliances',
  },
  {
    imageUrl:
      'https://assets-global.website-files.com/5f0a4c1d99c861dc3b6d3a37/5f0e2ea50d42d65313d7c86b_Manish%20Linkedin%20Pic.jpg',
    headerText: 'Manish Balakrishnan',
    text: 'Manish is veteran Technology entrepreneur who has been leading Technology and Marketing leadership teams across domains. He runs his own Startup consulting company as well as web and app development company.',
  },
  {
    imageUrl:
      'https://assets-global.website-files.com/5f0a4c1d99c861dc3b6d3a37/5f0e34f362162c3baa2dab56_Author_Jeol_Juma.png',
    headerText: 'Joel Juma',
    text: 'SaaS Founder and Startup enthusiast promoting startups and investment into Africa. Joel writes about SaaS sales and growth hacking',
  },
  {
    imageUrl:
      'https://assets-global.website-files.com/5f0a4c1d99c861dc3b6d3a37/5f0e353f6cd070862acac722_Author_Sergio_Mamani.png',
    headerText: 'Sergio Mamani',
    text: 'Angel investor and SaaS Edtech Founder who rights about all things SaaS including early SaaS funding, hiring within SaaS as well as financial planning within SaaS',
  },
]
