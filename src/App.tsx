import './App.css';
import { Accordion } from './components/accordion/Accordion';
import { OnOff } from './components/OnOff/OnOff';
import { Rating } from './components/rating/Rating';

function App() {
  return (
    <div>
      <Accordion accordionTitle='title 1' collapsed={true}/>
      <Accordion accordionTitle='title 2' collapsed={false}/>

      <Rating value={4}/>

      <OnOff value={true}/>
    </div>
  );
}

function PageTitle(props: {title: string}) {
  return <h1>{props.title}</h1>
}

export default App;
