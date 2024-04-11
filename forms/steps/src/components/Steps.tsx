import { useEffect, useState } from "react";
import Edit from '../assets/img/edit.svg'
import Delete from '../assets/img/delete.svg'

export const Steps = () => {

  interface IstepItems<T> {
    date: string;
    passed: number;
    log?: T[];
  }

 interface ILog {
    id: number;
    date: string,
    passed: number
 }

  const [stepItem, setStepItem] = useState<IstepItems<ILog>>(
    {
      date: "",
      passed: 0,
    }
  )

  const getId = (): number => {
    return  Math.random() * (74523 - 277) + 277
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  let logUniqItemindex: number = -1
    stepItem.log && (logUniqItemindex = stepItem.log?.findIndex(item => item.date === stepItem.date))
    
    stepItem.log === undefined
      ? Object.assign(stepItem, {
          log: [
            {
              id: getId(),
              date: stepItem.date,
              passed: stepItem.passed,
            },
          ],
        })
      : logUniqItemindex != -1
      ? (stepItem.log[logUniqItemindex].passed =
          Number(stepItem.log[logUniqItemindex].passed) + Number(stepItem.passed))
      : stepItem.log.push({
          id: getId(),
          date: stepItem.date,
          passed: stepItem.passed,
        });   

        stepItem.log?.sort((a,b) => new Date(b.date).getTime() - new Date(a.date).getTime())
         
    setStepItem({...stepItem, date: '', passed: 0, log: stepItem.log})    
    // sortLogItems()
  }; 

  const handleOnchange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const {value, name} = e.target
    setStepItem({...stepItem, [name]: value})
  }

  const deleteItem = (id: number) => {
    stepItem.log?.splice(stepItem.log.findIndex(item => item.id === id), 1)
    setStepItem({...stepItem, log: stepItem.log})
  }

  const editeItem = (index: number) => {    
    const editPassetValue = stepItem.log![index].passed
    stepItem.log![index].passed = 0
    setStepItem({...stepItem, date: stepItem.log![index].date, passed: editPassetValue, log: stepItem.log})
  }

 const stepItemLogTable = stepItem.log?.map((item, index) => {
  return (
    <div className="result-log-item" key={item.id}>
      <span>{item.date}</span>
      <span>{item.passed}</span>
      <span>
        <img src={Edit} alt="" onClick={() => editeItem(index)} />
        <img
          src={Delete}
          alt=""
          onClick={() => deleteItem(item.id)}
        />
      </span>
    </div>
  );
})

  return (
    <div className="container">
      <form className="form" autoComplete="off" onSubmit={handleSubmit}>
        <span className="userInput">
          <label htmlFor="date">Дата</label>
          <input
            type="date"
            name="date"
            id="date"
            onChange={handleOnchange}
            value={stepItem.date}
          />
        </span>
        <span className="userInput">
          <label htmlFor="passed">Пройдено км</label>
          <input
            type="number"
            min={0}
            step={0.01}
            name="passed"
            id="passed"
            onChange={handleOnchange}
            value={stepItem.passed}
          />
        </span>
        <button type="submit" disabled={stepItem.date != '' ? false : true}>ОК</button>
      </form>
      <div className="result-container">
        {stepItem.log && stepItemLogTable}
      </div>
    </div>
  );
}
