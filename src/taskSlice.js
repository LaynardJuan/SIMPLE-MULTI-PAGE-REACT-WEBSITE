import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  tasks: [],
};

const taskSlice = createSlice({
  name: 'task',
  initialState,
  reducers: {
    addTask: (state, action) => {
      const task = action.payload?.trim();
      if (task) {
        state.tasks.push(task);
      }
    },
  },
});

export const { addTask } = taskSlice.actions;
export default taskSlice.reducer;
