import React from 'react'

export const Calendar  = (props) => {
    const now = new Date(props.date)
    const myDate = {
      day: {
        0: "Воскресенье",
        1: "Понедельник",
        2: "Вторник",
        3: "Среда",
        4: "Четверг",
        5: "Пятница",
        6: "Суббота",
      },
      month: {
        0: 'Январь',
        1: 'Февраль',
        2: 'Март',
        3: 'Апрель',
        4: 'Май',
        5: 'Июнь',
        6: 'Июль',
        7: 'Август',
        8: 'Сентябрь',
        9: 'Октябрь',
        10: 'Ноябрь',
        11: 'Декабрь',
      }
    };

    const lastDay = new Date(now.getFullYear(), now.getMonth() + 1, 0) //Получаем последнее число месяца

    const dayArr = Array.from({length: lastDay.getDate()}, (_, index) => index + 1) //Получаем массив чисел которые далее будем заполнять в таблицу

    //Если первый день месяца не понедельник то берем недостающие дни из предыдущего месяца
    const firstDay = new Date(now.getFullYear(), now.getMonth(), 1)
    firstDay.getDay() > 0 && (() => {
         const previousMonthDay = new Date(now.getFullYear(), now.getMonth(), 0)
         for (let i=1; i < firstDay.getDay(); i++) {
            dayArr.unshift(previousMonthDay.getDate() - i + 1);
         }
    })()

    // Пилим массив на подмассивы
    const tableItems = []
    for (let i = 0; i < dayArr.length; i += 7){
        tableItems.push(dayArr.slice(i, i + 7))
    }

    //Если последний день месяца не воскресенье то берем недостающие дни из следующего месяца
    tableItems[tableItems.length-1].length < 7 && (()=> {
        let nextDayNumber = 1
        for (let i = tableItems[tableItems.length-1].length; i < 7; i++){
            tableItems[tableItems.length-1].push(nextDayNumber)
            nextDayNumber++
        }
    })()



  return (
    <div className="ui-datepicker">
      <div className="ui-datepicker-material-header">
        <div className="ui-datepicker-material-day">{myDate.day[now.getDay()]}</div>
        <div className="ui-datepicker-material-date">
          <div className="ui-datepicker-material-day-num">{now.getDate()}</div>
          <div className="ui-datepicker-material-month">
            {myDate.month[now.getMonth()]}
          </div>
          <div className="ui-datepicker-material-year">{now.getFullYear()}</div>
        </div>
      </div>
      <div className="ui-datepicker-header">
        <div className="ui-datepicker-title">
          <span className="ui-datepicker-month">
            {myDate.month[now.getMonth()]}
          </span>
          &nbsp;
          <span className="ui-datepicker-year">{now.getFullYear()}</span>
        </div>
      </div>
      <table className="ui-datepicker-calendar">
        <colgroup>
          <col />
          <col />
          <col />
          <col />
          <col />
          <col className="ui-datepicker-week-end" />
          <col className="ui-datepicker-week-end" />
        </colgroup>
        <thead>
          <tr>
            <th scope="col" title="Понедельник">
              Пн
            </th>
            <th scope="col" title="Вторник">
              Вт
            </th>
            <th scope="col" title="Среда">
              Ср
            </th>
            <th scope="col" title="Четверг">
              Чт
            </th>
            <th scope="col" title="Пятница">
              Пт
            </th>
            <th scope="col" title="Суббота">
              Сб
            </th>
            <th scope="col" title="Воскресенье">
              Вс
            </th>
          </tr>
        </thead>
        <tbody>
            {tableItems.map((item, index) => {
                return (<tr key={index}>
                    {item.map(day => {
                        return (
                            index == 0 && day > 7 || index == tableItems.length - 1 && (day < lastDay.getDate() && day < 7)
                            ? <td className="ui-datepicker-other-month">{day}</td>
                            : day == now.getDate()
                            ? <td className="ui-datepicker-today">{day}</td>
                            : <td>{day}</td>
                        )
                    })}
                </tr>)
            })}
        </tbody>
      </table>
    </div>
  );
}
