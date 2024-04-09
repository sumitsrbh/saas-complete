import axios from 'axios'

export const fetchCards = async () => {
  try {
    const response = await axios.get('http://127.0.0.1:8000/api/cards')
    const cardsData = response && response.data.data.cards
    const reversedCardsData = cardsData.reverse()
    console.log(
      'In fetchData response.data.data  data-type:',
      typeof cardsData,
      cardsData
    )
    return reversedCardsData
    // return cardsData
  } catch (error) {
    console.error('Error fetching data:', error)
    throw error
  }
}
export const fetchEnquiry = async () => {
  try {
    const response = await axios.get('http://127.0.0.1:8000/api/enquiry')
    const enquiryData = response && response.data.data.enquiry
    const reversedEnquiryData = enquiryData.reverse()
    return reversedEnquiryData
    // return enquiryData
  } catch (error) {
    console.error('Error fetching data:', error)
    throw error
  }
}

export const fetchDelete = async (id) => {
  try {
    const response = await axios.delete(`http://127.0.0.1:8000/api/cards/${id}`)
    console.log('response after delete', response)
    const cardsData = response && response.data.data
    const reversedCardsData = cardsData.reverse()
    console.log('response after deletion: ', response.data.message)
    if (response.data.message === 'Card deleted') {
      return reversedCardsData
    }
  } catch (error) {
    console.log('Error deletion', error)
    throw error
  }
}
