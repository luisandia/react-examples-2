import { createSelector } from 'reselect'
import { RootState } from '../RootReducer'

export const selectDirectory = (state: RootState) => state.directory

export const selectDirectorySections = createSelector(
  [selectDirectory],
  (directory) => directory,
)
