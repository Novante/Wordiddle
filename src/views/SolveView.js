import {v4 as uuid} from 'uuid';
import {useState} from "react";

const SolveView = () => {


    const [arr, setArr] = useState(["aback", "abase", "abate", "abbey", "abbot"])
    const [inputWord, setInputWord] = useState('')

    const handleClick = () => {
        const charArr = inputWord.split("");
        const valueArr = []

        for (let i = 0; i < charArr.length; i++) {
            if (charArr[i] === ('+' || '-')){

            } else if (charArr[i-1] === '-'){
                valueArr.push({letter: charArr[i], color: 'orange'})
            } else if (charArr[i-1] === '+'){
                valueArr.push({letter: charArr[i], color: 'green'})
            } else if (charArr[i-1] !== '+' && charArr[i-1] !== '-'){
                valueArr.push({letter: charArr[i], color: 'blank'})
            }
        }

        for (let i = 0; i < valueArr.length; i++) {
            console.log(valueArr[i])
        }

        let tempArr = []


        for (let i = 0; i < valueArr.length; i++) {
            if (valueArr[i].color === 'green'){
                for (let j = 0; j < arr.length; j++) {
                    const splitWord = arr[j].split('')
                    for (let k = 0; k < splitWord.length; k++) {
                        if (splitWord[k] === valueArr[i].letter){
                            if (splitWord.indexOf(splitWord[k]) === valueArr.indexOf(valueArr[i])){
                                console.log(splitWord.indexOf(splitWord[k]))
                                console.log(valueArr.indexOf(valueArr[i]))
                                tempArr.push(arr[j]);
                                break;
                            }

                        }
                    }
                }
            }
        }
        console.log(tempArr)



    }

    const handleChangeInput = event => {
        setInputWord(event.target.value)
        console.log(inputWord)
    }





    // onclick, each letter that is clicked should filter the word. if letter is yellow, filter on any position. if letter is green, filter exact pos.

    return (
        <>
            <div>
            {arr.map(word => {
                return (
                    <div key={uuid()}>
                        {word}
                    </div>
                )
            })
            }
            </div>

            <div>
                <input value={inputWord} onChange={handleChangeInput}></input>
            </div>

            <div>
                <button onClick={() => handleClick()}>123</button>
            </div>
        </>
    )
}
export default SolveView;
