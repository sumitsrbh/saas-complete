import { createContext, useContext, useEffect, useState } from 'react'
import { fetchCards, fetchEnquiry } from './DataService'

const DataContext = createContext()

export const useData = () => useContext(DataContext)
export const DataProvider = ({ children }) => {
  const [cards, setCards] = useState([])
  const [enquiry, setEnquiry] = useState([])
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [cardsResult, enquiryResult] = await Promise.all([
          fetchCards(),
          fetchEnquiry(),
        ])
        setCards(cardsResult)
        setEnquiry(enquiryResult)
        setIsLoading(false)
      } catch (error) {
        console.log('Fetching error in Datacontext')
      }
    }
    fetchData()
  }, [])

  return (
    <DataContext.Provider value={{ cards, enquiry, isLoading }}>
      {children}
    </DataContext.Provider>
  )
}
