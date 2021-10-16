import React from 'react'
import {
  Grid,
  Grow,
  Container,
  Paper,
  ImageListItem,
  Typography,
} from '@mui/material'
import { Link } from 'react-router-dom'

const PostJobDone = () => {
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
            justifyContent: 'space-between',
          }}
        >
          <Grid
            item
            xs={12}
            sx={{
              textAlign: 'center',
              display: 'flex',
              flexDirection: 'column',
            }}
          >
            <Paper elevation={2} sx={{ padding: 4, margin: '60px 200px' }}>
              <ImageListItem sx={{ width: '200px', margin: '20px auto' }}>
                <img
                  alt='successfull'
                  src='/images/checklist.svg'
                  loading='lazy'
                />
              </ImageListItem>
              <Typography variant='h4'>All done!</Typography>
              <Typography variant='h6'>
                We will review your post and post it for you🧐
              </Typography>
              <Link to={`/`}>
                <Typography variant='body1' sx={{ marginBottom: '30px' }}>
                  Go Home
                </Typography>
              </Link>
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </Grow>
  )
}

export default PostJobDone
