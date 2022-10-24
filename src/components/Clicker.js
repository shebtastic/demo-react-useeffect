import { useEffect, useState } from "react";

function Clicker() {
    const [count, setCount] = useState(0)
    const [test, setTest] = useState()

    useEffect(() => {
        let id

        if(count > 0) {
            id = setTimeout(countDown, 1000)
            console.log(id)
        }
        // clearTimeout(id)

        return () => {
            clearTimeout(id)
            console.log(`cleared ${id}`)
        }
    }, [count])

    // useEffect(() => {
    //     //effect
    //     //listener handler auf depency
    // }, [test])

    // document.addEventListener('click', eventHandler)

    function countUp() {
        setCount((currentCount) => currentCount + 1)
    }

    function countDown() {
        setCount((currentCount) => currentCount - 1)
    }

    return (
        <>
            <p>{count}</p>
            <button onClick={countUp}>Click Me!</button>
        </>
    )
}

export default Clicker