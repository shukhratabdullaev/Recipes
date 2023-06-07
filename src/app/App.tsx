import React from 'react';
import { RecipesList } from '../components/RecipesList/RecipesList';
import Container from '@mui/material/Container/Container';
import { Link, Route, Routes } from 'react-router-dom';
import AppBar from '@mui/material/AppBar/AppBar';
import Toolbar from '@mui/material/Toolbar/Toolbar';
import Typography from '@mui/material/Typography/Typography';
import { RecipeDetailsPage } from '../components/RecipeDetailsPage/RecipeDetailsPage';
import { CreateRecipePage } from '../components/CreateRecipePage/CreateRecipePage';

const App = () => <div className='App'>
  <AppBar position='static'>
    <Container>
      <Toolbar>
        <Link to='/' style={{ textDecoration: 'none' }}>
          <Typography variant='h6' color='white'>Recipes</Typography>
        </Link>
      </Toolbar>
    </Container>
  </AppBar>
  <Container fixed>
    <Routes>
      <Route path='/' element={<RecipesList />} />
      <Route path='/details/:userId' element={<RecipeDetailsPage />} />
      <Route path='/create' element={<CreateRecipePage />} />
      <Route path='/edit' element={<CreateRecipePage />} />
      {/* <Route path='*' element={<h1>Not Fount 404</h1>} /> */}
    </Routes>
  </Container>
</div>;

export default App;
