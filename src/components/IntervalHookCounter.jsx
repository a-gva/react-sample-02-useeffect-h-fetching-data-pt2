import { useState, useEffect } from 'react'

function IntervalHookCounter() {

    const [count, setCount] = useState(0)

    const tick = () => {
        setCount(count + 1)
    }

    const updateCount = () => {
        const interval = setInterval(tick, 1000)
        return () => {
            clearInterval(interval)
        }
    }

    useEffect(updateCount, [count])

    return (
        <div>
            <h1>
                {count}
            </h1>
        </div>
    )
}

export default IntervalHookCounter
