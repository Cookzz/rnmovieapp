import { Alert } from 'react-native'
import axios from 'axios'

import { API_KEY } from '../constants/AppConst'
import { BASE_URL } from '../constants/APIConst'

const api = axios.create({
  baseURL: BASE_URL,
  params: {
    api_key: API_KEY
  }
})

export const fetchAPI = async(endpoint: string, data?: any) => {
  //normally i will use POST but its mostly used to retrieve data, so GET is used
  try {
    const response = await api.get(endpoint, {
      params: data
    })
    
    return {
      status: response.status,
      data: response.data
    }
  } catch (err) {
    Alert.alert('Error', 'Something went wrong')
  }
}