import { useState } from 'react';
import './App.css';
import { Accordion } from './components/accordion/Accordion';
import { UncontroledAccordion } from './components/accordion/UncontroledAccordion';
import { UncontrolledOnOff } from './components/OnOff/UncontrolledOnOff';
import { Rating, RatingValueType } from './components/rating/Rating';
import { UncontroledRating } from './components/rating/UncontroledRating';
import { OnOff } from './components/OnOff/OnOff';

function App() {

  let [ratingValue, setRatingValue] = useState<RatingValueType>(0)
  const [accordionCollapsed, setAccordionCollapsed] = useState(true)
  const [colorState, setColorState] = useState(false)

  return (
    <div className='app'>
      <UncontrolledOnOff />
      <OnOff value={colorState} changeValue={setColorState} />

      <UncontroledAccordion accordionTitle='Menu 1' />

      <UncontroledRating />
      <Accordion
        accordionTitle='Controled accordion'
        collapsed={accordionCollapsed}
        onTClick={() => setAccordionCollapsed(!accordionCollapsed)}
      />
      <Rating value={ratingValue} onClick={setRatingValue} />

    </div>
  );
}

function PageTitle(props: { title: string }) {
  return <h1>{props.title}</h1>
}

export default App;
