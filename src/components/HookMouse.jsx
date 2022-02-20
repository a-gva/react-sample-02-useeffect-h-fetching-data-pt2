import { useState, useEffect } from 'react'

function HookMouse() {

    const [x, setX] = useState(0)
    const [y, setY] = useState(0)

    const logMousePosition = e => {
        console.log('Mouse Event')
        setX(e.clientX)
        setY(e.clientY)
    }

    const cleanuplogUseEffect = () => {
        console.log('Component unmounting code')
        window.removeEventListener('mousemove', logMousePosition)

    }

    const logUseEffect = () => {
        console.log('useEffect Called')
        window.addEventListener('mousemove', logMousePosition)

        return cleanuplogUseEffect
    }

    // using empty array as second argument [], useeffect will not depend on particular props or state.. it will run only during first render
    useEffect(logUseEffect, [])

    return (
        <div>
            Hookes X - {x} Y - {y}
        </div>
    )
}

export default HookMouse
