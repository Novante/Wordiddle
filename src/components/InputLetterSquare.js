import {useState} from "react";

const InputLetterSquare = (props) => {

    const [backgroundColor, setBackgroundColor] = useState('white')
    const [buttonCount, setButtonCount] = useState(0)

    const changeColor = () => {
        if (buttonCount === 2){
            setButtonCount(0)
        } else {
            setButtonCount(buttonCount + 1)
        }

        if (buttonCount === 0){
            props.setLetterState('*')
            setBackgroundColor('white')
        } else if (buttonCount === 1){
            props.setLetterState('-')
            setBackgroundColor('orange')
        } else if (buttonCount === 2){
            props.setLetterState('+')
            setBackgroundColor('green')
        }
    }

    return (
        <>
        <button onClick={changeColor} style={{...styles.container, backgroundColor: backgroundColor}}>
            {props.letter.toUpperCase()}
        </button>
    </>)
}

let styles = {
    container: {
        border: '1px solid black',
        width: '50px',
        height: '50px',
        textAlign: 'center',
        margin: '5px',
    }
}
export default InputLetterSquare
