//Этот компонент отрисовывет блоки в нижней части окна


import { FooterItem } from "./FooterItem.tsx";
import w_ico from "../assets/w_ico.png";
import { IUserProps } from "./Layout.tsx";
import livetv from '../assets/live-tv.png'
import play from '../assets/play.png'

// --------Считаем что это данные с сервера--------

//Погода
const weather = {
  nowDegrees: 17,
  morningDegrees: -17,
  dayDegrees: 20
}

//Посещаемое
const visited = [
  {
    id: 0,
    label: "Недвижимость",
    title: "о сталинках",
    url: "#",
  },
  {
    id: 1,
    label: "Маркет",
    title: "Люстры и светильники",
    url: "#",
  },
  {
    id: 2,
    label: "Авто.ру",
    title: "Привод 4х4 до 500 000",
    url: "#",
  },
];


const visitedItems = visited.map(item => {
  return (
    <div className="visited-content" key={item.id}>
      <a href={item.url}>
        <span className="visited-item-label"><b>{item.label}</b> - </span>
        <span className="visited-item-title">{item.title}</span>
      </a>
    </div>
  );
})

//Телепрограмма
const tvProgram = [
  {
    id: 0,
    time: "02:00",
    title: 'ТНТ.Best',
    channel: "ТНТ International",
    url: "#",
  },
  {
    id: 1,
    time: "02:15",
    title: 'Джинглики',
    channel: "Карусель INT",
    url: "#",
  },
  {
    id: 2,
    time: "02:25",
    title: 'Наедине со всеми',
    channel: "Первый",
    url: "#",
  },
];

const tvProgramItems = tvProgram.map(program => {
  return (
    <div className="tv-program-content" key={program.id}>
      <a href={program.url}>
        <span className="visited-item-label">{program.time}</span>
        <span className="visited-item-title">{program.title}</span>
        <span className="visited-item-channel">{program.channel}</span>
      </a>
    </div>
  )
})

//Эфир
const liveTV= [
  {
    id: 0,
    title: 'Управление как искусство',
    channel: "Успех",
    url: "#",
  },
  {
    id: 1,
    title: 'Ночь. Мир в это время',
    channel: "earthTV",
    url: "#",
  },
  {
    id: 2,
    title: 'Андрей Вознесенский',
    channel: "Совершенно секретно",
    url: "#",
  },
];


const liveTVItems = liveTV.map(program => {
  return (
    <div className="tv-program-content" key={program.id}>
      <a href={program.url}>
        <span className="visited-item-label"><img src={play} alt="play" /></span>
        <span className="visited-item-title">{program.title}</span>
        <span className="visited-item-channel">{program.channel}</span>
      </a>
    </div>
  )
})

export const Footer = (props: IUserProps) => {

  const geoposition = `Карта в ${props.geoposition}`

  return (
    <>
      <div className="footer-items">
        <FooterItem title={"Погода"}>
          <div className="weather-container">
            <img src={w_ico} alt="rain" />
            <span className="now-degrees">
              {weather.nowDegrees > 0 && "+"}
              {weather.nowDegrees}°
            </span>
            <span>
              <div>
                Утром {weather.morningDegrees > 0 && "+"}
                {weather.morningDegrees},
              </div>
              <div>
                Днем {weather.dayDegrees > 0 && "+"}
                {weather.dayDegrees}
              </div>
            </span>
          </div>
        </FooterItem>
        <FooterItem title="Посещаемое">{visitedItems}</FooterItem>
      </div>
      <div className="footer-items">
        <FooterItem title={geoposition}>
          <span>Расписания</span>
        </FooterItem>
        <FooterItem title={"Телепрограмма"} img={livetv}>
          {tvProgramItems}
        </FooterItem>
      </div>
      <div className="footer-items">
        <FooterItem title={"Эфир"}>{liveTVItems}</FooterItem>
      </div>
    </>
  );
};
