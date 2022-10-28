import {v4 as uuid} from 'uuid';
import {createRef, useEffect, useRef, useState} from "react";
import WordList from "../components/WordList";
import InputLetterSquare from "../components/InputLetterSquare";
import InputLetterGroup from "../components/InputLetterGroup";
import extStyles from '../styles.css'
import {wordString} from "../utils/entireWordleWordList";

const SolveView = () => {

    const [backgroundColor1, setBackgroundColor1] = useState('lightgray')
    const [backgroundColor2, setBackgroundColor2] = useState('lightgray')
    const [backgroundColor3, setBackgroundColor3] = useState('lightgray')
    const [backgroundColor4, setBackgroundColor4] = useState('lightgray')
    const [backgroundColor5, setBackgroundColor5] = useState('lightgray')
    const [buttonCount1, setButtonCount1] = useState(1)
    const [buttonCount2, setButtonCount2] = useState(1)
    const [buttonCount3, setButtonCount3] = useState(1)
    const [buttonCount4, setButtonCount4] = useState(1)
    const [buttonCount5, setButtonCount5] = useState(1)


    // const wordString = "amass, bassi"
    const [arr, setArr] = useState(wordString.split(","))
    const [inputWord, setInputWord] = useState('')
    let boxArr = ['_', '_', '_', '_', '_']
    const wordListScroll = useRef()
    const [usedWordsArray, setUsedWordsArray] = useState([])

    const [letter1State, setLetter1State] = useState('*')
    const [letter2State, setLetter2State] = useState('*')
    const [letter3State, setLetter3State] = useState('*')
    const [letter4State, setLetter4State] = useState('*')
    const [letter5State, setLetter5State] = useState('*')

    const allowedChars = "abcdefghijklmnopqrstuvwxyz"

    let greenCount = 0
    let orangeCount = 0
    let blankCount = 0
    let orangeLetters = []
    let greenLetters = []
    let clearLetters = []
    let greenFiltered = false;
    const valueArr = []
    let usedCharArr = []
    let greenAndOrangeArr = []
    let tempArr = arr
    let acceptedWord = true
    let equalOrangeLettersArr = []
    let finalDeleteArr = [];


    useEffect(() => {
        window.addEventListener("keydown", handleKeyboardInput, function (value) {
                value.preventDefault()
            }
        )
        return () => {
            window.removeEventListener("keydown", handleKeyboardInput, function (value) {
            })
        }

    }, [inputWord])

    useEffect(() => {
        window.addEventListener('wheel', handleScroll)

        return () => {
            window.removeEventListener('wheel', handleScroll)
        }
    }, [])


    const handleKeyboardInput = (v) => {

        if (v.key === 'Backspace') {
            setInputWord(inputWord => inputWord.slice(0, -1))
        } else if (v.key === 'Enter') {
            handleClick()
        } else if (allowedChars.includes(v.key) && inputWord.length < 5) {
            setInputWord(prev => prev + v.key)
        }
    }

    const handleScroll = (e) => {
        if (e.wheelDelta < 0) {
            wordListScroll.current?.scrollBy(0, 50)
        } else if (e.wheelDelta > 0) {
            wordListScroll.current?.scrollBy(0, -50)

        }


    }

    const resetWordArray = () => {
        setArr(wordString.split(','))
    }


    const handleClick = () => {

        if (!boxArr.includes("_")) {
            setUsedWordsArray(prevState => [...prevState, inputWord])


            const charArr = inputWord.split("");


            if (letter5State === '-') {
                charArr.splice(4, 0, '-')
            } else if (letter5State === '+') {
                charArr.splice(4, 0, '+')
            } else if (letter5State === '*') {
                charArr.splice(4, 0, '*')
            }

            if (letter4State === '-') {
                charArr.splice(3, 0, '-')
            } else if (letter4State === '+') {
                charArr.splice(3, 0, '+')
            } else if (letter4State === '*') {
                charArr.splice(3, 0, '*')
            }

            if (letter3State === '-') {
                charArr.splice(2, 0, '-')
            } else if (letter3State === '+') {
                charArr.splice(2, 0, '+')
            } else if (letter3State === '*') {
                charArr.splice(2, 0, '*')
            }

            if (letter2State === '-') {
                charArr.splice(1, 0, '-')
            } else if (letter2State === '+') {
                charArr.splice(1, 0, '+')
            } else if (letter2State === '*') {
                charArr.splice(1, 0, '*')
            }

            if (letter1State === '-') {
                charArr.unshift('-')
            } else if (letter1State === '+') {
                charArr.unshift('+')
            } else if (letter1State === '*') {
                charArr.unshift('*')
            }

            let count = 0;


            for (let i = 0; i < charArr.length; i++) {
                if (charArr[i] === ('+') || charArr[i] === ('-') || charArr[i] === ('*')) {

                } else if (charArr[i - 1] === '-') {
                    valueArr.push({id: count, letter: charArr[i], color: 'orange'})
                    orangeLetters.push(charArr[i])
                    orangeCount++;
                    greenAndOrangeArr.push(charArr[i])
                    count++
                } else if (charArr[i - 1] === '+') {
                    valueArr.push({id: count, letter: charArr[i], color: 'green'})
                    greenCount++;
                    greenAndOrangeArr.push(charArr[i])
                    count++

                } else if (charArr[i - 1] === '*') {
                    valueArr.push({id: count, letter: charArr[i], color: 'clear'})
                    blankCount++;
                    count++

                }
            }

            tempArr = arr


            for (let i = 0; i < valueArr.length; i++) { // för varje bokstav

                let letterCount = 0

                let multipleLetterArr = []
                let inputLetterCount = inputWord.split(valueArr[i].letter).length - 1
                let deleteArr = []
                if (valueArr[i]?.color === 'orange') { // om bokstaven är orange

                    let letterMap = new Map()

                    for (let j = 0; j < 5; j++) {
                        if (!letterMap.has(valueArr[j]?.letter) && valueArr[j]?.color === 'orange') {
                            letterMap.set(valueArr[j].letter, 1)
                        } else if (valueArr[j]?.color === 'orange') {
                            letterMap.set(valueArr[j].letter, letterMap.get(valueArr[j].letter) + 1)
                        }
                    }


                    for (let j = 0; j < tempArr.length; j++) { // loopa genom hela ordlistan
                        letterCount = tempArr[j].split(valueArr[i].letter).length - 1 // kolla hur många gånger letter förekommer i ordet
                        let splitWord = Array.from(tempArr[j]) // skapa charArr från varje ord på index i i ordlistan

                        for (let j = 0; j < letterMap.size; j++) {
                            if (letterMap.get(valueArr[i]?.letter) <= letterCount) {
                                acceptedWord = false;
                            }
                        }


                        for (let k = 0; k < 5; k++) { // för varje bokstav i splitword


                            let goCount = greenAndOrangeArr.join(',').split(valueArr[i].letter).length - 1

                            if (valueArr[i]?.letter === splitWord[i]) { // om bokstäverna matchar i position, ta bort dem
                                deleteArr.push(tempArr[j])
                            } else if (!tempArr[j].includes(valueArr[i]?.letter)) {
                                deleteArr.push(tempArr[j])
                            }

                            // if (letterMap > letterCount) {
                            //     deleteArr.push(tempArr[j])
                            // }

                            // if (letterCount > goCount){
                            //     multipleLetterArr.push(tempArr[j])
                            // }

                        }

                        if (acceptedWord !== true) {
                            equalOrangeLettersArr.push(tempArr[j])
                            console.log(tempArr[j], false)
                            acceptedWord = true
                        }


                    }


                    // filtrera bort ord som förekommer två gånger

                    tempArr = tempArr.filter((word) => !deleteArr.includes(word))
                    tempArr = tempArr.filter((word) => !multipleLetterArr.includes(word))


                }

                if (valueArr[i].color === 'green') {
                    let multipleLetterArr = []
                    let greenArr = []
                    for (let j = 0; j < tempArr.length; j++) {
                        let letterCount = tempArr[j].split(valueArr[i].letter).length - 1 // kolla hur många gånger letter förekommer i ordet = 2

                        let splitWord = Array.from(tempArr[j])
                        for (let k = 0; k < 5; k++) { // för varje bokstav i ett ord från listan
                            let goCount = greenAndOrangeArr.join(',').split(valueArr[i].letter).length - 1

                            if (valueArr[i]?.letter === splitWord[i]) {
                                greenArr.push(tempArr[j])
                            }

                            // if (letterCount > goCount){
                            //     console.log(tempArr[j])
                            //     console.log(greenArr.indexOf(tempArr[j]))
                            //     multipleLetterArr.push(tempArr[j])
                            // }

                        }
                    }
                    tempArr = tempArr.filter((word) => greenArr.includes(word))
                    tempArr = tempArr.filter((word) => !multipleLetterArr.includes(word))
                }

                if (valueArr[i].color === 'clear') {
                    let multipleLetterArr = []
                    let letterMap = new Map()

                    for (let j = 0; j < 5; j++) {
                        if (!letterMap.has(valueArr[j]?.letter)) {
                            letterMap.set(valueArr[j].letter, 1)
                        } else {
                            letterMap.set(valueArr[j].letter, letterMap.get(valueArr[j].letter) + 1)
                        }

                    }


                    let clearArr = [] // e
                    for (let j = 0; j < tempArr.length; j++) {
                        let letterCount = tempArr[j].split(valueArr[i].letter).length - 1 // kolla hur många gånger letter förekommer i ordet = 2
                        let splitWord = Array.from(tempArr[j])
                        let splitWordMap = new Map()


                        for (let k = 0; k < 5; k++) {
                            if (!splitWordMap.has(splitWord[k])) {
                                splitWordMap.set(splitWord[k], 1)
                            } else {
                                splitWordMap.set(splitWord[k], splitWordMap.get(splitWord[k]) + 1)
                            }
                        }


                        for (let k = 0; k < 5; k++) {

                            if (splitWord[k] === valueArr[i]?.letter) {
                                if (!greenAndOrangeArr.includes(valueArr[i]?.letter)) {
                                    clearArr.push(tempArr[j])
                                } else if (greenAndOrangeArr.includes(valueArr[i].letter)) {
                                    // console.log('entered')
                                    let ct = tempArr[j].split(valueArr[i].letter).length - 1  // green in word
                                    let merge = greenAndOrangeArr.join('')
                                    let ict = merge.split(valueArr[i].letter).length - 1


                                    if (ict !== ct) {
                                        // console.log(ict, ct, tempArr[j])

                                        clearArr.push(tempArr[j])
                                    }

                                }
                            }
                        }


                        // if (splitWordMap.get(splitWordMap[i].letter))


                    }
                    tempArr = tempArr.filter((word) => !clearArr.includes(word))
                }

            }

            if (greenAndOrangeArr.length > 0){
                let joinedGOArr = greenAndOrangeArr.join('')

                for (let e = 0; e < 5; e++) {
                    for (let i = 0; i < tempArr.length; i++) {
                        // console.log(i)
                        let joinedGOArrCount = joinedGOArr.split(valueArr[e]?.letter).length - 1
                        console.log(joinedGOArrCount)

                        let ct = tempArr[i].split(valueArr[e]?.letter).length - 1  // green in word

                        if (joinedGOArrCount <= ct){
                            finalDeleteArr.push(tempArr[i])
                        }

                    }
                }
                console.log(finalDeleteArr)

                tempArr = tempArr.filter((word) => finalDeleteArr.includes(word))
            }








            if (orangeLetters.length > 0) {
                tempArr = tempArr.filter((word) => equalOrangeLettersArr.includes(word))
            }

            setArr(tempArr)


            setInputWord('')
            clearNonGreenLetterOnSubmit()

        } else {
            alert('You must fill all boxes')
        }

    }

    const clearNonGreenLetterOnSubmit = () => {
        if (backgroundColor1 !== 'green') {
            setBackgroundColor1('lightgray')
            setButtonCount1(1)
            setLetter1State('*')
        }
        if (backgroundColor2 !== 'green') {
            setBackgroundColor2('lightgray')
            setButtonCount2(1)
            setLetter2State('*')


        }
        if (backgroundColor3 !== 'green') {
            setBackgroundColor3('lightgray')
            setButtonCount3(1)
            setLetter3State('*')


        }
        if (backgroundColor4 !== 'green') {
            setBackgroundColor4('lightgray')
            setButtonCount4(1)
            setLetter4State('*')


        }
        if (backgroundColor5 !== 'green') {
            setBackgroundColor5('lightgray')
            setButtonCount5(1)
            setLetter5State('*')


        }
    }

    return (
        <div className="containerWrapper">
            <div onScroll={handleScroll} style={styles.container}>

                <h1 className="title">Wordiddle</h1>
                <hr style={{width: '50%', marginTop: -20}}></hr>
                <InputLetterGroup buttonCount1={buttonCount1} buttonCount2={buttonCount2} buttonCount3={buttonCount3}
                                  buttonCount4={buttonCount4}
                                  buttonCount5={buttonCount5} setButtonCount1={setButtonCount1}
                                  setButtonCount2={setButtonCount2} setButtonCount3={setButtonCount3}
                                  setButtonCount4={setButtonCount4} setButtonCount5={setButtonCount5}
                                  backgroundColor1={backgroundColor1} backgroundColor2={backgroundColor2}
                                  backgroundColor3={backgroundColor3} backgroundColor4={backgroundColor4}
                                  backgroundColor5={backgroundColor5} setBackgroundColor1={setBackgroundColor1}
                                  setBackgroundColor2={setBackgroundColor2} setBackgroundColor3={setBackgroundColor3}
                                  setBackgroundColor4={setBackgroundColor4}
                                  setBackgroundColor5={setBackgroundColor5} setUsedWordsArray={setUsedWordsArray}
                                  setInputWord={setInputWord} resetWordArr={resetWordArray} boxArr={boxArr}
                                  inputWord={inputWord} l1={setLetter1State} l2={setLetter2State}
                                  l3={setLetter3State}
                                  l4={setLetter4State} l5={setLetter5State} setInputWord={setInputWord}>
                </InputLetterGroup>
                <div style={styles.buttonWrapper}>
                    <button className="start-btn" onClick={handleClick}>Diddle</button>
                </div>
                <div style={{display: 'flex', flexDirection: 'row', height: '130px', overflow: 'hidden'}}>
                    {usedWordsArray !== undefined && (
                        <div>
                            {usedWordsArray.map(word => {
                                return (
                                    <div key={word}>
                                        <del>{word}</del>
                                    </div>
                                )
                            })
                            }
                        </div>)
                    }
                </div>
                <div style={styles.wordContainer}>
                    {
                        arr.length > 1 &&
                        <h2>{arr.length} possible words remaining</h2>
                    }
                    {
                        arr.length === 1 &&
                        <h2>1 possible word remaining</h2>

                    }

                    {

                        1 / arr.length != 'Infinity' ?
                            <h3 style={{fontStyle: 'italic', marginTop: '-10px'}}>You have
                                a {((1 / arr.length) * 100).toFixed(2)}% chance of selecting the correct word!</h3>
                            :
                            <h3 style={{fontStyle: 'italic', marginTop: '-10px'}}>You ran out of words! Try again!</h3>

                    }


                    <div ref={wordListScroll} className="wordlist-wrapper">
                        <WordList style={styles.wordList} arr={arr}></WordList>
                    </div>
                </div>

            </div>

        </div>

    )
}

const styles = {
    container: {
        display: 'flex',
        flexDirection: 'column',
        marginLeft: '400px',
        marginRight: '400px',
        alignItems: 'center',
        height: '100vh',
        overflow: 'hidden',

    },
    wordContainer: {
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'column',
        height: '400px'
    },
    remainingText: {
        textAlign: 'center',
        width: '50%',
        maxHeight: '50px',
    },
    wordList: {},
    wordListWrapper: {
        height: '500px',
        overflowY: 'scroll'
    },
    buttonWrapper: {
        display: 'flex',
        justifyContent: 'center',
        width: '10%'
    },


}
export default SolveView;
