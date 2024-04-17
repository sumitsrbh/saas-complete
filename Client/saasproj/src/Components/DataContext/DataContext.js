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
import { useNavigate } from 'react-router-dom'
import { Alert, Snackbar } from '@mui/material'

const DataContext = createContext()

const initialValues = {
  email: '',
  password: '',
}

export const useData = () => useContext(DataContext)
export const DataProvider = ({ children }) => {
  const [cards, setCards] = useState([])
  const [cardEditState, setCardEditState] = useState(false)
  const [cardEditValue, setCardEditValue] = useState(null)
  const [enquiry, setEnquiry] = useState([])
  const [cardDeleteState, setCardDeleteState] = useState(false)
  const [enquiryDeleteState, setEnquiryDeleteState] = useState(false)
  const [isLoading, setIsLoading] = useState(true)
  const [logged, setLoggedIn] = useState({
    state: false,
    value: 'Login',
    token: null,
  })
  const [loginError, setLoginError] = useState(null)
  const [input, setInputs] = useState(initialValues)
  const [enquiryTable, setEnquiryTable] = useState(false)
  const [selectedTab, setSelectedTab] = useState('Card Create')
  const [cardTable, setCardTable] = useState(false)
  const [cardCreated, setCardCreated] = useState(false)
  const navigate = useNavigate()

  useEffect(() => {
    // Load token from localStorage on component mount
    const localStorageToken = localStorage.getItem('token')
    const sessionStorageToken = sessionStorage.getItem('token')

    if (sessionStorageToken) {
      // If token exists in sessionStorage, set loggedIn state
      setLoggedIn({
        state: true,
        value: 'Logout',
        token: sessionStorageToken,
      })
    } else if (localStorageToken) {
      // If token exists in localStorage but not in sessionStorage, set it to sessionStorage
      sessionStorage.setItem('token', localStorageToken)
      setLoggedIn({
        state: true,
        value: 'Logout',
        token: localStorageToken,
      })
    }
  }, [])

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
        // console.log('Fetching error in Datacontext')
      }
    }

    fetchData()
  }, [])

  const handleTabClick = (tab) => {
    setSelectedTab(tab)
    if (tab === 'Cards Table') {
      setCardTable(true)
      setEnquiryTable(false)
      // setCardEditState(false)
    } else if (tab === 'Enquiry') {
      // Navigate to the Enquiry table
      setEnquiryTable(true)
      setCardTable(false)
      // setCardEditState(false)
      // navigate('/enquiry-table')
    } else if (tab === 'Card Create') {
      setEnquiryTable(false)
      setCardTable(false)
    }
  }

  const cardDelete = async (Id) => {
    console.log('In the card delete-05')
    try {
      const deleteResult = await fetchDeleteCard(Id)
      if (deleteResult) {
        setCards(deleteResult)
        // console.log('deleteResult :', deleteResult)
        // setCardDeleteState(true)
        return cards
      }
    } catch (error) {
      console.log('Error deletion', error)
    }
  }
  const cardUpdate = async ({ inputId, formData }) => {
    console.log('In the card update')
    // console.log('In the card update id ', inputId)
    console.log('In the card update values ', formData)

    try {
      console.log('in CardUpdadte  edited Valeus', formData)
      const updateResult = await fetchUpdateCard({ inputId, formData })
      if (updateResult) {
        console.log('updateResult :', updateResult)
        setCards(updateResult)
        return updateResult
      }
    } catch (error) {
      console.log('Error Updation', error)
    }
  }

  const cardGet = async (id) => {
    // console.log('In the card update')
    try {
      const getResult = await fetchGetCard(id)
      if (getResult) {
        // console.log('updateResult :', getResult.cards)
        //set the value of clicked cards in the formedit
        setCardEditState(true)
        setCardEditValue(getResult.cards)
      }
    } catch (error) {
      console.log('Error Card get', error)
    }
  }

  const enquiryDelete = async (Id) => {
    // console.log('In the enquiry delete-05')
    try {
      const deleteResult = await fetchDeleteEnquiry(Id)
      if (deleteResult) {
        // console.log('deleteResult :', deleteResult)
        setEnquiryDeleteState(true)
        setEnquiry(deleteResult)
        return enquiry
      }
    } catch (error) {
      console.log('Error deletion', error)
    }
  }

  const loginFromSubmitHandler = async (email, password) => {
    // console.log('In loginFromSubmitHandler of DataContect')
    try {
      const loginResult = await formLogin(email, password)
      if (loginResult.status === 200) {
        // // Store token in localStorage
        localStorage.setItem('token', loginResult.data.token)

        // Store token in sessionStorage
        sessionStorage.setItem('token', loginResult.data.token)

        setLoggedIn({
          state: true,
          value: 'Logout',
          token: loginResult.data.token,
        })

        return loginResult
      }
    } catch (err) {
      console.log(err)
      setLoginError(err.response.data.message || 'Wrong credentials.')
    }
  }

  // Logout function to clear token from localStorage
  const logOutHanlder = () => {
    console.log('In the Logout handler')
    if (logged.state) {
      console.log('in the if statement manipulating logged')
      localStorage.removeItem('token')
      sessionStorage.removeItem('token')
      console.log('in the if statement manipulating logged after clear')
      setLoggedIn({
        state: false,
        value: 'Login',
        token: null,
      })
    } else {
      navigate('/login')
    }
    console.log('In the Logouthandler,  State:', logged.state)
  }
  const logInHandler = () => {
    console.log('In the loginHandler')
    if (logged.state) {
      return <Alert>Already Logged in</Alert>
    } else {
      navigate('/login')
    }
  }

  return (
    <DataContext.Provider
      value={{
        setCards,
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
        cardCreated,
        setCardCreated,
        cardGet,
        enquiry,
        enquiryDelete,
        enquiryDeleteState,
        setEnquiryDeleteState,
        isLoading,

        loginFromSubmitHandler,
        logged,
        setLoggedIn,
        logInHandler,
        loginError,
        logOutHanlder,
        input,
        setInputs,
        handleTabClick,
        cardTable,
        setCardTable,
        selectedTab,
        setSelectedTab,
        enquiryTable,
        setEnquiryTable,
      }}
    >
      {children}
    </DataContext.Provider>
  )
}
