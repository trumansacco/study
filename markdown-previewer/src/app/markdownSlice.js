import { createSlice } from '@reduxjs/toolkit';

const initialText = `# My Markdown

Some **bold** text here.
`;

export const markdownSlice = createSlice({
  name: 'markdown',
  initialState: {
    text: initialText
  },
  reducers: {
    setText: (state, action) => {
      state.text = action.payload;
    }
  }
});

export const { setText } = markdownSlice.actions;
export default markdownSlice.reducer;
