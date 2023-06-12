import React from 'react'
import { RecipeType } from 'api/recipes-api'
import Card from '@mui/material/Card'
import CardActions from '@mui/material/CardActions'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import Typography from '@mui/material/Typography'
import { Link } from 'react-router-dom'
import Button from '@mui/material/Button/Button'
import { deleteRecipe } from 'modules/redux/recipes-reducer'
import { useAppDispatch } from 'modules/redux/store'
import './RecipeStyles.scss'

type PropsType = {
  recipe: RecipeType
}

const Recipe: React.FC<PropsType> = React.memo(({ recipe }) => {
  const dispatch = useAppDispatch()

  const removeRecipe = () => {
    dispatch(deleteRecipe(recipe.id))
  }

  return (
    <Card sx={{
      width: 345,
      maxWidth: 345,
      height: 350,
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between',
    }}>
      <Link to={`/recipes/${recipe.id}`}>
        <CardMedia
          component='img'
          alt={recipe.title}
          height='140'
          image={recipe.url}
        />
      </Link>

      <CardContent>
        <Typography className='card_content' gutterBottom variant='h5' component='div' style={{
          display: '-webkit-box',
          WebkitLineClamp: 1,
          WebkitBoxOrient: 'vertical',
          overflow: 'hidden',
        }}>
          {recipe.title}
        </Typography>
        <Typography className='card_content' variant='body2' color='text.secondary' style={{
          display: '-webkit-box',
          WebkitLineClamp: 5,
          WebkitBoxOrient: 'vertical',
          overflow: 'hidden',
        }}>
          {recipe.description}
        </Typography>
      </CardContent>
      <CardActions sx={{ justifyContent: 'space-between' }}>
        <Button className='button' size='small' onClick={removeRecipe}>Delete</Button>
        <Button className='button' size='small' component={Link} to={`/recipes/${recipe.id}/edit`}>Edit</Button>
        <Button className='button' size='small' component={Link} to={`/recipes/${recipe.id}`}>Learn More</Button>
      </CardActions>
    </Card>
  )
})

export default Recipe