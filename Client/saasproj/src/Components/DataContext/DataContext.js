import { createContext, useContext, useEffect, useState } from 'react'
import { fetchCards, fetchEnquiry } from './DataService'

const DataContext = createContext()

export const useData = () => useContext(DataContext)
console.log('In the data context')
export const DataProvider = ({ children }) => {
  const [cards, setCards] = useState([])
  const [enquiry, setEnquiry] = useState([])
  console.log('in the data context')

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [cardsResult, enquiryResult] = await Promise.all([
          fetchCards(),
          fetchEnquiry(),
        ])
        setCards(cardsResult)
        setEnquiry(enquiryResult)
      } catch (error) {
        console.log('Fetching error in Datacontext')
      }
    }
    fetchData()
  }, [])

  return (
    <DataContext.Provider value={{ cards, enquiry }}>
      {children}
    </DataContext.Provider>
  )
}
