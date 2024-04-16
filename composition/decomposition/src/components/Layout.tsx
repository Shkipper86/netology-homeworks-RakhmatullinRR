//Этот компонент отрисовывет выступает основным контейнером. Также получает и передает в пропсы котировки и геопозицию пользователя

import { Currency } from "./Currency"
import { News } from "./News"
import { Promo } from "./Promo"
import promoImg from '../assets/promo.png'
import { Search } from "./Search"
import { Footer } from "./Footer"

export interface ICurrencyData {
  currencyName: string,
  price: number,
  difference: string
}

const currencyData: ICurrencyData[] = [
  {
  currencyName: 'USD',
  price: 63.52,
  difference: '+0.09'
 },
 {
  currencyName: 'EUR',
  price: 70.86,
  difference: '+0.14'
 },
 {
  currencyName: 'НЕФТЬ',
  price: 64.90,
  difference: '+1,63%'
 }
]

export interface IUserProps {
    geoposition: string
}

export const Layout = (props: IUserProps) => {

    const {geoposition} = props

  return (
    <div className="container">
      <div className="header-content">
        <span>
          <News>
            <div className="news-headers">
              <a href="#">Сейчас в СМИ</a>
              <a href="#">в {geoposition}</a>
              <a href="#">Сейчас в СМИ</a>
              <div className="datetime">
                {`${new Date().toDateString()}, ${new Date().toLocaleTimeString()}`}
              </div>
            </div>
          </News>
          <Currency data={currencyData} />
        </span>
        <span>
          <Promo>
            <img src={promoImg} alt="Promo" />
            <div className="promoTitle">
              <a href="#">Работа над ошибками</a>
            </div>
            <div className="promo-description">
              Смотрите на Яндексе и запоминайте
            </div>
          </Promo>
        </span>
      </div>
      <div className="search-content">
        <Search />
      </div>
      <div className="footer-content">
        <Footer geoposition={geoposition} />
      </div>
    </div>
  );
}
