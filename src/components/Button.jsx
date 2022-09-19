import './Button.css'
import reactLogo from '../assets/react.svg'
const btnStyle={
    margin:'5px 0'
}


export default function Button({label}){
const iconStyle={
    backgroundImage:`url(${reactLogo})`
}
    return (
<button  
style = {btnStyle}
 className="btn btn-default"
 >
    <span className="icon" > <img src={reactLogo} className="logo_react" alt="React logo" /></span>
    <a>{label}</a>
 </button>

    )
}