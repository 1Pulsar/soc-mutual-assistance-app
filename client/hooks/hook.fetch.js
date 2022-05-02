import {useCallback, useState} from "react";

async function hookFetch() {
    const [isLoading, setLoading] = useState(false)
    const [error, setError] = useState(null)
    const sendRequest = useCallback(async (url = '', body = null, method = 'GET') => {
        setLoading(true)
        try {
            const response = await fetch(url, {
                method: method, // *GET, POST, PUT, DELETE, etc.
                mode: 'no-cors', // no-cors, *cors, same-origin
                cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
                credentials: 'same-origin', // include, *same-origin, omit
                headers: {
                    'Content-Type': 'application/json'
                },
                redirect: 'follow', // manual, *follow, error
                referrerPolicy: 'no-referrer', // no-referrer, *client
                body: JSON.stringify(body) // body data type must match "Content-Type" header
            });
            const data = await response.json(); // parses JSON response into native JavaScript objects

            if (!response.ok){
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
}

export default hookFetch