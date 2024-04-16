//Этот компонент отрисовывет блок новостей. 

import React from "react"
import img from '../assets/newsimg/logo-square.png'
import img1 from '../assets/newsimg/logo-square.jpg'
import img2 from '../assets/newsimg/logo-squared.png'
import { NewsList } from "./NewsList"

interface INews {
    children: React.ReactNode
}

export type INewsListType = {
    img: string,
    title: string,
    url: string
}[]

//Сюда будем получать первые 5 новостей

const newsArr: INewsListType = [
    {
        img: img,
        title: 'В правительстве одобрили проект о праве всех сотрудников ФССП применять оружие',
        url: 'https://dzen.ru/news/story/6b5dba69-6188-59d1-87a7-d6dce360010f?lang=ru&from=main_portal&fan=1&annot_type=trust&t=1713208256&persistent_id=2774164214&cl4url=e30aefb999d6b51e3cb930ee013d0116&tst=1713208865&story=64da0419-7751-5c29-b72a-d0de656d39d7&utm_referrer=dzen.ru'
    },
    {
        img: img,
        title: 'Военный суд утвердил приговор восьми дезертировавшим калининградцам',
        url: 'https://dzen.ru/news/story/016a37a0-198b-526a-b684-d40368d85c34?lang=ru&from=main_portal&fan=1&annot_type=trust&t=1713208256&persistent_id=2774017035&cl4url=12558f3cd47ee9b6c2202600b277e498&tst=1713208865&story=f82a855d-e6d6-5e52-a13e-11c08fba480c&utm_referrer=dzen.ru'
    },
    {
        img: img1,
        title: 'В Тбилиси началась акция протеста против принятия закона об иноагентах',
        url: 'https://dzen.ru/news/story/d1e6c7b7-468f-5f47-86dc-0a9fcdaca28e?lang=ru&from=main_portal&fan=1&annot_type=trust&t=1713208256&persistent_id=2774008185&cl4url=a42348ff0e636f766f612cdfb68d744b&tst=1713208865&story=e1625228-1a17-591c-9899-a4133bb9cdfc&utm_referrer=dzen.ru'
    },
    {
        img: img,
        title: 'Патрушев провел телефонные переговоры с главой совета нацбезопасности Израиля',
        url: 'https://dzen.ru/news/story/f1b0623a-2f80-52a7-b3e9-d07bbb851e94?lang=ru&from=main_portal&fan=1&annot_type=trust&t=1713208256&persistent_id=2774170222&cl4url=b4d922e858d3380be3d2a7c17f2472c0&tst=1713208865&story=5a7905ff-aa9a-5db9-8e97-457685044c2d&utm_referrer=dzen.ru'
    },
    {
        img: img2,
        title: 'Армия РФ нанесла удар по французским наемникам в Славянске. Главное',
        url: 'https://dzen.ru/news/story/2f862800-bfc2-59df-8589-b468be42686a?lang=ru&from=main_portal&fan=1&annot_type=trust&t=1713208256&persistent_id=2774022040&cl4url=12c0d4095173ec3ec2e591b6be6a2b9d&tst=1713208865&story=e2ae68b3-02f0-54b2-a6fd-a8be8c83ce6a&utm_referrer=dzen.ru'
    }
]

//Компонент для отрисовки Разделов новостей даты со временем и списком новостей
export const News: React.FC<INews> = ({children}) => {
  return (
    <>
    {children}
    <div className="news-items">
        <NewsList list = {newsArr} />
    </div>
    </>
  )
}
