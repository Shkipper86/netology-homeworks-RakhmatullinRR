//Этот компонент отрисовывет блок с поисковой строкой

import posterImg from '../assets/poster.png'

//Получаем список заголовков разделов над поисковой строкой
const searchTitles = [
    {
        id: 1,
        label: 'Видео',
        url: '#'
    },
    {
        id: 2,
        label: 'Картинки',
        url: '#'
    },
    {
        id: 3,
        label: 'Новости',
        url: '#'
    },
    {
        id: 4,
        label: 'Карты',
        url: '#'
    },
    {
        id: 5,
        label: 'Маркет',
        url: '#'
    },
    {
        id: 6,
        label: 'Переводчик',
        url: '#'
    },
    {
        id: 7,
        label: 'Эфир',
        url: '#'
    },
]

//Получаем сюда Афишу
const poster = {
    img: posterImg,
    url:'#'
}
const titles = searchTitles.map(title=> {
    return (
        <a href={title.url}>{title.label}</a>
    )
})

export const Search = () => {
  return (
    <div className="search">
      <div className="search-titles">{titles}</div>
      <form name="searchInput" className="searchInput">
        <input></input>
        <button type="submit">Найти</button>
      </form>
      <label htmlFor="searchInput">
        <span className="search-example-title">Найдется всё. Например, </span>
        <span className="search-example">фаза луны сегодня</span>
      </label>
      <div className='poster'>
        <a href={poster.url}>
          <img src={poster.img} alt="" />
        </a>
      </div>
    </div>
  );
}
