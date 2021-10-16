import React from 'react'
import { Grid, Button, Container, Typography } from '@mui/material'
import { useHistory } from 'react-router-dom'
import { useDispatch } from 'react-redux'

import { getPostsByCategory } from '../../actions/posts'
import stickers from '../categories'

const Category = () => {
  const history = useHistory()
  const dispatch = useDispatch()

  const handleSearchCategory = (category) => {
    dispatch(getPostsByCategory(category))
    history.push(`/remote-nft/categories/${category}`)
  }

  return (
    <Container maxWidth='lg'>
      <Grid container spacing={1} sx={{ marginTop: '20px' }}>
        <Grid item xs={12} sx={{ textAlign: 'center' }}>
          <Typography variant='body2' color='white'>
            Categories
          </Typography>
          <Grid item sx={{ marginTop: '10px' }}>
            {stickers.map((sticker) => (
              <Button
                size='small'
                variant='outlined'
                sx={{ margin: '3px' }}
                key={sticker._id}
                onClick={() => handleSearchCategory(sticker.name)}
              >
                {sticker.sticker}
                {sticker.name}
              </Button>
            ))}
          </Grid>
        </Grid>
      </Grid>
    </Container>
  )
}

export default Category
