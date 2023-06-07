import { useAppDispatch } from '../../app/store';
import { createRecipe } from '../RecipesList/recipes-reducer';
import React, { ChangeEvent, useState } from 'react';
import { Link } from 'react-router-dom';
import Button from '@mui/material/Button/Button';
import TextField from '@mui/material/TextField/TextField';

export const CreateRecipePage = () => {
  const [titleText, setTitleText] = useState('');
  const [descriptionText, setDescription] = useState('');
  const dispatch = useAppDispatch();

  const addRecipe = () => {
    dispatch(createRecipe(titleText.trim(), descriptionText.trim()));
    setTitleText('');
    setDescription('');
  };
  return (
    <>
      <TextField value={titleText}
                 onChange={(e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => setTitleText(e.currentTarget.value)}
      />
      <TextField value={descriptionText}
                 onChange={(e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => setDescription(e.currentTarget.value)}
      />
      <Button component={Link} to='/create' variant='contained' color='primary' onClick={addRecipe}>Add Recipe</Button>
    </>
  );
};