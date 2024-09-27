type ItemType = {
  title: string
  value: any
}

// accordion
type AccordionPropsType = {
  accordionTitle: string,
  collapsed: boolean
  onTitleClick: () => void
  items: ItemType[]
  onClick: (value: any) => void
}
export function Accordion(props: AccordionPropsType) {
  return (
    <div>
      <AccordionTitle title={props.accordionTitle} onTitleClick={props.onTitleClick} />
      {!props.collapsed && <AccordionBody items={props.items} onClick={props.onClick}/>}
    </div>
  )
}

// title
type AccordionTitlePropsType = {
  title: string
  onTitleClick: () => void
}
function AccordionTitle(props: AccordionTitlePropsType) {
  return (
    <h3 onClick={props.onTitleClick}>{props.title}</h3>
  )
}

// body
type AccordionBodyPropsType = {
  items: ItemType[]
  onClick: (value: any) => void
}
function AccordionBody(props: AccordionBodyPropsType) {
  return (
    <ul>
      {props.items.map((item, index) => {
        const onClickHandler = () => {
          props.onClick(item.value)
        }
        return (
          <li
            key={index}
            onClick={onClickHandler}
          >
            {item.title}
          </li>
        )
      })}
    </ul>
  )
}