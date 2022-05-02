import Link from "next/link"
import {useState} from "react";

const Button = ({link, innerText, backgroundColor='inherit', hoveredBackgroundColor , borderColor, textColor}) => {
    const [isHover, setHover] = useState(false)

    const mouseIn = () => {
        setHover(true)
    }

    const mouseOut = () => {
        setHover(false)
    }
    const style = {
        backgroundColor: `${isHover ? hoveredBackgroundColor : backgroundColor}`,
        color: textColor,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        padding: '0px 14px',
        fontWeight: '500',
        fontSize: '12px',
        lineHeight: '120%',
        letterSpacing: '0.05em',
        boxSizing: 'border-box',
        width: 'fit-content',
        height: '30px',
        border: `1px ${borderColor} solid`,
        borderRadius: '7px',
        transition: 'all ease .4s',
    }
    return (
        <Link href={link}><a style={style} onMouseEnter={mouseIn} onMouseLeave={mouseOut} >{innerText}</a></Link>
    )
}

export default Button