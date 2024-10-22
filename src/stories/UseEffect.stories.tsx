import { useEffect, useState } from "react"


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

export const ClockExample = () => {
    let time = new Date()

    const [hours, setHours] = useState(time.getHours())
    const [minutes, setMinutes] = useState(time.getMinutes())
    const [seconds, useSeconds] = useState(time.getSeconds())

    console.log("SetTimeoutExample")

    useEffect(() => {

        setInterval(() => {
            time = new Date()

            setHours(() => time.getHours())
            setMinutes(() => time.getMinutes())
            useSeconds(() => time.getSeconds())
        }, 1000)

    }, [])

    return <>
        Time: {hours}:{minutes}:{seconds}
    </>
}