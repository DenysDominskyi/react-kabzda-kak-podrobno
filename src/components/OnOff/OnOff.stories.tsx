import { useState } from "react";
import { OnOff } from "./OnOff";
import { action } from "@storybook/addon-actions";

export default {
    title: 'OnOff'
}
const callback = action('onOff changed')
export const OnOffTurnedOn = () => {
    return <OnOff value={true} changeValue={()=> {}}/>
}
export const OnOffTurnedOff = () => {
    return <OnOff value={false} changeValue={()=>{}}/>
}
export const OnOffDemo = () => {
    const [v, setV] = useState(false)
    return <OnOff value={v} changeValue={() => setV(!v)}/>
}