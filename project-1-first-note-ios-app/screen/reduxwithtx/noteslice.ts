import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from './store';
// PayloadAction is used to define the type of action payloads || what type of data will be carried by the action
export interface Note {
  title: string;
  desc: string;
}

const initialState: Array<Note> = [];

export const noteSlice = createSlice({
  name: 'notes',
  initialState,
  reducers: {
    addNote: (state, action: PayloadAction<Note>) => {
      state.push(action.payload);
    },
  },
});
export const { addNote } = noteSlice.actions;
export const selectNotes = (state: RootState) => state.notes;
export default noteSlice.reducer;
