import { useEffect, useState } from "react";

export const Listing = (props) => {

const {items} = props

const [listItems, setListItems] = useState([])

const currensySign = {
    USD: '$',
    EUR: '€',
    CAD: 'CAD',
    GBP: '£',
    

}

useEffect(() => {
    const list = items.map(item => {
        (item.title != undefined && item.title.length > 50) && (item.title = `${item.title.slice(0, 50)} ...`)
            return {
                status: item.state,
                id: item.listing_id,
                url: item.url,
                img: item.MainImage,
                title: item.title,
                currency_code: currensySign[item.currency_code],
                price: item.price,
                quantity: item.quantity
                }
        })
    setListItems(list.filter(itemStatus => itemStatus.status === 'active'))
}, [])

return <>
{listItems.map(listItem => {
        return (
            <div className="item-list" key={listItem.id}>
              <div className="item">
                <div className="item-image">
                  <a href={listItem.url} target="_blank">
                    <img src={listItem.img.url_170x135} />
                  </a>
                </div>
                <div className="item-details">
                  <p className="item-title">{listItem.title}</p>
                  <p className="item-price">{listItem.currency_code}{listItem.price}</p>
                  <p className={listItem.quantity <= 10 
                  ? 'item-quantity level-low'
                  : listItem.quantity > 10 && listItem.quantity <= 20 
                  ? 'item-quantity level-medium'
                  : 'item-quantity level-high'
                }>{listItem.quantity}</p>
                </div>
              </div>
            </div>
        )
    })}
</>;
}
