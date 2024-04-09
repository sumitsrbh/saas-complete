import { createContext, useContext, useEffect, useState } from 'react'
import {
  fetchCards,
  fetchEnquiry,
  fetchDeleteCard,
  fetchDeleteEnquiry,
} from './DataService'

const DataContext = createContext()

export const useData = () => useContext(DataContext)
export const DataProvider = ({ children }) => {
  const [cards, setCards] = useState([])
  const [enquiry, setEnquiry] = useState([])
  const [cardDeleteState, setCardDeleteState] = useState(false)
  const [enquiryDeleteState, setEnquiryDeleteState] = useState(false)
  const [isLoading, setIsLoading] = useState(true)
  // const [deleteId, setDeleteId] = useState(null)

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

  const cardDelete = async (Id) => {
    console.log('In the card delete-05')
    try {
      const deleteResult = await fetchDeleteCard(Id)
      if (deleteResult) {
        console.log('deleteResult :', deleteResult)
        setCardDeleteState(true)
        setCards(deleteResult)
      }
    } catch (error) {
      console.log('Error deletion', error)
    }
    return cards
  }

  const enquiryDelete = async (Id) => {
    console.log('In the enquiry delete-05')
    try {
      const deleteResult = await fetchDeleteEnquiry(Id)
      if (deleteResult) {
        console.log('deleteResult :', deleteResult)
        setEnquiryDeleteState(true)
        setEnquiry(deleteResult)
      }
    } catch (error) {
      console.log('Error deletion', error)
    }
    return enquiry
  }

  return (
    <DataContext.Provider
      value={{
        cards,
        setCardDeleteState,
        cardDeleteState,
        // setDeleteId,
        // deleteId,
        cardDelete,
        enquiry,
        enquiryDelete,
        enquiryDeleteState,
        setEnquiryDeleteState,
        isLoading,
      }}
    >
      {children}
    </DataContext.Provider>
  )
}
