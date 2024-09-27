import { action } from "@storybook/addon-actions"
import { ChangeEvent, useRef, useState } from "react"

export default {
    title: 'input',
}

export const UncontrolledInput = () => <input />

export const ControlledInputWithFixedValue = () => <input value='it-incubator' />

export const TrackValueOfUncontrolledInput = () => {
    const [value, setValue] = useState('')
    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => setValue(e.currentTarget.value)
    return <>
        <input onChange={onChangeHandler} />
        {value}
    </>
}

export const GetValueOfUncontrolledInputByButtonPress = () => {
    const [value, setValue] = useState('')
    const inputRef = useRef<HTMLInputElement>(null)
    const save = () => {
        const el = inputRef.current as HTMLInputElement
        setValue(el.value)
    }
    return <>
        <input ref={inputRef}/>
        <button onClick={save}>save</button>
        <p>actual value: {value}</p>
    </>
}

export const ControledInput = () => {
    const [value, setValue] = useState('')
    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => setValue(e.currentTarget.value)
    
    return <input value={value} onChange={onChangeHandler}/>
    
}
export const ControledCeckbox = () => {
    const [checked, setChecked] = useState(false)
    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => setChecked(e.currentTarget.checked)
    return <input type="checkbox" checked={checked} onChange={onChangeHandler}/>
}
export const ControledSelect = () => {
    const [value, setValue] = useState<string | undefined>(undefined)
    const onChangeHandler = (e: ChangeEvent<HTMLSelectElement>) => setValue(e.currentTarget.value)
    return (
        <select value={value} onChange={onChangeHandler}>
            <option value="1">Kyiv</option>
            <option value="2">Minsk</option>
            <option value="3">Moscow</option>
        </select>
    )
}