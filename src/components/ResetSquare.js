const ResetSquare = (props) => {

    const handleClick = () => {
        props.resetWordArr('')
        props.setInputWord('')
        props.setUsedWordsArray([])
    }

    return (<>
        <button onClick={handleClick} style={{...styles.container}}>
            <text style={{fontSize: 20}}>&#8635;</text>
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
        backgroundColor: 'lightgray',
    }
}
export default ResetSquare
