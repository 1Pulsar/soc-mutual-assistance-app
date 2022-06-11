import style from "./InputField.module.scss"
import ErrorsWindow from "./ErrorsWindow/ErrorsWindow";

const InputField = ({inputFieldWidth, inputPlaceholder, onChange, onBlur, value, inputType, inputId, inputName, error=false, errorsArray=[]}) => {

    const configureStyle = {width: inputFieldWidth}
    const errorWindowClasses = error ? `${style.errorsWindow} ${style.active}` : style.errorsWindow

    return (
        <div className={style.textField + " " + style.textFieldFloating2} style={configureStyle}>
            <input style={{width:"100%", border: error ? "2px solid red": "1px solid grey", borderRadius: "4px"}} value={value} onChange={onChange} onBlur={onBlur} className={style.textFieldInput} type={inputType} id={inputId} name={inputName}
                   placeholder="hello,world"/>
                <label style={{color:error ? "red" : "grey"}} className={style.textFieldLabel} htmlFor="email">{inputPlaceholder}</label>
            <div className={errorWindowClasses}><ErrorsWindow inputPlaceholder={inputPlaceholder} errorsArray={errorsArray}/></div>
        </div>
)
}

export default InputField