import InputLetterSquare from "./InputLetterSquare";

const InputLetterGroup = (props) => {

    let charArr = Array.from(props.inputWord)



    return (
        <>
            <div style={styles.container}>
            {
                charArr.map(letter => {
                    return (
                        <div>
                            {letter}
                        </div>
                    )
                })
            }
            </div>
        </>
    )
}

const styles = {
    container: {
        display: 'flex',
        flexDirection: 'row'
    }
}

export default InputLetterGroup;
