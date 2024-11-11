import { useEffect, useState } from "react"
import { Clock } from "../components/Clock/Clock"


export default {
    title: 'useEffect demo'
}

export const SimpleExample = () => {
    const [fake, setFake] = useState(1)
    const [counter, setCounter] = useState(1)

    useEffect(() => {
        console.log("useEffect every render")
        document.title = counter.toString()
    })
    useEffect(() => {
        console.log("useEffect only first render(componentDidMount)")
        document.title = counter.toString()
    }, [])
    useEffect(() => {
        console.log("useEffect first render and every counter change")
        document.title = counter.toString()
    }, [counter])

    return <>
        fake, {fake}.
        <br />
        Counter = {counter}
        <br />
        <button onClick={() => setFake(fake + 1)}>+fake</button>
        <button onClick={() => setCounter(counter + 1)}>+count</button>
    </>
}


export const SetTimeoutExample = () => {
    const [fake, setFake] = useState(1)
    const [counter, setCounter] = useState(1)

    console.log("SetTimeoutExample")

    useEffect(() => {

        // setTimeout(()=>{
        //     console.log("Set timeout")
        //     document.title = counter.toString()
        // }, 1000)

        // setInterval(()=>{
        //     // console.log("tick " + counter)
        //     setCounter(state => state + 1)
        // }, 1000)

    }, [])

    return <>
        fake, {fake}.
        <br />
        Counter = {counter}
        <br />
        {/* <button onClick={() => setFake(fake + 1)}>+fake</button>
        <button onClick={() => setCounter(counter + 1)}>+count</button> */}
    </>
}

export const ResetEffectExample = () => {
    const [counter, setCounter] = useState(1)
    console.log('Component rerendered')

    useEffect(()=>{
    console.log('Effect occurred')

    return ()=> {
        console.log('RESET EFFECT')
    }
    }, [counter])

    const increase = () => { setCounter(counter + 1)}

    return <>
    Hello, counter: {counter} <button onClick={increase}>+</button></>
}

export const KeysTrackerExample = () => {
    const [text, setText] = useState('')
    console.log('Component rerendered')

    useEffect(()=>{
        const handler = (e: KeyboardEvent)=>{
            console.log(e.key)
            setText(state => state + e.key)
        }
        window.addEventListener('keypress', handler)
        return () => {
            window.removeEventListener('keypress', handler)
        }
    }, [])

    return <>
    Typed text: {text}</>
}