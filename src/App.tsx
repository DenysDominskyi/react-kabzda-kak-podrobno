import './App.css';
import { Accordion } from './components/accordion/Accordion';
import { UncontroledAccordion } from './components/accordion/UncontroledAccordion';
import { OnOff } from './components/OnOff/OnOff';
import { Rating } from './components/rating/Rating';
import { UncontroledRating } from './components/rating/UncontroledRating';

function App() {
  return (
    <div className='app'>
      <OnOff value={true}/>
      <OnOff />

      <UncontroledAccordion accordionTitle='title 1'/>
      <UncontroledAccordion accordionTitle='title 2'/>

      <UncontroledRating />

    </div>
  );
}

function PageTitle(props: {title: string}) {
  return <h1>{props.title}</h1>
}

export default App;
