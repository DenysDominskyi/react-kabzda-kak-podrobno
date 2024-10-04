import React, { useState } from "react"

export default {
    title: 'React memo demo',
}

const SecretNewMessageCounter = (props: { count: number }) => {
    return <div>{props.count}</div>
}
const NewMessageCounter = React.memo(SecretNewMessageCounter)

const UsersSecret = (props: { users: Array<string> }) => {
    return <div>
        {props.users.map((u, i) => <div key={i}>{u}</div>)}
    </div>
}
const Users = React.memo(UsersSecret)

export const Example1 = () => {
    const [counter, setCounter] = useState(0)
    const [users, setUsers] = useState(["Yoda", "Obi Wan Kenobi", "Chubaka"])

    const addUser = () => {
        let newUser = `Sveta ${new Date().getTime()}`
        setUsers([...users, newUser])
    }
    return <>
        <button onClick={() => setCounter(counter + 1)}>+</button>
        <button onClick={addUser}>add user</button>
        <NewMessageCounter count={counter} />
        <Users users={users} />
    </>
}