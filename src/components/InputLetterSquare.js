const InputLetterSquare = ({letter}) => {
    return (<>
        <button style={styles.container}>
            {letter}
        </button>
    </>)
}

const styles = {
    container: {
        border: '1px solid black',
        width: '20px',
        textAlign: 'center',
        margin: '5px'

    }
}
export default InputLetterSquare
