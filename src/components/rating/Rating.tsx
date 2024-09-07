

type RatingPropsType = {
    value: 0 | 1 | 2 | 3 | 4 | 5 
}
export function Rating({ value }: RatingPropsType) {
    return (
        <div>
            <Star selected={value > 0} />
            <Star selected={value > 1} />
            <Star selected={value > 2} />
            <Star selected={value > 3} />
            <Star selected={value > 4} />
        </div>
    )
}

type StarPropsType = {
    selected: boolean
}
function Star({ selected }: StarPropsType) {
    return (
        <span>
            {selected ? <b>star</b> : 'star'}
        </span>
    )
}