import React from 'react';
import { RecipesList } from '../components/RecipesList/RecipesList';
import Container from '@mui/material/Container/Container';
import { Route, Routes } from 'react-router-dom';
import AppBar from '@mui/material/AppBar/AppBar';
import Toolbar from '@mui/material/Toolbar/Toolbar';
import Typography from '@mui/material/Typography/Typography';
import { RecipePage } from '../components/RecipesList/RecipePage/RecipePage';

const App = () => (
  <div className="App">
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6">Recipes</Typography>
      </Toolbar>
    </AppBar>
    <Container fixed>
      <Routes>
        <Route path='/' element={<RecipesList />} />
        <Route path='/details' element={<RecipePage />} />
        <Route path='*' element={<h1>Not Fount 404</h1>} />
      </Routes>
    </Container>
  </div>
  );

export default App;
