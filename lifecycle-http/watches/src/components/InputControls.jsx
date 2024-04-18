import { useState } from "react";
import { Watches } from "./Watches";
import  Delete from '../assets/delete.svg'

export const InputControls = () => {
  const [userInputs, setUserInputs] = useState({ watchName: "", timeZone: "" });

  const onChangeHandler = (e, inputField) => {
    setUserInputs({ ...userInputs, [inputField]: e.target.value });
  };

  const [watchs, setWatchs] = useState([])

  const addWatch = (e, zone) => {
    e.preventDefault(); 
    watchs.push({
      zone: zone,
      title: userInputs.watchName,
    }); 

    setWatchs(watchs);
    setUserInputs({ watchName: "", timeZone: "" })
  }

  const deleteWatch = (index) => {
    watchs.splice(index,1)
    setWatchs(watchs)
    setUserInputs({ watchName: "", timeZone: "" })

  console.log(watchs);
  }

  const renderWatch = watchs.map((zone, index) => {
    return (
      <div className="watch-container" key={index}>
        <span>{zone.title}</span>
        <img src={Delete} onClick={() => deleteWatch(index)} />
        <Watches zone={zone} />
      </div>
    );
  })


  return (
    <>
      <form className="user-input-container">
        <div>
          <label htmlFor="watchName">Название</label>
          <input
            type="text"
            name="watchName"
            id="watchName"
            value={userInputs.watchName}
            onChange={(e) => onChangeHandler(e, "watchName")}
          /> 
        </div>
        <div>
          <label htmlFor="timeZone">Временная зона</label>
          <input
            type="number"
            name="timeZone"
            id="timeZone"
            value={userInputs.timeZone}
            min={-11}
            max={12}
            onChange={(e) => onChangeHandler(e, "timeZone")}
          /> 
        </div>
        <button type="button" onClick={(e) => addWatch(e, userInputs.timeZone)} disabled={userInputs.timeZone == "" || userInputs.watchName ==""}>Добавить</button>
      </form>
      <div className="watch-items-container">
        {watchs.length > 0 && renderWatch}  
      </div>
    </>
  );
};
