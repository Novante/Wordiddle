import {v4 as uuid} from 'uuid';
import {useState} from "react";

const SolveView = () => {


    const [arr, setArr] = useState(["aback", "abase", "abate", "abbey", "abbot"])
    const [inputWord, setInputWord] = useState('')
    let greenCount = 0

    const handleClick = () => {
        const charArr = inputWord.split("");
        const valueArr = []

        for (let i = 0; i < charArr.length; i++) {
            if (charArr[i] === ('+' || '-')){

            } else if (charArr[i-1] === '-'){
                valueArr.push({letter: charArr[i], color: 'orange'})
            } else if (charArr[i-1] === '+'){
                valueArr.push({letter: charArr[i], color: 'green'})
                greenCount++;
            } else if (charArr[i-1] !== '+' && charArr[i-1] !== '-'){
                valueArr.push({letter: charArr[i], color: 'blank'})
            }
        }

        console.log(greenCount)

        for (let i = 0; i < valueArr.length; i++) {
            console.log(valueArr[i])
        }

        let tempArr = []

       // for (let i = 0; i < valueArr.length; i++) { // loopa genom alla bokstäver i input
       //      if (valueArr[i].color === 'green'){
       //           for (let j = 0; j < arr.length; j++) { // loopa genom alla ord i listan
       //              let loopGreenCount = 0
       //              const splitWord = arr[j].split('')
       //               for (let k = 0; k < splitWord.length; k++) { // loopa genom alla bokstäver i ett ord
       //                      if (splitWord.indexOf(splitWord[k]) === valueArr.indexOf(valueArr[i])){ // om en bokstav i ordet matchar en grön bokstav, lägg till den till arrayen. MEN om vi har flera gröna?
       //                          loopGreenCount++;
       //
       //                          console.log('loopgreencount', splitWord, loopGreenCount)
       //
       //                          if (greenCount === loopGreenCount){
       //                              tempArr.push(arr[j]);
       //                          }
       //                      }
       //
       //              }
       //          }
       //      }
       //  }


        for (let i = 0; i < arr.length; i++) { // loopa genom alla ord i listan
            let greenLoop = 0
            const splitWord = arr[i].split('') // splitta alla ord i listan
            for (let j = 0; j < splitWord.length; j++) { // för varje bokstav per ord i listan
                if (valueArr[j].color === 'green'){
                    if (splitWord[j] === valueArr[j].letter){
                        greenLoop++;
                    }
                    if (greenLoop === greenCount){
                        tempArr.push(arr[i])
                    }
                }

            }
        }


        setArr(tempArr)
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
