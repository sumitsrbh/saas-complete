import { Paper } from '@mui/material'
import axios from 'axios'
import React, { useState, useEffect } from 'react'
import { Expandlepanel } from '../AdvertiseWdUsCont/AdvertiseWdUs'

function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1)
}

function EnquiryTemplate() {
  const [enquiryData, setEnquiryData] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://127.0.0.1:8000/api/enquiry')
        console.log('response from enquiry-', response.data)
        if (response.status === 200) {
          setEnquiryData(response.data.data.enquiry)
          setLoading(false)
          console.log('Enquiry data:', enquiryData.data)
        }
      } catch (err) {
        console.log('enquiry error', err)
      }
    }
    fetchData()
  }, [])
  return (
    <Paper
      elevation={0}
      sx={{ backgroundColor: '#777777', marginBottom: '70px', width: '80%' }}
    >
      {enquiryData.map((enq) => (
        <Expandlepanel
          headerText={capitalizeFirstLetter(enq.subject)}
          text1={`Name: ${enq.name}`}
          text2={`Number:${enq.number}`}
          text3={`Message: ${enq.message}`}
        />
      ))}
    </Paper>
  )
}

export default EnquiryTemplate
