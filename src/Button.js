// Button, componente presentacional
const Button = ({ id, textbtn, bgColor, onclick }) => {
    return <>
        <button id={id} onClick={onclick} style={{ backgroundColor: bgColor }} >{textbtn}</button>
    </>
}
export default Button