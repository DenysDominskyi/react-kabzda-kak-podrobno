
type AccordionPropsType = {
  accordionTitle: string,
  collapsed: boolean
}
export function Accordion(props: AccordionPropsType) {
    return (
      <div>
        <AccordionTitle title = {props.accordionTitle}/>
        {props.collapsed ? <></> : <AccordionBody />}
      </div>
    )
  }
  
  type AccordionTitleTextPropsType = {
    title: string
  }
  function AccordionTitle(props: AccordionTitleTextPropsType) {
    return (
      <h3>{props.title}</h3>
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