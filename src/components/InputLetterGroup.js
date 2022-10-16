import InputLetterSquare from "./InputLetterSquare";
import {useEffect, useState} from "react";
import ResetSquare from "./ResetSquare";

const InputLetterGroup = (props) => {


    const clearButtonColorAndCountAndLetterState = () => {
        props.setBackgroundColor1('lightgray')
        props.setBackgroundColor2('lightgray')
        props.setBackgroundColor3('lightgray')
        props.setBackgroundColor4('lightgray')
        props.setBackgroundColor5('lightgray')

        props.setButtonCount1(1)
        props.setButtonCount2(1)
        props.setButtonCount3(1)
        props.setButtonCount4(1)
        props.setButtonCount5(1)

        props.l1('*')
        props.l2('*')
        props.l3('*')
        props.l4('*')
        props.l5('*')
    }



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
                    <InputLetterSquare id="1" letter={boxArr[0]} setLetterState={props.l1}
                                       backgroundColor={props.backgroundColor1}
                                       setBackgroundColor={props.setBackgroundColor1} buttonCount={props.buttonCount1}
                                       setButtonCount={props.setButtonCount1}></InputLetterSquare>
                    <InputLetterSquare id="2" letter={boxArr[1]} setLetterState={props.l2}
                                       backgroundColor={props.backgroundColor2}
                                       setBackgroundColor={props.setBackgroundColor2} buttonCount={props.buttonCount2}
                                       setButtonCount={props.setButtonCount2}></InputLetterSquare>
                    <InputLetterSquare id="3" letter={boxArr[2]} setLetterState={props.l3}
                                       backgroundColor={props.backgroundColor3}
                                       setBackgroundColor={props.setBackgroundColor3} buttonCount={props.buttonCount3}
                                       setButtonCount={props.setButtonCount3}></InputLetterSquare>
                    <InputLetterSquare id="4" letter={boxArr[3]} setLetterState={props.l4}
                                       backgroundColor={props.backgroundColor4}
                                       setBackgroundColor={props.setBackgroundColor4} buttonCount={props.buttonCount4}
                                       setButtonCount={props.setButtonCount4}></InputLetterSquare>
                    <InputLetterSquare id="5" letter={boxArr[4]} setLetterState={props.l5}
                                       backgroundColor={props.backgroundColor5}
                                       setBackgroundColor={props.setBackgroundColor5} buttonCount={props.buttonCount5}
                                       setButtonCount={props.setButtonCount5}></InputLetterSquare>
                </div>
                <div style={{marginTop: 50}}>
                    <ResetSquare setUsedWordsArray={props.setUsedWordsArray} setInputWord={props.setInputWord}
                                 resetWordArr={props.resetWordArr}
                                 clearButtons={clearButtonColorAndCountAndLetterState}></ResetSquare>
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
