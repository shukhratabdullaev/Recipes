import React, { useEffect } from 'react';
import { RecipesList } from '../components/RecipesList/RecipesList';
import Container from '@mui/material/Container/Container';
import { Link, Route, Routes } from 'react-router-dom';
import AppBar from '@mui/material/AppBar/AppBar';
import Toolbar from '@mui/material/Toolbar/Toolbar';
import Typography from '@mui/material/Typography/Typography';
import { RecipeDetailsPage } from '../components/RecipeDetailsPage/RecipeDetailsPage';
import { CreateRecipePage } from '../components/CreateRecipePage/CreateRecipePage';
import { useAppDispatch } from './store';
import { fetchRecipes } from '../components/RecipesList/recipes-reducer';
import { SearchAppBar } from '../utils/SearchAppBar';

const App = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    const data = fetchRecipes();
    dispatch(data);
  }, []);

  return <div className='App'>
    <SearchAppBar/>
    <Container fixed>
      <Routes>
        <Route path='/' element={<RecipesList />} />
        <Route path='/details/:recipeId' element={<RecipeDetailsPage />} />
        <Route path='/create' element={<CreateRecipePage />} />
        <Route path='/edit/:recipeId' element={<CreateRecipePage />} />
         <Route path='*' element={<h1>Not Fount 404</h1>} />
      </Routes>
    </Container>
  </div>;
};


export default App;
