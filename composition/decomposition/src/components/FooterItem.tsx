//Этот компонент отрисовывет контент в блоках нижней части окна.
interface IFooterItemProps {
    children: React.ReactNode,
    title: string,
    img?: string
  }
  
  export const FooterItem: React.FC<IFooterItemProps> = (props) =>{
    const {img, title, children} = props
    return (
      <span>
        <div className="footer-item-title">{title}{img != undefined && <img src={img}/>}</div>
        {children}
      </span>
    );
  }
  