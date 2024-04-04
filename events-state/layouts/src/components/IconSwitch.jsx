import { ViewList, ViewModule}  from '@material-ui/icons'

export const IconSwitch = (props) => {

    const icon = props

  return (
    <>
      <div onClick={icon.onSwitch} className='switch-icon'>
        {icon.icon === "module" ? (
          <ViewList value="list" />
        ) : (
          <ViewModule value="module" />
        )}
      </div>
    </>
  );
}
