import InputLetterSquare from "./InputLetterSquare";
import {useEffect, useState} from "react";
import ResetSquare from "./ResetSquare";

const InputLetterGroup = (props) => {

    let charArr = Array.from(props.inputWord)
    let boxArr = props.boxArr



    for (let i = 0; i < charArr.length; i++) {
        if (charArr[i] !== undefined) {
            boxArr[i] = charArr[i]
        }
    }



    return (
        <>
            <div style={{display: 'flex', width: '50%'}}>
                <div style={styles.container}>
                    <InputLetterSquare id="1" letter={boxArr[0]} setLetterState={props.l1}></InputLetterSquare>
                    <InputLetterSquare id="2" letter={boxArr[1]} setLetterState={props.l2}></InputLetterSquare>
                    <InputLetterSquare id="3" letter={boxArr[2]} setLetterState={props.l3}></InputLetterSquare>
                    <InputLetterSquare id="4" letter={boxArr[3]} setLetterState={props.l4}></InputLetterSquare>
                    <InputLetterSquare id="5" letter={boxArr[4]} setLetterState={props.l5}></InputLetterSquare>
                </div>
                <div style={{marginTop: 50}}>
                    <ResetSquare setUsedWordsArray={props.setUsedWordsArray} setInputWord={props.setInputWord} resetWordArr={props.resetWordArr}></ResetSquare>
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
        marginTop: 50,
        width: '60%',
        marginLeft: '20.5%',
        marginRight: 'auto'
    }
}

export default InputLetterGroup;
