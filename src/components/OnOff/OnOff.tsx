import React, { useState } from 'react'
import './OnOff.css'

export type OnOffPropsType = {
    value: boolean
    changeValue: (value: boolean) => void
}

const OnOffForMemo = ({ value, changeValue }: OnOffPropsType) => {
    // console.log("OnOff")
    const styleData = {
        styleOn: 'repeating-linear-gradient(-45deg, white, white 10%, #00c800 0, #00c800 8px)',
        styleOff: 'repeating-linear-gradient(-45deg, white, white 10%, red 0, red 8px)',
    }

    return (
        <div className='onOffDiv'>
            <button
                className='styledButton'
                style={{ background: `${value ? styleData.styleOn : '#fff'}` }}
                onClick={() => changeValue(true)}
            >On</button>
            <button
                className='styledButton'
                style={{ background: `${value ? '#fff' : styleData.styleOff}` }}
                onClick={() => changeValue(false)}
            >Off</button>
            <span style={
                {
                    display: 'block',
                    width: '20px',
                    height: '20px',
                    borderRadius: '50%',
                    backgroundColor: `${value ? '#00c800' : 'red'}`,
                }}
            ></span>
        </div>
    )
}

export const OnOff = React.memo(OnOffForMemo)