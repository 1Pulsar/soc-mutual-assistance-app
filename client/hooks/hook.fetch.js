import {useCallback, useState} from "react";
import * as axios from "axios"
import {useSelector} from "react-redux";

const useHttp = () => {
    const [isLoading, setLoading] = useState(false)
    const [error, setError] = useState(null)
    const jwtToken = useSelector(state=>state.app.jwtToken)

    const instance = axios.create({
        withCredentials: false,
        baseURL: "http://localhost:5000/"
    })

    const defaultHeaders = {authorization:`Bearer ${jwtToken}`}


    const sendRequest = {
        postData: async (url ,requestData=defaultHeaders, headers={mode: 'cors'}) => {
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
        getData: async (url, headers=defaultHeaders) => {
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
        putData: async (url, requestData= {}, headers=defaultHeaders) => {
            try {
                setLoading(true)
                const response = await instance.put(url, requestData, {headers})
                setLoading(false)
                return response.data
            } catch (e) {
                console.log('Something error during http request', e.message)
                setLoading(false)
            }
        },
        deleteData: async (url, headers=defaultHeaders) => {
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