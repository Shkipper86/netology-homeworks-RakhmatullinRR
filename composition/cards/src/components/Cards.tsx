interface CardProps {
    children: React.ReactNode
}

export const Cards: React.FC<CardProps> = ({children}) => {
  return (
    <>
    <div className="card" style={{width: '18rem'}}>
        {children}
    </div>
</>
  )
}
