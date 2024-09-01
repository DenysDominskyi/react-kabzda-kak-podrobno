

type RatingPropsType = {
    value: 0 | 1 | 2 | 3 | 4 | 5 
}
export function Rating({ value }: RatingPropsType) {
    if ((value === 1)) {
        return (
            <div>
                <Star selected={true} />
                <Star selected={false} />
                <Star selected={false} />
                <Star selected={false} />
                <Star selected={false} />
            </div>
        )
    }
    else if ((value === 2)) {
        return (
            <div>
                <Star selected={true} />
                <Star selected={true} />
                <Star selected={false} />
                <Star selected={false} />
                <Star selected={false} />
            </div>
        )
    }
    else if ((value === 3)) {
        return (
            <div>
                <Star selected={true} />
                <Star selected={true} />
                <Star selected={true} />
                <Star selected={false} />
                <Star selected={false} />
            </div>
        )
    }
    else if ((value === 4)) {
        return (
            <div>
                <Star selected={true} />
                <Star selected={true} />
                <Star selected={true} />
                <Star selected={true} />
                <Star selected={false} />
            </div>
        )
    }
    else if ((value === 5)) {
        return (
            <div>
                <Star selected={true} />
                <Star selected={true} />
                <Star selected={true} />
                <Star selected={true} />
                <Star selected={true} />
            </div>
        )
    } 
    else {
        return (
            <div>
                <Star selected={false} />
                <Star selected={false} />
                <Star selected={false} />
                <Star selected={false} />
                <Star selected={false} />
            </div>
        )
    }
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