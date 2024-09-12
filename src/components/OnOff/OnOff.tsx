import React, { useState } from 'react'
import './OnOff.css'

type OnOffPropsType = {
    value?: boolean
}

export const OnOff = (props: OnOffPropsType) => {
    
    const [colorState, setColorState] = useState(props.value)
    const styleData = {
        styleOn: 'repeating-linear-gradient(-45deg, white, white 10%, #00c800 0, #00c800 8px)',
        styleOff: 'repeating-linear-gradient(-45deg, white, white 10%, red 0, red 8px)',
    }

    return (
        <div className='onOffDiv'>
            <button
                className='styledButton'
                style={{ background: `${colorState ? styleData.styleOn : '#fff'}` }}
                onClick={() => setColorState(true)}
            >On</button>
            <button
                className='styledButton'
                style={{ background: `${colorState ? '#fff' : styleData.styleOff}` }}
                onClick={() => setColorState(false)}
            >Off</button>
            <span style={
                {
                    display: 'block',
                    width: '20px',
                    height: '20px',
                    borderRadius: '50%',
                    backgroundColor: `${colorState ? '#00c800' : 'red'}`,
                }}
            ></span>
        </div>
    )
}

