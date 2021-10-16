import React, { useEffect } from 'react'
import { Grid, Grow, Container } from '@mui/material'
import { useSelector, useDispatch } from 'react-redux'

import HomeLoading from '../components/Loading/HomeLoading'
import { getPosts } from '../actions/posts'
import Banner from '../components/Banner/Banner'
import Category from '../components/Category/Category'
import JobList from '../components/JobList/JobList'
import FloatingButton from '../components/FloatingButton/FloatingButton'

const Home = () => {
  const dispatch = useDispatch()
  const { posts, isLoading } = useSelector((state) => state.posts)

  useEffect(() => {
    dispatch(getPosts())
  }, [dispatch])

  if (isLoading) return <HomeLoading />

  return (
    <Grow in>
      <Container maxWidth='xl'>
        <Grid
          container
          justifyContent='space-between'
          aligntitems='center'
          spacing={0}
          sx={{
            display: 'flex',
          }}
        >
          <Banner />

          <Category />
          <JobList posts={posts} />

          <FloatingButton />
        </Grid>
      </Container>
    </Grow>
  )
}

export default Home
