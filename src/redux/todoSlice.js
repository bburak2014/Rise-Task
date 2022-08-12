import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { nanoid } from 'nanoid';
 
export const getTodosAsync = createAsyncThunk(
	'todos/getTodosAsync',
	async () => {
		const resp = await fetch('http://localhost:3002/data');
		if (resp.ok) {
			const todos = await resp.json();
			return { todos };
		}
	}
);


export const todoSlice = createSlice({
	name: 'todos',
	initialState: [],
	reducers: {
		addTodo: (state, action) => {
			const todo = {
				id: nanoid(),
				name: action.payload.name,
				priority: action.payload.priority
				
			};

			state.push(todo);

		},
		
		deleteTodo: (state, action) => {
			return state.filter((todo) => todo.id !== action.payload.id);
		},
		updateTodo:(state,action)=>{
			const index=state.findIndex(tutorial => tutorial.id === action.payload.id);
			state[index] = {
				...state[index],
				...action.payload,
			  };
			  return state;
		}
		
	},
	extraReducers: {
		[getTodosAsync.fulfilled]: (state, action) => {
			return action.payload.todos;
		}
		
	},
});
 



export const { addTodo, deleteTodo,updateTodo } = todoSlice.actions;
 
export default todoSlice.reducer;
