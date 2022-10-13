import {v4 as uuid} from 'uuid';
import {useState} from "react";

const SolveView = () => {


    const [arr, setArr] = useState(["aback", "abase", "abate", "abbey", "abbot"])
    const inputWord = "party"
    const charArr = inputWord.split("");

    const handleClick = (click) => {
        if (click == 'orange'){

        }
    }

    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < charArr.length; j++) {
            if (arr[i].includes(charArr[j]))
            {
                console.log(charArr[j])
            }
        }

    }


    // onclick, each letter that is clicked should filter the word. if letter is yellow, filter on any position. if letter is green, filter exact pos.

    return (
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
    )
}
export default SolveView;
