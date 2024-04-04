import { useState } from "react";
import { DropdownList } from "./DropdownList";

export const Dropdown = () => {

  const [dropdownStatus, setDropdownStatus] = useState('hidden')

  const dropdownShow = () => {
    dropdownStatus === 'visible' ? setDropdownStatus('hidden') : setDropdownStatus('visible')
  }

  const dropdownItems = [
    {
      title: "Profile Information",
      active: true,
    },
    { title: "Change Password", active: false },
    { title: "Become PRO", active: false },
    { title: "Help", active: false },
    { title: "Log Out", active: false },
  ];

  return (
    <div className="container">
      <div data-id="wrapper" className="dropdown-wrapper">
        <button data-id="toggle" className="btn" onClick={dropdownShow}>
          <span>Account Settings</span>
          <i className="material-icons">public</i>
        </button>
        <DropdownList dropdownItems={dropdownItems} dropdownStatus={dropdownStatus}/>
      </div>
    </div>
  );
}
