import React, { ChangeEvent, useMemo, useState } from 'react'

export default {
    title: 'useMemo'
}

// example 1
export const DifficultCountingExample = () => {

    const [a, setA] = useState<number>(3)
    const [b, setB] = useState<number>(3)

    let resultB = 1

    let resultA = useMemo(() => {
        let tempResultA = 1
        for (let i = 1; i <= a; i++) {
            let fake = 0;
            while (fake < 100000000) {
                fake++
                const fakeValue = Math.random()
            }
            tempResultA = tempResultA * i
        }
        return tempResultA
    }, [a])


    for (let i = 1; i <= b; i++) {
        resultB = resultB * i
    }

    return (
        <>
            <input value={a} onChange={(e) => setA(Number(e.currentTarget.value))} />
            <input value={b} onChange={(e) => setB(Number(e.currentTarget.value))} />
            <hr />
            <div>
                Result for a: {resultA}
            </div>
            <div>
                Result for b: {resultB}
            </div>
        </>
    )
}

// example 2
const UsersSecret = (props: { users: Array<string> }) => {
    // console.log("USER SECRET")
    return <div>
        {props.users.map((u, i) => <div key={i}>{u}</div>)}
    </div>
}
const Users = React.memo(UsersSecret)

export const HelpsToReactMemo = () => {
    // console.log("HelpsToReactMemo")
    const [counter, setCounter] = useState(0)
    const [users, setUsers] = useState(["Yoda", "Obi Kenobi", "Chubaka"])

    const addUser = () => {
        let newUser = `Sveta ${new Date().getTime()}`
        setUsers([...users, newUser])
    }

    const newArray = useMemo(() => {
        return users.filter(u => u.toLowerCase().indexOf('a') > -1)
    }, [users])

    return <>
        <button onClick={() => setCounter(counter + 1)}>+</button>
        <div>{counter}</div>
        <button onClick={addUser}>add user</button>
        <Users users={newArray} />
    </>
}

// ---------------------------------------- example 3 -------------------------------------

type StateType = {
    id: number
    city: string
    citizens: number
}
export const UseMemoWithCities = () => {
    console.log('Parent component')
    const [state, setState] = useState<StateType[]>([
        { id: 1, city: 'Stockholm', citizens: 1515017 },
        { id: 1, city: 'Goeteborg', citizens: 572799 },
        { id: 1, city: 'Malmoe', citizens: 301706 },
        { id: 1, city: 'Uppsala', citizens: 149245 },
        { id: 2, city: 'Kyiv', citizens: 2797553 },
        { id: 2, city: 'Kharkiv', citizens: 1430885 },
        { id: 2, city: 'Dnipro', citizens: 1032822 },
        { id: 2, city: 'Lviv', citizens: 717803 },
        { id: 2, city: 'Odesa', citizens: 1001558 },
        { id: 3, city: 'Lisbon', citizens: 517802 },
        { id: 3, city: 'Porto', citizens: 249633 },
        { id: 3, city: 'Amadora', citizens: 178858 },
        { id: 3, city: 'Braga', citizens: 121394 },
    ])
    const [counter, setCounter] = useState(0)

    const onButtonClickHandler = () => {
        setCounter((n) => n + 1)
    }

    const stateOne = useMemo(()=>{
        return state.filter(obj => obj.id === 1)
    }, [state])
    const stateTwo = useMemo(()=>{
        return state.filter(obj => obj.id === 2)
    }, [state])
    const stateThree = useMemo(()=>{
        return state.filter(obj => obj.id === 3)
    }, [state])

    return (
        <>
            <hr />
            <div>
                <h1>{counter}</h1>
                <button onClick={onButtonClickHandler}>Counter + 1</button>
            </div>
            <hr />
            <div>
                <h3>Cities with more than 1 million population</h3>
                <CitiesSelect state={stateOne}/>
                <CitiesSelect state={stateTwo}/>
                <CitiesSelect state={stateThree}/>
            </div>
        </>
    )
}

type CitiesSelectProps = {
    state: StateType[]
}
const CitiesSelectForMemo = ({ state }: CitiesSelectProps) => {
    console.log(`City selector ${state[0].id}`)
    const [selectedOption, setSelectedOption] = useState('')

    const onSelectChangeHandler = (e: ChangeEvent<HTMLSelectElement>) => {
        setSelectedOption(e.currentTarget.value)
    }

    return <select value={selectedOption} onChange={onSelectChangeHandler}>
        <option value="">Choose option...</option>
        {
            state.map(o => <option key={o.citizens}>{o.city}</option>)
        }
    </select>
}
const CitiesSelect = React.memo(CitiesSelectForMemo)
