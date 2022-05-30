import * as React from 'react'
import { useLocation, useMatch, useNavigate } from 'react-router-dom'
import './menu-item.styles.scss'

// export interface RouteComponentProps<P> {
//   match: match<P>;
//   location: H.Location;
//   history: H.History;
//   staticContext?: any;
// }

// export interface match<P> {
//   params: P;
//   isExact: boolean;
//   path: string;
//   url: string;
// }

export interface DirectoryProps {
  title: string
  imageUrl: string
  size?: string
  linkUrl: string
}

export interface DirectoryData extends DirectoryProps {
  id: number
}

type Props = DirectoryProps
const MenuItem: React.FC<Props> = ({ title, imageUrl, size, linkUrl }) => {
  let navigate = useNavigate()
  return (
    <div className={`${size} menu-item`} onClick={() => navigate(`${linkUrl}`)}>
      <div
        className="background-image"
        style={{
          backgroundImage: `url(${imageUrl})`,
        }}
      />
      <div className="content">
        <h1 className="title">{title.toUpperCase()}</h1>
        <span className="subtitle">SHOP NOW</span>
      </div>
    </div>
  )
}

export default MenuItem
