import { useState } from "react"
import './rating.css'

type RatingPropsType = 0 | 1 | 2 | 3 | 4 | 5

export const UncontroledRating = () => {
    const [value, setValue] = useState<RatingPropsType>(0)

    const onStarClickHandler = (v: RatingPropsType) => {
        setValue(v)
    }

    return (
        <div className="starBox">
            <div>
                <Star selected={value > 0} onStarClickHandler={()=>onStarClickHandler(1)} />
                <Star selected={value > 1} onStarClickHandler={()=>onStarClickHandler(2)} />
                <Star selected={value > 2} onStarClickHandler={()=>onStarClickHandler(3)} />
                <Star selected={value > 3} onStarClickHandler={()=>onStarClickHandler(4)} />
                <Star selected={value > 4} onStarClickHandler={()=>onStarClickHandler(5)} />
            </div>
            <button onClick={() => { onStarClickHandler(0) }}>Zero Star</button>
        </div>
    )
}

type StarPropsType = {
    selected: boolean
    onStarClickHandler: () => void
}
function Star({ selected, onStarClickHandler }: StarPropsType) {
    const onClick = () => {
        onStarClickHandler()
    }

    return (
        <span className={selected ? 'star on' : 'star'} onClick={onClick}></span>
    )
}