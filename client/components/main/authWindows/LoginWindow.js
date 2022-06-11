import InputField from "../../common/InputField/InputField";
import style from "./AuthWindow.module.scss"
import Button from "../../common/Button";
import {toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import useInput from "../../../hooks/hook.input";
import useHttp from "../../../hooks/hook.fetch";

const LoginWindow = ({}) => {
    const email = useInput('', {isEmpty: true, minLength: 3, isEmail: true})
    const password = useInput('', {isEmpty: true, minLength: 6})
    const {isLoading, error, sendRequest} = useHttp()

    const registerHandler = async () => {
        try {
            const data = await sendRequest.postData('api/auth/login',
                {
                    email: email.value,
                    password: password.value,
                })
            if (!data.errors) {
                toast.success('You are successfully authorized!')
                declineButtonClickFunction()
            }
        } catch (e) {
            console.log(error)
        }
    }

    const declineButtonClickFunction = () => {
        email.setValue('')
        password.setValue('')
        toast.success("Fields cleaned");
    }

    const buttonIsDisabled = !email.errorsArray.length && email.value && !password.errorsArray.length && password.value

    return (
        <div className={style.loginWindowWrapper}>
            <p>Enter your login and password</p>
            <InputField error={email.errorsArray.length && email.isDirty} errorsArray={email.errorsArray}
                        value={email.value} inputId={'email'} inputName={'email'} inputPlaceholder={'Email'}
                        inputFieldWidth={'100%'} inputType={'email'} onChange={email.onChange} onBlur={email.onBlur}/>
            <InputField error={password.errorsArray.length && password.isDirty} errorsArray={password.errorsArray}
                        inputId={'password'} inputName={'password'} inputPlaceholder={'Password'} value={password.value}
                        inputFieldWidth={'100%'} inputType={'password'} onChange={password.onChange}
                        onBlur={password.onBlur}/>
            <div className={style.buttonsBlock}>
                <Button isDisabled={!buttonIsDisabled} clickFunction={registerHandler} link={''} borderColor={'#757575'}
                        innerText={'Submit'} textColor={'#757575'}
                        hoveredBackgroundColor={'rgba(0, 2, 0, 0.2)'}/>
                <Button clickFunction={declineButtonClickFunction} link={''} borderColor={'#757575'}
                        innerText={'Clean'} textColor={'#757575'}
                        hoveredBackgroundColor={'rgba(0, 2, 0, 0.2)'}/>
            </div>
        </div>
    )
}

export default LoginWindow