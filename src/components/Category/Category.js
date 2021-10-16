import React from 'react'
import { Grid, Button, Container } from '@mui/material'
import { useHistory } from 'react-router-dom'
import { useDispatch } from 'react-redux'

import { getPostsByCategory } from '../../actions/posts'
import stickers from '../categories'

const Category = ({ categories }) => {
  const history = useHistory()
  const dispatch = useDispatch()

  if (!categories) return 'nodata'

  const handleSearchCategory = (category) => {
    dispatch(getPostsByCategory(category))
    history.push(`/remote-nft/categories/${category}`)
  }

  return (
    <Container maxWidth='lg'>
      <Grid container spacing={1} sx={{ marginTop: '20px' }}>
        <Grid item xs={12} sx={{ textAlign: 'center' }}>
          <Grid item sx={{ marginTop: '10px' }}>
            {categories.map((category) =>
              stickers.map((sticker) =>
                category.name === sticker.name ? (
                  <Button
                    size='small'
                    variant='outlined'
                    sx={{ margin: 'auto 3px' }}
                    key={category._id}
                    onClick={() => handleSearchCategory(category.name)}
                  >
                    {sticker.sticker}
                    {category.name}
                  </Button>
                ) : null
              )
            )}
          </Grid>
        </Grid>
      </Grid>
    </Container>
  )
}

export default Category
