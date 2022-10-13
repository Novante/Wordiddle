import {v4 as uuid} from 'uuid';
import {useState} from "react";

const SolveView = () => {


    const [arr, setArr] = useState(["aback", "abase", "abate", "abbey", "abbot"])
    const [inputWord, setInputWord] = useState('')
    // const charArr = inputWord.split("");

    const handleClick = () => {

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
                <button onClick={handleClick}>123</button>
            </div>
        </>
    )
}
export default SolveView;
