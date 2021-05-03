import Parrafo from './Parrafo';
import Button from './Button';
import Quotes from './Quotes.json';
import Colors from './Colors.json';
import './App.css';
import { useEffect, useState } from 'react';
// QuotesBox, componente contenedor 
const QuotesBox = () => {
    //hooks
    const [color, setColor] = useState();
    const [quotes, setQuotes] = useState();
    const [author, setAuthor] = useState('Desconocido');
    // getQuotes, function para obtener y actualizar los valores
    function getQuotes() {
        let color = Colors.colors[Math.floor(Math.random() * Colors.colors.length)];
        let item = Quotes.citas[Math.floor(Math.random() * Quotes.citas.length)];
        setQuotes(item.quote);
        setAuthor(item.autor);
        setColor(color = color.color);
    }
    // Useffect hook que llama la function getquotes al recargar la pagina
    useEffect(getQuotes, []);
    return (
        <div className="App-content" style={{ backgroundColor: color }}>
            <div className="card">
                <div className="quotes">
                    <Parrafo fontColor={color} text={<i className="fas fa-quote-left">{ quotes}</i>} />
                </div>
                <div className="autor">
                    <Parrafo fontColor={color} text={`-${author}`} />
                </div>
                <Button id="btn-twitter" bgColor={color} textbtn={<i className="fab fa-twitter"></i>} />
                <Button id="btn-quotes" bgColor={color} onclick={getQuotes} textbtn="New Quotes" />
            </div>
        </div>)
}
export default QuotesBox