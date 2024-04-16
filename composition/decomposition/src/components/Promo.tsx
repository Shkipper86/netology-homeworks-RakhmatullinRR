//Этот компонент отрисовывет банер с афишей

interface IPromo {
    children: React.ReactNode
}

export const Promo: React.FC<IPromo> = ({children}) => {

  return (
    <div>{children}</div>
  )
}
