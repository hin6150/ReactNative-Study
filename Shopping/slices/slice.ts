import {createSlice, PayloadAction} from '@reduxjs/toolkit';

export interface Item {
  id: number;
  name: string;
  brand: string;
  createdAt: string;
}
interface ShoppingListState {
  items: Item[];
}
const initialState: ShoppingListState = {
  items: [
    {id: 1, name: '상품1', brand: 'Puma', createdAt: new Date().toISOString()},
  ],
};

const shoppinglistSlice = createSlice({
  name: 'shoppingList',
  initialState,
  reducers: {
    addItem: (state, action: PayloadAction<Item>) => {
      const lastItemId = state.items[state.items.length - 1]?.id || 0;
      const newItem: Item = {
        ...action.payload,
        id: lastItemId + 1,
      };
      state.items.push(newItem);
    },
    removeItem: (state, action: PayloadAction<number>) => {
      const itemId = action.payload;
      state.items = state.items.filter(item => item.id !== itemId);
    },
    updateItem: (state, action: PayloadAction<Item>) => {
      const updatedItem = action.payload;
      const index = state.items.findIndex(item => item.id === updatedItem.id);
      if (index !== -1) {
        state.items[index] = updatedItem;
      }
    },
  },
});
export const {addItem, removeItem, updateItem} = shoppinglistSlice.actions;
export default shoppinglistSlice.reducer;
