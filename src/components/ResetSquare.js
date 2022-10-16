const ResetSquare = (props) => {



    return (<>
        <button onClick={props.resetWordArr} style={{...styles.container}}>
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
