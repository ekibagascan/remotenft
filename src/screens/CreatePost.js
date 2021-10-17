import React, { useState } from 'react'
import { Grid, Grow, Container, Box, Hidden } from '@mui/material'
import { useDispatch } from 'react-redux'
import { useHistory } from 'react-router-dom'

import { createPost } from '../actions/posts'
import Form1 from '../components/Form1/Form1'
import Form2 from '../components/Form2/Form2'
import FormPreview1 from '../components/FormPreview/FormPreview1'
import FormPreview from '../components/FormPreview/FormPreview'

const CreatePost = () => {
  const dispatch = useDispatch()
  const history = useHistory()
  const [postData, setPostData] = useState({
    name: '',
    position: '',
    category: '',
    tags: [],
    location: '',
    type: '',
    twitterUsername: '',
    logo: '',
    minSalary: '',
    maxSalary: '',
    jobDescriptions: '',
    applyUrl: '',
    applyEmail: '',
  })

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (postData) {
      dispatch(createPost({ ...postData }, history))
    }
  }

  return (
    <Grow in>
      <Container maxWidth='md' sx={{ marginTop: '30px' }}>
        <Grid
          container
          justifyContent='center'
          aligntitems='center'
          spacing={2}
          sx={{
            display: 'flex',
          }}
        >
          <Grid item xs={12}>
            <form noValidate autoComplete='on' onSubmit={handleSubmit}>
              <Form1 postData={postData} setPostData={setPostData} />
              <Form2 postData={postData} setPostData={setPostData} />
            </form>

            <Hidden lgDown>
              <FormPreview postData={postData} />
              <Box
                sx={{
                  height: 250,
                  width: 835,
                }}
              />
              <FormPreview1 postData={postData} />
            </Hidden>
          </Grid>
        </Grid>
      </Container>
    </Grow>
  )
}

export default CreatePost
