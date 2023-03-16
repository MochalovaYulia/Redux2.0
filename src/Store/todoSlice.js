import { createSlice } from "@reduxjs/toolkit";

const todoSlice = createSlice({
    reducers: {
        name: 'todos',
        initialState: {
            todos: [],
        },
        reducers: {
            addTodo(state, action) {
                console.log(state)
                console.log(action)
                state.todos.push({
                    id: new Date().toISOString(),
                    text: action.payload.text,
                    completed: false
                })
            },
            removeTodo(state, action) {},
            toggleTodoComleted(state, action) {}
        }
    }
})

export const {addTodo, removeTodo, toggleTodoComleted} = todoSlice.actions;
export default todoSlice.reducer;