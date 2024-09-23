
import { action } from '@storybook/addon-actions';

import { Accordion } from './Accordion';
import { useState } from 'react';

export default {
    component: Accordion
}

const onChangeCallback = action('onTClick')

export const CollapsedAccordion = () => {
    return <Accordion
        accordionTitle='Collapsed accordion'
        collapsed={true}
        onTClick={onChangeCallback}
    />
}
export const OpenedAccordion = () => {
    return <Accordion
        accordionTitle='Opened accordion'
        collapsed={false}
        onTClick={() => { }}
    />
}
export const AccordionDemo = () => {
    const [collapsed, setCollapsed] = useState(false)
    return <Accordion
        accordionTitle='Accordion'
        collapsed={collapsed}
        onTClick={() => {setCollapsed(!collapsed)}}
    />
}