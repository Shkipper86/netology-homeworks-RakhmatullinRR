//Этот компонент получает в пропсы и отрисовывает котировки валют и акций

import { ICurrencyData } from "./Layout"

interface IData {
  data: ICurrencyData[]
}


export const Currency = ({data}: IData) => {

  const currencyList = data.map(currency => {
    return (
      <div className="currency-item">
        <div className="currency-name">{currency.currencyName} MOEX</div>
        <div className="currency-price">{currency.price}</div>
        <div className="currency-difference">{currency.difference}</div>
      </div>
    );
  })

  return (
    <div className="currency">
      {currencyList}
    </div>
  )
}
