import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface UserState {
  language: 'ru' | 'en';
}

const initialState: UserState = {
  language: 'ru',
};

export const languageSlice = createSlice({
  name: 'language',
  initialState,
  reducers: {
    setLanguage(state, action: PayloadAction<'ru' | 'en'>) {
      state.language = action.payload;
    },
  },
});

export default languageSlice.reducer;
