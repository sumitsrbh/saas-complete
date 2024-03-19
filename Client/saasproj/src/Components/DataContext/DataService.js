import axios from 'axios'

export const fetchCards = async () => {
  try {
    const response = await axios.get('http://127.0.0.1:8000/api/cards')
    const cardsData = response && response.data.data.cards
    console.log(
      'In fetchData response.data.data  data-type:',
      typeof cardsData,
      cardsData
    )
    return cardsData
  } catch (error) {
    console.error('Error fetching data:', error)
    throw error
  }
}
export const fetchEnquiry = async () => {
  try {
    const response = await axios.get('http://127.0.0.1:8000/api/enquiry')
    const enquiryData = response && response.data.data.enquiry
    return enquiryData
  } catch (error) {
    console.error('Error fetching data:', error)
    throw error
  }
}
