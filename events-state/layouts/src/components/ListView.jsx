
export const ListView = (props) => {

    const items = props.items
    
      return (
        <div className="shop-container list">
            {items.map(ShopItem => {
                return (
                    <div className="shopItem">                        
                        <img src={ShopItem.img} alt={ShopItem.name} />
                        <h1>{ShopItem.name}</h1>
                        <span>{ShopItem.color}</span>
                        <span className="card-footer">
                            ${ShopItem.price}                            
                        </span>
                        <button type="button">ADD TO CARD</button>
                    </div>
                )
            })}
           
        </div>
      )
    }
    