const InputLetterSquare = (props) => {



    const changeColor = () => {
        if (props.buttonCount === 2){
            props.setButtonCount(0)
        } else {
            props.setButtonCount(props.buttonCount + 1)
        }

        if (props.buttonCount === 0){
            props.setLetterState('*')
            props.setBackgroundColor('lightgray')
        } else if (props.buttonCount === 1){
            props.setLetterState('-')
            props.setBackgroundColor('orange')
        } else if (props.buttonCount === 2){
            props.setLetterState('+')
            props.setBackgroundColor('green')
        }
    }

    return (
        <>
        <button onClick={changeColor} style={{...styles.container, backgroundColor: props.backgroundColor}}>
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
