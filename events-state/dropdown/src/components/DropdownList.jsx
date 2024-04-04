

export const DropdownList = (props) => {

  const dropdownItems = props.dropdownItems
  const dropdownStatus = props.dropdownStatus

  return (
    <>
    <ul data-id="dropdown" className="dropdown" style={{visibility: dropdownStatus}}>
      {dropdownItems.map(item => {
        return (
          <li className={item.active && "active"}><a href="#">{item.title}</a></li>
        )
      })}
    </ul>
    </>
  );
}
