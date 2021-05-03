// Parrafo, componente presentacional
const Parrafo = ({ text = 'Desconocido', fontColor }) => {
    return <>
        <p style={{ color: fontColor }}>{text}</p>
    </>
}
export default Parrafo