import { useState } from 'react'
import HookMouse from './HookMouse'

function Mousecontainer() {

    const [display, setDisplay] = useState(true)

    const toggleDisplay = () => setDisplay(value => !value)

    return (
        <div>
            <button onClick={toggleDisplay}>Toggle Display</button>
            {display && <HookMouse />}
        </div>
    )
}

export default Mousecontainer