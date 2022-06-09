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
/*
const useHttp = () => {
    const [isLoading, setLoading] = useState(false)
    const [error, setError] = useState(null)
    const sendRequest = useCallback(async (url = '', body = null, method = 'GET', headers = {}) => {
        setLoading(true)
        console.log('request is started')
        try {

            if (body) {
                body = JSON.stringify(body)
                console.log(body)
                headers['Content-Type'] = 'application/json'
                headers["Content-Length"] = Buffer.byteLength(body, "utf8")
            }

            const response = await fetch(url, {
                method: method, // *GET, POST, PUT, DELETE, etc.
                mode: 'no-cors', // no-cors, *cors, same-origin
                cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
                credentials: 'same-origin', // include, *same-origin, omit
                headers: headers,
                redirect: 'follow', // manual, *follow, error
                referrerPolicy: 'no-referrer', // no-referrer, *client
                body: body // body data type must match "Content-Type" header
            });
            const data = await response.json(); // parses JSON response into native JavaScript objects

            if (!response.ok) {
                throw new Error(data.message || "Something error is occurred")
            }
            setLoading(false)
            return data
        } catch (e) {
            setError(e.message)
            setLoading(false)
            throw e
        }
    }, [])
    const clearError = () => setError(null)
    return {isLoading, sendRequest, error, clearError}
}

export default useHttp
*/