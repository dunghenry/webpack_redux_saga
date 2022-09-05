import { createSlice } from '@reduxjs/toolkit';
const initialState = {
    todos: [],
    loading: false,
    error: false,
};
const todoSlice = createSlice({
    name: 'todo',
    initialState,
    reducers: {
        getTodosStart(state) {
            state.loading = true;
        },
        getTodosSuccess(state, action) {
            state.loading = false;
            state.todos = action.payload;
        },
        getTodosFailure(state) {
            state.loading = false;
            state.error = true;
        },
    },
});

export const { getTodosStart, getTodosSuccess, getTodosFailure } =
    todoSlice.actions;

const todoReducer = todoSlice.reducer;
export default todoReducer;
