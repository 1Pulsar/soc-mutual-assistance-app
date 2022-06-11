import {toast} from "react-toastify";
import style from "./AuthWindow.module.scss";
import InputField from "../../common/InputField/InputField";
import Button from "../../common/Button";
import useHttp from "../../../hooks/hook.fetch";
import useInput from "../../../hooks/hook.input";

const SignInWindow = () => {
    const email = useInput('', {isEmpty: true, minLength: 3, isEmail: true})
    const phoneNumber = useInput('', {isEmpty: true, minLength: 7})
    const password = useInput('', {isEmpty: true, minLength: 6})
    const repeatPassword = useInput('', {isEmpty: true, minLength: 6})
    const name = useInput('', {isEmpty: true})
    const surname = useInput('', {isEmpty: true})
    const {isLoading, error, sendRequest} = useHttp()

    const registerHandler = async () => {
        try {
            if (password.value !== repeatPassword.value) {
                return toast.error('Passwords did not match')
            }
            const data = await sendRequest.postData('api/auth/register',
                {
                    email: email.value,
                    phoneNumber: phoneNumber.value,
                    password: password.value,
                    name: name.value,
                    surname: surname.value
                })
            if (!data.errors) {
                toast.success('You are successfully registered!')
                declineButtonClickFunction()
            }
        } catch (e) {
            console.log(error)
        }
    }

    const declineButtonClickFunction = () => {
        email.setValue('')
        password.setValue('')
        name.setValue('')
        surname.setValue('')
        repeatPassword.setValue('')
        phoneNumber.setValue('')
        toast.success("Fields cleaned");
    }

    const buttonIsDisabled = !email.errorsArray.length && email.value && !password.errorsArray.length && password.value
        && !name.errorsArray.length && name.value && !surname.errorsArray.length && surname.value
        && !repeatPassword.errorsArray.length && repeatPassword.value && !phoneNumber.errorsArray.length && phoneNumber.value

    return (
        <div className={style.loginWindowWrapper}>
            <p>Hello, Enter some information about you!</p>
            <InputField error={name.errorsArray.length && name.isDirty} errorsArray={name.errorsArray}
                        value={name.value} inputId={'name'} inputName={'name'} inputPlaceholder={'Name'}
                        inputFieldWidth={'100%'} inputType={'name'} onChange={name.onChange} onBlur={name.onBlur}/>
            <InputField error={surname.errorsArray.length && surname.isDirty} errorsArray={surname.errorsArray}
                        value={surname.value} inputId={'surname'} inputName={'surname'} inputPlaceholder={'Surname'}
                        inputFieldWidth={'100%'} inputType={'surname'} onChange={surname.onChange}
                        onBlur={surname.onBlur}/>
            <InputField error={email.errorsArray.length && email.isDirty} errorsArray={email.errorsArray}
                        value={email.value} inputId={'email'} inputName={'email'} inputPlaceholder={'Email'}
                        inputFieldWidth={'100%'} inputType={'email'} onChange={email.onChange} onBlur={email.onBlur}/>
            <InputField error={phoneNumber.errorsArray.length && phoneNumber.isDirty}
                        errorsArray={phoneNumber.errorsArray}
                        value={phoneNumber.value} inputId={'phoneNumber'} inputName={'phoneNumber'}
                        inputPlaceholder={'Phone Number'}
                        inputFieldWidth={'100%'} inputType={'phoneNumber'} onChange={phoneNumber.onChange}
                        onBlur={phoneNumber.onBlur}/>
            <InputField error={password.errorsArray.length && password.isDirty} errorsArray={password.errorsArray}
                        value={password.value} inputId={'password'} inputName={'password'} inputPlaceholder={'Password'}
                        inputFieldWidth={'100%'} inputType={'password'} onChange={password.onChange}
                        onBlur={password.onBlur}/>
            <InputField error={repeatPassword.errorsArray.length && repeatPassword.isDirty}
                        errorsArray={repeatPassword.errorsArray}
                        value={repeatPassword.value} inputId={'repeatPassword'} inputName={'repeatPassword'}
                        inputPlaceholder={'Repeat password'}
                        inputFieldWidth={'100%'} inputType={'password'} onChange={repeatPassword.onChange}
                        onBlur={repeatPassword.onBlur}/>
            <div className={style.buttonsBlock}>
                <Button isDisabled={!buttonIsDisabled} clickFunction={registerHandler} link={''} borderColor={'#757575'}
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