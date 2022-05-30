import { CaseReducer, createSlice } from '@reduxjs/toolkit'
import { sections } from '../../components/directory/directory.data'
import { DirectoryData } from '../../components/MenuItem/MenuItem'

const initialState: DirectoryData[] = [...sections]

type State = typeof initialState

const directorySections: CaseReducer<State> = (state) => state

export const directorySlice = createSlice({
  name: 'directory',
  initialState,
  reducers: {
    directorySections,
  },
})
