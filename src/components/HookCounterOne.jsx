import { useState, useEffect } from 'react'

function HookCounterOne() {

    const [count, setCount] = useState(0)
    const [name, setName] = useState('')

    const updateCount = () => {
        setCount(count + 1)
    }

    const updateName = e => setName(e.target.value)

    const documentTitleUpdate = () => {
        console.log('useEffect - Updating Document Title')
        document.title = `You clicked ${count} times`
    }

    // runs after every render (update)... it accepts a function as argument... the funcion is a side effect for the state update (useSgtate, or useReducer)
    // second parameter are the arrays of the values useeffect depends on
    useEffect(documentTitleUpdate, [count])

    return (
        <div>
            <input type="text" value={name} onChange={updateName} />
            <button onClick={updateCount}>Clicked {count} times</button>
            <h1>{name}</h1>
        </div>
    )
}

export default HookCounterOne
