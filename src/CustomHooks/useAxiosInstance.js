import axios from 'axios'
import { appBaseUrl, appToken } from '../constants'

const useAxiosInstance = () => {
    const authToken = localStorage.getItem(appToken)

    const getHeader = () => {
        return {
            Authorization: `Bearer ${authToken}`,
            'Content-Type': 'application/json',
            'x-api-key': '',
        }
    }

    const api = axios.create({
        baseURL: appBaseUrl,
        headers: getHeader(),
    })

    return api
}

export default useAxiosInstance