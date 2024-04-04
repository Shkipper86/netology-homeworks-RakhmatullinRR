
export const CardsView = (props) => {

const cards = props.cards

  return (
    <div className="shop-container">
        {cards.map(ShopCard => {
            return (
                <div className="shopCard">
                    <h1>{ShopCard.name}</h1>
                    <span>{ShopCard.color}</span>
                    <img src={ShopCard.img} alt={ShopCard.name} />
                    <span className="card-footer">
                        ${ShopCard.price}
                        <button type="button">ADD TO CARD</button>
                    </span>
                </div>
            )
        })}
       
    </div>
  )
}
