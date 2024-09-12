import { useState } from "react"

type AccordionPropsType = {
    accordionTitle: string
}

export const UncontroledAccordion = (props: AccordionPropsType) => {
    const [collapsed, setCollapsed] = useState(true)

    function toggleHandler() {
        setCollapsed(!collapsed)
    }

    return (
        <div>
            <AccordionTitle title={props.accordionTitle} onTitleClickHandler={toggleHandler}/>
            {!collapsed && <AccordionBody />}
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
        <div onClick={onClickHandler}>
            <h3 style={{cursor: 'pointer'}}>{props.title}</h3>
        </div>
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