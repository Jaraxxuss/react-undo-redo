import { useEffect, useState } from "react"

function useActionHistory<T>(initialValue: T) {

    const [ state, setState ] = useState(initialValue)

    const [undos, setUndos] = useState<Array<T>>([])
    const [redos, setRedos] = useState<Array<T>>([])

    const undo = () => {
        const newState = undos.pop()

        if (newState === undefined) {
            return
        }

        setState(newState)
        setUndos([...undos])
        setRedos([...redos, state])        
    }

    const redo = () => {
        const newState = redos.pop()

        if (newState === undefined) {
            return
        }

        setState(newState)
        setRedos([...redos])
        setUndos([...undos, state])
    }

    const setValue = (value: T) => {
        setUndos([...undos, state])
        setState(value)
    }

    return {
        state,
        setState: setValue,
        undo,
        redo,
    }
}

export {
    useActionHistory
}