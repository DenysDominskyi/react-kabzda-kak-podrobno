
import React, { KeyboardEvent, useEffect, useState } from 'react'
import styles from './select.module.css'
type ItemType = {
    title: string
    value: any
}
type SelectPropsType = {
    onSelect: (value: any) => void
    items: ItemType[]
}

export const SelectForMemo = (props: SelectPropsType) => {
    console.log('Select')
    const [collapsed, setCollapsed] = useState(true)
    const [selectedTitle, setSelectedTitle] = useState<string | null>(null)

    const onClickHandler = (value: string) => {
        setSelectedTitle(value)
        setCollapsed(!collapsed)
        props.onSelect(value)
    }

    const selectedItem = props.items.filter(item => item.value === selectedTitle)[0]?.title || 's'

    const onKeyPress = (e: KeyboardEvent<HTMLDivElement>) => {

        if (e.key === 'ArrowDown' || e.key === 'ArrowUp') {
            for (let i = 0; i < props.items.length; i++) {
                if (props.items[i].value === selectedTitle) {
                    let pretendentElement = e.key === 'ArrowDown'
                        ? props.items[i + 1]
                        : props.items[i - 1]

                    if (pretendentElement) {
                        setSelectedTitle(pretendentElement.value)
                        return
                    }
                }
            }
            setSelectedTitle(props.items[0].value)
        }

        if(e.key === 'Enter' || e.key === 'Escape') {
            setCollapsed(true)
            return
        }
    }
    return (
        <div onBlur={() => setCollapsed(!collapsed)} className={styles.customSelect} tabIndex={0} onKeyDown={onKeyPress}>
            <div className={styles.customSelect__trigger} onClick={() => setCollapsed(!collapsed)}>
                {selectedTitle ? selectedItem : 'select...'}
                <span className={collapsed ? styles.arrow : `${styles.arrow} ${styles.up}`}></span>
            </div>
            {!collapsed &&
                <div className={collapsed ? styles.customSelect__dropdown : `${styles.customSelect__dropdown} ${styles.show}`}>
                    {props.items.map(item => (
                        <div
                            key={item.value}
                            onMouseEnter={() => setSelectedTitle(item.value)}
                            className={styles.customSelect__option + " " + (selectedItem === item.title ? styles.selected : '')}
                            onClick={() => onClickHandler(item.value)}
                        >
                            {item.title}
                        </div>
                    ))}
                </div>
            }
        </div>
    )
}

export const Select = React.memo(SelectForMemo)