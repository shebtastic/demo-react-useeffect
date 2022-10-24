import { useEffect, useState } from "react";

function Clicker() {
    const [count, setCount] = useState(() => {
        const savedCount = localStorage.getItem('clickerCount') ?? 0
        return Number(savedCount)
    })

    useEffect(() => {
        let id

        if(count > 0) {
            id = setTimeout(countDown, 1000)
            console.log(id)
        }

        localStorage.setItem('clickerCount', count)

        return () => {
            clearTimeout(id)
            console.log(`cleared ${id}`)
        }
    }, [count])

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