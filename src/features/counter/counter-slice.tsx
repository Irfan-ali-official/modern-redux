//DUCKS patern
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface CounterState {
  value: number;
}

const initialState: CounterState = {
  value: 0,
};

const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    incremented(state) {
      //it's ok to do this because immer makes it work under the hood
      state.value++;
    },
    addAmount(state, actions: PayloadAction<number>) {
      state.value += actions.payload;
    },
  },
});
export const { incremented, addAmount } = counterSlice.actions;
export default counterSlice.reducer;
