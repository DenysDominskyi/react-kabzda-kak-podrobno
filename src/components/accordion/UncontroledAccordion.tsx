import React, { useReducer, useState } from "react"
import { reducer, TOGGLE_COLLAPSED } from "./reducer"

type AccordionPropsType = {
    accordionTitle: string
}

const UncontroledAccordionForMemo = (props: AccordionPropsType) => {
    console.log('UncontroledAcordion')
    const [state, dispatch] = useReducer(reducer, {collapsed: false})

    function toggleHandler() {
        dispatch({type: TOGGLE_COLLAPSED})
    }

    return (
        <div>
            <AccordionTitle title={props.accordionTitle} onTitleClickHandler={toggleHandler}/>
            {!state.collapsed && <AccordionBody />}
        </div>
    )
}

type AccordionTitleTextPropsType = {
    title: string
    onTitleClickHandler: () => void
}
function AccordionTitle(props: AccordionTitleTextPropsType) {
    const onClickHandler = () => {
        props.onTitleClickHandler()
    }
    return (
        <h3 onClick={onClickHandler} style={{cursor: 'pointer'}}>{props.title}</h3>
    )
}
function AccordionBody() {
    return (
        <ul>
            <li>1</li>
            <li>2</li>
            <li>3</li>
        </ul>
    )
}

export const UncontroledAccordion = React.memo(UncontroledAccordionForMemo)