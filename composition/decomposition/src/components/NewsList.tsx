//Этот компонент отрисовывет список новостей

import { INewsListType } from "./News"

interface INews {
    list: INewsListType
}

export const NewsList = ({list}: INews) => {

  const news = list.map(news => {
    return (
      <div className="news-items">
        <img src={news.img} alt={news.title} />
        <a href={news.url} target="_blank">{news.title}</a>
      </div>
    )
  })

//отрисовывваем заоголвки топ 5 новостей
  return (
    <div className="news-container">{news}</div>
  )
}
