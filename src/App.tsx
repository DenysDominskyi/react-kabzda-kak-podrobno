import { useState } from 'react';
import './App.css';
import { Accordion } from './components/accordion/Accordion';
import { UncontroledAccordion } from './components/accordion/UncontroledAccordion';
import { UncontrolledOnOff } from './components/OnOff/UncontrolledOnOff';
import { Rating, RatingValueType } from './components/rating/Rating';
// import { UncontroledRating } from './components/rating/UncontroledRating';
import { OnOff } from './components/OnOff/OnOff';
import { Select } from './components/select/Select';

function App() {
  const items = [
    { title: 'Yoda', value: 1 }, 
    { title: 'Darth Vader', value: 2 }, 
    { title: 'Chubacka', value: 3 }, 
    { title: 'Obi Wan Kenobi', value: 4 }]

  let [ratingValue, setRatingValue] = useState<RatingValueType>(0)
  const [accordionCollapsed, setAccordionCollapsed] = useState(true)
  const [colorState, setColorState] = useState(false)

  return (
    <div className='app'>
      <UncontrolledOnOff />
      <OnOff value={colorState} changeValue={setColorState} />

      <UncontroledAccordion accordionTitle='Menu 1' />

      {/* <UncontroledRating /> */}
      <Accordion
        accordionTitle='Controled accordion'
        collapsed={accordionCollapsed}
        onTitleClick={() => setAccordionCollapsed(!accordionCollapsed)}
        items={[]}
        onClick={() => { }}
      />
      <Rating value={ratingValue} onClick={setRatingValue} />

      <Select
        onSelect={() => { }}
        items={items}
      />
    </div>
  );
}

export default App;
