import {useCallback, useState} from "react";
import * as axios from "axios"

const useHttp = () => {
    const [isLoading, setLoading] = useState(false)
    const [error, setError] = useState(null)
    const instance = axios.create({
        withCredentials: false,
        baseURL: "http://localhost:5000/"
    })
    const sendRequest = {
        postData: async (url ,requestData={}, headers={mode: 'cors'}) => {
            try {
                setLoading(true)
                const response = await instance.post(url, requestData, {headers})
                setLoading(false)
                return response.data
            } catch (e) {
                console.log('Something error during http request', e.message)
                setLoading(false)
            }
        },
        getData: async (url, headers={}) => {
            try {
                setLoading(true)
                const response = await instance.get(url, {headers})
                setLoading(false)
                return response.data
            } catch (e) {
                setLoading(false)
                console.log('Something error during http request', e.message)
            }
        },
        putData: async (url, requestData={}, headers={}) => {
            try {
                setLoading(true)
                const response = await instance.post(url, requestData, {headers})
                setLoading(false)
                return response.data
            } catch (e) {
                console.log('Something error during http request', e.message)
                setLoading(false)
            }
        },
        deleteData: async (url, headers={}) => {
            try {
                setLoading(true)
                const response = await instance.delete(url, headers)
                return response.data
            } catch (e) {

            }
        }
    }

    return {isLoading, error, sendRequest}

}

export default useHttp