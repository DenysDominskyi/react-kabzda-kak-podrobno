
import { action } from '@storybook/addon-actions';

import { Accordion } from './Accordion';
import { useState } from 'react';

export default {
    title: 'Accordion'
}

const onChangeCallback = action('onTClick')
const onClickCallback = action('some item was clicked')

const arr = [
    {
        title: 'Yoda',
        value: 1
    }, 
    {
        title: 'Darth Vader',
        value: 2
    }, 
    {
        title: 'Chubacka',
        value: 3
    }, 
    {
        title: 'Obi Wan Kenobi',
        value: 4
    }]

export const CollapsedAccordion = () => {
    return <Accordion
        accordionTitle='Collapsed accordion'
        collapsed={true}
        onTitleClick={onChangeCallback}
        items={[]}
        onClick={() =>{}}
    />
}
export const OpenedAccordion = () => {
    return <Accordion
        accordionTitle='Opened accordion'
        collapsed={false}
        onTitleClick={() => { }}
        items={arr}
        onClick={() =>{}}
    />
}
export const AccordionDemo = () => {
    const [collapsed, setCollapsed] = useState(false)

    return <Accordion
        accordionTitle='Accordion'
        collapsed={collapsed}
        onTitleClick={() => { setCollapsed(!collapsed) }}
        items={arr}
        onClick={onClickCallback}
    />
}