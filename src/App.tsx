import './App.css';
import { Accordion } from './components/accordion/Accordion';
import { Rating } from './components/rating/Rating';

function App() {
  return (
    <div>
      <PageTitle title='Page 1'/>
      Article 1
      <Rating value={3}/>
      <Accordion accordionTitle='title 1' collapsed={true}/>
      <Accordion accordionTitle='title 2' collapsed={false}/>
      Article 2
      <Rating value={4}/>
    </div>
  );
}

function PageTitle(props: {title: string}) {
  return <h1>{props.title}</h1>
}

export default App;
