import {PayloadAction, createSlice} from '@reduxjs/toolkit';

export interface Todo {
  id: number;
  text: string;
  done: boolean;
}

const initialState: Todo[] = [
  {id: 1, text: '리액트 네이티브 배우기', done: true},
  {id: 2, text: '상태 관리 배우기', done: false},
];

let nextId = 3;

const todoSlice = createSlice({
  name: 'todos',
  initialState: initialState,
  reducers: {
    add: {
      prepare(text: string) {
        const prepared = {payload: {id: nextId, text}};
        nextId++;
        return prepared;
      },
      reducer(state, action: PayloadAction<{id: number; text: string}>) {
        state.push({
          ...action.payload,
          done: false,
        });
      },
    },
    remove(state, action: PayloadAction<number>) {
      return state.filter(todo => todo.id !== action.payload);
      // const index = state.findIndex(todo => todo.id === action.payload);
      // state.splice(index);
    },
    toggle(state, action: PayloadAction<number>) {
      const selected = state.find(todo => todo.id === action.payload);
      if (!selected) return;
      selected.done = !selected.done;
    },
  },
});

export const {add, remove, toggle} = todoSlice.actions;
export default todoSlice.reducer;
