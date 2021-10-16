import React from 'react'
import {
  Collapse,
  CardContent,
  Typography,
  Paper,
  Button,
  Link,
} from '@mui/material'
import { styled } from '@mui/material/styles'
import ReactMarkdown from 'react-markdown'

const Content = styled(CardContent)(({ theme }) => ({
  padding: '50px 80px',
  [theme.breakpoints.down('sm')]: {
    padding: '10px',
  },
}))
const Title = styled(Typography)(({ theme }) => ({
  [theme.breakpoints.down('sm')]: {
    fontSize: '1rem',
    marginBottom: '10px',
  },
}))
const Descriptions = styled(Typography)(({ theme }) => ({
  [theme.breakpoints.down('sm')]: {
    fontSize: '0.7rem',
  },
}))
const Location = styled(Typography)(({ theme }) => ({
  [theme.breakpoints.down('sm')]: {
    fontSize: '0.7rem',
    fontWeight: 500,
  },
}))
const SubTitle = styled(Typography)(({ theme }) => ({
  [theme.breakpoints.down('sm')]: {
    fontSize: '0.8rem',
  },
}))
const Salaries = styled(Typography)(({ theme }) => ({
  [theme.breakpoints.down('sm')]: {
    fontSize: '0.8rem',
    fontWeight: 500,
  },
}))

const MyPaper = styled(Paper)(({ theme }) => ({
  [theme.breakpoints.down('sm')]: {
    margin: '0px auto 20px',
  },
}))

const CollapseDetails = ({ expanded, currentId, post }) => {
  return (
    <Collapse in={expanded} timeout='auto' unmountOnExit>
      <Content>
        <Title variant='h4' sx={{ fontWeight: 500, marginBottom: '20px' }}>
          {post.name} is hiring a Remote {post.position}
        </Title>
        <Descriptions>
          <ReactMarkdown>{post?.jobDescriptions}</ReactMarkdown>
        </Descriptions>
        <SubTitle variant='h5' sx={{ fontWeight: 500, marginBottom: '10px' }}>
          Location
        </SubTitle>

        <Location paragraph>{post.location}</Location>
        <SubTitle variant='h5' sx={{ fontWeight: 500, marginBottom: '10px' }}>
          Salary
        </SubTitle>

        <Salaries paragraph>
          {post.minSalary} - {post.maxSalary}
        </Salaries>

        <MyPaper
          elevate={1}
          sx={{ padding: 3, textAlign: 'center', margin: '0px auto 50px' }}
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
        </MyPaper>
      </Content>
    </Collapse>
  )
}

export default CollapseDetails
