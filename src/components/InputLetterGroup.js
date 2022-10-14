import InputLetterSquare from "./InputLetterSquare";
import {useEffect, useState} from "react";

const InputLetterGroup = (props) => {

    let charArr = Array.from(props.inputWord)
    let boxArr = ['.', '.', '.', '.', '.']



    for (let i = 0; i < charArr.length; i++) {
        if (charArr[i] !== undefined) {
            boxArr[i] = charArr[i]
        }
    }



    return (
        <>
            <div style={styles.container}>
                <div>
                    <InputLetterSquare id="1" letter={boxArr[0]} setLetterState={props.l1}></InputLetterSquare>
                    <InputLetterSquare id="2" letter={boxArr[1]} setLetterState={props.l2}></InputLetterSquare>
                    <InputLetterSquare id="3" letter={boxArr[2]} setLetterState={props.l3}></InputLetterSquare>
                    <InputLetterSquare id="4" letter={boxArr[3]} setLetterState={props.l4}></InputLetterSquare>
                    <InputLetterSquare id="5" letter={boxArr[4]} setLetterState={props.l5}></InputLetterSquare>
                </div>
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
