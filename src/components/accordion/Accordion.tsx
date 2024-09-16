
type AccordionPropsType = {
  accordionTitle: string,
  collapsed: boolean
  onTClick: () => void
}
export function Accordion(props: AccordionPropsType) {
    return (
      <div>
        <AccordionTitle title = {props.accordionTitle} onTClick={props.onTClick}/>
        {!props.collapsed && <AccordionBody />}
      </div>
    )
  }
  
  type AccordionTitleTextPropsType = {
    title: string
    onTClick: () => void
  }
  function AccordionTitle(props: AccordionTitleTextPropsType) {
    return (
      <h3 onClick={props.onTClick}>{props.title}</h3>
    )
  }
  function AccordionBody() {
    return (
      <ul>
        <li>1</li>
        <li>2</li>
        <li>3</li>
      </ul>
    )
  }