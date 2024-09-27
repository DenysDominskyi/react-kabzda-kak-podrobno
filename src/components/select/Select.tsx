
import { useState } from 'react'
import './select.css'

type ItemType = {
    title: string
    value: any
}
type SelectPropsType = {
    onSelect: (value: any) => void
    items: ItemType[]
}

export const Select = (props: SelectPropsType) => {
    const [collapsed, setCollapsed] = useState(true)
    const [selectedTitle, setSelectedTitle] = useState<string | null>(null)

    const onClickHandler = (value: string) => {
        setSelectedTitle(value)
        setCollapsed(!collapsed)
        props.onSelect(value)
    }

    const selectedItem = props.items.filter(item => item.value === selectedTitle)[0]?.title

    return (
        <div className="custom-select">
            <div className="custom-select__trigger" onClick={() => setCollapsed(!collapsed)}>
                {selectedTitle ? selectedItem : 'select...'}
                <span className={collapsed ? 'arrow' : 'arrow up'}></span>
            </div>
            <div className={collapsed ? "custom-select__dropdown" : "custom-select__dropdown show"}>
                    {props.items.map(item => (
                        <div
                            key={item.value}
                            className="custom-select__option"
                            onClick={() => onClickHandler(item.value)}
                        >
                            {item.title}
                        </div>
                    ))}
                </div>
        </div>
    )
}
