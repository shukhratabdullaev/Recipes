import React, { useEffect } from 'react'
import Container from '@mui/material/Container/Container'
import { Route, Routes } from 'react-router-dom'
import { RecipePage } from 'pages/RecipePage'
import { useAppDispatch } from 'modules/redux/store'
import { fetchRecipes } from 'modules/redux/recipes-reducer'
import { SearchAppBar } from 'utils/SearchAppBar'
import { MainPage } from 'pages/MainPage'
import { EditRecipePage } from 'pages/EditRecipePage'
import { CreateRecipePage } from 'pages/CreateRecipePage'

const App = () => {
  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(fetchRecipes())
  }, [])

  return <div className='App'>
    <SearchAppBar />
    <Container fixed>
      <Routes>
        <Route path='/' element={<MainPage />} />
        <Route path='/recipes/:recipeId' element={<RecipePage />} />
        <Route path='/recipes/create' element={<CreateRecipePage />} />
        <Route path='/recipes/:recipeId/edit' element={<EditRecipePage />} />
        <Route path='*' element={<h1>Not Fount 404</h1>} />
      </Routes>
    </Container>
  </div>
}


export default App
