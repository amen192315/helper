import { AppDispatch, RootState } from '../store/store';
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';

//аналоги хуков из redux-toolkit только с типизацией
export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
