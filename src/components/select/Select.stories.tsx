
import { action } from '@storybook/addon-actions';

import { Select } from './Select';
import { useState } from 'react';

export default {
    title: 'Select'
} 


const items = [
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


export const SelectDemo = () => {
    return <Select
        onSelect={()=>{}}
        items={items}
    />
}