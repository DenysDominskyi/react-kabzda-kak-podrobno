import React, { useState } from 'react'

type OnOffPropsType = {
    value: boolean
}

export const OnOff = (props: OnOffPropsType) => {
    const [colorState, setColorState] = useState(props.value)

    return (
        <div style={{ display: 'flex', padding: '20px', gap: '5px' }}>
            <button
                style={{backgroundColor: `${colorState ? 'green' : ''}`}}
                onClick={() => setColorState(true)}
            >On</button>
            <button
                style={{backgroundColor: `${colorState ? '' : 'red'}`}}
                onClick={() => setColorState(false)}
            >Off</button>
            <span style={
                {
                    display: 'block',
                    width: '20px',
                    height: '20px',
                    borderRadius: '50%',
                    backgroundColor: `${colorState ? 'green' : 'red'}`,
                }}
            ></span>
        </div>
    )
}

