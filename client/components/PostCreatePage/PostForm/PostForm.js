import InputField from "../../common/InputField/InputField";
import useInput from "../../../hooks/hook.input";
import style from "./PostForm.module.scss";
import TextArea from "../../common/InputField/TextArea";
import Button from "../../common/Button";
import {toast} from "react-toastify";
import useHttp from "../../../hooks/hook.fetch";
import {useSelector} from "react-redux";

const PostForm = () => {
    const title = useInput('', {isEmpty: true, minLength: 5})
    const price = useInput('', {isEmpty: true, isNumbers: false})
    const city = useInput('', {isEmpty: true, minLength: 3})
    const text = useInput('', {isEmpty: true, minLength: 20})

    const jwtToken = useSelector((state) => state.app.jwtToken)

    const {isLoading, error, sendRequest} = useHttp()

    const buttonIsDisabled = !title.errorsArray.length && title.value && !price.errorsArray.length && price.value &&
        !city.errorsArray.length && city.value && !text.errorsArray.length && text.value

    const declineButtonClickFunction = () => {
        title.setValue('')
        price.setValue('')
        city.setValue('')
        text.setValue('')
        toast.success("Fields cleaned");
    }

    const submitPostHandler = async() => {
        try {
            console.log('submit')
            const data = await sendRequest.postData('/api/post/create',
                {
                    title:title.value,
                    text: text.value,
                    price:Number(price.value),
                    city:city.value
                }, {authorization:`Bearer ${jwtToken}`})
            if (!data.errors) {
                toast.success('Your post are successfully published')
                declineButtonClickFunction()
            }
        } catch (e) {
            console.log(error)
        }
    }

    return (
        <div className={style.postFormBody}>
            <div className={style.titleAndPriceWrapper}>
                <InputField error={title.errorsArray.length && title.isDirty} errorsArray={title.errorsArray}
                            value={title.value} inputId={'title'} inputName={'title'} inputPlaceholder={'Post title'}
                            inputFieldWidth={'70%'} inputType={'title'} onChange={title.onChange}
                            onBlur={title.onBlur} maxLength={30} backgroundColor={'rgba(255, 255, 255, 0.9)'}/>

                <InputField error={price.errorsArray.length && price.isDirty} errorsArray={price.errorsArray}
                            value={price.value} inputId={'price'} inputName={'price'} inputPlaceholder={'Price'}
                            inputFieldWidth={'13%'} inputType={'price'} onChange={price.onChange}
                            onBlur={price.onBlur} maxLength={5} backgroundColor={'rgba(255, 255, 255, 0.9)'}/>

                <InputField error={city.errorsArray.length && city.isDirty} errorsArray={city.errorsArray}
                            value={city.value} inputId={'city'} inputName={'city'} inputPlaceholder={'City'}
                            inputFieldWidth={'13%'} inputType={'city'} onChange={city.onChange}
                            onBlur={city.onBlur} maxLength={15} backgroundColor={'rgba(255, 255, 255, 0.9)'}/>
            </div>

            <TextArea inputFieldHeight={'200px'} error={text.errorsArray.length && text.isDirty}
                      errorsArray={text.errorsArray}
                      value={text.value} inputId={'text'} inputName={'text'} inputPlaceholder={'Post description'}
                      inputFieldWidth={'100%'} inputType={'text'} onChange={text.onChange}
                      onBlur={text.onBlur} maxLength={300} backgroundColor={'rgba(255, 255, 255, 0.9)'} />
            <div className={style.buttonsBlock}>
                <Button isDisabled={!buttonIsDisabled} clickFunction={submitPostHandler} link={''} borderColor={'#67910d'}
                        innerText={'Submit'} textColor={'#020'} backgroundColor={'#67910d'}
                        hoveredBackgroundColor={'rgba(103, 145, 13, 0.2)'}/>
                <Button clickFunction={declineButtonClickFunction} link={''} borderColor={'#757575'}
                        innerText={'Clean'} textColor={'#757575'}
                        hoveredBackgroundColor={'rgba(0, 2, 0, 0.2)'}/>
            </div>
        </div>
    )
}

export default PostForm