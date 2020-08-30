import * as React from 'react'
import { useSelector } from 'react-redux'
import { RootState } from '../../redux/RootReducer'
import MenuItem from '../MenuItem'
import { DirectoryData } from '../MenuItem/MenuItem'
import { createStructuredSelector } from 'reselect'
import { selectDirectorySections } from '../../redux/Directory/directorySelector'

interface Props {}

interface Result {
  sections: DirectoryData[]
}

const structuredSelector = createStructuredSelector<RootState, Result>({
  sections: selectDirectorySections,
})

const Directory: React.FC<Props> = (props) => {
  const { sections } = useSelector<RootState, Result>((state) =>
    structuredSelector(state),
  )

  return (
    <div className="directory-menu">
      {sections.map(({ id, ...otherSectionProps }) => (
        <MenuItem key={id} {...otherSectionProps} />
      ))}
    </div>
  )
}

export default Directory
