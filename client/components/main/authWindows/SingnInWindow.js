import {toast} from "react-toastify";
import style from "./AuthWindow.module.scss";
import InputField from "../../common/InputField/InputField";
import Button from "../../common/Button";
import {useState} from "react";
import useHttp from "../../../hooks/hook.fetch";

const SignInWindow = () => {
    const [email, setEmail] = useState('')
    const [phoneNumber, setPhoneNumber] = useState('')
    const [password, setPassword] = useState('')
    const [repeatPassword, setRepeatPassword] = useState('')
    const [name, setName] = useState('')
    const [surname, setSurname] = useState('')
    const {isLoading, error, sendRequest} = useHttp()

    const registerHandler = async () => {
        try {
            if (password !== repeatPassword) {
                return toast.error('Passwords don`t match')
            }
            const data = await sendRequest.postData('api/auth/register', {email, phoneNumber, password, name, surname})
            if (!data.errors) {
                toast.success('You are successfully registered!')
            }
        } catch (e) {
            console.log(error)
        }
    }

    const declineButtonClickFunction = () => {
        setEmail('')
        setPassword('')
        toast.success("Fields cleaned");
    }

    return (
        <div className={style.loginWindowWrapper}>
            <p>Hello, Enter some information about you!</p>
            <InputField inputId={'name'} inputName={'name'} inputPlaceholder={'Name'} value={name}
                        inputFieldWidth={'100%'} inputType={'name'} setValue={setName}/>
            <InputField inputId={'surname'} inputName={'surname'} inputPlaceholder={'Surname'} value={surname}
                        inputFieldWidth={'100%'} inputType={'surname'} setValue={setSurname}/>
            <InputField value={email} inputId={'email'} inputName={'email'} inputPlaceholder={'Email'}
                        inputFieldWidth={'100%'} inputType={'email'} setValue={setEmail}/>
            <InputField value={phoneNumber} inputId={'phoneNumber'} inputName={'phoneNumber'}
                        inputPlaceholder={'Phone Number'}
                        inputFieldWidth={'100%'} inputType={'tel'} setValue={setPhoneNumber}/>
            <InputField inputId={'password'} inputName={'password'} inputPlaceholder={'Password'} value={password}
                        inputFieldWidth={'100%'} inputType={'password'} setValue={setPassword}/>
            <InputField inputId={'repeatPassword'} inputName={'repeatPassword'}
                        inputPlaceholder={'Please, repeat password'} value={repeatPassword}
                        inputFieldWidth={'100%'} inputType={'repeatPassword'} setValue={setRepeatPassword}/>
            <div className={style.buttonsBlock}>
                <Button clickFunction={registerHandler} link={''} borderColor={'#757575'}
                        innerText={'Submit'} textColor={'#757575'}
                        hoveredBackgroundColor={'rgba(0, 2, 0, 0.2)'}/>
                <Button clickFunction={declineButtonClickFunction} link={''} borderColor={'#757575'}
                        innerText={'Decline'} textColor={'#757575'}
                        hoveredBackgroundColor={'rgba(0, 2, 0, 0.2)'}/>
            </div>
        </div>
    )
}

export default SignInWindow