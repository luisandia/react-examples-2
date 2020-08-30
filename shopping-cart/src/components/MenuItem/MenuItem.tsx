import * as React from 'react'
import './menu-item.styles.scss'
import { withRouter, RouteComponentProps } from 'react-router-dom'

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

type Props = DirectoryProps &
  RouteComponentProps &
  Pick<RouteComponentProps<{}>, 'history' | 'match'>

const MenuItem: React.FC<Props> = ({
  title,
  imageUrl,
  size,
  history,
  linkUrl,
  match,
}) => {
  return (
    <div
      className={`${size} menu-item`}
      onClick={() => history.push(`${match.url}${linkUrl}`)}
    >
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

export default withRouter(MenuItem)
