import { createContext, useContext, useEffect, useState } from 'react'
import {
  fetchCards,
  fetchEnquiry,
  fetchDeleteCard,
  fetchDeleteEnquiry,
  formLogin,
  fetchUpdateCard,
  fetchGetCard,
} from './DataService'

const DataContext = createContext()

const initialValues = {
  email: '',
  password: '',
}

export const useData = () => useContext(DataContext)
export const DataProvider = ({ children }) => {
  const [cards, setCards] = useState([])
  const [cardEditState, setCardEditState] = useState(false)
  const [cardEditValue, setCardEditValue] = useState()
  const [enquiry, setEnquiry] = useState([])
  const [cardDeleteState, setCardDeleteState] = useState(false)
  const [enquiryDeleteState, setEnquiryDeleteState] = useState(false)
  const [isLoading, setIsLoading] = useState(true)
  const [logged, setLoggedIn] = useState({ state: false, token: 0 })
  const [loginError, setLoginError] = useState(null)
  const [input, setInputs] = useState(initialValues)
  const [loginCredentials, setLoginCredentials] = useState(initialValues)
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
        return cards
      }
    } catch (error) {
      console.log('Error deletion', error)
    }
  }
  const cardUpdate = async ({ id, editValues }) => {
    console.log('In the card update')
    try {
      const updateResult = await fetchUpdateCard({ id, editValues })
      if (updateResult) {
        console.log('updateResult :', updateResult)
        setCardEditState(true)
        setCards(updateResult)
        return updateResult
      }
    } catch (error) {
      console.log('Error deletion', error)
    }
  }

  const cardGet = async (id) => {
    console.log('In the card update')
    try {
      const getResult = await fetchGetCard(id)
      if (getResult) {
        console.log('updateResult :', getResult.cards)
        setCardEditValue(getResult.cards)
        setCardEditState(true)
      }
    } catch (error) {
      console.log('Error Card get', error)
    }
  }

  const enquiryDelete = async (Id) => {
    console.log('In the enquiry delete-05')
    try {
      const deleteResult = await fetchDeleteEnquiry(Id)
      if (deleteResult) {
        console.log('deleteResult :', deleteResult)
        setEnquiryDeleteState(true)
        setEnquiry(deleteResult)
        return enquiry
      }
    } catch (error) {
      console.log('Error deletion', error)
    }
  }

  const formSubmitHandler = async (email, password) => {
    try {
      const loginResult = await formLogin(email, password)
      if (loginResult.status === 200) {
        setLoggedIn(
          (logged.state = true),
          (logged.token = loginResult.data.token)
        )
      }
    } catch (err) {
      console.log(err)
      setLoginError(err.response.data.message || 'Wrong credentials.')
    }
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
        cardUpdate,
        cardEditValue,
        cardEditState,
        setCardEditState,
        setCardEditValue,
        cardGet,
        enquiry,
        enquiryDelete,
        enquiryDeleteState,
        setEnquiryDeleteState,
        isLoading,

        formSubmitHandler,
        logged,
        setLoggedIn,
        loginError,
        input,
        setInputs,
      }}
    >
      {children}
    </DataContext.Provider>
  )
}
