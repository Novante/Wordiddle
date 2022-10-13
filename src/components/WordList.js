const WordList = (props) => {
    let count = 0
    return (
        <>
            <div>
                {props.arr.map(word => {
                    return (
                        <div key={count++}>
                            {word}
                        </div>
                    )
                })
                }
            </div>
        </>
    )
}
export default WordList;
