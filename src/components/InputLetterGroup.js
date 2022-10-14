import InputLetterSquare from "./InputLetterSquare";

const InputLetterGroup = (props) => {

    let charArr = Array.from(props.inputWord)
    let boxArr = ['.','.','.','.','.']

    for (let i = 0; i < charArr.length; i++) {
        if (charArr[i] !== undefined){
            boxArr[i] = charArr[i]
        }
    }



    return (
        <>
            <div style={styles.container}>
            {
                boxArr.map(letter => {
                    return (
                        <InputLetterSquare letter={letter}></InputLetterSquare>
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
        flexDirection: 'row',
        justifyContent: 'center',
        paddingTop: '100px'
    }
}

export default InputLetterGroup;
