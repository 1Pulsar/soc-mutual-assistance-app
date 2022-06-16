import {useEffect, useState} from "react";

const useValidation = (value, validations) => {
    const [isEmpty, setEmpty] = useState(true)
    const [minLengthError, setMinLengthError] = useState(true)
    const [maxLengthError, setMaxLengthError] = useState(true)
    const [emailError, setEmailError] = useState(false)
    const [numbersError, setNumbersError] = useState(false)
    const [errorsArray, setErrorsArray] = useState([])

    useEffect(() => {
        for (const validation in validations) {
            switch (validation) {
                case 'minLength':
                    const minLengthErrorMessage = `field minimal length is equal ${validations[validation]} symbols`
                    if (value.length < validations[validation]) {
                        setMinLengthError(true)
                        if (!errorsArray.includes(minLengthErrorMessage, 0) && minLengthError) {
                            setErrorsArray([...errorsArray, minLengthErrorMessage])
                        }
                    } else {
                        setMinLengthError(false)
                        setErrorsArray(errorsArray.filter((item) => item !== minLengthErrorMessage))
                    }
                    break
                case 'maxLength':
                    const maxLengthErrorMessage = `field maximum length is equal ${validations[validation]} symbols`
                    if (value.length > validations[validation]) {
                        setMaxLengthError(true)
                        if (!errorsArray.includes(maxLengthErrorMessage, 0) && maxLengthError) {
                            setErrorsArray([...errorsArray, maxLengthErrorMessage])
                        }
                    } else {
                        setMaxLengthError(false)
                        setErrorsArray(errorsArray.filter((item) => item !== maxLengthErrorMessage))
                    }
                    break
                case 'isEmpty':
                    const emptyErrorMessage = 'field is not to be empty'
                    if (value.length > 1) {
                        setEmpty(false)
                        setErrorsArray(errorsArray.filter((item) => item !== emptyErrorMessage))
                    } else {
                        setEmpty(true)
                        if (!errorsArray.includes(emptyErrorMessage, 0) && isEmpty) {
                            setErrorsArray([...errorsArray, emptyErrorMessage])
                        }
                    }
                    break
                case 'isEmail':
                    const emailErrorMessage = 'field is not email'
                    const re =
                        /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
                    if (re.test(String(value).toLowerCase())) {
                        setEmailError(false)
                        setErrorsArray(errorsArray.filter((item) => item !== emailErrorMessage))
                    } else {
                        setEmailError(true)
                        if (!errorsArray.includes(emailErrorMessage, 0) && isEmpty) {
                            setErrorsArray([...errorsArray, emailErrorMessage])
                        }
                    }
                    break
                case 'isNumbers':
                    const numbersErrorMessage = 'field is not number'
                    const regex = /[0-9]|\./
                    if (regex.test(value)) {
                        setNumbersError(false)
                        setErrorsArray(errorsArray.filter((item) => item !== numbersErrorMessage))
                    } else {
                        setNumbersError(true)
                        if (!errorsArray.includes(numbersErrorMessage, 0) && isEmpty) {
                            setErrorsArray([...errorsArray, numbersErrorMessage])
                        }
                    }
                    break
            }
        }
    }, [value])

    return {
        isEmpty,
        minLengthError,
        errorsArray,
        emailError,
        maxLengthError
    }
}

export default useValidation