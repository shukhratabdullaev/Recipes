import { AnyAction, applyMiddleware, combineReducers, legacy_createStore } from 'redux';
import { recipesReducer } from '../components/RecipesList/recipes-reducer';
import thunkMiddleware, { ThunkDispatch } from 'redux-thunk';
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';


const rootReducer = combineReducers({
  recipes: recipesReducer,
});


export const store = legacy_createStore(rootReducer, applyMiddleware(thunkMiddleware));

export type AppRootStateType = ReturnType<typeof rootReducer>

export type AppThunkDispatch = ThunkDispatch<AppRootStateType, any, AnyAction>

export const useAppDispatch = () => useDispatch<AppThunkDispatch>();

export const useAppSelector: TypedUseSelectorHook<AppRootStateType> = useSelector