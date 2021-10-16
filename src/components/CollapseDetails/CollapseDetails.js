import React from 'react'
import {
  Collapse,
  CardContent,
  Typography,
  Paper,
  Button,
  Link,
} from '@mui/material'
import ReactMarkdown from 'react-markdown'

const CollapseDetails = ({ expanded, currentId, post }) => {
  return (
    <Collapse in={expanded} timeout='auto' unmountOnExit>
      <CardContent sx={{ padding: '50px 80px' }}>
        <Typography variant='h4' sx={{ fontWeight: 500, marginBottom: '20px' }}>
          {post.name} is hiring a Remote {post.position}
        </Typography>

        <ReactMarkdown>{post?.jobDescriptions}</ReactMarkdown>
        <Typography variant='h5' sx={{ fontWeight: 500, marginBottom: '10px' }}>
          Location
        </Typography>

        <Typography paragraph>{post.location}</Typography>
        <Typography variant='h5' sx={{ fontWeight: 500, marginBottom: '10px' }}>
          Salary
        </Typography>
        <Button
          size='small'
          sx={{
            backgroundColor: '#C6D57E',
            height: '20px',
            '&:hover': {
              background: '#C6D57E',
            },
          }}
        >
          <Typography variant='body2' sx={{ color: '#000' }}>
            {post.minSalary} - {post.maxSalary}
          </Typography>
        </Button>
        <Typography paragraph sx={{ textAlign: 'center', margin: '30px auto' }}>
          See more jobs at <strong>{post.name}</strong>
        </Typography>
        <Paper
          elevate={1}
          sx={{
            padding: 3,
            textAlign: 'center',
            margin: '0px auto 50px',
          }}
        >
          <Link
            href={post.applyUrl || post.applyEmail}
            target='_blank'
            rel='noreferrer'
            color='inherit'
            underline='none'
          >
            <Button
              variant='contained'
              fullWidth
              color='primary'
              sx={{ borderRadius: '15px', backgroundColor: '#0F00FF' }}
            >
              Apply for this job
            </Button>
          </Link>
        </Paper>
      </CardContent>
    </Collapse>
  )
}

export default CollapseDetails
