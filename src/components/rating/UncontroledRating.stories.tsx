import { action } from "@storybook/addon-actions";
import { UncontroledRating } from "./UncontroledRating";

export default {
    title: 'Uncontroled Rating',
    components: UncontroledRating
}

const callback = action('rating changed')

export const EmptyRating = () => <UncontroledRating defaultValue={0} onChange={callback}/>
export const Rating1 = () => <UncontroledRating defaultValue={1} onChange={callback}/>
export const Rating2 = () => <UncontroledRating defaultValue={2} onChange={callback}/>
export const Rating3 = () => <UncontroledRating defaultValue={3} onChange={callback}/>
export const Rating4 = () => <UncontroledRating defaultValue={4} onChange={callback}/>
export const Rating5 = () => <UncontroledRating defaultValue={5} onChange={callback}/>