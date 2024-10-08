import React, { useState } from "react"
import './rating.css'

type RatingValueType = 0 | 1 | 2 | 3 | 4 | 5

type RatingPropsType = {
    defaultValue?: RatingValueType
    onChange: (value: RatingValueType) => void
}

const UncontroledRatingForMemo = (props: RatingPropsType) => {
    console.log('UncontroledRating')
    let [value, setValue] = useState<RatingValueType>(props.defaultValue ? props.defaultValue : 0)

    return (
        <div className="starBox">
            <div>
                <Star selected={value > 0} setValue={() => { setValue(1); props.onChange(1) }} />
                <Star selected={value > 1} setValue={() => { setValue(2); props.onChange(2) }} />
                <Star selected={value > 2} setValue={() => { setValue(3); props.onChange(3) }} />
                <Star selected={value > 3} setValue={() => { setValue(4); props.onChange(4) }} />
                <Star selected={value > 4} setValue={() => { setValue(5); props.onChange(5) }} />
            </div>
            {/* <button onClick={() => { onStarClickHandler(0) }}>Zero Star</button> */}
        </div>
    )
}

type StarPropsType = {
    selected: boolean
    setValue: () => void
}
function Star({ selected, setValue }: StarPropsType) {
    const onClick = () => {
        setValue()
    }

    return (
        <span className={selected ? 'star on' : 'star'} onClick={onClick}></span>
    )
}
export const UncontroledRating = React.memo(UncontroledRatingForMemo)