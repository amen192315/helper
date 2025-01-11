import { combineReducers, configureStore } from '@reduxjs/toolkit';
import userReducer from './reducers/UserSlice';
const rootReducer = combineReducers({
  userReducer,
});

export const setupStore = () => {
  return configureStore({
    reducer: rootReducer,
  });
};

//типизация
export type RootState = ReturnType<typeof rootReducer>; // получаем тип rootReducer
export type AppStore = ReturnType<typeof setupStore>; // получаем тип setupStore
export type AppDispatch = AppStore['dispatch']; // получаем тип dispatch
